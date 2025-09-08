import z from "zod";

import { prisma } from "@workspace/db";
import { CounterSchema } from "@workspace/utils/schema";

import { baseProcedure, createTRPCRouter } from "../init";

export const counterRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(CounterSchema)
        .mutation(async ({ input }) => {
            const { name } = input;

            try {
                await prisma.counter.create({
                    data: {
                        name,
                    },
                });

                return { success: true, message: "Counter created" }
            } catch (error) {
                console.error("Error creating counter", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    updateOne: baseProcedure
        .input(z.object({
            ...CounterSchema.shape,
            id: z.string()
        }))
        .mutation(async ({ input }) => {
            const { id, name, value } = input;

            try {
                const existingCounter = await prisma.counter.findUnique({
                    where: { id },
                });

                if (!existingCounter) {
                    return { success: false, message: "Counter not found" };
                }

                await prisma.counter.update({
                    where: { id },
                    data: {
                        name,
                        value: parseInt(value)
                    },
                });

                return { success: true, message: "Counter updated" }
            } catch (error) {
                console.error("Error updating counter", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    deleteOne: baseProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const counterId = input;

            try {
                const existingCounter = await prisma.counter.findUnique({
                    where: { id: counterId },
                });

                if (!existingCounter) {
                    return { success: false, message: "Counter not found" };
                }

                await prisma.counter.delete({
                    where: { id: counterId },
                });

                return { success: true, message: "Counter deleted" };
            } catch (error) {
                console.error("Error deleting counter", error);
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
                return { count: null }
            }

            const counterData = await prisma.counter.findUnique({
                where: {
                    name: className,
                },
            });

            if (!counterData) {
                return { count: null }
            }

            return {
                count: counterData.value + 1
            }
        }),
    getOne: baseProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const counterId = input;

            const counterData = await prisma.counter.findUnique({
                where: { id: counterId },
            });

            if (!counterData) {
                throw new Error("Counter not found");
            }

            return counterData;
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

            const [counters, totalCount] = await Promise.all([
                prisma.counter.findMany({
                    where: {
                        ...(search && {
                            name: {
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
                prisma.counter.count({
                    where: {
                        ...(search && {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        }),
                    },
                }),
            ]);

            return {
                counters,
                totalCount
            }
        })
})