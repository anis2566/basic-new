"use client";

import { Edit, Trash2 } from "lucide-react"

import { OtherPayment } from "@workspace/db"
import { ListActions } from "@workspace/ui/shared/list-actions"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"

import { ListActionButton } from "@/components/list-action-button"
import { ListActionLink } from "@/components/list-action-link";

import { useDeleteOtherPayment } from "@/hooks/use-payment";

interface OtherPaymentListProps {
    payments: OtherPayment[]
}

export const PaymentList = ({ payments }: OtherPaymentListProps) => {
    const { onOpen } = useDeleteOtherPayment();

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>Name</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Session</TableHead>
                    <TableHead>Month</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    payments.map((payment) => (
                        <TableRow key={payment.id}>
                            <TableCell>{payment.name}</TableCell>
                            <TableCell>{payment.amount}</TableCell>
                            <TableCell>{payment.session}</TableCell>
                            <TableCell>{payment.month}</TableCell>
                            <TableCell>
                                <ListActions>
                                    <ListActionLink
                                        title="Edit"
                                        href={`/income/other/edit/${payment.id}`}
                                        icon={Edit}
                                    />
                                    <ListActionButton
                                        title="Delete"
                                        icon={Trash2}
                                        onClick={() => onOpen(payment.id)}
                                    />
                                </ListActions>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}