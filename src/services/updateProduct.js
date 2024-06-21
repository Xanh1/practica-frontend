'use server';

import { POST } from "@/util/api";

export const updateProduct = async ( context ) => {
    
    const response = await POST('product/update', context);

    return response.data

}