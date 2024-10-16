import Image from "next/image"
import { IEvents } from "~/shared/types"
import { Suspense, useState } from "react";
import { IconMapPin } from "@tabler/icons-react";

interface IE {
    events: IEvents
}

const CardsEvents = ({events}:IE) => {
    const [open, setOpen] = useState<boolean>(false);

    return <div className="flex max-[360px]:flex-col-reverse overflow-hidden rounded-xl border border-gray-200 dark:border-slate-900 dark:shadow-black/30 shadow-lg min-h-20 max-[360px]:max-h-80 max-h-44 lg:scale-75">
        <div className='flex flex-col w-full max-md:z-10'>
            <span className="p-2 font-bold text-gray-600 text-sm">{events.datetime}</span>
            <div className="flex flex-col justify-start min-[361px]:w-44 sm:max-lg:w-80 max-[360px]:w-full overflow-auto max-lg:h-full max-lg:justify-between">
                <h2 className={`max-lg:hidden p-2 font-bold ${open ? '' : 'text-ellipsis whitespace-nowrap overflow-hidden'}`}>{events.title} asd ad as asda dasd</h2>
                <span className={`max-lg:hidden transition-all pl-2 ${open ? '' : 'text-ellipsis whitespace-nowrap overflow-hidden'} max-w-max`}>{events.description} asdasd asdad asdas dad asd asd ad</span>
                <div className="hidden max-lg:flex flex-col overflow-auto sm:max-lg:w-80 min-[361px]:w-44 max-[360px]:w-full">
                    <h2 className={`p-2 font-bold ${open ? '' : 'text-ellipsis whitespace-nowrap overflow-hidden'}`}>{events.title} asd ad as asda dasd</h2>
                    <span className={`transition-all pl-2 ${open ? '' : 'text-ellipsis whitespace-nowrap overflow-hidden'} max-w-max`}>{events.description} asdasd asdad asdas dad asd asd ad <span className="max-[360px]:relative hidden p-2 max-[360px]:flex items-center gap-1 max-[360px]:justify-end text-sm"><IconMapPin className="max-[360px]:absolute max-[360px]:size-4 max-[360px]:left-0" />{events.location}</span></span>
                </div>
                <span className="text-sm hover:bg-slate-300/30 rounded-md p-2 select-none max-w-max cursor-pointer" onClick={() => setOpen(!open)}>{open ? 'Mostrar menos' : 'Mostrar mas'}</span>
            </div>
            <span className="hidden p-2 sm:flex items-center gap-1"><IconMapPin />{events.location}</span>
        </div>
        <div className='overflow-hidden max-lg:w-full max-lg:flex max-lg:flex-col max-lg:justify-between h-full'>
            <Suspense fallback={<></>}>
                <Image loading={'lazy'} className={`rounded-bl-md max-[360px]:rounded-md ${events.positionImage} h-full object-cover`} width={650} height={340} alt={events.title} src={`${events.image}`} />
            </Suspense>
            <span className="max-lg:relative hidden p-2 max-lg:flex items-center gap-1 max-lg:justify-end text-sm"><IconMapPin className="max-lg:absolute max-lg:size-4 max-lg:left-0" />{events.location}</span>
        </div>
    </div>
}

export default CardsEvents;