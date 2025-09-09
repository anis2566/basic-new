import z from "zod";

import { prisma } from "@workspace/db";
import { OtherPayment } from "@workspace/utils/schema";

import { baseProcedure, createTRPCRouter } from "../init";
import { Months } from "@workspace/utils/constant";

export const otherPaymentRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(OtherPayment)
        .mutation(async ({ input }) => {
            const { name, amount } = input;

            try {
                await prisma.otherPayment.create({
                    data: {
                        session: new Date().getFullYear().toString(),
                        month: Months[new Date().getMonth()] as string,
                        name,
                        amount: parseInt(amount)
                    },
                });

                return { success: true, message: "Payment created" }
            } catch (error) {
                console.error("Error other payment", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    updateOne: baseProcedure
        .input(z.object({
            ...OtherPayment.shape,
            id: z.string()
        }))
        .mutation(async ({ input }) => {
            const { id, name, amount } = input;

            try {
                const existingPayment = await prisma.otherPayment.findUnique({
                    where: { id },
                });

                if (!existingPayment) {
                    return { success: false, message: "Payment not found" };
                }

                await prisma.otherPayment.update({
                    where: { id },
                    data: {
                        name,
                        amount: parseInt(amount)
                    },
                });

                return { success: true, message: "Payment updated" }
            } catch (error) {
                console.error("Error updating payment", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    deleteOne: baseProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const paymentId = input;

            try {
                const existingPayment = await prisma.otherPayment.findUnique({
                    where: { id: paymentId },
                });

                if (!existingPayment) {
                    return { success: false, message: "Payment not found" };
                }

                await prisma.otherPayment.delete({
                    where: { id: paymentId },
                });

                return { success: true, message: "Payment deleted" };
            } catch (error) {
                console.error("Error deleting other payment", error);
                return { success: false, message: "Internal Server Error" };
            }
        }),
    getOne: baseProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const paymentId = input;

            const paymentData = await prisma.otherPayment.findUnique({
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
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search, session, month } = input;

            const [payments, totalCount] = await Promise.all([
                prisma.otherPayment.findMany({
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
                    },
                    orderBy: {
                        createdAt: sort === "asc" ? "asc" : "desc",
                    },
                    take: limit,
                    skip: (page - 1) * limit,

                }),
                prisma.otherPayment.count({
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
                    },
                }),
            ]);

            return {
                payments,
                totalCount
            }
        })
})