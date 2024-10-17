import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';
import { IconBuildingChurch, IconBuildingStadium, IconCake, IconConfetti, IconMicrophone2, IconMusic } from '@tabler/icons-react';

const items = [
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
];

const header = {
  title: (
    <>
      ¿Qué te ofrece <span>Mariachi Cocula</span> Internacional?
    </>
  ),
  subtitle:
    "No encotrarás ningún otro igual",
  tagline: 'Características',
};

const Features = ({ id, columns = 3, hasBackground = false }: FeaturesProps) => (
  <WidgetWrapper id={'features'} hasBackground={hasBackground} containerClass="scroll-mt-16 max-w-6xl">
    <Headline color={true} header={header} titleClass="text-4xl md:text-5xl" />
    <ItemGrid
      id={id}
      items={items}
      columns={columns}
      defaultColumns={2}
      containerClass={`pb-6 ${columns === 2 ? 'max-w-5xl' : ''}`}
      panelClass={`flex max-w-full ${columns === 2 ? 'sm:max-w-md mx-auto' : ''}`}
      iconClass="h-12 w-12 flex items-center justify-center rounded-md text-black bg-yellow-500 p-2 md:p-3 mt-1.5 mb-4 mr-4 rtl:ml-4 rtl:mr-0"
      titleClass="mb-3 text-xl font-bold"
      descriptionClass="text-gray-600 dark:text-slate-400"
      actionClass="justify-start"
    />
  </WidgetWrapper>
);

export default Features;
