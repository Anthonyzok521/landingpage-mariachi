import Image from 'next/image';
import { HeroProps, IImage } from '~/shared/types';
import CTA from '../common/CTA';
import fontTitle from '~/fonts';

const Hero = async ({ title, subtitle, tagline, callToAction, image }: HeroProps) => {

  const img = await image()

  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {tagline && (
              <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                {tagline}
              </p>
            )}
            {title && (
                <h1 className={`${fontTitle.className} text-yellow-400 mb-6 text-5xl lg:text-6xl`}>
                  {title}
                </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && <CTA callToAction={callToAction} linkClass="btn bg-yellow-400" />}
              </div>
            </div>
          </div>
          {image && (
            <div className="relative m-auto max-w-5xl">
              <Image                
                className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                src={img.banner.src}
                alt={img.banner.alt}
                width={1024}
                height={607}
                sizes="(max-width: 64rem) 100vw, 1024px"
                loading="eager"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
