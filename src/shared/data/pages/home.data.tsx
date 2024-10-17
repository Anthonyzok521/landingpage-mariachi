'use client'
import {
  IconPhone,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FeaturesProps,
} from '../../types';

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  items: [
    {
      title: 'Bogotá',
    },
    {
      title: 'Cajicá',
    },
    {
      title: 'Chía',
    },
    {
      title: 'Cogua',
    },
    {
      title: 'Gachancipá',
    },
    {
      title: 'Nemocón',
    },
    {
      title: 'Sabana de Bogotá',
    },
    {
      title: 'Sopó',
    },
    {
      title: 'Tabio',
    },
    {
      title: 'Tenjo',
    },
    {
      title: 'Tocancipá',
    },
    {
      title: 'Zipaquirá',
    },
  ],
  isReversed: false,
  isAfterContent: false,
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Mariachi Cocula Internacional',
  subtitle:
    'No esperes más',
  callToAction: {
    text: '¡Contratar ahora!',
    href: 'https://api.whatsapp.com/send?phone=+573022305738&text=Hola!',
    icon: IconPhone,
  }
};
