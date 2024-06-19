'use server';

import { GET } from "@/util/api"

export const getBatches = async () => {

    const response = await GET('stock');

    return response.data;

}