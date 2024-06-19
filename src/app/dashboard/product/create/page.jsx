'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { schemaProduct } from "@/schemes/schema-product";
import { saveProduct } from "@/services/saveProduct";


export default function createProduct() {

    const router = useRouter()

    const formValidations = { resolver: zodResolver(schemaProduct) }

    const { register, handleSubmit, formState: { errors } } = useForm(formValidations);

    const request = (context) => {

        saveProduct(context).then(data => {

            if (data.msg == 'OK') {

                toast.success(data.context);

                router.push('/dashboard/product');

            } else {

                toast.error(data.context);

            }

        });

    }

    return (
        <main className="w-full p-8">
            <h1 className="text-3xl font-bold">Product</h1>

            <form onSubmit={handleSubmit(request)} className="w-1/4" >
                <div className="my-4">
                    <label className="block my-2" htmlFor="">Name</label>
                    <input className="w-full border rounded-md p-2" type="text" {...register('name')} />
                    <span className="block text-red-500 text-xs pl-1 min-h-5">
                        {errors.name?.message}
                    </span>
                </div>

                <div className="my-4">
                    <label className="block my-2" htmlFor="">Description</label>
                    <input className="w-full border rounded-md p-2" type="text" {...register('description')} />
                    <span className="block text-red-500 text-xs pl-1 min-h-5">
                        {errors.description?.message}
                    </span>
                </div>
                <button className="w-full my-4 p-2 border rounded-md bg-green-100">Save</button>
            </form>
            <Toaster />
        </main>
    );
}