import z from "zod";

import { prisma } from "@workspace/db";
import { CounterSchema, HousePaymentSchema } from "@workspace/utils/schema";

import { baseProcedure, createTRPCRouter } from "../init";
import { Months } from "@workspace/utils/constant";

export const housePaymentRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(HousePaymentSchema)
        .mutation(async ({ input }) => {
            const { houseId, month, amount, method, paymentStatus } = input;

            try {
                const isValidMonth = await prisma.housePayment.findUnique({
                    where: {
                        id: houseId,
                        month,
                    }
                })

                if (isValidMonth) {
                    return { success: false, message: "House payment already exists for this month" }
                }

                const house = await prisma.house.findUnique({
                    where: {
                        id: houseId,
                    }
                })

                if (!house) {
                    return { success: false, message: "House not found" }
                }

                await prisma.housePayment.create({
                    data: {
                        session: new Date().getFullYear().toString(),
                        month: Months[new Date().getMonth()] as string,
                        amount: parseInt(amount),
                        method,
                        paymentStatus,
                        houseId,
                        houseName: house.name
                    }
                })

                return { success: true, message: "Payment created" }
            } catch (error) {
                console.error("Error creating payment", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    getOne: baseProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const paymentId = input;

            const paymentData = await prisma.housePayment.findUnique({
                where: { id: paymentId },
            });

            if (!paymentData) {
                throw new Error("Payment not found");
            }

            return paymentData;
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
                paymentStatus: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search, session, month, paymentStatus } = input;

            const [payments, totalCount] = await Promise.all([
                prisma.housePayment.findMany({
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
                        ...(month && {
                            month
                        }),
                        ...(paymentStatus && {
                            paymentStatus
                        }),
                    },
                    orderBy: {
                        createdAt: sort === "asc" ? "asc" : "desc",
                    },
                    take: limit,
                    skip: (page - 1) * limit,

                }),
                prisma.housePayment.count({
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
                        ...(month && {
                            month
                        }),
                        ...(paymentStatus && {
                            paymentStatus
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