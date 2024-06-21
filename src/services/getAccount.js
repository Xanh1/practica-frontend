'use server';

import { GET } from "@/util/api"

export const getAccount = async (endpoint) => {

    const response = await GET(endpoint);

    return response.data;

}