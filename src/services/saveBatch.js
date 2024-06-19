'use server';

import { POST } from "@/util/api";

export const saveBatch = async ( context ) => {
    
    const response = await POST('batch/create', context);

    return response.data

}