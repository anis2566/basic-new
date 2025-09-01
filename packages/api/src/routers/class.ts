import { prisma } from "@workspace/db";

import { baseProcedure, createTRPCRouter } from "../init";
import { ClassSchema } from "../schema";

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
})