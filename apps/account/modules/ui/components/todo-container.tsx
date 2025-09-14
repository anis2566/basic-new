import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { TodoForm } from "./todo-form";
import { TodoList } from "./todo-list";

export const TodoContainer = () => {
    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card px-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs w-full overflow-hidden">
            <Card className="rounded-xs p-3 gap-y-3 w-full overflow-hidden">
                <CardHeader className="px-0">
                    <CardTitle>Todos</CardTitle>
                    <Separator />
                </CardHeader>
                <CardContent className="p-0 flex flex-col gap-y-3 w-full overflow-x-auto">
                    <TodoForm />
                    <Separator />
                    <TodoList />
                </CardContent>
            </Card>
        </div>
    )
};