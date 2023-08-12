// HOW TO ENFORCE TYPESAFETY BEFORE THE REQUEST IS MADE
// designs the shape of the post request before it's sent

import { z } from "zod";

export const apiRequestValidator = z.object({ name: z.string() });

export type ApiRequest = z.infer<typeof apiRequestValidator>;

// typesafety for the response back from router to client
export const apiRequestResponse = z.object({
    error: z.string().optional(),
    data: z.string()
})