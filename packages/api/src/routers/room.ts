import z from "zod";

import { prisma } from "@workspace/db";
import { RoomSchema } from "@workspace/utils/schema";

import { baseProcedure, createTRPCRouter } from "../init";

export const roomRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(RoomSchema)
        .mutation(async ({ input }) => {
            const { name, capacity, availableTimes, houseId } = input;

            try {
                const [room, house] = await Promise.all([
                    prisma.room.findFirst({
                        where: {
                            name,
                            houseId
                        }
                    }),
                    prisma.house.findUnique({
                        where: {
                            id: houseId
                        },
                        select: {
                            roomCount: true,
                            _count: {
                                select: {
                                    rooms: true
                                }
                            }
                        }
                    })
                ])

                if (room) {
                    return { success: false, message: "Room already exists" }
                }

                if (!house) {
                    return { success: false, message: "House not found" }
                }

                const isHouseFull = house?._count.rooms >= house?.roomCount;

                if (isHouseFull) {
                    return { success: false, message: "House is full" }
                }

                await prisma.room.create({
                    data: {
                        name,
                        capacity: Number(capacity),
                        availableTimes,
                        houseId
                    },
                });

                return { success: true, message: "Room created" }
            } catch (error) {
                console.error("Error creating room", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    updateOne: baseProcedure
        .input(z.object({
            ...RoomSchema.shape,
            id: z.string()
        }))
        .mutation(async ({ input }) => {
            const { id, name, capacity, availableTimes, houseId } = input;

            try {
                const existingRoom = await prisma.room.findUnique({
                    where: { id },
                });

                if (!existingRoom) {
                    return { success: false, message: "Room not found" };
                }

                await prisma.room.update({
                    where: { id },
                    data: {
                        name,
                        capacity: Number(capacity),
                        availableTimes,
                        houseId
                    },
                });

                return { success: true, message: "Room updated" }
            } catch (error) {
                console.error("Error updating room", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    deleteOne: baseProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const roomId = input;

            try {
                const existingRoom = await prisma.room.findUnique({
                    where: { id: roomId },
                });

                if (!existingRoom) {
                    return { success: false, message: "Room not found" };
                }

                await prisma.room.delete({
                    where: { id: roomId },
                });

                return { success: true, message: "Room deleted" };
            } catch (error) {
                console.error("Error deleting room", error);
                return { success: false, message: "Internal Server Error" };
            }
        }),
    getOne: baseProcedure
        .input(z.string())
        .query(async ({ input }) => {
            const roomId = input;

            const roomData = await prisma.room.findUnique({
                where: { id: roomId },
            });

            if (!roomData) {
                throw new Error("Room not found");
            }

            return roomData;
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

            const [rooms, totalCount] = await Promise.all([
                prisma.room.findMany({
                    where: {
                        ...(search && {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        }),
                    },
                    include: {
                        house: {
                            select: {
                                name: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: sort === "asc" ? "asc" : "desc",
                    },
                    take: limit,
                    skip: (page - 1) * limit,

                }),
                prisma.room.count({
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
                rooms,
                totalCount
            }
        })
})