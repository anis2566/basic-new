import z from "zod";

import { prisma } from "@workspace/db";
import { TeacherSchema } from "@workspace/utils/schema";

import { baseProcedure, createTRPCRouter } from "../init";

export const teacherRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(TeacherSchema)
        .mutation(async ({ input }) => {
            try {
                const existingTeacher = await prisma.teacher.findFirst({
                    where: {
                        teacherId: parseInt(input.teacherId),
                    }
                })

                if (existingTeacher) {
                    return { success: false, message: "Teacher already exists" };
                }

                const availableDays = input.availableDays.map(day => day.toLowerCase());
                const availableTimes = input.availableTimes.map(time => time.toLowerCase());

                const availableSlots = availableDays.flatMap(day => availableTimes.map(time => `${day} ${time}`));

                await prisma.teacher.create({
                    data: {
                        ...input,
                        session: new Date().getFullYear().toString(),
                        dob: new Date(input.dob),
                        classRate: parseInt(input.classRate),
                        teacherId: parseInt(input.teacherId),
                        availableSlots
                    }
                })

                return { success: true, message: "Teacher created" }
            } catch (error) {
                console.error("Error creating teacher", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    updateOne: baseProcedure
        .input(z.object({
            ...TeacherSchema.shape,
            id: z.string()
        }))
        .mutation(async ({ input }) => {
            const { id, ...rest } = input;

            try {
                const existingTeacher = await prisma.teacher.findUnique({
                    where: { id },
                })

                if (!existingTeacher) {
                    return { success: false, message: "Teacher not found" };
                }

                const availableDays = input.availableDays.map(day => day.toLowerCase());
                const availableTimes = input.availableTimes.map(time => time.toLowerCase());

                const availableSlots = availableDays.flatMap(day => availableTimes.map(time => `${day} ${time}`));

                const updatedBookSlots = availableSlots.filter(slot => existingTeacher.bookedSlots.includes(slot));

                const combinedSlots = availableSlots.map(slot =>
                    existingTeacher.bookedSlots.includes(slot)
                        ? `${slot}`
                        : `${slot}`
                );

                await prisma.teacher.update({
                    where: { id },
                    data: {
                        ...rest,
                        session: new Date().getFullYear().toString(),
                        dob: new Date(input.dob),
                        classRate: parseInt(input.classRate),
                        teacherId: parseInt(input.teacherId),
                        availableSlots: combinedSlots,
                        bookedSlots: updatedBookSlots
                    },
                });

                return { success: true, message: "Teacher updated" }
            } catch (error) {
                console.error("Error updating teacher", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    deleteOne: baseProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const teacherId = input;

            try {
                const existingTeacher = await prisma.teacher.findUnique({
                    where: { id: teacherId },
                });

                if (!existingTeacher) {
                    return { success: false, message: "Teacher not found" };
                }

                await prisma.teacher.delete({
                    where: { id: teacherId },
                });

                return { success: true, message: "Teacjer deleted" };
            } catch (error) {
                console.error("Error deleting teacher", error);
                return { success: false, message: "Internal Server Error" };
            }
        }),
    forSelect: baseProcedure
        .input(z.object({
            name: z.string().nullish(),
            id: z.string().nullish()
        }))
        .query(async ({ input }) => {
            const { name, id } = input;

            const teachers = await prisma.teacher.findMany({
                where: {
                    ...(name && {
                        name: {
                            contains: name,
                            mode: "insensitive",
                        },
                    }),
                    ...(id && {
                        teacherId: parseInt(id)
                    }),
                },
                select: {
                    name: true,
                    id: true,
                    teacherId: true
                }
            });

            return {
                teachers
            }
        }),
    getOne: baseProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const teacherId = input;

            const teacherData = await prisma.teacher.findUnique({
                where: { id: teacherId },
            });

            if (!teacherData) {
                throw new Error("Counter not found");
            }

            return teacherData;
        }),
    getMany: baseProcedure
        .input(
            z.object({
                page: z.number(),
                limit: z.number().min(1).max(100),
                sort: z.string().nullish(),
                search: z.string().nullish(),
                session: z.string().nullish(),
                id: z.string().nullish(),
                status: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search, session, id, status } = input;

            const [teachers, totalCount] = await Promise.all([
                prisma.teacher.findMany({
                    where: {
                        ...(search && {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        }),
                        ...(session && {
                            session
                        }),
                        ...(id && {
                            id
                        }),
                        ...(status && {
                            status
                        }),
                    },
                    orderBy: {
                        createdAt: sort === "asc" ? "asc" : "desc",
                    },
                    take: limit,
                    skip: (page - 1) * limit,

                }),
                prisma.teacher.count({
                    where: {
                        ...(search && {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        }),
                        ...(session && {
                            session
                        }),
                        ...(id && {
                            id
                        }),
                        ...(status && {
                            status
                        }),
                    },
                }),
            ]);

            return {
                teachers,
                totalCount
            }
        })
})