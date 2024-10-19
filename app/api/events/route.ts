import { NextResponse } from 'next/server';

import events from "~/models/events";
import { revalidatePath } from 'next/cache';

export const GET = async () => {
    const result = await events.find();

    revalidatePath('/')
    revalidatePath('/events')
    revalidatePath('/gallery')

    return NextResponse.json(result);
}