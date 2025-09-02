import { parseAsString, parseAsInteger, createLoader } from "nuqs/server";

import { CONSTANTS } from "@workspace/utils";

const filterParmas = {
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    level: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    page: parseAsInteger
        .withDefault(CONSTANTS.DEFAULT_PAGE)
        .withOptions({ clearOnDefault: true }),
    limit: parseAsInteger
        .withDefault(CONSTANTS.DEFAULT_PAGE_SIZE)
        .withOptions({ clearOnDefault: true }),
    sort: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
};

export const getClasses = createLoader(filterParmas);