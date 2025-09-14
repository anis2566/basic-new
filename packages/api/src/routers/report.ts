import { endOfDay, startOfDay } from "date-fns";

import { prisma } from "@workspace/db";

import { baseProcedure, createTRPCRouter } from "../init";
import { CLASSES, Months, PAYMENT_STATUS, STATUS, TEACHER_ADVANCE_STATUS } from "@workspace/utils/constant";

type GroupedData = {
    month: string;
    _sum: {
        amount: number | null;
    };
};

const sumGroupedData = (data: GroupedData[], month: string): number => {
    return data.find(item => item.month === month)?._sum.amount || 0;
};

const calculateTotal = (data: { month: string; total: number }[]): number => {
    return data.reduce((acc, curr) => acc + curr.total, 0);
};

export const reportRouter = createTRPCRouter({
    daily: baseProcedure
        .query(async () => {
            const startDate = startOfDay(new Date());
            const endDate = endOfDay(new Date());

            const [dailySalary, dailyAdmission, dailyOthers, dailyHouseRent, dailyUtility, dailyTeacherAdvance] = await Promise.all([
                prisma.salaryPayment.aggregate({
                    where: {
                        paidAt: {
                            gte: startDate,
                            lte: endDate,
                        },
                        paymentStatus: PAYMENT_STATUS.Paid,
                    },
                    _sum: {
                        amount: true,
                    },
                    _count: {
                        _all: true,
                    }
                }),
                prisma.admissionPayment.aggregate({
                    where: {
                        paidAt: {
                            gte: startDate,
                            lte: endDate,
                        },
                        paymentStatus: PAYMENT_STATUS.Paid,
                    },
                    _sum: {
                        amount: true,
                    },
                    _count: {
                        _all: true,
                    }
                }),
                prisma.otherPayment.aggregate({
                    where: {
                        updatedAt: {
                            gte: startDate,
                            lte: endDate,
                        },
                    },
                    _sum: {
                        amount: true,
                    },
                    _count: {
                        _all: true,
                    }
                }),
                prisma.housePayment.aggregate({
                    where: {
                        updatedAt: {
                            gte: startDate,
                            lte: endDate,
                        },
                    },
                    _sum: {
                        amount: true,
                    },
                    _count: {
                        _all: true,
                    }
                }),
                prisma.utilityPayment.aggregate({
                    where: {
                        updatedAt: {
                            gte: startDate,
                            lte: endDate,
                        },
                    },
                    _sum: {
                        amount: true,
                    },
                    _count: {
                        _all: true,
                    }
                }),
                prisma.teacherAdvance.aggregate({
                    where: {
                        updatedAt: {
                            gte: startDate,
                            lte: endDate,
                        },
                        status: TEACHER_ADVANCE_STATUS.Approved,
                    },
                    _sum: {
                        amount: true,
                    },
                    _count: {
                        _all: true,
                    }
                }),
            ]);

            return {
                dailySalary,
                dailyAdmission,
                dailyOthers,
                dailyHouseRent,
                dailyUtility,
                dailyTeacherAdvance,
            }
        }),
    accoundDashboard: baseProcedure
        .query(async () => {
            const currentMonth = Months[new Date().getMonth()]
            const lastMonth = Months[new Date().getMonth() - 1]

            const startDate = startOfDay(new Date());
            const endDate = endOfDay(new Date());

            const [thisMonthSalaryCount, thisMonthPaidSalaryCount, lastMonthSalaryCount, lastMonthPaidSalaryCount, totalSalaryCount, totalPaidSalaryCount, thisMonthSalaries, thisMonthPaidSalaries, lastMonthSalaries, lastMonthPaidSalaries, overallSalaries, overallPaidSalaries, todaySalaries] = await Promise.all([
                prisma.salaryPayment.count({
                    where: {
                        month: currentMonth,
                        status: STATUS.Present
                    }
                }),
                prisma.salaryPayment.count({
                    where: {
                        month: currentMonth,
                        status: STATUS.Present,
                        paymentStatus: PAYMENT_STATUS.Paid
                    }
                }),
                prisma.salaryPayment.count({
                    where: {
                        month: lastMonth,
                        status: STATUS.Present
                    }
                }),
                prisma.salaryPayment.count({
                    where: {
                        month: lastMonth,
                        status: STATUS.Present,
                        paymentStatus: PAYMENT_STATUS.Paid
                    }
                }),
                prisma.salaryPayment.count({
                    where: {
                        status: STATUS.Present
                    }
                }),
                prisma.salaryPayment.count({
                    where: {
                        status: STATUS.Present,
                        paymentStatus: PAYMENT_STATUS.Paid
                    }
                }),
                prisma.salaryPayment.groupBy({
                    by: ["className"],
                    where: {
                        month: currentMonth,
                        status: STATUS.Present,
                    },
                    _count: {
                        _all: true
                    }
                }),
                prisma.salaryPayment.groupBy({
                    by: ["className"],
                    where: {
                        month: currentMonth,
                        status: STATUS.Present,
                        paymentStatus: PAYMENT_STATUS.Paid
                    },
                    _count: {
                        _all: true
                    }
                }),
                prisma.salaryPayment.groupBy({
                    by: ["className"],
                    where: {
                        month: lastMonth,
                        status: STATUS.Present,
                    },
                    _count: {
                        _all: true
                    }
                }),
                prisma.salaryPayment.groupBy({
                    by: ["className"],
                    where: {
                        month: lastMonth,
                        status: STATUS.Present,
                        paymentStatus: PAYMENT_STATUS.Paid
                    },
                    _count: {
                        _all: true
                    }
                }),
                prisma.salaryPayment.groupBy({
                    by: ["className"],
                    where: {
                        status: STATUS.Present,
                    },
                    _count: {
                        _all: true
                    }
                }),
                prisma.salaryPayment.groupBy({
                    by: ["className"],
                    where: {
                        status: STATUS.Present,
                        paymentStatus: PAYMENT_STATUS.Paid
                    },
                    _count: {
                        _all: true
                    }
                }),
                prisma.salaryPayment.groupBy({
                    by: ["className"],
                    where: {
                        createdAt: {
                            gte: startDate,
                            lte: endDate,
                        },
                        status: STATUS.Present,
                        paymentStatus: PAYMENT_STATUS.Paid,
                    },
                    _count: {
                        _all: true
                    }
                }),
            ])

            const classes = Object.values(CLASSES)

            const thisMonthFormattedSalaries = classes.map(className => ({
                className,
                total: thisMonthSalaries.find(salary =>
                    salary.className === className
                )?._count._all || 0,
                paid: thisMonthPaidSalaries.find(salary =>
                    salary.className === className
                )?._count._all || 0
            }))


            const todayFormattedSalaries = classes.map(className => ({
                className,
                total: todaySalaries.find(salary =>
                    salary.className === className
                )?._count._all || 50,
            }))

            const lastMonthFormattedSalaries = classes.map(className => ({
                className,
                total: lastMonthSalaries.find(salary =>
                    salary.className === className
                )?._count._all || 0,
                paid: lastMonthPaidSalaries.find(salary =>
                    salary.className === className
                )?._count._all || 0
            }))

            const overallFormattedSalaries = classes.map(className => ({
                className,
                total: overallSalaries.find(salary =>
                    salary.className === className
                )?._count._all || 0,
                paid: overallPaidSalaries.find(salary =>
                    salary.className === className
                )?._count._all || 0
            }))

            return {
                thisMonthSalaryCount,
                thisMonthPaidSalaryCount,
                lastMonthSalaryCount,
                lastMonthPaidSalaryCount,
                totalSalaryCount,
                totalPaidSalaryCount,
                thisMonthSalaries: thisMonthFormattedSalaries,
                lastMonthSalaries: lastMonthFormattedSalaries,
                overallSalaries: overallFormattedSalaries,
                todaySalaries: todayFormattedSalaries
            }
        })
})