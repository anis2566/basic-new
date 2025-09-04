import { createTRPCRouter } from '../init';

import { houseRouter } from './house';
import { roomRouter } from './room';
import { counterRouter } from './counter';

export const appRouter = createTRPCRouter({
    house: houseRouter,
    room: roomRouter,
    counter: counterRouter
});

export type AppRouter = typeof appRouter;