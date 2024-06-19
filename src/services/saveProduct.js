'use server';

import { POST } from "@/util/api";

export const saveProduct = async ( context ) => {
    
    const response = await POST('product/create', context);

    return response.data

}