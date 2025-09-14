"use client";

import { Edit, Eye, Trash2 } from "lucide-react"

import { Student } from "@workspace/db"
import { ListActions } from "@workspace/ui/shared/list-actions"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"

import { ListActionButton } from "@/components/list-action-button"
import { ListActionLink } from "@/components/list-action-link";

interface HouseStudentListProps {
    students: Student[]
}

export const StudentList = ({ students }: HouseStudentListProps) => {
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
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}