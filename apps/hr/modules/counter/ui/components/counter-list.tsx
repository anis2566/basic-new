"use client";

import { Edit, Trash2 } from "lucide-react"

import { Counter } from "@workspace/db"
import { ListActions } from "@workspace/ui/shared/list-actions"
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@workspace/ui/components/table"

import { ListActionButton } from "@/components/list-action-button"
import { ListActionLink } from "@/components/list-action-link";

import { useDeleteCounter } from "@/hooks/use-counter";

interface HouseListProps {
    counters: Counter[]
}

export const CounterList = ({ counters }: HouseListProps) => {
    const { onOpen } = useDeleteCounter();

    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-background/60">
                    <TableHead>Name</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    counters.map((counter) => (
                        <TableRow key={counter.id}>
                            <TableCell>{counter.name}</TableCell>
                            <TableCell>{counter.value}</TableCell>
                            <TableCell>
                                <ListActions>
                                    <ListActionLink
                                        title="Edit"
                                        href={`/counter/edit/${counter.id}`}
                                        icon={Edit}
                                    />
                                    <ListActionButton
                                        title="Delete"
                                        icon={Trash2}
                                        onClick={() => onOpen(counter.id)}
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