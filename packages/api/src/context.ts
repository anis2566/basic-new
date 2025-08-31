export interface Context {
    userId?: string;
    // Add other context properties
}

// Generic context creator - can be adapted for different environments
export const createContext = async (opts?: {
    req?: Request;
    headers?: Record<string, string>;
}): Promise<Context> => {
    // Extract user from request headers, cookies, etc.
    // This is environment-agnostic
    return {
        userId: undefined, // Replace with actual user logic
    };
};