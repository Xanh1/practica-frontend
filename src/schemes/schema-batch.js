import { z } from "zod";

export const schemaBatch = z.object({
    price: z.string()
        .min(1, { message: 'Enter a price' })
        .regex(/^\d+(\.\d{1,2})?$/, { message: 'Must be a number (decimal or integer)' }),
    stock: z.string()
        .min(1, { message: 'Enter a stock' })
        .regex(/^\d+$/, { message: 'Must be an integer' })
});