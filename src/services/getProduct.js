'use server';

import { GET } from "@/util/api"

export const getProduct = async (endPoint) => {

    const response = await GET(endPoint);

    return response.data;

}