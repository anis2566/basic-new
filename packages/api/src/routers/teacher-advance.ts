import z from "zod";

import { prisma } from "@workspace/db";
import { TeacherAdvanceSchema } from "@workspace/utils/schema";
import { Months, TEACHER_ADVANCE_STATUS } from "@workspace/utils/constant";

import { baseProcedure, createTRPCRouter } from "../init";

export const teacherAdvanceRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(TeacherAdvanceSchema)
        .mutation(async ({ input }) => {
            const { teacherId, amount } = input;

            try {
                const teacher = await prisma.teacher.findUnique({
                    where: {
                        id: teacherId
                    }
                })

                if (!teacher) {
                    return { success: false, message: "Teacher not found" }
                }

                const hasAlreadyRequested = await prisma.teacherAdvance.findFirst({
                    where: {
                        teacherId,
                        status: TEACHER_ADVANCE_STATUS.Pending
                    }
                })

                if (hasAlreadyRequested) {
                    return { success: false, message: "Teacher already has a pending request" }
                }

                await prisma.teacherAdvance.create({
                    data: {
                        session: new Date().getFullYear().toString(),
                        month: Months[new Date().getMonth()] as string,
                        teacherName: teacher.name,
                        teacherIndex: teacher.teacherId,
                        amount: parseInt(amount),
                        teacherId
                    }
                })

                return { success: true, message: "Advance request successful" }
            } catch (error) {
                console.error("Error creating teacher advance", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    updateOne: baseProcedure
        .input(z.object({
            ...TeacherAdvanceSchema.shape,
            id: z.string()
        }))
        .mutation(async ({ input }) => {
            const { id, amount } = input;

            try {
                const existingAdvance = await prisma.teacherAdvance.findUnique({
                    where: { id },
                });

                if (!existingAdvance) {
                    return { success: false, message: "Advance not found" };
                }

                if (existingAdvance.status !== TEACHER_ADVANCE_STATUS.Pending) {
                    return { success: false, message: "Unable to update advance" }
                }

                await prisma.teacherAdvance.update({
                    where: { id },
                    data: {
                        amount: parseInt(amount)
                    },
                });

                return { success: true, message: "Advance updated" }
            } catch (error) {
                console.error("Error updating advance", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    deleteOne: baseProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const advanceId = input;

            try {
                const existingAdvance = await prisma.teacherAdvance.findUnique({
                    where: { id: advanceId },
                });

                if (!existingAdvance) {
                    return { success: false, message: "Counter not found" };
                }

                await prisma.teacherAdvance.delete({
                    where: { id: advanceId },
                });

                return { success: true, message: "Advance deleted" };
            } catch (error) {
                console.error("Error deleting advance", error);
                return { success: false, message: "Internal Server Error" };
            }
        }),
    getOne: baseProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const advanceIt = input;

            const advanceData = await prisma.teacherAdvance.findUnique({
                where: { id: advanceIt },
            });

            if (!advanceData) {
                throw new Error("Advance not found");
            }

            return advanceData;
        }),
    getMany: baseProcedure
        .input(
            z.object({
                page: z.number(),
                limit: z.number().min(1).max(100),
                sort: z.string().nullish(),
                search: z.string().nullish(),
                session: z.string().nullish(),
                month: z.string().nullish(),
                status: z.string().nullish(),
                id: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search, session, month, status, id } = input;

            const [advances, totalCount] = await Promise.all([
                prisma.teacherAdvance.findMany({
                    where: {
                        ...(search && {
                            teacher: {
                                name: {
                                    contains: search,
                                    mode: "insensitive",
                                },
                            }
                        }),
                        ...(session && {
                            session: {
                                equals: session
                            }
                        }),
                        ...(month && {
                            month: {
                                equals: month
                            }
                        }),
                        ...(status && {
                            status: {
                                equals: status
                            }
                        }),
                        ...(id && {
                            teacherId: {
                                equals: id
                            }
                        }),
                    },
                    include: {
                        teacher: {
                            select: {
                                name: true,
                                teacherId: true,
                                imageUrl: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: sort === "asc" ? "asc" : "desc",
                    },
                    take: limit,
                    skip: (page - 1) * limit,

                }),
                prisma.teacherAdvance.count({
                    where: {
                        ...(search && {
                            teacher: {
                                name: {
                                    contains: search,
                                    mode: "insensitive",
                                },
                            }
                        }),
                        ...(session && {
                            session: {
                                equals: session
                            }
                        }),
                        ...(month && {
                            month: {
                                equals: month
                            }
                        }),
                        ...(status && {
                            status: {
                                equals: status
                            }
                        }),
                        ...(id && {
                            teacherId: {
                                equals: id
                            }
                        }),
                    },
                }),
            ]);

            return {
                advances,
                totalCount
            }
        })
})