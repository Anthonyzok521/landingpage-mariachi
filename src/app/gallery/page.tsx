import * as api from '../api'
import Gallery from "~/components/common/Gallery";

export default async function Home({ }) {
  const gallery = await api.getImagesFromGallery()

  return <>
    <div className="flex flex-col justify-center items-center p-2">
    <h1 className="leading-tighter font-heading text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
      Galería      
    </h1>
    <h2 className="mb-8">Revive nuestros espectáctulos</h2>
    </div>
    {/* <div className="flex gap-4 flex-wrap md:p-10 items-center justify-center">
        {gallery.map(({ title, path, type, }: IGallery, index: number) => type == 'image' ?
          <div key={`i-${index}`} className="relative flex min-h-80 md:h-[80dvh] w-full rounded-md">
            <Image
              src={path}
              alt={title}
              sizes="100vw"
              fill              
              className="object-cover rounded-md"
            />
          </div>
          :
          <div key={`v-${index}`} className="relative aspect-video">
            <iframe
              src={path}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>)}
      </div> */}

      <Gallery mediaItems={gallery}/>
  </>
}