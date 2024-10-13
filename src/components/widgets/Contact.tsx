import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import { IconClock, IconMapPin, IconPhoneCall } from '@tabler/icons-react';
import { ConfigCollection } from '~/utils/configCollections';

const Contact = async ({ header, content, form, id, hasBackground = false }: ContactProps) => {
  const c = await ConfigCollection.getContacts();
  const cc = Object.values(c)[2] as any;
  const contacts = cc.contacts
  const h = await ConfigCollection.getHours();
  const hh = Object.values(h)[2] as any;
  const hours = hh.hours;

  const items = [
    {
      title: 'Dirección',
      description: ['Colombia'],
      icon: IconMapPin,
    },
    {
      title: 'Contacto',
      description: [`Teléfono: ${contacts.phone.primary}`, `Email: ${contacts.email}`],
      icon: IconPhoneCall,
    },
    {
      title: 'Horario',
      description: [`Lunes - Viernes: ${hours.mf}`, `Sábados & Domingos: ${hours.ss}`],
      icon: IconClock,
    },
  ];

  return <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center">
      <div className={`grid ${!content && !items ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
        <div className="h-full pr-6">
          {content && <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">{content}</p>}
          <ul className="mb-6 md:mb-0">
            {items &&
              items.map(({ title, description, icon: Icon }, index) => (
                <li key={`item-contact-${index}`} className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <div className="ml-4 rtl:ml-0 rtl:mr-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
                    {typeof description === 'string' ? (
                      <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400">
                        {description}
                      </p>
                    ) : (
                      description &&
                      description.map((desc, index) => (
                        <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400">
                          {desc}
                        </p>
                      ))
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <Form {...form} containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12" btnPosition="center" />
      </div>
    </div>
  </WidgetWrapper>
};

export default Contact;
