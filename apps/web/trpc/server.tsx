import 'server-only';

import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import { cache } from 'react';
import { appRouter, createContext } from '@workspace/api';
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

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

export const caller = appRouter.createCaller(await createTRPCContext());

// Helper components and functions
export function HydrateClient({ children }: { children: React.ReactNode }) {
    const queryClient = getQueryClient();
    return (
        <HydrationBoundary state={dehydrate(queryClient)} >
            {children}
        </HydrationBoundary>
    );
}

export function prefetch<T extends any>(queryOptions: T) {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(queryOptions);
}