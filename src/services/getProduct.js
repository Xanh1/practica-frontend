'use server';

import { GET } from "@/util/api"

export const getProducts = async () => {

    const response = await GET('stock');

    return response.data;

}