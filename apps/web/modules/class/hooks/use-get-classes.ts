import { parseAsString, parseAsInteger, useQueryStates } from "nuqs";

import { CONSTANTS } from "@workspace/utils";

export const useGetClasses = () => {
    return useQueryStates({
        search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
        level: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
        page: parseAsInteger
            .withDefault(CONSTANTS.DEFAULT_PAGE)
            .withOptions({ clearOnDefault: true }),
        limit: parseAsInteger
            .withDefault(CONSTANTS.DEFAULT_PAGE_SIZE)
            .withOptions({ clearOnDefault: true }),
        sort: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    });
};