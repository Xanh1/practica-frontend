import { z } from "zod";

export const createSchemaBatch = (products) => {
    return z.object({
        product: z.enum(products, {
            errorMap: () => ({ message: 'Select a product' })
        }),
        price: z.string().transform((value) => parseFloat(value))
            .refine((value) => !isNaN(value), {
                message: 'Must be a number'
            }),
        stock: z.string().transform((value) => parseFloat(value))
            .refine((value) => !isNaN(value), {
                message: 'Must be a number'
            }),
        exp_date: z.string()
    });
}
