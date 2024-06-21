'use client';

import { getBatches } from "@/services/getBatches";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

export default function batch() {

    const [batches, setBatches] = useState([]);

    useEffect(() => {
        const msg = localStorage.getItem('toastMessage');
        if (msg) {
            toast.success(msg);
            localStorage.removeItem('toastMessage');
        }
    });

    useEffect(() => {
        getBatches().then((data) => {
            if (data.code == 200) {
                setBatches(data.context);
            }
        });
    }, [])

    return (

        <main className="w-full p-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Batch</h1>
                <Link className="px-4 py-1 rounded bg-blue-aguita text-white text-sm hover:scale-105" href="/dashboard/batch/create">Add batch</Link>
            </div>
            <div className="mt-6 mb-4">
                <button className="mx-2 border-b-4 border-white hover:border-blue-aguita">Fresh</button>
                <button className="mx-2 border-b-4 border-white hover:border-blue-aguita">Near expiry</button>
                <button className="mx-2 border-b-4 border-white hover:border-blue-aguita">Expired</button>
            </div>
            <div className="my-2">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Product</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Price</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Stock</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Expiry date</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {batches.map((batch) => (
                            <tr key={batch.uid}>
                                <td className="p-3 text-sm text-gray-700 ">
                                    {batch.product}
                                </td>
                                <td className="p-3 text-sm text-gray-700 ">
                                    $ {batch.price}
                                </td>
                                <td className="p-3 text-sm text-gray-700 ">
                                    {batch.stock}
                                </td>
                                <td className="p-3 text-sm text-gray-700 ">
                                    {batch.exp_date}
                                </td>
                                <td className="p-3 text-sm text-gray-700 ">
                                    <span
                                        className={`py-1 px-2 rounded 
                                            ${batch.status === 'Fresh' ? 'bg-green-100' :
                                              batch.status === 'Near_Expiry' ? 'bg-orange-100' :
                                              batch.status === 'Expired' ? 'bg-red-100' : ''
                                            }`}
                                    >
                                        {batch.status}
                                    </span>
                                </td>
                                <td>
                                    <Link className="border py-1 px-4 text-blue-aguita text-sm rounded-lg font-semibold" href={`/dashboard/batch/update/${batch.uid}`}>
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