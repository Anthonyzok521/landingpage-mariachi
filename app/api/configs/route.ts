import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import configs from "~/models/configs";


export const GET = async () => {
    const res = await configs.find()
    
    revalidatePath('/')
    revalidatePath('/events')
    revalidatePath('/gallery')

    return NextResponse.json(res)
}