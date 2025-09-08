import z from "zod";

import { prisma } from "@workspace/db";
import { StudentSchema } from "@workspace/utils/schema";

import { baseProcedure, createTRPCRouter } from "../init";
import { MONTH, Months, PAYMENT_STATUS, STATUS } from "@workspace/utils/constant";

export const studentRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(StudentSchema)
        .mutation(async ({ input }) => {
            try {
                const existingStudent = await prisma.student.findFirst({
                    where: {
                        className: input.className,
                        studentId: parseInt(input.studentId)
                    }
                })

                if (existingStudent) {
                    return { success: false, message: "Student already exists" }
                }

                const currentMonthIndex = new Date().getMonth();
                const currentMonth = Months[currentMonthIndex] as MONTH

                await prisma.$transaction(async (tx) => {
                    const newStudent = await tx.student.create({
                        data: {
                            ...input,
                            session: new Date().getFullYear().toString(),
                            studentId: parseInt(input.studentId),
                            dob: new Date(input.dob),
                            roll: parseInt(input.roll),
                            admissionFee: parseInt(input.admissionFee),
                            salaryFee: parseInt(input.salaryFee)
                        },
                        select: {
                            id: true
                        }
                    })

                    await tx.admissionPayment.create({
                        data: {
                            className: input.className,
                            amount: parseInt(input.admissionFee),
                            method: "N/A",
                            session: new Date().getFullYear().toString(),
                            month: currentMonth,
                            studentId: newStudent.id,
                            status: "Active"
                        }
                    })

                    for (let i = 0; i < Months.length; i++) {
                        let status: string;
                        let paymentStatus: string | undefined;

                        if (i < currentMonthIndex) {
                            status = "N/A";
                            paymentStatus = "N/A";
                        } else if (i === currentMonthIndex) {
                            status = "Active";
                            paymentStatus = "Unpaid"
                        } else {
                            status = "Initiated";
                            paymentStatus = "N/A";
                        }

                        await tx.salaryPayment.create({
                            data: {
                                session: new Date().getFullYear().toString(),
                                month: Months[i] as MONTH,
                                studentId: newStudent.id,
                                className: input.className,
                                method: "N/A",
                                status: status,
                                ...(paymentStatus && { paymentStatus }),
                                amount: parseInt(input.salaryFee),
                            }
                        })
                    }

                    await tx.counter.update({
                        where: {
                            name: input.className
                        },
                        data: {
                            value: {
                                increment: 1
                            }
                        }
                    })
                })

                return { success: true, message: "Student created" }
            } catch (error) {
                console.error("Error creating student", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    updateOne: baseProcedure
        .input(z.object({
            ...StudentSchema.shape,
            id: z.string()
        }))
        .mutation(async ({ input }) => {
            const { id, ...rest } = input;

            try {
                const existingStudent = await prisma.student.findUnique({
                    where: { id },
                });

                if (!existingStudent) {
                    return { success: false, message: "Student not found" };
                }

                await prisma.student.update({
                    where: { id },
                    data: {
                        ...rest,
                        session: new Date().getFullYear().toString(),
                        studentId: parseInt(input.studentId),
                        dob: new Date(input.dob),
                        roll: parseInt(input.roll),
                        admissionFee: parseInt(input.admissionFee),
                        salaryFee: parseInt(input.salaryFee)
                    },
                });

                return { success: true, message: "Student updated" }
            } catch (error) {
                console.error("Error updating student", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    deleteOne: baseProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const studentId = input;

            try {
                const existingStudent = await prisma.student.findUnique({
                    where: { id: studentId },
                });

                if (!existingStudent) {
                    return { success: false, message: "Student not found" };
                }

                await prisma.student.delete({
                    where: { id: studentId },
                });

                return { success: true, message: "Student deleted" };
            } catch (error) {
                console.error("Error deleting student", error);
                return { success: false, message: "Internal Server Error" };
            }
        }),
    forPaymentSelect: baseProcedure
        .input(z.object({
            session: z.string(),
            className: z.string(),
            studentId: z.string()
        }))
        .mutation(async ({ input }) => {
            const { session, className, studentId } = input;

            console.log(session, className, studentId)

            try {
                const student = await prisma.student.findFirst({
                    where: {
                        studentId: parseInt(studentId),
                        session,
                        className
                    },
                    select: {
                        name: true,
                        studentId: true,
                        imageUrl: true,
                        salaryPayments: {
                            where: {
                                paymentStatus: PAYMENT_STATUS.Unpaid
                            },
                            select: {
                                month: true,
                                amount: true,
                                status: true,
                                paymentStatus: true,
                                id: true
                            }
                        }
                    }
                })

                if (!student) {
                    return { success: false, message: "Student not found", student: null };
                }

                return { success: true, student, data: student, message: "Student found" };
            } catch (error) {
                console.error(`Error getting student for payment select: ${error}`);
                return { success: false, message: "Internal Server Error", student: null };
            }
        }),
    getOne: baseProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const studentId = input;

            const studentData = await prisma.student.findUnique({
                where: { id: studentId },
            });

            if (!studentData) {
                throw new Error("Student not found");
            }

            return studentData;
        }),
    getMany: baseProcedure
        .input(
            z.object({
                page: z.number(),
                limit: z.number().min(1).max(100),
                sort: z.string().nullish(),
                search: z.string().nullish(),
                session: z.string().nullish(),
                className: z.string().nullish(),
                id: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search, session, className, id } = input;

            const [students, totalCount] = await Promise.all([
                prisma.student.findMany({
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
                        ...(className && {
                            className
                        }),
                        ...(id && {
                            studentId: parseInt(id)
                        }),
                    },
                    orderBy: {
                        createdAt: sort === "asc" ? "asc" : "desc",
                    },
                    take: limit,
                    skip: (page - 1) * limit,

                }),
                prisma.student.count({
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
                        ...(className && {
                            className
                        }),
                        ...(id && {
                            studentId: parseInt(id)
                        }),
                    },
                }),
            ]);

            return {
                students,
                totalCount
            }
        })
})