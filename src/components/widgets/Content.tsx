'use client';

import { IconCheck } from '@tabler/icons-react';
import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import { type TypeLocationsMap, Locations } from "~/shared/data/pages/locations";
import ApiMap from './Map';
import MyMapComponent from './Map';

const Content = ({
  header,
  content,
  items,
  image,
  isReversed,
  isAfterContent,
  id,
  hasBackground = false,
}: ContentProps) => {

  return <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}
  >
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="mx-auto max-w-7xl">
      <div className={`md:flex ${isReversed ? 'md:flex-row-reverse' : ''} md:gap-16`}>
        <div className="self-center md:basis-1/2">
          {content && <div className="mb-8 lg:mb-12 text-lg text-gray-600 dark:text-slate-400">{content}</div>}
          <ul className=' justify-between columns-2'>
            {Locations.map((l: TypeLocationsMap, index) => 
              <li className='p-2 flex items-center gap-1'><IconCheck className='rounded-xl bg-blue-700 p-1 text-white'/> {l[0]}</li>
            )}
          </ul>
          <h2 className='font-semibold text-xl text-center'>Y muchos más</h2>
        </div>

        <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
          {/* {image && (
            <div className="relative m-auto max-w-4xl">
              <Image
                className="mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"
                src={image.src}
                width={828}
                height={828}
                alt={image.alt}
                sizes="(max-width: 768px) 100vw, 432px"
                placeholder="blur"
                quality={50}
              />
            </div>
          )} */}
          <MyMapComponent />
        </div>
      </div>
    </div>
  </WidgetWrapper>
}

export default Content;
