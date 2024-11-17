'use client';


import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

    const navigation = useRouter();
    

    useEffect(()=>{
        const logout = async () =>{
            const res = await fetch('http://localhost:3000/api/admin/logout');
            const data = await res.json();

            navigation.replace('/');
        }

        logout();
    })

    return <></>

}

