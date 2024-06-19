'use client';

import { useEffect, useState } from "react";
import { getProducts } from "@/services/getProduct";
import Link from "next/link";

export default function dashboard() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            if (data.code == 200) {
                setProducts(data.context);
            }
        });
    }, [])

    return (

        <main className="w-full p-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Product</h1>
                <Link className="px-2 py-1 rounded bg-blue-100" href="/dashboard/product/create">Add product</Link>
            </div>
            <div className="mt-6 mb-4">
                <h1 className="mx-2 border-b-4 border-white">All product</h1>
            </div>
            <div className="my-2">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Description</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.uid}>
                                <td className="p-3 text-sm text-gray-700 ">
                                    {product.name}
                                </td>
                                <td className="p-3 text-sm text-gray-700 ">
                                    {product.decription}
                                </td>
                                <td>
                                    <Link href="">
                                        <svg className="hover:text-yellow-600 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>

    );
}