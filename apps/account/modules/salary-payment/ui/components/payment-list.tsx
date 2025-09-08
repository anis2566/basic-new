"use client";

import { format } from "date-fns"

import { SalaryPayment } from "@workspace/db"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"
import { Badge } from "@workspace/ui/components/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"

interface SalaryPaymentWithRelation extends SalaryPayment {
    student: {
        name: string;
        imageUrl: string | null;
        studentId: number;
        className: string;
    }
}

interface AdmissionPaymentListProps {
    payments: SalaryPaymentWithRelation[]
}

export const PaymentList = ({ payments }: AdmissionPaymentListProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>#ID</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Month</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Paid At</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>P. Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    payments.map((payment) => (
                        <TableRow key={payment.id}>
                            <TableCell>{payment.student.studentId}</TableCell>
                            <TableCell>
                                <Avatar>
                                    <AvatarImage src={payment.student.imageUrl || ""} />
                                    <AvatarFallback>{payment.student.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </TableCell>
                            <TableCell>{payment.student.name}</TableCell>
                            <TableCell>{payment.student.className}</TableCell>
                            <TableCell>{payment.month}</TableCell>
                            <TableCell>{payment.amount}</TableCell>
                            <TableCell>{payment.method}</TableCell>
                            <TableCell>{format(payment.paidAt || new Date(), "dd MMM yyyy, hh:mm a")}</TableCell>
                            <TableCell>
                                <Badge variant="secondary" className="rounded-xs">{payment.status}</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge variant={payment.paymentStatus === "Unpaid" ? "destructive" : "default"}>{payment.paymentStatus}</Badge>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}