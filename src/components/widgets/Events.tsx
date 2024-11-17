'use client';
//import { IconFilter, IconSearch } from "@tabler/icons-react"
import { lazy, Suspense, useEffect, useState } from "react";
import CardsEventsSkeleton from "./CardsEventsSkeleton";
//import { Locations } from "~/shared/data/pages/locations";
import { MusicEvent } from "~/shared/types";

const CardsEvents = lazy(() => import("./CardsEvents"));

interface IEventes {
    dataEvents: MusicEvent[]
}

export const Events = ({ dataEvents }: IEventes) => {
    const [dataEvent, setDataEvent] = useState(dataEvents.reverse())
    /*const [filter, setFilter] = useState(dataEvent)
    const [open, setOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>()
    const [date, setDate] = useState<string>("")
    const [time, setTime] = useState<string>("")
    const [location, setLocation] = useState<string>("-- - --")

    const filterSearch = () => {
        const f = search ? dataEvent.filter(({ name }) => name.includes(`${search}`)) : dataEvent.reverse()
        setFilter(f);
    }

    const formatDate = (dateString: string) => {
        if (!dateString) return ""
        const [year, month, day] = dateString.split('-')
        return `${day}/${month}/${year}`
    }

    const filterDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value)
        const d = formatDate(event.target.value as string)
        const f = d ? dataEvent.filter(({ date }) => date.includes(d) || date.includes(`/${event.target.value.substring(5, 7)}/`)) : dataEvent.reverse()
        setFilter(f);
    } 

    const filterTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTime(event.target.value)
        const f = time ? dataEvent.filter(({ date }) => date.includes(`- ${event.target.value}`) || date.includes(`- ${event.target.value.substring(0, 3)}`)) : dataEvent.reverse()
        setFilter(f);
    } 

    const filterLocation = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLocation(event.target.value)
        const f = location ? dataEvent.filter(({ city }) => city.includes(`${event.target.value}`)) : dataEvent.reverse()
        setFilter(f);
    }*/

    return <>
        {/* <header>
            <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
                Eventos
            </h1>
            <form action="">
                <div className='transition-all bg-yellow-500 dark:bg-slate-800 p-2 rounded-md flex items-center gap-1 flex-wrap dark:text-slate-400'>
                    <div className="w-full flex">
                        <div className='p-2 hover:bg-white/30 rounded-md' onClick={() => setOpen(!open)}>
                            <IconFilter />
                        </div>
                        <div className="w-full flex items-center">
                            <input type="search" className="w-full p-1 rounded-md" placeholder="Buscar..." onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className='p-2 hover:bg-white/30 rounded-md' onClick={filterSearch}>
                            <IconSearch />
                        </div>
                    </div>
                    {open &&
                        <div className="flex gap-2 max-lg:flex-col justify-between w-full">
                            <label className="flex justify-between items-center">Buscar por fecha:
                                <input className="p-1 rounded-md" type="date" value={date} onChange={filterDate} />
                            </label>
                            <label className="flex justify-between items-center">Buscar por hora:
                                <input className="p-1 rounded-md" type="time" value={time} onChange={filterTime} />
                            </label>
                            <label className="flex justify-between items-center">Buscar por ciudad:
                                <select className="p-1 rounded-md" name="location" value={location} onChange={filterLocation}>
                                    <option value={'-- - --'}>-- - --</option>
                                    {Locations.map(l => <option key={`${l[0]}`} value={l[0]}>{l[0]}</option>)}
                                </select>
                            </label>
                        </div>
                    }
                </div>
            </form>
        </header> */}
        <Suspense fallback={<CardsEventsSkeleton />}>
            <CardsEvents events={dataEvents} />
        </Suspense>
        {/* <div className="grid grid-cols-1 gap-6  p-4 md:p-0 lg:grid-cols-2">
        </div> */}
    </>
}