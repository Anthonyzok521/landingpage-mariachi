'use client'

import { useState } from 'react'
import { format, isBefore, isToday } from 'date-fns'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog"
import { Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'
import { MusicEvent } from '~/shared/types'
interface IE {
  events: MusicEvent[]
  isAdmin?: Boolean
}

const CardsEvents = ({ events, isAdmin }: IE) => {

  const [selectedEvent, setSelectedEvent] = useState<MusicEvent | null>(null)

  const getDateColor = (date: Date) => {
    if (isBefore(date, new Date()) && !isToday(date)) {
      return 'text-gray-400'
    } else if (isToday(date)) {
      return 'text-green-500'
    } else {
      return 'text-black'
    }
  }

  const deleteEvent = (event: MusicEvent) => {
    console.log(event);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/delete/${event._id}`, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,DELETED"
      }, method: 'DELETED'
    });
    //location.href = '/admin/events';
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Eventos Musicales</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <Card key={`c-${index}`} className="overflow-hidden">
            <Image src={event.imageUrl} alt={event.name} width={200} height={200} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className={`flex items-center ${getDateColor(event.date)}`}>
                <Calendar className="mr-2 h-4 w-4" />
                {format(event.date, "dd/MM/yyyy HH:mm")}
              </p>
              <p className="flex items-center mt-2">
                <MapPin className="mr-2 h-4 w-4" />
                {event.city}
              </p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  {!isAdmin ? <Button className='hover:bg-yellow-400 dark:hover:bg-slate-700' onClick={() => setSelectedEvent(event)}>Ver más detalles</Button> :
                    <Button className='bg-red-400 hover:bg-red-600' onClick={() => deleteEvent(event)}>Eliminar evento</Button>}
                </DialogTrigger>
                {!isAdmin && <DialogContent className='bg-white dark:bg-slate-900'>
                  <DialogHeader>
                    <DialogTitle>{selectedEvent?.name}</DialogTitle>
                    <DialogDescription>
                      <p className="mb-4">{selectedEvent?.fullDescription}</p>
                      <p className={`flex items-center ${selectedEvent && getDateColor(selectedEvent.date)}`}>
                        <Calendar className="mr-2 h-4 w-4" />
                        {selectedEvent && format(selectedEvent.date, "dd/MM/yyyy HH:mm")}
                      </p>
                      <p className="flex items-center mt-2">
                        <MapPin className="mr-2 h-4 w-4" />
                        {selectedEvent?.city}
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>}
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )

  //const [open, setOpen] = useState<boolean>(false);

  /*return <div className="flex max-[360px]:flex-col-reverse overflow-hidden rounded-xl border border-gray-200 dark:border-slate-900 dark:shadow-black/30 shadow-lg min-h-20 max-[360px]:max-h-80 max-h-44 lg:scale-75">
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
  </div> */
}

export default CardsEvents;