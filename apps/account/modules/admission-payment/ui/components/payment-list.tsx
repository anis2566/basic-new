"use client";

import Link from "next/link";

import { AdmissionPayment } from "@workspace/db"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"
import { Badge } from "@workspace/ui/components/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

interface AdmissionPaymentWithRelation extends AdmissionPayment {
    student: {
        name: string;
        imageUrl: string | null;
        studentId: number;
        className: string;
    }
}

interface AdmissionPaymentListProps {
    payments: AdmissionPaymentWithRelation[]
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
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>P. Status</TableHead>
                    <TableHead>
                        Action
                    </TableHead>
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
                            <TableCell>{payment.amount}</TableCell>
                            <TableCell>{payment.method}</TableCell>
                            <TableCell>
                                <Badge variant="secondary" className="rounded-xs">{payment.status}</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge variant={payment.paymentStatus === "Unpaid" ? "destructive" : "default"}>{payment.paymentStatus}</Badge>
                            </TableCell>
                            <TableCell>
                                <Button asChild variant="outline" size="sm" className={cn("hidden max-w-fit", payment.paymentStatus === "Unpaid" && "flex")}>
                                    <Link href={`/income/admission/${payment.id}`} prefetch>Pay now</Link>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}