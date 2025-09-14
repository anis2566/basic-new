"use client";

import { format } from "date-fns";
import { Edit } from "lucide-react";

import { TeacherAdvance } from "@workspace/db"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"
import { ListActions } from "@workspace/ui/shared/list-actions";
import { ListActionLink } from "@/components/list-action-link";
import { Badge } from "@workspace/ui/components/badge";
import { TEACHER_ADVANCE_STATUS } from "@workspace/utils/constant";

interface TeacherAdvanceWithRealtion extends TeacherAdvance {
    teacher: {
        name: string
        imageUrl: string | null
        teacherId: number
    }
}

interface UtilityPaymentListProps {
    advances: TeacherAdvanceWithRealtion[]
}

export const AdvanceList = ({ advances }: UtilityPaymentListProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>#ID</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Month</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>
                        Actions
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    advances.map((advance) => (
                        <TableRow key={advance.id}>
                            <TableCell>{advance.teacher.teacherId}</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>{advance.teacher.name}</TableCell>
                            <TableCell>{format(advance.createdAt, "dd MMM yyyy hh:mm a")}</TableCell>
                            <TableCell>{advance.month}</TableCell>
                            <TableCell>{advance.amount}</TableCell>
                            <TableCell>
                                <Badge variant={advance.status === TEACHER_ADVANCE_STATUS.Pending ? "outline" : advance.status === TEACHER_ADVANCE_STATUS.Approved ? "default" : "destructive"}>{advance.status}</Badge>
                            </TableCell>
                            <TableCell>
                                <ListActions>
                                    <ListActionLink
                                        title="Edit"
                                        href={`/expense/advance/edit/${advance.id}`}
                                        icon={Edit}
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