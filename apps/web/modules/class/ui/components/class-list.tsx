"use client";

import { Edit, Trash2 } from "lucide-react"

import { ClassName } from "@workspace/db"
import { ListActions } from "@workspace/ui/shared/list-actions"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"

import { ListActionButton } from "@/components/list-action-button"
import { useDeleteResource } from "@/hooks/use-delete-modal";
import { ListActionLink } from "@/components/list-action-link";

interface ClassListProps {
    classes: ClassName[]
}

export const ClassList = ({ classes }: ClassListProps) => {
    const { onOpen } = useDeleteResource()

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>Name</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Subjects</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    classes.map((classItem) => (
                        <TableRow key={classItem.id}>
                            <TableCell>{classItem.name}</TableCell>
                            <TableCell>{classItem.level}</TableCell>
                            <TableCell>{classItem.position}</TableCell>
                            <TableCell>{5}</TableCell>
                            <TableCell>
                                <ListActions>
                                    <ListActionLink
                                        title="Edit"
                                        href={`/class/edit/${classItem.id}`}
                                        icon={Edit}
                                    />
                                    <ListActionButton
                                        title="Delete"
                                        icon={Trash2}
                                        onClick={onOpen}
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