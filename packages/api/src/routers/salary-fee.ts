import z from "zod";

import { prisma } from "@workspace/db";
import { SalaryFeeSchema } from "@workspace/utils/schema";

import { baseProcedure, createTRPCRouter } from "../init";

export const salaryFeeRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(SalaryFeeSchema)
        .mutation(async ({ input }) => {
            const { className, amount, group } = input;

            try {
                const existingFee = await prisma.salaryFee.findFirst({
                    where: { className },
                })

                if (existingFee && !group) {
                    return { success: false, message: "Fee already exists" }
                }

                await prisma.salaryFee.create({
                    data: {
                        className,
                        amount: parseInt(amount),
                        group
                    },
                });

                return { success: true, message: "Salary Fee created" }
            } catch (error) {
                console.error("Error creating salary fee", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    updateOne: baseProcedure
        .input(z.object({
            ...SalaryFeeSchema.shape,
            id: z.string()
        }))
        .mutation(async ({ input }) => {
            const { id, className, amount, group } = input;

            try {
                const existingFee = await prisma.salaryFee.findUnique({
                    where: { id },
                });

                if (!existingFee) {
                    return { success: false, message: "Salary Fee not found" };
                }

                await prisma.salaryFee.update({
                    where: { id },
                    data: {
                        className,
                        amount: parseInt(amount),
                        group
                    },
                });

                return { success: true, message: "Salary Fee updated" }
            } catch (error) {
                console.error("Error updating salary fee", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    deleteOne: baseProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const feeId = input;

            try {
                const existingFee = await prisma.salaryFee.findUnique({
                    where: { id: feeId },
                });

                if (!existingFee) {
                    return { success: false, message: "Salary Fee not found" };
                }

                await prisma.salaryFee.delete({
                    where: { id: feeId },
                });

                return { success: true, message: "Salary Fee deleted" };
            } catch (error) {
                console.error("Error deleting salary fee", error);
                return { success: false, message: "Internal Server Error" };
            }
        }),
    getForAdmission: baseProcedure
        .input(z.object({
            className: z.string().nullish(),
            group: z.string().nullish()
        }))
        .query(async ({ input }) => {
            const { className, group } = input;

            if (!className) {
                return { fee: null }
            }

            const feeData = await prisma.salaryFee.findFirst({
                where: {
                    className,
                    ...group && {
                        group
                    }
                },
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

            const feeData = await prisma.salaryFee.findUnique({
                where: { id: feeId },
            });

            if (!feeData) {
                throw new Error("Salary Fee not found");
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
                group: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search, group } = input;

            const [fees, totalCount] = await Promise.all([
                prisma.salaryFee.findMany({
                    where: {
                        ...(search && {
                            className: {
                                contains: search,
                                mode: "insensitive",
                            },
                        }),
                        ...(group && {
                            group: {
                                contains: group,
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
                prisma.salaryFee.count({
                    where: {
                        ...(search && {
                            className: {
                                contains: search,
                                mode: "insensitive",
                            },
                        }),
                        ...(group && {
                            group: {
                                contains: group,
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