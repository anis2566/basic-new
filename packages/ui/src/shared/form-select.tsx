import { FieldValues, Path, Controller } from "react-hook-form"

import { FormItem, FormLabel, FormControl, FormMessage } from "../components/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/select"

interface FormInputProps<T extends FieldValues> {
    form: any
    name: Path<T>
    label: string
    disabled?: boolean
    placeholder: string
    options: string[]
}

export function FormSelect<T extends FieldValues>({
    form,
    name,
    label,
    placeholder,
    options,
    disabled = false
}: FormInputProps<T>) {
    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field, fieldState }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
                        <FormControl>
                            <SelectTrigger className="w-full rounded-xs shadow-none dark:bg-background dark:hover:bg-background">
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-xs">
                            {
                                options.map((option) => (
                                    <SelectItem key={option} value={option} className="rounded-xs">{option}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
            )}
        />
    )
}