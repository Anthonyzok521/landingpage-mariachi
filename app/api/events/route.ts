import { NextResponse } from 'next/server';
import { EventsCollection } from '~/utils/eventsCollection';
import events from "~/models/events";
export const GET = async () => {
    
/*     const dataEvents = await EventsCollection.findLatest(); */
    const result = await events.find();

    return NextResponse.json(result);
}