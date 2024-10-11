import {
  IconArrowDown,
  IconClock,
  IconPhone,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconMicrophone2,
  IconConfetti,
  IconCake,
  IconBuildingChurch,
  IconBuildingStadium,
  IconMusic,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FeaturesProps,
  HeroProps,
  StepsProps,
} from '../../types';
import heroImg from '~/assets/images/portada.jpg';
import gasImg from '~/assets/images/steps.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Mariachi <span>Cocula</span> {' '}
      <span className="sm:whitespace-nowrap">Internacional</span>
    </>
  ),
  subtitle: (
    <>
      La mejor opción para tus fiestas y eventos.
      Mariachi Cocula Internacional acompaña a grandes artistas. Y tiene el mejor repertorio para tu espectáculo.
    </>
  ),
  callToAction: {
    text: '¡Contratar ahora!',
    href: 'https://api.whatsapp.com/send?phone=+573022305738&text=Hola!',
    icon: IconPhone,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Learn more',
    href: '/',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        ¿Qué te ofrece <span>Mariachi Cocula</span> Internacional?
      </>
    ),
    subtitle:
      "No encotrarás ningún otro igual",
    tagline: 'Características',
  },
  items: [
    {
      title: 'Serenatas',
      description:
        'Ofrecer serenatas personalizadas para sorprender a esa persona especial en un momento inolvidable. Puedes incluir opciones como serenatas a domicilio, en restaurantes o en lugares públicos.',
      icon: IconMicrophone2,
    },
    {
      title: 'Eventos Sociales',
      description:
        'Proporcionar música en vivo para todo tipo de eventos sociales, como fiestas de cumpleaños, graduaciones, aniversarios, reuniones familiares, etc.',
      icon: IconConfetti,
    },
    {
      title: 'Bodas',
      description:
        'Amenizar ceremonias religiosas y civiles, cócteles, banquetes y bailes. Ofrecer un repertorio variado para cada momento de la celebración.',
      icon: IconBuildingChurch,
    },
    {
      title: 'Fiestas de 15 años',
      description:
        'Crear un ambiente festivo y tradicional en las fiestas de quince años, con música que haga bailar a todos los invitados.',
      icon: IconCake,
    },
    {
      title: 'Eventos Corporativos',
      description:
        "Agregar un toque de elegancia y tradición a eventos corporativos, como inauguraciones, cocteles de negocios y convenciones.",
      icon: IconBuildingStadium,
    },
    {
      title: 'Eventos con Artistas',
      description:
        'Acompañamos a grandes artistas a realizar los mejores espectáculos.',
      icon: IconMusic,
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Prestamos servicio en toda Cundinamarca',
    tagline: 'Ubicación',
  },
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

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: '¿Sigues con dudas? Aqui un resumen',
  },
  items: [
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
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'No esperes más y contáctanos',
    subtitle: 'Envíanos un correo',
    tagline: 'Contacto',
  },
  content:
    'Mariachi Cocula Internacional es la mejor opción para tus fiestas y eventos. Acompañamos a grandes artistas y tenemos el mejor repertorio para tu espectáculo.',
  items: [
    {
      title: 'Dirección',
      description: ['Bogotá'],
      icon: IconMapPin,
    },
    {
      title: 'Contacto',
      description: ['Teléfono: +57 302 2305738', 'Email: contact@mariachici.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Horario',
      description: ['Lunes - Viernes: 07:00 - 00:00', 'Saturday & Sunday: 08:00 - 23:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Enviar un correo',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Tu nombre',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Tu correo electrónico',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Dinos tu mensaje...',
    },
    btn: {
      title: 'Enviar',
      type: 'submit',
    },
  },
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
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
