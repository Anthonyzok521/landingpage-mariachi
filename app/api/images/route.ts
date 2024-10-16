import { NextResponse } from "next/server";
import { ConfigCollection } from "~/utils/configCollections";

export const GET = async () => {
    const result = await ConfigCollection.getImages()
    const i = Object.values(result) as Array<any>
    const data = i[2].images;
    const image = { src: data.banner, alt: 'Portada' }

    return NextResponse.json(image)
}