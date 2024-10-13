'use client';
import Image from "next/image"
import { IEvents } from "~/shared/types"
import { Suspense, useState } from "react";
import { IconMapPin } from "@tabler/icons-react";

const CardsEvents = ({ title, description, image, positionImage, datetime, location }: IEvents, key: string) => {
    const [open, setOpen] = useState<boolean>(false);

    return <div key={`e-${key}`} className="flex overflow-hidden rounded-xl border border-gray-200 dark:border-slate-900 dark:shadow-black/30 shadow-lg min-h-20 max-h-44 lg:scale-75">
        <div className='flex flex-col w-full max-md:z-10'>
            <span className="p-2 font-bold text-gray-600 text-sm">{datetime}</span>
            <div className="flex flex-col justify-start w-44 overflow-auto max-md:h-full max-md:justify-between">
                <h2 className={`max-md:hidden p-2 font-bold ${open ? '' : 'text-ellipsis whitespace-nowrap overflow-hidden'}`}>{title} asd ad as asda dasd</h2>
                <span className={`max-md:hidden transition-all pl-2 ${open ? '' : 'text-ellipsis whitespace-nowrap overflow-hidden'} max-w-max`}>{description} asdasd asdad asdas dad asd asd ad</span>
                <div className="hidden max-md:flex flex-col overflow-auto w-44">
                    <h2 className={`p-2 font-bold ${open ? '' : 'text-ellipsis whitespace-nowrap overflow-hidden'}`}>{title} asd ad as asda dasd</h2>
                    <span className={`transition-all pl-2 ${open ? '' : 'text-ellipsis whitespace-nowrap overflow-hidden'} max-w-max`}>{description} asdasd asdad asdas dad asd asd ad</span>
                </div>
                <span className="text-sm hover:bg-slate-300/30 rounded-md p-2 select-none max-w-max cursor-pointer" onClick={() => setOpen(!open)}>{open ? 'Mostrar menos' : 'Mostrar mas'}</span>
            </div>
            <span className="hidden p-2 md:flex items-center gap-1"><IconMapPin />{location}</span>
        </div>
        <div className='overflow-hidden max-md:w-full max-md:flex max-md:flex-col max-md:justify-between'>
            <Suspense fallback={<div>Loading</div>}>
                <Image loading={'lazy'} className={`rounded-bl-md ${positionImage}`} width={650} height={340} alt={title} src={`${image}`} />
            </Suspense>
            <span className="max-md:relative hidden p-2 max-md:flex items-center gap-1 max-md:justify-end text-sm"><IconMapPin className="max-md:absolute max-md:size-4 max-md:left-0" />{location}</span>
        </div>
    </div>
}

export default CardsEvents;