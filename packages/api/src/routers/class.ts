import z from "zod";

import { prisma } from "@workspace/db";
import { ClassSchema } from "@workspace/utils/schema"

import { baseProcedure, createTRPCRouter } from "../init";
import { withCache } from "../cache";

export const getStats = withCache(
    async () => {
        console.log("Fetching class stats...");
        const stats = await Promise.all([
            prisma.className.count(),
            prisma.className.count({ where: { level: "Primary" } }),
            prisma.className.count({ where: { level: "Secondary" } }),
            prisma.className.count({ where: { level: "HigherSecondary" } }),
        ]);

        return {
            total: stats[0] || 0,
            primary: stats[1] || 0,
            secondary: stats[2] || 0,
            higherSecondary: stats[3] || 0,
        };
    },
    ["class-stats-cache"],
    { revalidate: 3600 }
);

export const classRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(ClassSchema)
        .mutation(async ({ input }) => {
            const { name, level, position } = input;

            try {
                const existingClass = await prisma.className.findUnique({
                    where: { name },
                })

                if (existingClass) {
                    return { success: false, message: "Class already exists" }
                }

                await prisma.className.create({
                    data: {
                        name,
                        level,
                        position: Number(position)
                    },
                });

                return { success: true, message: "Class created" }
            } catch (error) {
                console.error("Error creating class", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    getMany: baseProcedure
        .input(
            z.object({
                page: z.number(),
                limit: z.number().min(1).max(100),
                sort: z.string().nullish(),
                search: z.string().nullish(),
                level: z.string().nullish(),
            })
        )
        .query(async ({ input }) => {
            const { page, limit, sort, search, level } = input;

            const [classes, totalCount] = await Promise.all([
                prisma.className.findMany({
                    where: {
                        ...(search && {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        }),
                        ...(level && { level }),
                    },
                    include: {
                        _count: {
                            select: {
                                subjects: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: sort === "asc" ? "asc" : "desc",
                    },
                    take: limit,
                    skip: (page - 1) * limit,

                }),
                prisma.className.count({
                    where: {
                        ...(search && {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        }),
                        ...(level && { level }),
                    },
                }),
            ]);

            return {
                stats: {
                    total: 0,
                    primary: 0,
                    secondary: 0,
                    higherSecondary: 0,
                },
                classes,
                totalCount
            }
        })
})