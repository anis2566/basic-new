import 'server-only';

import "@/lib/cache";

import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import { cache, Suspense } from 'react';
import {
    QueryClient,
    dehydrate,
    HydrationBoundary,
} from '@tanstack/react-query';
import { ErrorBoundary } from "react-error-boundary";

import { appRouter, createContext } from '@workspace/api';

const makeQueryClient = () => new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30 * 1000,
        },
    },
});

export const getQueryClient = cache(makeQueryClient);

// Adapt the shared context creator for Next.js
const createTRPCContext = cache(async () => {
    return await createContext({
        // Pass Next.js specific context here
        // headers: headers(), etc.
    });
});

export const trpc = createTRPCOptionsProxy({
    ctx: createTRPCContext,
    router: appRouter,
    queryClient: getQueryClient,
});

// Create caller function instead of top-level await
export const getCaller = cache(async () => {
    const context = await createTRPCContext();
    return appRouter.createCaller(context);
});

// Helper components and functions
export function HydrateClient({ children, queryClient }: { children: React.ReactNode, queryClient: QueryClient }) {
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary fallback={<p>Error</p>}>
                    {children}
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>
    );
}