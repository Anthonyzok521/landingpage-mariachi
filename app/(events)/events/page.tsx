import { Events } from '~/components/widgets/Events';
import { DataEvent } from '~/shared/types';
import { EventsCollection } from '~/utils/eventsCollection';

export default async function Home({ }) {
  const dataEvents = await EventsCollection.findLatest() as DataEvent;
  
  return <>
    <Events dataEvents={dataEvents.reverse()} />
  </>
}
