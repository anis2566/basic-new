// packages/api/cache.ts
export type CacheKey = (string | number | boolean)[];
export type CacheOptions = {
    revalidate?: number;
    tags?: string[];
};

type CacheImpl = <T extends (...args: any[]) => any>(
    fn: T,
    key: CacheKey,
    opts?: CacheOptions
) => T;

let cacheImpl: CacheImpl | null = null;

export const setCacheImpl = (impl: CacheImpl) => {
    cacheImpl = impl;
};

export const withCache = <T extends (...args: any[]) => any>(
    fn: T,
    key: CacheKey,
    opts?: CacheOptions
): T => {
    if (!cacheImpl) return fn; // fallback if not set
    return cacheImpl(fn, key, opts);
};
