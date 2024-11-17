'use client';
import { IconArrowBack, IconCalendar, IconCheck, IconDatabaseEdit, IconExclamationCircleFilled, IconImageInPicture, IconMapRoute, IconTextCaption, IconTextGrammar } from "@tabler/icons-react";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import CardsEvents from "~/components/widgets/CardsEvents";
import * as api from '../../../app/api';
import { IGallery, MusicEvent } from "~/shared/types";
import CTA from "../CTA";
import Gallery from "../Gallery";
import { useSelector } from "react-redux";
import { Dialog, DialogContent } from "~/components/ui/dialog";

export const AdminEvents = () => {

    const [events, setEvents] = useState<MusicEvent[]>([]);
    const [images, setImages] = useState<IGallery[]>([]);
    const [open, setOpen] = useState<Boolean>();
    const [empty, setEmpty] = useState<Boolean>();
    const imagePath = useSelector((state: any) => state.image.path);

    useEffect(() => {
        const get = async () => {
            const dataEvents = await api.getEvents();
            setEvents(dataEvents);
            const gallery = await api.getImagesFromGallery();
            setImages(gallery);
        }
        get();
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const name = document.querySelector("#name") as HTMLDivElement;
        const description = document.querySelector("#description") as HTMLDivElement;
        const fullDescription = document.querySelector("#fullDescription") as HTMLTextAreaElement;
        const date = document.querySelector("#date") as HTMLInputElement;
        const city = document.querySelector("#city") as HTMLDivElement;
        const imageUrl = document.querySelector("#imageUrl") as HTMLDivElement;

        if (!name.textContent ||
            !description.textContent ||
            !fullDescription.value ||
            !date.value ||
            !city.textContent ||
            !imageUrl.textContent) {
            console.log('XD')
            setEmpty(true);
            setOpen(true);
            return;
        }

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name.textContent,
                description: description.textContent,
                fullDescription: fullDescription.value,
                date: date.value,
                city: city.textContent,
                imageUrl: imageUrl.textContent
            })
        })

        setOpen(true);
    }

    return <section className="flex flex-col justify-center">
        <div className="w-full justify-between">
            <nav className="w-full">
                <ul className="w-full flex justify-between p-10 gap-5 bg-black/10">
                    <li><Link href={'/admin/'} title="Volver" className={`flex items-center hover:text-yellow-400`}>{<IconArrowBack />} Volver</Link></li>
                    <li><div className='flex gap-2'>
                        <Link href={'/admin/gallery'} title="Administrar galería" className={`hover:text-yellow-400`}>Administrar galería</Link>
                        <Link href={'/admin/logout'} title="Cerrar sesión" className={`hover:text-yellow-400`}>Cerrar sesión</Link>
                    </div></li>
                </ul>
            </nav>
        </div>

        <div className='overflow-y-auto h-96 w-full scale-75'>
            <CardsEvents events={events} isAdmin={true} />
        </div>

        <div className="flex flex-col p-2  md:items-center">
            <h1 className="font-bold p-2 text-center">Crear un nuevo evento</h1>
            <form onSubmit={handleSubmit} className="border-2 p-2 rounded-md gap-10 ">
                <label className="flex flex-col font-bold">
                    <span className="flex"><IconTextCaption />Nombre del evento:</span>
                    <div id={"name"} className="border-2 p-2 rounded-md" contentEditable></div>
                </label>
                <div className="flex flex-col mt-2">
                    <span className="mt-2 flex justify-center w-full font-bold"><IconTextGrammar />Descripción:</span>
                    <label className="flex flex-col font-bold">
                        Descripción resumida:
                        <div id={"description"} className="border-2 p-2 rounded-md" contentEditable></div>
                    </label>
                    <label className="flex flex-col font-bold">
                        Descripción completa (opcional):
                        <textarea id={"fullDescription"} className="border-2 p-2 rounded-md"></textarea>
                    </label>
                </div>
                <div className="flex flex-col mt-2">
                    <span className="mt-2 flex justify-center w-full font-bold"><IconCalendar />Fecha que se realizará el evento:</span>
                    <label className="flex flex-col font-bold">
                        Día/Mes/Año - Hora/Minuto
                        <input id={"date"} type="datetime-local" className="border-2 p-2 rounded-md" contentEditable />
                    </label>
                </div>
                <div className="flex flex-col mt-2">
                    <label className="flex flex-col font-bold">
                        <span className="mt-2 flex justify-center w-full font-bold"><IconMapRoute />Ciudad:</span>
                        <div id={"city"} className="border-2 p-2 rounded-md" contentEditable></div>
                    </label>
                </div>
                <div className="flex flex-col mt-2">
                    <label className="flex font-bold">
                        <span className="mt-2 flex w-full font-bold"><IconImageInPicture />Imagen de portada:</span>
                        <div className=" overflow-y-auto w-full max-h-[200px]">
                            <Gallery mediaItems={images} isToEvent={true} />
                        </div>
                    </label>
                    <div id={'imageUrl'} className="hidden">{imagePath}</div>
                </div>
                <div className="mt-5">
                    <CTA callToAction={{
                        text: "Crear",
                        icon: IconDatabaseEdit,
                    }} linkClass="btn bg-yellow-400" action={true} submit={true} />
                </div>
            </form>
        </div>

        <Dialog open={!!open} onOpenChange={() => {
            setOpen(false);
            if (!empty) {
                location.href = '/admin/events';
            }
            setEmpty(false);
        }}>
            <DialogContent className="max-w-80 bg-neutral-100 dark:bg-neutral-900 flex flex-col justify-center items-center">
                {!empty ?
                    <>
                        <IconCheck className="text-green-500" />
                        <h1>¡Evento creado!</h1>
                    </>
                    :
                    <>
                        <IconExclamationCircleFilled className="text-red-500" />
                        <h1>Rellene todos los campos</h1>
                    </>
                }
            </DialogContent>
        </Dialog>
    </section>

}