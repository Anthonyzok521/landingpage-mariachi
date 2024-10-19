import Image from 'next/image';
import { IImage } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Timeline from '../common/Timeline';
import Headline from '../common/Headline';

const Steps = ({images}: IImage) => {
  
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

        <Timeline iconClass="text-primary border-primary-900" />
      </div>

      <div className="relative md:basis-1/2">
          <Image
            src={images.steps || 'https://placehold.jp/1200x600.png'}
            width={400}
            height={768}
            alt={"Steps"}
            className="inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700"
            quality={50}
          />
      </div>

    </div>
  </WidgetWrapper>
};

export default Steps;
