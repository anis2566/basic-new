"use client";

import { Edit, Eye, Trash2 } from "lucide-react"

import { Teacher } from "@workspace/db"
import { ListActions } from "@workspace/ui/shared/list-actions"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"
import { Badge } from "@workspace/ui/components/badge";
import { TEACHER_STATUS } from "@workspace/utils/constant";

import { ListActionButton } from "@/components/list-action-button"
import { ListActionLink } from "@/components/list-action-link";

import { useDeleteTeacher } from "@/hooks/use-teacher";

interface TeacherListProps {
    teachers: Teacher[]
}

export const TeacherList = ({ teachers }: TeacherListProps) => {
    const { onOpen } = useDeleteTeacher();

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>ID</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>A. Days</TableHead>
                    <TableHead>A. Times</TableHead>
                    <TableHead>B. Times</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    teachers.map((teacher) => (
                        <TableRow key={teacher.id}>
                            <TableCell>{teacher.teacherId}</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>{teacher.name}</TableCell>
                            <TableCell>{teacher.phone}</TableCell>
                            <TableCell>
                                {teacher.availableDays.length / 2} days
                            </TableCell>
                            <TableCell>
                                {teacher.availableTimes.length / 2} hours
                            </TableCell>
                            <TableCell>
                                {teacher.bookedSlots.length / 2} hours
                            </TableCell>
                            <TableCell>
                                <Badge variant={teacher.status === TEACHER_STATUS.Present ? "default" : "destructive"}>{teacher.status}</Badge>
                            </TableCell>
                            <TableCell>
                                <ListActions>
                                    <ListActionLink
                                        title="View"
                                        href={`/teacher/${teacher.id}`}
                                        icon={Eye}
                                    />
                                    <ListActionLink
                                        title="Edit"
                                        href={`/teacher/edit/${teacher.id}`}
                                        icon={Edit}
                                    />
                                    <ListActionButton
                                        title="Delete"
                                        icon={Trash2}
                                        onClick={() => onOpen(teacher.id)}
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