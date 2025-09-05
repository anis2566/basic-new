"use client"

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@workspace/ui/components/alert-dialog"
import { ButtonState, LoadingButton } from "@workspace/ui/shared/loading-button";

import { useDeleteSalaryFee } from "@/hooks/use-salary-fee";
import { useGetFees } from "../../hooks/use-get-fees";

export const DeleteSalaryFeeModal = () => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const [errorText, setErrorText] = useState<string>('');

    const { isOpen, feeId, onClose } = useDeleteSalaryFee();
    const trpc = useTRPC()
    const queryClient = useQueryClient()

    const [filters] = useGetFees()

    const { mutate: deleteFee } = useMutation(
        trpc.salaryFee.deleteOne.mutationOptions({
            onError: (err) => {
                setErrorText(err.message);
                setButtonState('error');
                toast.error(err.message);
            },
            onSuccess: async (data) => {
                if (!data.success) {
                    setButtonState('error');
                    setErrorText(data.message);
                    toast.error(data.message);
                    return;
                }
                setButtonState('success');
                toast.success(data.message);
                queryClient.invalidateQueries(trpc.salaryFee.getMany.queryOptions({ ...filters }))
                onClose();
            },
        })
    );

    const handleDelete = () => {
        deleteFee(feeId);
    }

    return (
        <AlertDialog open={isOpen && !!feeId} onOpenChange={onClose}>
            <AlertDialogContent className="rounded-xs">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your fee
                        and remove your data from servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <LoadingButton
                        type="submit"
                        onClick={handleDelete}
                        loadingText="Deleting..."
                        successText="Deleted!"
                        errorText={errorText || "Failed"}
                        state={buttonState}
                        onStateChange={setButtonState}
                        className="w-full md:w-auto"
                        variant="destructive"
                        icon={Send}
                    >
                        Delete
                    </LoadingButton>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}