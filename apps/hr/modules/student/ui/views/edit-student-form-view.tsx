"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DollarSign, Edit, Loader2, MapPin, PhoneCall, School, User } from "lucide-react";
import { useMutation, useQueries, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTRPC } from "@/trpc/client";
import { useRouter } from "next/navigation";

import { Card } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { StudentSchema, StudentSchemaType } from "@workspace/utils/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@workspace/ui/components/form";
import { cn } from "@workspace/ui/lib/utils";
import { Separator } from "@workspace/ui/components/separator";
import { Badge } from "@workspace/ui/components/badge";
import { CLASSES, GENDER, GROUP, NATIONALITY, RELIGION, SHIFT } from "@workspace/utils/constant";
import { Input } from "@workspace/ui/components/input";

import { StepIndicator } from "../components/step-indicator";
import { FormInput } from "../components/form-input";
import { FormSelect } from "../components/form-select";
import { FormCalendar } from "../components/form-calendar";
import { useGetStudents } from "../../hooks/use-get-rooms";

// Constants
const STEPS = [
    {
        id: 1,
        name: "Personal Info",
        fields: [
            "name",
            "nameBangla",
            "fName",
            "mName",
            "gender",
            "dob",
            "nationality",
            "religion",
        ] as const,
        Icon: User,
    },
    {
        id: 2,
        name: "Academic Info",
        fields: ["school", "className", "shift", "group", "section", "roll"] as const,
        Icon: School,
    },
    {
        id: 3,
        name: "Address",
        fields: [
            "presentHouseNo",
            "presentMoholla",
            "presentPost",
            "presentThana",
            "permanentVillage",
            "permanentPost",
            "permanentThana",
            "permanentDistrict",
        ] as const,
        Icon: MapPin,
    },
    {
        id: 4,
        name: "Contact",
        fields: ["fPhone", "mPhone"] as const,
        Icon: PhoneCall,
    },
    {
        id: 5,
        name: "ID, Fee & Ref",
        fields: ["admissionFee", "salaryFee", "studentId", "referenceId"] as const,
        Icon: DollarSign,
    },
] as const;

// Form default values
const DEFAULT_VALUES: StudentSchemaType = {
    name: "",
    nameBangla: "",
    fName: "",
    mName: "",
    gender: "",
    dob: new Date().toISOString(),
    studentId: "",
    nationality: "",
    religion: "",
    imageUrl: "",
    school: "",
    className: "",
    section: "",
    shift: "",
    group: "",
    roll: "",
    fPhone: "",
    mPhone: "",
    presentHouseNo: "",
    presentMoholla: "",
    presentPost: "",
    presentThana: "",
    permanentVillage: "",
    permanentPost: "",
    permanentThana: "",
    permanentDistrict: "",
    admissionFee: "",
    salaryFee: "",
};

// Select options - memoized to prevent re-creation
const SELECT_OPTIONS = {
    gender: Object.values(GENDER).map((v) => ({ label: v, value: v })),
    nationality: Object.values(NATIONALITY).map((v) => ({ label: v, value: v })),
    religion: Object.values(RELIGION).map((v) => ({ label: v, value: v })),
    classes: Object.values(CLASSES).map((v) => ({ label: v, value: v })),
    shift: Object.values(SHIFT).map((v) => ({ label: v, value: v })),
    group: Object.values(GROUP).map((v) => ({ label: v, value: v })),
};

// Custom hook for fee management
const useFeeManagement = (className: string, group: string | undefined, isEditing: boolean = false) => {
    const [editStates, setEditStates] = useState({
        admissionFee: false,
        salaryFee: false,
        studentId: false,
    });

    const toggleEdit = useCallback((field: keyof typeof editStates) => {
        setEditStates(prev => ({ ...prev, [field]: !prev[field] }));
    }, []);

    const trpc = useTRPC();
    const queries = useQueries({
        queries: [
            trpc.admissionFee.getForAdmission.queryOptions({ className }),
            trpc.salaryFee.getForAdmission.queryOptions({ className, group }),
            // Only fetch counter for new students, not when editing
            ...(isEditing ? [] : [trpc.counter.getForAdmission.queryOptions({ className })]),
        ],
    });

    return {
        admissionFee: queries[0],
        salaryFee: queries[1],
        counter: isEditing ? null : queries[2],
        editStates,
        toggleEdit,
    };
};

// Step content components
const PersonalInfoStep = ({ form, trigger, isPending }: StepProps) => (
    <div className="grid md:grid-cols-2 gap-6 items-start">
        <FormInput form={form} name="name" label="Name" type="text" trigger={trigger} disabled={isPending} />
        <FormInput form={form} name="nameBangla" label="Name Bangla" type="text" trigger={trigger} disabled={isPending} />
        <FormInput form={form} name="fName" label="Father Name" type="text" trigger={trigger} disabled={isPending} />
        <FormInput form={form} name="mName" label="Mother Name" type="text" trigger={trigger} disabled={isPending} />

        <FormSelect
            form={form}
            name="gender"
            label="Gender"
            options={SELECT_OPTIONS.gender}
            placeholder="select gender"
            trigger={trigger}
            disabled={isPending}
        />

        <FormCalendar form={form} name="dob" label="Date of birth" trigger={trigger} disabled={isPending} />

        <FormSelect
            form={form}
            name="nationality"
            label="Nationality"
            options={SELECT_OPTIONS.nationality}
            placeholder="select nationality"
            trigger={trigger}
            disabled={isPending}
        />

        <FormSelect
            form={form}
            name="religion"
            label="Religion"
            options={SELECT_OPTIONS.religion}
            placeholder="select religion"
            trigger={trigger}
            disabled={isPending}
        />
    </div>
);

const AcademicInfoStep = ({ form, trigger, isPending }: StepProps) => (
    <div className="grid md:grid-cols-2 gap-6 items-start">
        <FormInput form={form} name="school" label="School Name" type="text" trigger={trigger} disabled={isPending} />

        <FormSelect
            form={form}
            name="className"
            label="Class"
            options={SELECT_OPTIONS.classes}
            placeholder="select class"
            trigger={trigger}
            disabled={isPending}
        />

        <FormSelect
            form={form}
            name="shift"
            label="Shift"
            options={SELECT_OPTIONS.shift}
            placeholder="select shift"
            trigger={trigger}
            disabled={isPending}
        />

        <FormInput form={form} name="section" label="Section" type="text" trigger={trigger} disabled={isPending} />

        <FormSelect
            form={form}
            name="group"
            label="Group"
            options={SELECT_OPTIONS.group}
            placeholder="select group"
            trigger={trigger}
            disabled={isPending}
        />

        <FormInput form={form} name="roll" label="Roll" type="number" trigger={trigger} disabled={isPending} />
    </div>
);

const AddressStep = ({ form, trigger, isPending }: StepProps) => (
    <div className="flex flex-col gap-y-4">
        <div className="flex items-center">
            <div className="flex-1 h-px bg-muted" />
            <Badge variant="outline">Present</Badge>
            <div className="flex-1 h-px bg-muted" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
            <FormInput form={form} name="presentHouseNo" label="House No" type="text" trigger={trigger} disabled={isPending} />
            <FormInput form={form} name="presentMoholla" label="Moholla" type="text" trigger={trigger} disabled={isPending} />
            <FormInput form={form} name="presentPost" label="Post" type="text" trigger={trigger} disabled={isPending} />
            <FormInput form={form} name="presentThana" label="Thana" type="text" trigger={trigger} disabled={isPending} />
        </div>

        <div className="flex items-center">
            <div className="flex-1 h-px bg-muted" />
            <Badge variant="outline">Permanent</Badge>
            <div className="flex-1 h-px bg-muted" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
            <FormInput form={form} name="permanentVillage" label="Village/Moholla" type="text" trigger={trigger} disabled={isPending} />
            <FormInput form={form} name="permanentPost" label="Post" type="text" trigger={trigger} disabled={isPending} />
            <FormInput form={form} name="permanentThana" label="Thana" type="text" trigger={trigger} disabled={isPending} />
            <FormInput form={form} name="permanentDistrict" label="District" type="text" trigger={trigger} disabled={isPending} />
        </div>
    </div>
);

const ContactStep = ({ form, trigger, isPending }: StepProps) => (
    <div className="grid md:grid-cols-2 gap-6 items-start">
        <FormInput form={form} name="fPhone" label="Phone (Father)" type="text" trigger={trigger} disabled={isPending} />
        <FormInput form={form} name="mPhone" label="Phone (Mother)" type="text" trigger={trigger} disabled={isPending} />
    </div>
);

const EditableField = ({
    form,
    name,
    label,
    isEditable,
    onToggleEdit,
    isPending,
    trigger
}: EditableFieldProps) => (
    <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <div className="relative">
                        <Input
                            {...field}
                            value={field.value}
                            onChange={(e) => {
                                field.onChange(e.target.value);
                                trigger(name);
                            }}
                            type="number"
                            disabled={!isEditable || isPending}
                            className={cn(
                                "w-full bg-background dark:bg-background rounded-xs shadow-none",
                                !isEditable && "bg-background/40 dark:bg-background/40"
                            )}
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0"
                            type="button"
                            onClick={onToggleEdit}
                        >
                            <Edit className="w-4 h-4" />
                        </Button>
                    </div>
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

const FeeStep = ({ form, trigger, isPending, editStates, toggleEdit, isUpdating }: FeeStepProps) => (
    <div className="grid md:grid-cols-2 gap-6 items-start">
        <EditableField
            form={form}
            name="admissionFee"
            label="Admission Fee"
            isEditable={editStates.admissionFee}
            onToggleEdit={() => toggleEdit('admissionFee')}
            isPending={isPending || isUpdating}
            trigger={trigger}
        />

        <EditableField
            form={form}
            name="salaryFee"
            label="Salary Fee"
            isEditable={editStates.salaryFee}
            onToggleEdit={() => toggleEdit('salaryFee')}
            isPending={isPending || isUpdating}
            trigger={trigger}
        />

        <EditableField
            form={form}
            name="studentId"
            label="Student ID"
            isEditable={editStates.studentId}
            onToggleEdit={() => toggleEdit('studentId')}
            isPending={isPending || isUpdating}
            trigger={trigger}
        />

    </div>
);

// Types
type FieldName = keyof z.infer<typeof StudentSchema>;

interface EditStudentFormViewProps {
    id: string;
}

interface StepProps {
    form: any;
    trigger: any;
    isPending: boolean;
}

interface EditableFieldProps extends StepProps {
    name: keyof StudentSchemaType;
    label: string;
    isEditable: boolean;
    onToggleEdit: () => void;
}

interface FeeStepProps extends StepProps {
    editStates: {
        admissionFee: boolean;
        salaryFee: boolean;
        studentId: boolean;
    };
    toggleEdit: (field: keyof FeeStepProps['editStates']) => void;
    isUpdating: boolean;
}

export const EditStudentFormView = ({ id }: EditStudentFormViewProps) => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const trpc = useTRPC();
    const queryClient = useQueryClient();
    const router = useRouter();

    const [filters] = useGetStudents()

    // Fetch existing student data
    const { data: studentData } = useSuspenseQuery(trpc.student.getOne.queryOptions(id));

    // Use update mutation instead of create
    const { mutate: updateStudent, isPending } = useMutation(trpc.student.updateOne.mutationOptions({
        onError: (err) => {
            toast.error(err.message);
        },
        onSuccess: async (data) => {
            if (!data.success) {
                toast.error(data.message);
                return;
            }
            toast.success(data.message);
            await Promise.all([
                queryClient.invalidateQueries(trpc.student.getMany.queryOptions({ ...filters })),
                queryClient.invalidateQueries(trpc.student.getOne.queryOptions(id))
            ]);
            router.push("/student");
        },
    }));

    const form = useForm<StudentSchemaType>({
        resolver: zodResolver(StudentSchema),
        defaultValues: DEFAULT_VALUES,
        mode: "onChange",
    });

    const { watch, trigger, handleSubmit, setValue, reset } = form;

    // Watch only the fields we need
    const className = watch("className") || "";
    const group = watch("group");

    // Pass isEditing flag to avoid fetching counter
    const { admissionFee, salaryFee, counter, editStates, toggleEdit } = useFeeManagement(className, group, true);

    // Populate form with existing student data
    useEffect(() => {
        if (studentData) {
            const student = studentData

            // Convert data to match form structure
            const formData: StudentSchemaType = {
                name: student.name || "",
                nameBangla: student.nameBangla || "",
                fName: student.fName || "",
                mName: student.mName || "",
                gender: student.gender || "",
                dob: student.dob.toISOString() || new Date().toISOString(),
                studentId: student.studentId.toString() || "",
                nationality: student.nationality || "",
                religion: student.religion || "",
                imageUrl: student.imageUrl || "",
                school: student.school || "",
                className: student.className || "",
                section: student.section || "",
                shift: student.shift || "",
                group: student.group || "",
                roll: student.roll.toString() || "",
                fPhone: student.fPhone || "",
                mPhone: student.mPhone || "",
                presentHouseNo: student.presentHouseNo || "",
                presentMoholla: student.presentMoholla || "",
                presentPost: student.presentPost || "",
                presentThana: student.presentThana || "",
                permanentVillage: student.permanentVillage || "",
                permanentPost: student.permanentPost || "",
                permanentThana: student.permanentThana || "",
                permanentDistrict: student.permanentDistrict || "",
                admissionFee: student.admissionFee?.toString() || "",
                salaryFee: student.salaryFee?.toString() || "",
            };

            reset(formData);
        }
    }, [studentData, reset]);

    // Auto-populate fees only if they're empty and not being edited
    useEffect(() => {
        const currentAdmissionFee = watch("admissionFee");
        if (admissionFee?.data?.count && !currentAdmissionFee && !editStates.admissionFee) {
            setValue("admissionFee", admissionFee.data.count.toString());
            trigger("admissionFee");
        }
    }, [admissionFee?.data?.count, setValue, trigger, editStates.admissionFee, watch]);

    useEffect(() => {
        const currentSalaryFee = watch("salaryFee");
        if (salaryFee?.data?.count && !currentSalaryFee && !editStates.salaryFee) {
            setValue("salaryFee", salaryFee.data.count.toString());
            trigger("salaryFee");
        }
    }, [salaryFee?.data?.count, setValue, trigger, editStates.salaryFee, watch]);

    // Navigation handlers
    const handleNext = useCallback(async () => {
        if (currentStep >= STEPS.length) return;

        const step = STEPS[currentStep - 1];
        if (!step) return;

        const output = await trigger(
            [...step.fields] as FieldName[],
            { shouldFocus: true }
        );
        if (!output) return;

        setCurrentStep(s => Math.min(s + 1, STEPS.length));
    }, [currentStep, trigger]);

    const handlePrevious = useCallback(() => {
        setCurrentStep(s => Math.max(s - 1, 1));
    }, []);

    const onSubmit = useCallback((data: StudentSchemaType) => {
        // Include the ID for update
        updateStudent({ id, ...data });
    }, [id, updateStudent]);

    // Render step content
    const renderStepContent = useMemo(() => {
        const stepProps = { form, trigger, isPending };

        switch (currentStep) {
            case 1:
                return <PersonalInfoStep {...stepProps} />;
            case 2:
                return <AcademicInfoStep {...stepProps} />;
            case 3:
                return <AddressStep {...stepProps} />;
            case 4:
                return <ContactStep {...stepProps} />;
            case 5:
                return <FeeStep {...stepProps} editStates={editStates} toggleEdit={toggleEdit} isUpdating={isPending} />;
            default:
                return null;
        }
    }, [currentStep, form, trigger, editStates, toggleEdit, isPending]);

    const stepIndicatorSteps = useMemo(
        () => STEPS.map(step => ({ title: step.name, icon: step.Icon })),
        []
    );

    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card px-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
            <Card className="rounded-xs px-3">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900">
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Edit Student
                            </span>
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Update student information below.
                        </p>
                    </div>
                </div>

                <StepIndicator steps={stepIndicatorSteps} currentStep={currentStep} />

                <Separator className="my-2" />

                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {renderStepContent}
                    </form>
                </Form>

                <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-muted-foreground">
                        Step {currentStep} of {STEPS.length}
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            onClick={handlePrevious}
                            disabled={currentStep === 1 || isPending}
                        >
                            Previous
                        </Button>
                        <Button
                            onClick={currentStep === STEPS.length ? handleSubmit(onSubmit) : handleNext}
                            type={currentStep === STEPS.length ? "submit" : "button"}
                            disabled={isPending}
                        >
                            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {currentStep === STEPS.length
                                ? (isPending ? "Updating..." : "Update Student")
                                : "Next"
                            }
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};