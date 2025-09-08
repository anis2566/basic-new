"use server";

import { unstable_cache } from "next/cache";

import { setCacheImpl } from "@workspace/api"

setCacheImpl((fn, key, opts) =>
    unstable_cache(fn, key.map(String), opts)
);
