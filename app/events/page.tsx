import { Metadata } from 'next';
import { Events } from '~/components/widgets/Events';
import { DataEvent } from '~/shared/types';

export const metadata: Metadata = {
  title: 'Eventos',
};

export default async function Home() {
 /*  const [dataEvents, setDataEvents] = useSt */
  const dataEvents = await getData();

  return <section className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
    <Events dataEvents={dataEvents.reverse()} />
  </section>

}

const getData = async () => {
  
  const res = await fetch('http:localhost:3000/api/events', {cache: 'no-store'});
  const data = await res.json()

  return data
}