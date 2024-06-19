import { z } from "zod";

export const schemaProduct = z.object({
    name: z.string().min(1, { message: 'Enter a name' }),
    description: z.string().min(1, { message: 'Enter a description' })
});