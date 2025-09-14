import { createTRPCRouter } from '../init';

import { houseRouter } from './house';
import { roomRouter } from './room';
import { counterRouter } from './counter';
import { admissionFeeRouter } from './admission-fee';
import { salaryFeeRouter } from './salary-fee';
import { studentRouter } from './student';
import { admissionPaymentRouter } from './admission-payment';
import { salaryPaymentRouter } from './salary-payment';
import { otherPaymentRouter } from './other-payment';
import { housePaymentRouter } from './house-payment';
import { utilityPaymentRouter } from './utility-payment';
import { teacherRouter } from './teacher';
import { teacherAdvanceRouter } from './teacher-advance';
import { reportRouter } from './report';
import { todoRouter } from './todo';

export const appRouter = createTRPCRouter({
    house: houseRouter,
    room: roomRouter,
    counter: counterRouter,
    admissionFee: admissionFeeRouter,
    salaryFee: salaryFeeRouter,
    student: studentRouter,
    admissionPayment: admissionPaymentRouter,
    salaryPayment: salaryPaymentRouter,
    otherPayment: otherPaymentRouter,
    housePayment: housePaymentRouter,
    utilityPayment: utilityPaymentRouter,
    teacher: teacherRouter,
    teacherAdvance: teacherAdvanceRouter,
    report: reportRouter,
    todo: todoRouter
});

export type AppRouter = typeof appRouter;