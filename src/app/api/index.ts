'use server'
import { cookies } from "next/headers";

export const getConfigs = async () => {
    const res = await fetch(`${process.env.API_URL}/api/configs`, { next: { revalidate: 0 } });
    return await res.json()
}

export const getEvents = async () => {
    const res = await fetch(`${process.env.API_URL}/api/events`, { next: { revalidate: 0 } });
    return await res.json();
}

export const getImagesFromGallery = async () => {
    const res = await fetch(`${process.env.API_URL}/api/gallery`, { next: { revalidate: 0 } });
    return await res.json();
}

export const getAuthLogin = async () => {
    const token = cookies().get('mango')?.value.toString();

    if (token) {
        const res = await fetch(`${process.env.API_URL}/api/admin`, { headers: {
            'Cookie' : `mango=${token}`
        },
        next: { revalidate: 0 } });
        const r = await res.json();
        return r;
    }

    return {
        token: "no token",
        auth: false
    };
}

export const postAuthLogin = async (password: string) => {
    const res = await fetch(`${process.env.API_URL}/api/auth`, {
        method: "POST", headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            password: password
        }), next: { revalidate: 0 }
    });
    
    const r = await res.json();

    if(r.token) { cookies().set('mango', r.token); }

    return r;
}