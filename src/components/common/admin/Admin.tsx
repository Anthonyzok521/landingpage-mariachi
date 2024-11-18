'use client'
import { Icon24Hours, IconBrandFacebook, IconBrandGoogleMaps, IconBrandInstagram, IconBrandTiktok, IconBrandX, IconCheck, IconDeviceFloppy, IconExclamationCircleFilled, IconImageInPicture, IconMail, IconNetwork, IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import * as api from "~/app/api";
import { Configs, IGallery } from "~/shared/types";
import CTA from "../CTA";
import Image from "next/image";
import Gallery from "../Gallery";
import { useSelector } from "react-redux";
import { Dialog, DialogContent } from "~/components/ui/dialog";

export const Admin = () => {

    const [configs, setConfigs] = useState<(Configs | null)>(null);
    const [images, setImages] = useState<IGallery[]>([]);
    const imagePath = useSelector((state: any) => state.image.path);
    const [open, setOpen] = useState<Boolean>(false);
    const [empty, setEmpty] = useState<Boolean>(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const email = document.querySelector("#email") as HTMLDivElement;
        const primary = document.querySelector("#primary") as HTMLDivElement;
        const secondary = document.querySelector("#secondary") as HTMLDivElement;
        const instagram = document.querySelector("#instagram") as HTMLDivElement;
        const facebook = document.querySelector("#facebook") as HTMLDivElement;
        const tiktok = document.querySelector("#tiktok") as HTMLDivElement;
        const x = document.querySelector("#x") as HTMLDivElement;
        const maps = document.querySelector("#maps") as HTMLDivElement;
        const mf = document.querySelector("#mf") as HTMLDivElement;
        const ss = document.querySelector("#ss") as HTMLDivElement;
        const banner = document.querySelector("#banner") as HTMLInputElement;

        if (!email.textContent ||
            !primary.textContent ||
            !secondary.textContent ||
            !instagram.textContent ||
            !facebook.textContent ||
            !tiktok.textContent ||
            !x.textContent ||
            !maps.textContent ||
            !mf.textContent ||
            !ss.textContent ||
            !banner.value) {
            setEmpty(true);
            setOpen(true);
            return;
        }

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/configs`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                _id: configs?._id,
                email: email.textContent,
                primary: primary.textContent,
                secondary: secondary.textContent,
                instagram: instagram.textContent,
                facebook: facebook.textContent,
                tiktok: tiktok.textContent,
                x: x.textContent,
                maps: maps.textContent,
                mf: mf.textContent,
                ss: ss.textContent,
                banner: banner.value
            })
        });

        setOpen(true);
    }

    useEffect(() => {
        const get = async () => {
            const res = await api.getConfigs();
            setConfigs(res[0] as Configs);
            const gallery = await api.getImagesFromGallery() as IGallery[];
            setImages(gallery);
        }
        get();
    }, [])

    return <section className="flex flex-col gap-5 md:items-center w-full">
        <div className="w-full justify-end">
            <nav className="w-full">
                <ul className="w-full flex justify-end p-10 gap-5 bg-black/10">
                    <li><Link href={'/admin/events'} title="Administrar eventos" className={`hover:text-yellow-400`}>Administrar eventos</Link></li>
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
                    <div id={"email"} className="border-2 p-2 rounded-md" contentEditable={true}>{configs?.contacts.email}</div>
                </label>
                <div className="flex flex-col mt-2">
                    <span className="mt-2 flex justify-center w-full font-bold"><IconPhone />Teléfonos:</span>
                    <label className="flex flex-col font-bold">
                        Principal
                        <div id={"primary"} className="border-2 p-2 rounded-md" contentEditable={true}>{configs?.contacts.phone.primary}</div>
                    </label>
                    <label className="flex flex-col font-bold">
                        Secundario
                        <div id={"secondary"} className="border-2 p-2 rounded-md" contentEditable={true}>{configs?.contacts.phone.secondary}</div>
                    </label>
                </div>
                <div className="flex flex-col mt-2">
                    <span className="mt-2 flex justify-center w-full font-bold"><IconNetwork />Redes sociales:</span>
                    <label className="flex flex-col font-bold">
                        <span className="flex w-full font-bold"><IconBrandInstagram />Instagram</span>
                        <div id={"instagram"} className="border-2 p-2 rounded-md" contentEditable={true}>{configs?.contacts.social.instagram}</div>
                    </label>
                    <label className="flex flex-col font-bold">
                        <span className="flex w-full font-bold"><IconBrandFacebook />Facebook</span>
                        <div id={"facebook"} className="border-2 p-2 rounded-md" contentEditable={true}>{configs?.contacts.social.facebook}</div>
                    </label>
                    <label className="flex flex-col font-bold">
                        <span className="flex w-full font-bold"><IconBrandTiktok />Tiktok</span>
                        <div id={"tiktok"} className="border-2 p-2 rounded-md" contentEditable={true}>{configs?.contacts.social.tiktok}</div>
                    </label>
                    <label className="flex flex-col font-bold">
                        <span className="flex w-full font-bold"><IconBrandX />X (Twitter)</span>
                        <div id={"x"} className="border-2 p-2 rounded-md" contentEditable={true}>{configs?.contacts.social.x}</div>
                    </label>
                    <label className="flex flex-col font-bold">
                        <span className="flex w-full font-bold"><IconBrandGoogleMaps />Google Maps</span>
                        <div id={"maps"} className="border-2 p-2 rounded-md" contentEditable={true}>{configs?.contacts.social.maps}</div>
                    </label>
                </div>
                <div className="flex flex-col mt-2">
                    <span className="mt-2 flex justify-center w-full font-bold"><Icon24Hours />Horario de trabajo:</span>
                    <label className="flex flex-col font-bold">
                        Lunes - Viernes
                        <div id={"mf"} className="border-2 p-2 rounded-md" contentEditable={true}>{configs?.hours.mf}</div>
                    </label>
                    <label className="flex flex-col font-bold">
                        Sábados y Domingo
                        <div id={"ss"} className="border-2 p-2 rounded-md" contentEditable={true}>{configs?.hours.ss}</div>
                    </label>
                </div>
                <div className="flex flex-col mt-2">
                    <label className="flex font-bold mb-2">
                        <span className="mt-2 flex w-full font-bold"><IconImageInPicture />Imagen de portada:</span>
                        <div className=" relative w-full h-20">
                            <Image src={imagePath ? imagePath : configs?.images.banner || '/mci_logo.png'} sizes="100vw" fill alt="Portada" className="object-contain" />
                        </div>
                    </label>
                    <label className="flex font-bold">
                        <span className="mt-2 flex w-full font-bold"><IconImageInPicture />Selecciona una imagen para cambiar la portada:</span>
                        <div className=" overflow-y-auto w-full max-h-[200px]">
                            <Gallery mediaItems={images} isToEvent={true} />
                        </div>
                    </label>
                    <input id={"banner"} type="hidden" value={imagePath ? imagePath : configs?.images.banner} />
                </div>
                <div className="mt-5">
                    <CTA callToAction={{
                        text: "Guardar cambios",
                        icon: IconDeviceFloppy
                    }} linkClass="btn bg-yellow-400" />
                </div>
            </form>
        </div>
        <Dialog open={!!open} onOpenChange={() => {
            setOpen(false); if (!empty) {
                location.href = '/admin';
            } setEmpty(false);
        }}>
            <DialogContent className="max-w-80 bg-neutral-100 dark:bg-neutral-900 flex flex-col justify-center items-center">
                {!empty ?
                    <>
                        <IconCheck className="text-green-500" />
                        <h1>¡Guardado!</h1>
                    </>
                    :
                    <>
                        <IconExclamationCircleFilled className="text-red-500" />
                        <h1>¡No se pudo guardar! Verifica que esten todos los datos</h1>
                    </>
                }
            </DialogContent>
        </Dialog>
    </section>
}