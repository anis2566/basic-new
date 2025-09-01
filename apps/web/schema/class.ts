import { z } from 'zod';

const requiredField = z.string().min(1, { message: "required" });

export const ClassSchema = z.object({
    name: requiredField,
    level: requiredField,
    position: requiredField,
})

export type ClassSchemaType = z.infer<typeof ClassSchema>;