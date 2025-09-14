"use client";

import { Teacher } from "@workspace/db"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"

import { Badge } from "@workspace/ui/components/badge";
import { TEACHER_STATUS } from "@workspace/utils/constant";

interface TeacherListProps {
    teachers: Teacher[]
}

export const TeacherList = ({ teachers }: TeacherListProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>ID</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
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
                                <Badge variant={teacher.status === TEACHER_STATUS.Present ? "default" : "destructive"}>{teacher.status}</Badge>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}