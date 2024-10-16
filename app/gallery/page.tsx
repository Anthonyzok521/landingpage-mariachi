import Image from "next/image";
import { DataEvent, IEvents } from "~/shared/types";
import { EventsCollection } from "~/utils/eventsCollection";

export default async function Home({ }) {
  const dataEvents = await EventsCollection.findLatest() as DataEvent;
  return <>
    <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
      Galería
      <div className="flex gap-4 flex-wrap p-10 items-center justify-center">
        {dataEvents.map(({title, description, image, positionImage, datetime, location}:IEvents, index:number) => <Image className="transition-all rounded-md hover:-translate-y-5 hover:animate-pulse" key={`i-${index}`}  src={image} alt={title} width={300} height={600}/>)}
      </div>
    </h1>
  </>
}
