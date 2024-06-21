'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { getProducts } from "@/services/getProducts";

export default function dashboard() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const msg = localStorage.getItem('toastMessage');
        if (msg) {
            toast.success(msg);
            localStorage.removeItem('toastMessage');
        }
    }, []);

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
                <Link className="px-4 py-1 rounded bg-blue-aguita text-white text-sm hover:scale-105" href="/dashboard/product/create">Add product</Link>
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
                                    {product.description}
                                </td>
                                <td>
                                    <Link className="border py-1 px-4 text-blue-aguita text-sm rounded-lg font-semibold" href={`/dashboard/product/update/${product.uid}`} >
                                        Update
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Toaster />
        </main>

    );
}