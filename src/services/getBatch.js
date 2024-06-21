'use server';

import { GET } from "@/util/api"

export const getBatch = async (endPoint) => {

    const response = await GET(endPoint);

    return response.data;

}