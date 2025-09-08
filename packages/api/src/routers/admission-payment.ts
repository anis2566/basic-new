import z from "zod";

import { prisma } from "@workspace/db";

import { baseProcedure, createTRPCRouter } from "../init";

export const admissionPaymentRouter = createTRPCRouter({
    changeStatus: baseProcedure
        .input(
            z.object({
                id: z.string(),
                status: z.string(),
                paymentStatus: z.string(),
                method: z.string()
            })
        )
        .mutation(async ({ input }) => {
            const { id, status, paymentStatus, method } = input;

            try {
                const payment = await prisma.admissionPayment.findUnique({
                    where: {
                        id,
                    }
                })

                if (!payment) {
                    return { success: false, message: "Payment not found" }
                }

                await prisma.admissionPayment.update({
                    where: {
                        id
                    },
                    data: {
                        method,
                        status,
                        paymentStatus,
                        paidAt: new Date()
                    }
                })

                return { success: true, message: "Payment updated" }
            } catch (error) {
                console.error("Error updating payment", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    getOne: baseProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const paymentId = input;

            const paymentData = await prisma.admissionPayment.findUnique({
                where: { id: paymentId, status: "Active", paymentStatus: "Unpaid" },
                include: {
                    student: {
                        select: {
                            studentId: true,
                            name: true,
                            imageUrl: true,
                            className: true
                        }
                    }
                }
            });

            console.log(paymentData)

            if (!paymentData) {
                return { success: false, message: "Payment not found" }
            }

            return { success: true, data: paymentData }
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
                status: z.string().nullish(),
                paymentStatus: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search, session, className, id, status, paymentStatus } = input;

            const [payments, totalCount] = await Promise.all([
                prisma.admissionPayment.findMany({
                    where: {
                        ...(search && {
                            student: {
                                name: {
                                    contains: search,
                                    mode: "insensitive",
                                },
                            },
                            ...(session && {
                                session
                            }),
                            ...(className && {
                                className
                            }),
                            ...(id && {
                                student: {
                                    studentId: parseInt(id)
                                }
                            }),
                            ...(status && {
                                status
                            }),
                            ...(paymentStatus && {
                                paymentStatus
                            }),
                        }),
                    },
                    include: {
                        student: {
                            select: {
                                name: true,
                                imageUrl: true,
                                studentId: true,
                                className: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: sort === "asc" ? "asc" : "desc",
                    },
                    take: limit,
                    skip: (page - 1) * limit,

                }),
                prisma.admissionPayment.count({
                    where: {
                        ...(search && {
                            student: {
                                name: {
                                    contains: search,
                                    mode: "insensitive",
                                },
                            },
                            ...(session && {
                                session
                            }),
                            ...(className && {
                                className
                            }),
                            ...(id && {
                                student: {
                                    studentId: parseInt(id)
                                }
                            }),
                            ...(status && {
                                status
                            }),
                            ...(paymentStatus && {
                                paymentStatus
                            }),
                        }),
                    },
                }),
            ]);

            return {
                payments,
                totalCount
            }
        })
})