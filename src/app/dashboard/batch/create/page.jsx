'use client';

import { getProducts } from "@/services/getProduct";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { createSchemaBatch } from "@/schemes/schema-batch";
import { saveBatch } from "@/services/saveBatch";

export default function createBatch() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            if (data.code == 200) {
                setProducts(data.context);
            }
        });
    }, [])

    const router = useRouter();

    const schemaBatch = createSchemaBatch(products.map(product => product.name));

    const formValidations = { resolver: zodResolver(schemaBatch) }

    const { register, handleSubmit, formState: { errors } } = useForm(formValidations);

    const request = (context) => {

        saveBatch(context).then(data => {

            if (data.msg == 'OK') {

                localStorage.setItem('toastMessage', data.context);

                router.push('/dashboard/batch');

            } else {

                toast.error(data.context);

            }

        });

    }

    return (
        <main className="w-full p-8">
            <h1 className="text-3xl font-bold mb-16">Batch</h1>

            <form onSubmit={handleSubmit(request)} className="w-1/4" noValidate>
                <div className="my-4">
                    <label className="block my-2" htmlFor="options">Choose a product</label>
                    <select className="w-full border rounded-md p-1 bg-white" id="product" {...register("product")} >
                        {products.map((product) => (
                            <option key={product.uid} value={product.name}>{product.name}</option>
                        ))}
                    </select>
                    <span className="block text-red-500 text-xs pl-1 min-h-5">
                        {errors.product?.message}
                    </span>
                </div>

                <div className="my-4">
                    <label className="block my-2" htmlFor="">Price</label>
                    <input className="w-full border rounded-md p-1" type="number" {...register("price")} />
                    <span className="block text-red-500 text-xs pl-1 min-h-5">
                        {errors.price?.message}
                    </span>
                </div>

                <div className="my-4">
                    <label className="block my-2" htmlFor="">Stock</label>
                    <input className="w-full border rounded-md p-1" type="number" {...register("stock")} />
                    <span className="block text-red-500 text-xs pl-1 min-h-5">
                        {errors.stock?.message}
                    </span>
                </div>

                <div className="my-4">
                    <label className="block my-2" htmlFor="">Expiry date</label>
                    <input className="w-full border rounded-md p-1" type="date" {...register("exp_date")} />
                </div>
                <button className="w-full my-8 p-1 border rounded-md bg-blue-aguita font-semibold text-white">Save</button>
            </form>
            <Toaster />
        </main>
    );
}