import { FieldValues, Path, Controller } from "react-hook-form"

import { FormControl, FormItem, FormLabel, FormMessage } from "../components/form"
import { RadioGroup, RadioGroupItem } from "../components/radio-group"

import { cn } from "../lib/utils"

interface FormRadioProps<T extends FieldValues> {
    form: any
    name: Path<T>
    label: string
    disabled?: boolean
    direction?: "row" | "column"
    options: {
        label: string
        value: string
    }[]
}

export function FormRadio<T extends FieldValues>({
    form,
    name,
    label,
    options,
    disabled = false,
    direction = "row"
}: FormRadioProps<T>) {
    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field, fieldState }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className={cn(
                                "gap-5 flex",
                                direction === "row" ? "flex-row" : "flex-col"
                            )}
                            disabled={disabled}
                        >
                            {
                                options.map((option) => (
                                    <FormItem
                                        key={option.value}
                                        className="flex items-center gap-x-2"
                                    >
                                        <FormControl>
                                            <RadioGroupItem value={option.value} />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            {option.label}
                                        </FormLabel>
                                    </FormItem>
                                ))
                            }
                        </RadioGroup>
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
            )}
        />
    )
}