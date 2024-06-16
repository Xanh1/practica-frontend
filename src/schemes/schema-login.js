import { z } from "zod";

export const schemaLogin = z.object({
    username: z.string().min(1, { message: 'Enter your Username' }),
    password: z.string().min(1, { message: 'Enter your Password' })
});