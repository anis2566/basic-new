import { createTRPCRouter } from '../init';

import { houseRouter } from './house';
import { roomRouter } from './room';
import { counterRouter } from './counter';
import { admissionFeeRouter } from './admission-fee';
import { salaryFeeRouter } from './salary-fee';

export const appRouter = createTRPCRouter({
    house: houseRouter,
    room: roomRouter,
    counter: counterRouter,
    admissionFee: admissionFeeRouter,
    salaryFee: salaryFeeRouter
});

export type AppRouter = typeof appRouter;