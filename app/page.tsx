import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Contact from '~/components/widgets/Contact';
import {
  contactHome,
  contentHomeOne,
  featuresHome,
  heroHome,
  stepsHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Steps {...stepsHome} />
      <Contact {...contactHome} />
    </>
  );
}
