import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { CallToActionType, LinkOrButton } from '~/shared/types';

const CTA = ({ callToAction, containerClass, linkClass, iconClass, onClickHandle, action }: LinkOrButton) => {
  const { text, href, icon: Icon, targetBlank } = callToAction as CallToActionType;

  return (
    <>
      {(text || Icon) && (
        <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>

          {action ? <button type='button' onClick={onClickHandle} className={twMerge('inline-flex items-center justify-center w-full sm:mb-0 ', linkClass)}>
          {Icon && <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
          {text}
          </button>
            :

            !href ?
              <button type='submit' className={twMerge('inline-flex items-center justify-center w-full sm:mb-0 ', linkClass)}>
                {Icon && <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
                {text}
              </button>
              :
              targetBlank ? (
                <Link
                  className={twMerge('inline-flex items-center justify-center w-full sm:mb-0', linkClass)}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Icon && <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
                  {text}
                </Link>
              ) : (
                <Link className={twMerge('inline-flex items-center justify-center w-full sm:mb-0 ', linkClass)} href={href}>
                  {Icon && <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
                  {text}
                </Link>
              )
          }
        </div>
      )}
    </>
  );
};

export default CTA;
