'use server';

import { POST } from "@/util/api";

export const useSingin = async ( context ) => {
    
    const response = await POST('sign-in', context);

    return response.data

}