'use client'
import { IconLogin } from "@tabler/icons-react"
import CTA from "./CTA"
import fontTitle from "~/fonts"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"


export const Login = () => {

    const navigator = useRouter();
    const [invalid, setInvalid] = useState<boolean | null>(null);

    const handleClick = async (e: FormEvent) => {
        e.preventDefault();
        try{
            const res = await fetch('http://localhost:3000/api/login');
            const data = await res.json();

            if(data.login && !invalid){                
                navigator.refresh();
                return;
            }

            setInvalid(true);

            return;

        }catch(e){
            console.log(e);
        }
        

        
    }

    return <main className='h-dvh w-full flex justify-center'>
        <form onSubmit={(e) => handleClick(e)} method="POST" className='flex flex-col justify-center items-center md:w-80 h-1/2 rounded-xl border border-gray-200 dark:border-slate-900 dark:shadow-black/30 shadow-lg'>
            <div className='pt-10 flex justify-center'>
                <h1 className={`${fontTitle.className} text-yellow-400 mb-6 text-3xl lg:text-4xl`}>Iniciar Sesión</h1>
            </div>
            <div className='p-10'>
                <label>
                    Inserte contraseña
                    <input type="password" name="password" id="password" className='w-full border-2 rounded-md' />
                    <div className={`${invalid ? "flex" : "hidden"} text-red-600 font-bold`}>
                        Contraseña incorrecta...
                    </div>
                </label>
            </div>
            <CTA callToAction={{
                  text: 'Entrar',
                  icon: IconLogin,
                }} linkClass="btn bg-yellow-400" 
                />
        </form>
    </main>
}