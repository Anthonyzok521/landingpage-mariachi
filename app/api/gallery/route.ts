import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import galleries from "~/models/galleries";


export const GET = async () => {
    const res = await galleries.find()

    revalidatePath('/')
    revalidatePath('/events')
    revalidatePath('/gallery')

    return NextResponse.json(res)
}