import { Edit, Trash2 } from "lucide-react"

import { ClassName } from "@workspace/db"
import { ListActions } from "@workspace/ui/shared/list-actions"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"

import { ListActionButton } from "@/components/list-action-button"

interface ClassListProps {
    classes: ClassName[]
}

export const ClassList = ({ classes }: ClassListProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>Name</TableHead>
                    <TableHead>Level</TableHead>
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
                            <TableCell>{5}</TableCell>
                            <TableCell>
                                <ListActions>
                                    <ListActionButton
                                        type="link"
                                        title="Edit"
                                        href={`/class/edit/${classItem.id}`}
                                        icon={Edit}
                                    />
                                    <ListActionButton
                                        type="button"
                                        title="Delete"
                                        icon={Trash2}
                                        onClick={() => { }}
                                        buttonVariant="danger"
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