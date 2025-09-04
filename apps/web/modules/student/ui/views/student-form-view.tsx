"use client";

import { Card } from "@workspace/ui/components/card";
import { useState } from "react";
import { StepIndicator } from "../components/step-indicator";
import { Button } from "@workspace/ui/components/button";
import { CalendarIcon, DollarSign, MapPin, PhoneCall, School, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { StudentSchema, StudentSchemaType } from "@workspace/utils/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@workspace/ui/components/form";
import { cn } from "@workspace/ui/lib/utils";
import { Separator } from "@workspace/ui/components/separator";
import { GENDER, NATIONALITY, RELIGION } from "@workspace/utils/constant";
import { Input } from "@workspace/ui/components/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select";
import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover";
import { format } from "date-fns"
import { Calendar } from "@workspace/ui/components/calendar"

const steps = [
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
            "imageUrl",
        ],
        Icon: User,
    },
    {
        id: 2,
        name: "Academic Info",
        fields: ["school", "className", "shift", "group", "section", "roll"],
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
        ],
        Icon: MapPin,
    },
    {
        id: 4,
        name: "Contact",
        fields: ["fPhone", "mPhone"],
        Icon: PhoneCall,
    },
    {
        id: 5,
        name: "ID, Fee & Ref",

        fields: ["admissionFee", "salary", "studentId", "referenceId"],
        Icon: DollarSign,
    },
];


export const StudentFormView = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const form = useForm<StudentSchemaType>({
        resolver: zodResolver(StudentSchema),
        defaultValues: {
            name: "",
            nameBangla: "",
            fName: "",
            mName: "",
            gender: undefined,
            dob: new Date().toISOString(),
            studentId: "",
            nationality: undefined,
            religion: undefined,
            imageUrl: "",
            school: "",
            className: undefined,
            section: "",
            shift: undefined,
            group: undefined,
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
        },
    });

    const { trigger, handleSubmit } = form;

    type FieldName = keyof z.infer<typeof StudentSchema>;

    const next = async () => {
        const step = steps[currentStep];
        if (!step) return; // guard

        const output = await trigger(step.fields as FieldName[], { shouldFocus: true });
        if (!output) return;

        setCurrentStep((s) => s + 1);
    };

    const previous = () => {
        setCurrentStep((step) => step - 1);
    };

    const onSubmit = (data: StudentSchemaType) => { };

    const isPending = false;

    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card px-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
            <Card className="rounded-xs px-3">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900">
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Admission Form
                            </span>
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Fill out the form below to add a new student.
                        </p>
                    </div>
                </div>

                <StepIndicator
                    steps={steps.map((step) => ({ title: step.name, icon: step.Icon }))}
                    currentStep={currentStep}
                />

                <Separator className="my-4" />

                <Form {...form}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div
                            className={cn(
                                "hidden",
                                currentStep === 0 && "grid md:grid-cols-2 gap-6"
                            )}
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                    trigger("name");
                                                }}
                                                className="rounded-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="nameBangla"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name Bangla</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                    trigger("nameBangla");
                                                }}
                                                className="rounded-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="fName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Father Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                    trigger("fName");
                                                }}
                                                className="rounded-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="mName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mother Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value);
                                                    trigger("mName");
                                                }}
                                                className="rounded-xs"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Gender</FormLabel>
                                        <Select
                                            defaultValue={field.value}
                                            onValueChange={(value) => {
                                                field.onChange(value);
                                                trigger("gender");
                                            }}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-full rounded-xs">
                                                    <SelectValue placeholder="Select gender" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="rounded-xs">
                                                {Object.values(GENDER).map((v, i) => (
                                                    <SelectItem value={v} key={i} className="rounded-xs">
                                                        {v}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Date of birth</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full rounded-xs pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0 rounded-xs" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={new Date(field.value)}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    captionLayout="dropdown"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="nationality"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nationality</FormLabel>
                                        <Select
                                            defaultValue={field.value}
                                            onValueChange={(value) => {
                                                field.onChange(value);
                                                trigger("nationality");
                                            }}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-full rounded-xs">
                                                    <SelectValue placeholder="Select nationality" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="rounded-xs">
                                                {Object.values(NATIONALITY).map((v, i) => (
                                                    <SelectItem value={v} key={i} className="rounded-xs">
                                                        {v}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="religion"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Religion</FormLabel>
                                        <Select
                                            defaultValue={field.value}
                                            onValueChange={(value) => {
                                                field.onChange(value);
                                                trigger("religion");
                                            }}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-full rounded-xs">
                                                    <SelectValue placeholder="Select religion" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="rounded-xs">
                                                {Object.values(RELIGION).map((v, i) => (
                                                    <SelectItem value={v} key={i} className="rounded-xs">
                                                        {v}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </form>
                </Form>

                <Button onClick={next}>Next</Button>
            </Card>
        </div>
    )
}