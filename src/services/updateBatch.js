'use server';

import { POST } from "@/util/api";

export const updateBatch = async ( context ) => {
    
    const response = await POST('batch/update', context);

    return response.data

}