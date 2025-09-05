import z from "zod";

import { prisma } from "@workspace/db";
import { AdmissionFeeSchema } from "@workspace/utils/schema";

import { baseProcedure, createTRPCRouter } from "../init";

export const admissionFeeRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(AdmissionFeeSchema)
        .mutation(async ({ input }) => {
            const { className, amount } = input;

            try {
                const existingFee = await prisma.admissionFee.findFirst({
                    where: { className },
                })

                if (existingFee) {
                    return { success: false, message: "Fee already exists" }
                }

                await prisma.admissionFee.create({
                    data: {
                        className,
                        amount: parseInt(amount)
                    },
                });

                return { success: true, message: "Admission Fee created" }
            } catch (error) {
                console.error("Error creating admission fee", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    updateOne: baseProcedure
        .input(z.object({
            ...AdmissionFeeSchema.shape,
            id: z.string()
        }))
        .mutation(async ({ input }) => {
            const { id, className, amount } = input;

            try {
                const existingFee = await prisma.admissionFee.findUnique({
                    where: { id },
                });

                if (!existingFee) {
                    return { success: false, message: "Admission Fee not found" };
                }

                await prisma.admissionFee.update({
                    where: { id },
                    data: {
                        className,
                        amount: parseInt(amount)
                    },
                });

                return { success: true, message: "Admission Fee updated" }
            } catch (error) {
                console.error("Error updating admission fee", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    deleteOne: baseProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const feeId = input;

            try {
                const existingFee = await prisma.admissionFee.findUnique({
                    where: { id: feeId },
                });

                if (!existingFee) {
                    return { success: false, message: "Admission Fee not found" };
                }

                await prisma.admissionFee.delete({
                    where: { id: feeId },
                });

                return { success: true, message: "Admission Fee deleted" };
            } catch (error) {
                console.error("Error deleting admission fee", error);
                return { success: false, message: "Internal Server Error" };
            }
        }),
    getForAdmission: baseProcedure
        .input(z.object({
            className: z.string().nullish(),
        }))
        .query(async ({ input }) => {
            const { className } = input;

            if (!className) {
                return { fee: null }
            }

            const feeData = await prisma.admissionFee.findUnique({
                where: { className },
            });

            if (!feeData) {
                return { fee: null }
            }

            return {
                fee: feeData.amount
            }
        }),
    getOne: baseProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const feeId = input;

            const feeData = await prisma.admissionFee.findUnique({
                where: { id: feeId },
            });

            if (!feeData) {
                throw new Error("Admission Fee not found");
            }

            return feeData;
        }),
    getMany: baseProcedure
        .input(
            z.object({
                page: z.number(),
                limit: z.number().min(1).max(100),
                sort: z.string().nullish(),
                search: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search } = input;

            const [fees, totalCount] = await Promise.all([
                prisma.admissionFee.findMany({
                    where: {
                        ...(search && {
                            className: {
                                contains: search,
                                mode: "insensitive",
                            },
                        }),
                    },
                    orderBy: {
                        createdAt: sort === "asc" ? "asc" : "desc",
                    },
                    take: limit,
                    skip: (page - 1) * limit,

                }),
                prisma.admissionFee.count({
                    where: {
                        ...(search && {
                            className: {
                                contains: search,
                                mode: "insensitive",
                            },
                        }),
                    },
                }),
            ]);

            return {
                fees,
                totalCount
            }
        })
})