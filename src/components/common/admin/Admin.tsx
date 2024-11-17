'use client'
import { Icon24Hours, IconBrandFacebook, IconBrandGoogleMaps, IconBrandInstagram, IconBrandTiktok, IconBrandX, IconDeviceFloppy, IconImageInPicture, IconMail, IconNetwork, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import * as api from "~/app/api";
import { Configs } from "~/shared/types";
import CTA from "../CTA";
import Image from "next/image";

export const Admin = () => {

    const [configs, setConfigs] = useState<(Configs | null)>(null);
    const [json, setJson] = useState({});

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const email = document.querySelector("#email");
        const primary = document.querySelector("#primary");
        const secondary = document.querySelector("#secondary");
        const instagram = document.querySelector("#instagram");
        const facebook = document.querySelector("#facebook");
        const tiktok = document.querySelector("#tiktok");
        const x = document.querySelector("#x");
        const maps = document.querySelector("#maps");
        const mf = document.querySelector("#mf");
        const ss = document.querySelector("#ss");
        const banner = document.querySelector("#banner");        

        await fetch(`${process.env.API_URL}/api/configs/update`,{
            method: 'PUT',
            body: JSON.stringify({
                email,
                primary,
                secondary,
                instagram,
                facebook,
                tiktok,
                x,
                maps,
                mf,
                ss,
                banner
            })
        })
    }

    useEffect(() => {
        const get = async () => {
            const res = await api.getConfigs();
            setConfigs(res[0] as Configs);
        }        
        get();
    }, [])

    return <section className="flex flex-col gap-5 md:items-center w-full">
        <div className="w-full justify-end">
            <nav className="w-full">
                <ul className="w-full flex justify-end p-10 gap-5 bg-black/10">
                    <li><Link href={'/admin/events'} title="Crear un evento" className={`hover:text-yellow-400`}>Crear un evento</Link></li>
                    <li><Link href={'/admin/gallery'} title="Administrar galería" className={`hover:text-yellow-400`}>Administrar galería</Link></li>
                    <li><Link href={'/admin/logout'} title="Cerrar sesión" className={`hover:text-yellow-400`}>Cerrar sesión</Link></li>
                </ul>
            </nav>
        </div>
        <div className="flex flex-col p-2 md:w-1/2 ">
            <h1 className="font-bold p-2 text-center">Configuración general</h1>
            <form onSubmit={handleSubmit} className="border-2 p-2 rounded-md gap-10 ">
                <label className="flex flex-col font-bold">
                    <span className="flex"><IconMail />Correo:</span>
                    <input id={"email"} type="text" value={configs?.contacts.email} className="border-2 p-2 rounded-md" />
                </label>
                <div className="flex flex-col mt-2">
                    <span className="mt-2 flex justify-center w-full font-bold"><IconPhone />Teléfonos:</span>
                    <label className="flex flex-col font-bold">
                        Principal
                        <input id={"primary"} type="text" value={configs?.contacts.phone.primary} className="border-2 p-2 rounded-md" />
                    </label>
                    <label className="flex flex-col font-bold">
                        Secundario
                        <input id={"secondary"} type="text" value={configs?.contacts.phone.secondary} className="border-2 p-2 rounded-md" />
                    </label>
                </div>
                <div className="flex flex-col mt-2">
                    <span className="mt-2 flex justify-center w-full font-bold"><IconNetwork />Redes sociales:</span>
                    <label className="flex flex-col font-bold">
                        <span className="flex w-full font-bold"><IconBrandInstagram />Instagram</span>
                        <input id={"instagram"} type="text" value={configs?.contacts.social.instagram} className="border-2 p-2 rounded-md" />
                    </label>
                    <label className="flex flex-col font-bold">
                        <span className="flex w-full font-bold"><IconBrandFacebook />Facebook</span>
                        <input id={"facebook"} type="text" value={configs?.contacts.social.facebook} className="border-2 p-2 rounded-md" />
                    </label>
                    <label className="flex flex-col font-bold">
                        <span className="flex w-full font-bold"><IconBrandTiktok />Tiktok</span>
                        <input id={"tiktok"} type="text" value={configs?.contacts.social.tiktok} className="border-2 p-2 rounded-md" />
                    </label>
                    <label className="flex flex-col font-bold">
                        <span className="flex w-full font-bold"><IconBrandX />X (Twitter)</span>
                        <input id={"x"} type="text" value={configs?.contacts.social.x} className="border-2 p-2 rounded-md" />
                    </label>
                    <label className="flex flex-col font-bold">
                        <span className="flex w-full font-bold"><IconBrandGoogleMaps />Google Maps</span>
                        <input id={"maps"} type="text" value={configs?.contacts.social.maps} className="border-2 p-2 rounded-md" />
                    </label>
                </div>
                <div className="flex flex-col mt-2">
                    <span className="mt-2 flex justify-center w-full font-bold"><Icon24Hours />Horario de trabajo:</span>
                    <label className="flex flex-col font-bold">
                        Lunes - Viernes
                        <input id={"mf"} type="text" value={configs?.hours.mf} className="border-2 p-2 rounded-md" />
                    </label>
                    <label className="flex flex-col font-bold">
                        Sábados y Domingo
                        <input id={"ss"} type="text" value={configs?.hours.ss} className="border-2 p-2 rounded-md" />
                    </label>
                </div>
                <div className="flex flex-col mt-2">
                    <label className="flex font-bold">
                        <span className="mt-2 flex w-full font-bold"><IconImageInPicture />Imagen de portada:</span>
                        <div className=" relative w-full h-20">
                            <Image src={configs?.images.banner || '/mci_logo.png'} sizes="100vw" fill alt="Portada" className="object-contain" />
                        </div>
                    </label>
                        <input id={"banner"} type="file" className="border-2 p-2 rounded-md" />
                </div>
                <div className="mt-5">
                <CTA callToAction={{
                    text: "Guardar cambios",
                    icon: IconDeviceFloppy
                }}linkClass="btn bg-yellow-400" />
                </div>
            </form>
        </div>
    </section>
}