import z from "zod";

import { prisma } from "@workspace/db";
import { TodoSchema } from "@workspace/utils/schema";
import { STATUS } from "@workspace/utils/constant";

import { baseProcedure, createTRPCRouter } from "../init";

export const todoRouter = createTRPCRouter({
    createOne: baseProcedure
        .input(TodoSchema)
        .mutation(async ({ input }) => {
            const { text } = input;

            try {
                await prisma.todo.create({
                    data: {
                        text
                    },
                });

                return { success: true, message: "Todo created" }
            } catch (error) {
                console.error("Error creating todo", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    markComplete: baseProcedure
        .input(z.object({
            id: z.string(),
        }))
        .mutation(async ({ input }) => {
            const { id } = input;

            try {
                const existingTodo = await prisma.todo.findUnique({
                    where: { id },
                });

                if (!existingTodo) {
                    return { success: false, message: "Todo not found" };
                }

                await prisma.todo.update({
                    where: { id },
                    data: {
                        status: STATUS.Completed
                    },
                });

                return { success: true, message: "Todo updated" }
            } catch (error) {
                console.error("Error updating todo", error);
                return { success: false, message: "Internal Server Error" }
            }
        }),
    deleteOne: baseProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            const todoId = input;

            try {
                const existingTodo = await prisma.todo.findUnique({
                    where: { id: todoId },
                });

                if (!existingTodo) {
                    return { success: false, message: "Todo not found" };
                }

                await prisma.todo.delete({
                    where: { id: todoId },
                });

                return { success: true, message: "Todo deleted" };
            } catch (error) {
                console.error("Error deleting todo", error);
                return { success: false, message: "Internal Server Error" };
            }
        }),
    getMany: baseProcedure
        .query(async () => {
            const todos = await prisma.todo.findMany({
                orderBy: {
                    createdAt: "desc"
                },
                take: 5
            })

            return {
                todos
            }
        })
})