'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "@/components/Logo";
import { useSingin } from "@/hooks/useSignin";
import { schemaLogin } from "@/schemes/schema-login";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";


export default function Home() {

  const router = useRouter()

  const formValidations = { resolver: zodResolver(schemaLogin) }

  const { register, handleSubmit, formState: { errors } } = useForm(formValidations);

  const request = (context) => {
    
    useSingin(context).then(data => {

      if (data.msg == 'OK') {

        Cookies.set('token', data.context.token);

        router.push('/dashboard');

      } else {

        toast.error(data.context);

      }

    });

  }

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <Logo />
      <h1 className="text-xs my-2 font-bold">StockTrack</h1>
      <form onSubmit={handleSubmit(request)} className="w-1/5 my-20">
        <span className="block my-4">
          <label htmlFor="" className="block text-left m-1">Username</label>
          <input className="w-full p-2 border rounded-md" type="text" {...register('username')} />
          <span className="block text-red-500 text-xs pl-1 min-h-5">
          {errors.username?.message}
          </span>
        </span>
        <span className="block my-5">
          <label htmlFor="" className="block text-left m-1">Password</label>
          <input className="w-full p-2 border rounded-md" type="password" {...register('password')} />
          <span className="block text-red-500 text-xs pl-1 min-h-5">
            {errors.password?.message}
          </span>
        </span>
        <button className="w-full my-4 p-2 border rounded-md bg-black text-white">Sign in</button>
      </form>
      <Toaster />
    </main>
  );
}
