"use client";

import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTRPC } from "@/trpc/client";

import { BatchSchema, BatchSchemaType, RoomSchema, RoomSchemaType } from "@workspace/utils/schema"
import { CLASSES, LEVEL, timeSlots } from "@workspace/utils/constant"

import { FormCardWrapper } from "@workspace/ui/shared/form-card-wrapper"
import { FormInput } from "@workspace/ui/shared/form-input";
import { FormSelect } from "@workspace/ui/shared/form-select";
import { FormMultiSelect } from "@workspace/ui/shared/form-multi-select";
import { ButtonState, LoadingButton } from "@workspace/ui/shared/loading-button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@workspace/ui/components/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select";
import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Checkbox } from "@workspace/ui/components/checkbox"
import { MultiSelect } from "@workspace/ui/components/multi-select";

export const BatchFormView = () => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');
    const [selectedRoom, setSelectedRoom] = useState<string>("");
    const [searchRoom, setSearchRoom] = useState<string>("");
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    const [classTimes, setClassTimes] = useState<string[]>([]);
    const [open, setOpen] = useState(false);

    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()

    const { data: rooms } = useQuery(trpc.room.forSelect.queryOptions({ query: searchRoom }))

    const handleRoomChange = (value: string) => {
        const formValue = form.getValues("roomId");

        if (formValue === value) {
            form.setValue("roomId", "");
            setSelectedRoom("");
            setAvailableTimes([]);
            setOpen(false);
        } else {
            form.setValue("roomId", value);
            const room = rooms?.find((room) => room.id === value);
            setSelectedRoom(room?.name?.toString() || "");
            setAvailableTimes(room?.availableTimes || []);
            setOpen(false);
        }
    };

    const form = useForm<BatchSchemaType>({
        resolver: zodResolver(BatchSchema),
        defaultValues: {
            name: '',
            className: '',
            capacity: "",
            level: '',
            roomId: '',
            time: [],
            classTime: []
        }
    })

    const onSubmit = (data: BatchSchemaType) => {
        console.log(data)
        setButtonState('loading');
        // createRoom(data)
    }

    let isPending = false;
    let isLoading = false;

    return (
        <FormCardWrapper
            title="Set Up Your Batch"
            description="Enter the batch information to get started quickly."
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormInput
                        form={form}
                        name="name"
                        label="Name"
                        type="text"
                        disabled={isPending}
                    />
                    <FormSelect
                        form={form}
                        name="className"
                        label="Class"
                        placeholder="Select class"
                        options={Object.values(CLASSES).map((house) => ({ label: house, value: house }))}
                        disabled={isPending}
                    />
                    <FormInput
                        form={form}
                        name="capacity"
                        label="Capacity"
                        type="number"
                        disabled={isPending}
                    />
                    <FormSelect
                        form={form}
                        name="level"
                        label="Level"
                        placeholder="Select level"
                        options={Object.values(LEVEL).map((house) => ({ label: house, value: house }))}
                        disabled={isPending}
                    />
                    <FormField
                        control={form.control}
                        name="roomId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Room</FormLabel>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <FormControl>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="flex justify-start w-full rounded-xs shadow-none dark:bg-background dark:hover:bg-background"
                                                disabled={isPending}
                                            >
                                                {selectedRoom ? selectedRoom : "Select room"}
                                            </Button>
                                        </PopoverTrigger>
                                    </FormControl>
                                    <PopoverContent
                                        className={cn("w-auto min-w-[400px] rounded-xs")}
                                    >
                                        <div className="space-y-4">
                                            <Input
                                                type="search"
                                                placeholder="Search room"
                                                className="w-full bg-background dark:bg-background shadow-none"
                                                value={searchRoom}
                                                onChange={(e) => setSearchRoom(e.target.value)}
                                            />

                                            <div className="space-y-2">
                                                {isLoading && (
                                                    <div className="flex items-center justify-center">
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                    </div>
                                                )}

                                                {!isLoading && rooms?.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className={cn(
                                                            "flex justify-between items-center hover:bg-muted/80 cursor-pointer p-2 rounded-xs",
                                                            field.value === item.id && "bg-muted"
                                                        )}
                                                    >
                                                        <Label
                                                            className="flex flex-1 items-center gap-x-2"
                                                            htmlFor={String(item.id)}
                                                        >
                                                            <span
                                                                className={cn("text-sm truncate")}
                                                            >
                                                                {item.name}
                                                            </span>
                                                        </Label>

                                                        <Checkbox
                                                            checked={field.value === item.id}
                                                            id={String(item.id)}
                                                            onCheckedChange={() => {
                                                                handleRoomChange(item.id)
                                                            }}
                                                        />
                                                    </div>
                                                ))}

                                                {!isLoading && (!rooms || rooms.length === 0) && (
                                                    <div className="text-center text-muted-foreground py-4">
                                                        No items found
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Time</FormLabel>
                                <FormControl>
                                    <MultiSelect
                                        options={availableTimes.map((time) => ({ label: time, value: time }))}
                                        selected={field.value}
                                        onChange={value => {
                                            field.onChange(value);
                                            setClassTimes(value);
                                        }}
                                        defaultValue={field.value}
                                        placeholder="Select time"
                                        variant="inverted"
                                        animation={2}
                                        maxCount={3}
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="classTime"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Class Time</FormLabel>
                                <FormControl>
                                    <MultiSelect
                                        options={classTimes.map((time) => ({ label: time, value: time }))}
                                        selected={field.value}
                                        onChange={value => {
                                            field.onChange(value);
                                            setClassTimes(value);
                                        }}
                                        defaultValue={field.value}
                                        placeholder="Select class time"
                                        variant="inverted"
                                        animation={2}
                                        maxCount={3}
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <LoadingButton
                        type="submit"
                        onClick={form.handleSubmit(onSubmit)}
                        loadingText="Saving..."
                        successText="Saved!"
                        errorText={errorText || "Failed"}
                        state={buttonState}
                        onStateChange={setButtonState}
                        className="w-full md:w-auto"
                        icon={Send}
                    >
                        Save
                    </LoadingButton>
                </form>
            </Form>
        </FormCardWrapper>
    )
}