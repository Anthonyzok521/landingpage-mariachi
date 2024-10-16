'use client'
import Image from 'next/image';
import { IImage } from '~/shared/types';

import fontTitle from '~/fonts';
import { Suspense, useEffect, useState } from 'react';
import { IconPhone } from '@tabler/icons-react';
import CTA from '../common/CTA';

const Hero = () => {
  const [image, setImage] = useState<IImage>();
  useEffect(() => {
    const getImageBanner = async () => {
      const res = await fetch('/api/images');
      const data = await res.json();
      console.log(data)
      setImage(data);
    }

    getImageBanner();
  }, [])

  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            <h1 className={`${fontTitle.className} text-yellow-400 mb-6 text-5xl lg:text-6xl`}>
              Mariachi <span>Cocula</span> {' '}
              <span className="sm:whitespace-nowrap">Internacional</span>
            </h1>

            <div className="mx-auto max-w-3xl">
              <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">La mejor opción para tus fiestas y eventos.
                Mariachi Cocula Internacional acompaña a grandes artistas. Y tiene el mejor repertorio para tu espectáculo.</p>
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                <CTA callToAction={{
                  text: '¡Contratar ahora!',
                  href: 'https://api.whatsapp.com/send?phone=+573022305738&text=Hola!',
                  icon: IconPhone,
                  targetBlank: true,
                }} linkClass="btn bg-yellow-400" />

              </div>
            </div>
          </div>
          <div className="relative m-auto max-w-5xl max-h-[1160px] overflow-hidden">
            <Image
              className="mx-auto h-auto w-full object-cover origin-bottom rounded-md bg-gray-400 dark:bg-slate-700"
              src={image?.src || ''}
              alt={'Portada'}
              width={1024}
              height={607}
              sizes="(max-width: 64rem) 100vw, 1024px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
