import { Metadata } from 'next';
import { Events } from '~/components/widgets/Events';
import { DataEvent } from '~/shared/types';
import { EventsCollection } from '~/utils/eventsCollection';

export const metadata: Metadata = {
  title: 'Eventos',
};

export default async function Home({ }) {
  const dataEvents = await EventsCollection.findLatest() as DataEvent;

  return <section className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
    <Events dataEvents={dataEvents.reverse()} />
  </section>

}
