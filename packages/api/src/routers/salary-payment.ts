import z from "zod";

import { prisma } from "@workspace/db";
import { Months, PAYMENT_STATUS, STATUS } from "@workspace/utils/constant";

import { baseProcedure, createTRPCRouter } from "../init";

export const salaryPaymentRouter = createTRPCRouter({
    updateOne: baseProcedure
        .input(
            z.object({
                id: z.string(),
                method: z.string(),
                amount: z.string(),
                note: z.string().nullish()
            })
        )
        .mutation(async ({ input }) => {
            const { id, method, amount, note } = input;

            try {
                const existingPayment = await prisma.salaryPayment.findUnique({
                    where: { id },
                })

                if (!existingPayment) {
                    return { success: false, message: "Payment not found" }
                }

                await prisma.salaryPayment.update({
                    where: { id },
                    data: {
                        method,
                        amount: parseInt(amount),
                        note,
                        status: STATUS.Completed,
                        paymentStatus: PAYMENT_STATUS.Paid
                    }
                })

                return { success: true, message: "Payment received" }
            } catch (error) {
                console.error("Error updating student", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    getOne: baseProcedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .query(async ({ input }) => {
            const { id } = input;

            const salaryPaymentData = await prisma.salaryPayment.findUnique({
                where: { id },
                select: {
                    method: true,
                    amount: true,
                    status: true,
                    student: {
                        select: {
                            studentId: true,
                            name: true,
                            className: true
                        }
                    }
                }
            });

            if (!salaryPaymentData) {
                throw new Error("Salary Payment not found");
            }

            return salaryPaymentData;
        }),
    getOverview: baseProcedure
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
                month: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search, session, className, id, status, paymentStatus, month } = input;

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
                        ...(status && {
                            salaryPayments: {
                                some: {
                                    status
                                }
                            }
                        }),
                        ...(paymentStatus && {
                            salaryPayments: {
                                some: {
                                    paymentStatus
                                }
                            }
                        }),
                        ...(month && {
                            salaryPayments: {
                                some: {
                                    month
                                }
                            }
                        }),
                    },
                    select: {
                        id: true,
                        name: true,
                        studentId: true,
                        imageUrl: true,
                        className: true,
                        salaryPayments: {
                            select: {
                                id: true,
                                status: true,
                                paymentStatus: true,
                                month: true,
                                amount: true,
                            }
                        },
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
                        ...(status && {
                            salaryPayments: {
                                some: {
                                    status
                                }
                            }
                        }),
                        ...(paymentStatus && {
                            salaryPayments: {
                                some: {
                                    paymentStatus
                                }
                            }
                        }),
                        ...(month && {
                            salaryPayments: {
                                some: {
                                    month
                                }
                            }
                        }),
                    },
                }),
            ])

            return {
                students,
                totalCount
            }
        }),
    getDueMany: baseProcedure
        .input(
            z.object({
                page: z.number(),
                limit: z.number().min(1).max(100),
                sort: z.string().nullish(),
                search: z.string().nullish(),
                session: z.string().nullish(),
                className: z.string().nullish(),
                id: z.string().nullish(),
                month: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search, session, className, id, month } = input;

            const currentMothIndex = new Date().getMonth();

            const [payments, totalCount] = await Promise.all([
                prisma.salaryPayment.findMany({
                    where: {
                        status: "Active",
                        paymentStatus: "Unpaid",
                        month: {
                            equals: month ? month : Months[currentMothIndex]
                        },
                        ...(search && {
                            student: {
                                name: {
                                    contains: search,
                                    mode: "insensitive",
                                },
                            }
                        }),
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
                    },
                    include: {
                        student: {
                            select: {
                                studentId: true,
                                name: true,
                                imageUrl: true,
                                id: true,
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
                prisma.salaryPayment.count({
                    where: {
                        status: "Active",
                        paymentStatus: "Unpaid",
                        month: {
                            equals: month ? month : Months[currentMothIndex]
                        },
                        ...(search && {
                            student: {
                                name: {
                                    contains: search,
                                    mode: "insensitive",
                                },
                            }
                        }),
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
                    },
                }),
            ]);

            return {
                payments,
                totalCount
            }
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
                transactionId: z.string().nullish(),
                month: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search, session, className, id, transactionId, month } = input;

            const [payments, totalCount] = await Promise.all([
                prisma.salaryPayment.findMany({
                    where: {
                        status: STATUS.Completed,
                        paymentStatus: PAYMENT_STATUS.Paid,
                        ...(search && {
                            student: {
                                name: {
                                    contains: search,
                                    mode: "insensitive",
                                },
                            }
                        }),
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
                        ...(transactionId && {
                            transactionId
                        }),
                        ...(month && {
                            month
                        })
                    },
                    include: {
                        student: {
                            select: {
                                studentId: true,
                                name: true,
                                imageUrl: true,
                                id: true,
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
                prisma.salaryPayment.count({
                    where: {
                        status: STATUS.Completed,
                        paymentStatus: PAYMENT_STATUS.Paid,
                        ...(search && {
                            student: {
                                name: {
                                    contains: search,
                                    mode: "insensitive",
                                },
                            }
                        }),
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
                        ...(transactionId && {
                            transactionId
                        }),
                        ...(month && {
                            month
                        })
                    },
                }),
            ]);

            return {
                payments,
                totalCount
            }
        })
})