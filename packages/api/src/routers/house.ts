import z from "zod";

import { prisma } from "@workspace/db";
import { HouseSchema } from "@workspace/utils/schema";

import { baseProcedure, createTRPCRouter } from "../init";

export const houseRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(HouseSchema)
        .mutation(async ({ input }) => {
            const { name, roomCount } = input;

            try {
                const existingHouse = await prisma.house.findFirst({
                    where: { name },
                })

                if (existingHouse) {
                    return { success: false, message: "House already exists" }
                }

                await prisma.house.create({
                    data: {
                        name,
                        roomCount: Number(roomCount)
                    },
                });

                return { success: true, message: "House created" }
            } catch (error) {
                console.error("Error creating house", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    updateOne: baseProcedure
        .input(z.object({
            ...HouseSchema.shape,
            id: z.string()
        }))
        .mutation(async ({ input }) => {
            const { id, name, roomCount } = input;

            try {
                const existingHouse = await prisma.house.findUnique({
                    where: { id },
                });

                if (!existingHouse) {
                    return { success: false, message: "House not found" };
                }

                await prisma.house.update({
                    where: { id },
                    data: {
                        name,
                        roomCount: Number(roomCount)
                    },
                });

                return { success: true, message: "House updated" }
            } catch (error) {
                console.error("Error updating house", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    deleteOne: baseProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const houseId = input;

            try {
                const existingHouse = await prisma.house.findUnique({
                    where: { id: houseId },
                });

                if (!existingHouse) {
                    return { success: false, message: "House not found" };
                }

                await prisma.house.delete({
                    where: { id: houseId },
                });

                return { success: true, message: "House deleted" };
            } catch (error) {
                console.error("Error deleting house", error);
                return { success: false, message: "Internal Server Error" };
            }
        }),
    forSelect: baseProcedure
        .input(z.object({
            query: z.string().nullish()
        }))
        .query(async ({ input }) => {
            const { query } = input;

            const housess = await prisma.house.findMany({
                where: {
                    ...(query && {
                        name: {
                            contains: query,
                            mode: "insensitive",
                        },
                    })
                },
                select: {
                    id: true,
                    name: true
                }
            })

            return housess
        }),
    getOne: baseProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const classId = input;

            const houseData = await prisma.house.findUnique({
                where: { id: classId },
            });

            if (!houseData) {
                throw new Error("House not found");
            }

            return houseData;
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

            const [houses, totalCount] = await Promise.all([
                prisma.house.findMany({
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
                prisma.house.count({
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
                houses,
                totalCount
            }
        })
})