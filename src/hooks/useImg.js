'use server';

import { GET } from "@/util/api";

export const useImg = async ( url ) => {
    
    const response = await GET( url );

    return response

}