import Image from "next/image";
import { Gallery } from "~/shared/types";
import * as api from '../api'

export default async function Home({ }) {
  const gallery = await api.getImagesFromGallery()

  return <>
    <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
      Galería
      <div className="flex gap-4 flex-wrap p-10 items-center justify-center">
        {gallery.map(({title, image,}:Gallery, index:number) => <Image className="transition-all rounded-md hover:-translate-y-5 hover:animate-pulse" key={`i-${index}`}  src={image} alt={title} width={300} height={600}/>)}
      </div>
    </h1>
  </>
}
