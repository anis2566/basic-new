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
    fPhone: requiredField,
    mPhone: requiredField,
    presentHouseNo: requiredField,
    presentMoholla: requiredField,
    presentPost: requiredField,
    presentThana: requiredField,
    permanentVillage: requiredField,
    permanentPost: requiredField,
    permanentThana: requiredField,
    permanentDistrict: requiredField,
    studentId: z.string().optional(),
    admissionFee: requiredField,
    salaryFee: requiredField
})
export type StudentSchemaType = z.infer<typeof StudentSchema>;