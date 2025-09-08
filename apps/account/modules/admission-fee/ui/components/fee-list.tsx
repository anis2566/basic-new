"use client";

import { AdmissionFee } from "@workspace/db"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"

interface FeeListProps {
    fees: AdmissionFee[]
}

export const FeeList = ({ fees }: FeeListProps) => {

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>Class</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    fees.map((fee) => (
                        <TableRow key={fee.id}>
                            <TableCell>{fee.className}</TableCell>
                            <TableCell>{fee.amount}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}