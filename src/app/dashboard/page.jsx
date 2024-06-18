'use client';

import Nav from "@/components/Nav";
import { useState } from "react";
import { getProducts } from "@/services/getProduct";

export default function dashboard() {

    const [products, setProducts] = useState([]);

    getProducts().then((data) => {
        if (data.code == 200) {
            setProducts(data.context);
        }
    });

    return (
        <main className="w-full h-full flex">
            <nav className="border">
                <Nav />
            </nav>
            <div className="flex-1 border p-4">
                <header className="flex justify-between">
                    <h1 className="font-bold text-2xl">Products</h1>
                    <a className="text-sm font-medium bg-blue-100 p-2 rounded-md" href="">Create product</a>
                </header>
                <div className="w-full my-4 flex">
                    <button className="font-medium text-sm">All products</button>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Description</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {products.map((product) => {
                                <tr key={product.uid}>
                                    <td className="p-3 text-sm text-gray-700 ">
                                        {product.name}
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 ">
                                        {product.decription}
                                    </td>
                                    <td>
                                        <a href="">
                                            <svg className="hover:text-yellow-600" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd" />
                                                <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}