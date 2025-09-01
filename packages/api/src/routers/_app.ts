import { createTRPCRouter } from '../init';
import { classRouter } from './class';

export const appRouter = createTRPCRouter({
    class: classRouter
});

export type AppRouter = typeof appRouter;