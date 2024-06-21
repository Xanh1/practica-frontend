'use client';

import { schemaProduct } from "@/schemes/schema-product";
import { zodResolver } from "@hookform/resolvers/zod";
import { getProduct } from "@/services/getProduct";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { updateProduct } from "@/services/updateProduct";
import { useRouter } from "next/navigation";


export default function updateProducts(uid) {

    const router = useRouter();

    const [product, setProduct] = useState({ name: '', description: '' });

    useEffect(() => {

        getProduct('product/' + uid.params.uid).then((data) => {
            if (data.code == 200) {
                setProduct(data.context);
            }
        });

    }, []);

    const formValidations = { resolver: zodResolver(schemaProduct) }

    const { register, handleSubmit, formState: { errors } } = useForm(formValidations);

    const request = (data) => {

        const context = {
            uid: uid.params.uid,
            name: data.name,
            description: data.description
        }

        updateProduct(context).then((data) => {

            if (data.msg == 'OK') {

                localStorage.setItem('toastMessage', data.context);

                router.push('/dashboard/product');
            } else {

                toast.error(data.context);

            }
        });

    }

    return (
        <main className="w-full p-8">
            <h1 className="text-3xl font-bold py-2 mb-16">Product</h1>

            <form onSubmit={handleSubmit(request)} className="w-1/4" >
                <div className="my-4">
                    <label className="block my-2" htmlFor="">Name</label>
                    <input className="w-full border rounded-md p-1" type="text" {...register('name')} defaultValue={product.name} />
                    <span className="block text-red-500 text-xs pl-1 min-h-5">
                        {errors.name?.message}
                    </span>
                </div>

                <div className="my-4">
                    <label className="block my-2" htmlFor="">Description</label>
                    <input className="w-full border rounded-md p-1" type="text" {...register('description')} defaultValue={product.description} />
                    <span className="block text-red-500 text-xs pl-1 min-h-5">
                        {errors.description?.message}
                    </span>
                </div>
                <button className="w-full my-4 p-1 border rounded-md bg-blue-aguita text-white font-semibold">Save</button>
            </form>
            <Toaster />
        </main>
    );
}