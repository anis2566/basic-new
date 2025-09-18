import { z } from 'zod';

const requiredField = z.string().min(1, { message: "required" });

export const HouseSchema = z.object({
    name: requiredField,
    roomCount: requiredField
})
export type HouseSchemaType = z.infer<typeof HouseSchema>;


export const RoomSchema = z.object({
    name: requiredField,
    capacity: requiredField,
    availableTimes: z.array(z.string()).min(1, { message: "required" }),
    houseId: requiredField
})
export type RoomSchemaType = z.infer<typeof RoomSchema>;


export const CounterSchema = z.object({
    name: requiredField,
    value: requiredField
})
export type CounterSchemaType = z.infer<typeof CounterSchema>;


export const StudentSchema = z.object({
    name: requiredField,
    nameBangla: requiredField,
    fName: requiredField,
    mName: requiredField,
    gender: requiredField,
    dob: requiredField,
    nationality: requiredField,
    religion: requiredField,
    imageUrl: z.string().optional(),
    school: requiredField,
    className: requiredField,
    section: z.string().optional(),
    shift: z.string().optional(),
    group: z.string().optional(),
    roll: requiredField,
    fPhone: z.string().length(11, { message: "invalid phone number" }),
    mPhone: z.string().length(11, { message: "invalid phone number" }),
    presentHouseNo: requiredField,
    presentMoholla: requiredField,
    presentPost: requiredField,
    presentThana: requiredField,
    permanentVillage: requiredField,
    permanentPost: requiredField,
    permanentThana: requiredField,
    permanentDistrict: requiredField,
    studentId: requiredField,
    admissionFee: requiredField,
    salaryFee: requiredField
})
export type StudentSchemaType = z.infer<typeof StudentSchema>;


export const AdmissionFeeSchema = z.object({
    className: requiredField,
    amount: requiredField
})
export type AdmissionFeeSchemaType = z.infer<typeof AdmissionFeeSchema>;


export const SalaryFeeSchema = z.object({
    className: requiredField,
    amount: requiredField,
    group: z.string().optional()
})
export type SalaryFeeSchemaType = z.infer<typeof SalaryFeeSchema>;


export const OtherPayment = z.object({
    name: requiredField,
    amount: requiredField,
})
export type OtherPaymentType = z.infer<typeof OtherPayment>;


export const HousePaymentSchema = z.object({
    month: requiredField,
    amount: requiredField,
    method: requiredField,
    paymentStatus: requiredField,
    houseId: requiredField
})
export type HousePaymentSchemaType = z.infer<typeof HousePaymentSchema>;


export const UtilityPaymentSchema = z.object({
    name: requiredField,
    amount: requiredField,
})
export type UtilityPaymentSchemaType = z.infer<typeof UtilityPaymentSchema>;


export const TeacherSchema = z.object({
    name: requiredField,
    fName: requiredField,
    mName: requiredField,
    gender: requiredField,
    dob: requiredField,
    nationality: requiredField,
    religion: requiredField,
    imageUrl: z.string().optional(),
    presentHouseNo: requiredField,
    presentMoholla: requiredField,
    presentPost: requiredField,
    presentThana: requiredField,
    permanentVillage: requiredField,
    permanentPost: requiredField,
    permanentThana: requiredField,
    permanentDistrict: requiredField,
    phone: z.string().length(11, { message: "invalid phone number" }),
    altPhone: z.string().optional(),
    currentInstitution: requiredField,
    currentSubject: requiredField,
    level: z.array(z.string()).min(1, { message: "required" }),
    availableTimes: z.array(z.string()).min(1, { message: "required" }),
    availableDays: z.array(z.string()).min(1, { message: "required" }),
    classRate: requiredField,
    status: requiredField,
    teacherId: requiredField
})
export type TeacherSchemaType = z.infer<typeof TeacherSchema>;


export const TeacherAdvanceSchema = z.object({
    teacherId: requiredField,
    amount: requiredField
})
export type TeacherAdvanceSchemaType = z.infer<typeof TeacherAdvanceSchema>;


export const TodoSchema = z.object({
    text: requiredField
})
export type TodoSchemaType = z.infer<typeof TodoSchema>;


export const BatchSchema = z.object({
    name: requiredField,
    className: requiredField,
    capacity: requiredField,
    time: z.array(z.string()).min(1, { message: "required" }),
    classTime: z.array(z.string()).min(1, { message: "required" }),
    level: requiredField,
    roomId: requiredField
})
export type BatchSchemaType = z.infer<typeof BatchSchema>;