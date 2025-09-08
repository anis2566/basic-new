"use client";

import { Edit, Trash2 } from "lucide-react"

import { SalaryFee } from "@workspace/db"
import { ListActions } from "@workspace/ui/shared/list-actions"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"

import { ListActionButton } from "@/components/list-action-button"
import { ListActionLink } from "@/components/list-action-link";

import { useDeleteSalaryFee } from "@/hooks/use-salary-fee";

interface FeeListProps {
    fees: SalaryFee[]
}

export const FeeList = ({ fees }: FeeListProps) => {
    const { onOpen } = useDeleteSalaryFee();

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>Class</TableHead>
                    <TableHead>Group</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    fees.map((fee) => (
                        <TableRow key={fee.id}>
                            <TableCell>{fee.className}</TableCell>
                            <TableCell>{fee.group}</TableCell>
                            <TableCell>{fee.amount}</TableCell>
                            <TableCell>
                                <ListActions>
                                    <ListActionLink
                                        title="Edit"
                                        href={`/fee/salary/edit/${fee.id}`}
                                        icon={Edit}
                                    />
                                    <ListActionButton
                                        title="Delete"
                                        icon={Trash2}
                                        onClick={() => onOpen(fee.id)}
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