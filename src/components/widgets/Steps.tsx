'use client';

import Image from 'next/image';
import { IconArrowDown, IconCheck } from '@tabler/icons-react';
import { IImage, StepsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Timeline from '../common/Timeline';
import Headline from '../common/Headline';
import { useEffect, useState } from 'react';

// Steps data on Home page *******************
const items = [
  {
    title: 'Con alegría',
    description:
      'Serenatas de 7 canciones mas la ñapa y un recordatorio.',
    icon: IconArrowDown,
  },
  {
    title: 'Responsabilidad',
    description:
      'Mariachi Desde 5 integrantes en Adelante ajustado a su presupuesto.',
    icon: IconArrowDown,
  },
  {
    title: 'Calidad',
    description:
      'Somos la mejor opción en cuanto a calidad y precio se refiere',
    icon: IconArrowDown,
  },
  {
    title: 'Contratados',
  },
];

const Steps = () => {
  const [image, setImage] = useState<IImage>();
  useEffect(() => {
    const getImageSteps = async () => {
      const res = await fetch('/api/images');
      const data = await res.json();
      console.log(data)
      setImage(data.steps);
    }

    getImageSteps();
  }, [])

  return <WidgetWrapper id={'Steps'} hasBackground={false} containerClass="max-w-6xl ">
    <div
      className={`flex flex-col gap-8 md:gap-12 ${false ? 'md:flex-row-reverse' : ''} ${true ? 'md:flex-row' : ''
        }`}
    >
      <div
        className={`md:py-4 ${true ? 'md:pr-16 md:rtl:pr-0 md:rtl:pl-16 md:basis-1/2' : 'max-w-4xl mx-auto md:self-center'
          }`}
      >

        <Headline
          header={{title:'¿Sigues con dudas? Aqui un resumen'}}
          containerClass={true ? 'text-left rtl:text-right' : ''}
          titleClass="text-3xl sm:text-4xl"
          subtitleClass={true ? 'text-left rtl:text-right' : ''}
        />

        <Timeline items={items} defaultIcon={IconCheck} iconClass="text-primary border-primary-900" />
      </div>

      <div className="relative md:basis-1/2">
        {image && (
          <Image
            src={image?.src || 'https://placehold.jp/1200x600.png'}
            width={400}
            height={768}
            alt={image?.alt}
            /* placeholder="blur" */
            className="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700"
            quality={50}
          />
        )}
      </div>

    </div>
  </WidgetWrapper>
};

export default Steps;
