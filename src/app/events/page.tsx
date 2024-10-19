import { Metadata } from 'next';
import { Events } from '~/components/widgets/Events';
import * as api from '../api'

export const metadata: Metadata = {
  title: 'Eventos',
};

export default async function Home() {

  const dataEvents = await api.getEvents();

  return <section className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
    <Events {...dataEvents}/>
  </section>

}