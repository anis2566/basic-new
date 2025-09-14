"use client";

import { Edit, Trash2 } from "lucide-react"

import { AdmissionFee } from "@workspace/db"
import { ListActions } from "@workspace/ui/shared/list-actions"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"

import { ListActionButton } from "@/components/list-action-button"
import { ListActionLink } from "@/components/list-action-link";

import { useDeleteAdmissionFee } from "@/hooks/use-admission-fee";

interface FeeListProps {
    fees: AdmissionFee[]
}

export const FeeList = ({ fees }: FeeListProps) => {
    const { onOpen } = useDeleteAdmissionFee();

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>Class</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    fees.map((fee) => (
                        <TableRow key={fee.id}>
                            <TableCell>{fee.className}</TableCell>
                            <TableCell>{fee.amount}</TableCell>
                            <TableCell>
                                <ListActions>
                                    <ListActionLink
                                        title="Edit"
                                        href={`/fee/admission/edit/${fee.id}`}
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