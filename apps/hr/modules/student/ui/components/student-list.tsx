"use client";

import { Edit, Eye, Trash2 } from "lucide-react"

import { Student } from "@workspace/db"
import { ListActions } from "@workspace/ui/shared/list-actions"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"

import { ListActionButton } from "@/components/list-action-button"
import { ListActionLink } from "@/components/list-action-link";

import { useDeleteStudent } from "@/hooks/use-student";

interface HouseStudentListProps {
    students: Student[]
}

export const StudentList = ({ students }: HouseStudentListProps) => {
    const { onOpen } = useDeleteStudent();

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>#ID</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Batch</TableHead>
                    <TableHead>F. Phone</TableHead>
                    <TableHead>M. Phone</TableHead>
                    <TableHead>Due</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    students.map((student) => (
                        <TableRow key={student.id}>
                            <TableCell>{student.studentId}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>{student.className}</TableCell>
                            <TableCell>Batch</TableCell>
                            <TableCell>{student.fPhone}</TableCell>
                            <TableCell>{student.mPhone}</TableCell>
                            <TableCell>3 Months</TableCell>
                            <TableCell>
                                <ListActions>
                                    <ListActionLink
                                        title="View"
                                        href={`/student/${student.id}`}
                                        icon={Eye}
                                    />
                                    <ListActionLink
                                        title="Edit"
                                        href={`/student/edit/${student.id}`}
                                        icon={Edit}
                                    />
                                    <ListActionButton
                                        title="Delete"
                                        icon={Trash2}
                                        onClick={() => onOpen(student.id)}
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