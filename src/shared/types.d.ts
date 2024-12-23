import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';
import type { TablerIcon } from "@tabler/icons-react"

type Widget = {
  id?: string;
  /** Does it have a background? */
  hasBackground?: boolean;
};

type WrapperTagProps = Widget & {
  children: React.ReactNode;
  containerClass?: string;
};

type BackgroundProps = {
  children?: React.ReactNode;
  hasBackground?: boolean;
};

type Header = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  position?: 'center' | 'right' | 'left';
};

type HeadlineProps = {
  header: Header;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
  color?: boolean
};

type Icon = TablerIcon;

type CallToActionType = {
  text?: string;
  href?: string;
  icon?: Icon;
  targetBlank?: boolean;
};

type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
  action?: Boolean;
  submit?: Boolean;
  onClickHandle?: () => void;
};

type Button = {
  title: string;
  type: 'button' | 'submit' | 'reset';
};

type Input = {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
};

type Textarea = {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
};

type Checkbox = {
  label: string;
  value: string;
};

type Radio = {
  label: string;
};

type RadioBtn = {
  label?: string;
  radios: Array<Radio>;
};

type SmallForm = {
  icon?: Icon;
  input: Input;
  btn: Button;
};

type FormProps = {
  title?: string;
  description?: string;
  inputs: Array<Input>;
  radioBtns?: RadioBtn;
  textarea?: Textarea;
  checkboxes?: Array<Checkbox>;
  btnPosition?: 'center' | 'right' | 'left';
  containerClass?: string;
};

type Image = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
};

type Item = {
  title?: string | boolean | number;
  description?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Icon;
  callToAction?: CallToActionType;
};

type ItemGrid = {
  id?: string;
  items?: Array<Item>;
  columns?: number;
  defaultColumns?: number;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  actionClass?: string;
};

type Timeline = {
  id?: string;
  items?: Array<Item>;
  defaultIcon?: Icon;
  containerClass?: string;
  panelClass?: string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
};

type Link = {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Icon;
};

type Column = {
  title: string;
  items: Array<Item>;
  callToAction?: CallToActionType;
};

type MenuLink = Link & {
  links?: Array<Link>;
};

type Links = {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
};

type Tab = {
  link?: Link;
  items: Array<Item>;
};

type Dropdown = {
  options: Tab[];
  activeTab: number;
  onActiveTabSelected: Function;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
};

type ToggleMenuProps = {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
};

type WindowSize = {
  width: number;
  height: number;
};

// WIDGETS
type HeroProps = {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  tagline?: string;
  callToAction?: CallToActionType;
  callToAction2?: CallToActionType;
};

type CallToActionProps = Widget & {
  title: string;
  subtitle: string;
  callToAction?: CallToActionType;
  items?: Array<Item>;
};

type FeaturesProps = Widget & {
  header?: Header;
  items?: Array<Item>;
  /** How many columns should it have? */
  columns?: 1 | 2 | 3;
  /** Do you want the image to be displayed? */
  isImageDisplayed?: boolean;
  image?: Image;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
};

type ContentProps = Widget & {
  content?: string;
  items?: Array<Item>;
  image?: Image;
  isReversed?: boolean;
  isAfterContent?: boolean;
};

type StepsProps = Widget & {
  header?: Header;
  items: Array<Item>;
  /** Do you want the image to be displayed? */
  isImageDisplayed?: boolean;
  /** Do you want to reverse the widget? */
  isReversed?: boolean;
};

type SocialProofProps = Widget & {
  images: Array<Image>;
};

type ContactProps = Widget & {
  header?: Header;
  content?: string;
};

type FooterProps = {
  title?: string;
  links?: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
};

type HeaderProps = {
  links?: Array<MenuLink>;
  actions?: Array<CallToActionType>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
};

type MusicEvent = {
  _id: string
  name: string
  description: string
  fullDescription: string
  date: Date
  city: string
  imageUrl: string
}
/* 
type IEvents = {
  title: string
  description: string
  image: string
  positionImage: string
  datetime: string
  location: string
} */

//type DataEvent = Array<IEvents>;

type IImage = {
  images: {
    banner?:string
    steps?:string
  }
}

type IGallery = {
  _id: string
  title: string
  path: string
  type: string
}

type IAuth = {
  auth?: boolean
  token : string
}

type ILogin = {
  auth?: boolean
  message?: string
  token : string
}

type Configs = {
  _id: string,
  contacts: {
        phone: {
            primary: string,
            secondary: string,
        },
        email: string,
        social: {
            instagram: string,
            facebook: string,
            tiktok: string,
            maps: string,
            x: string,
        }
    },
    hours: {
        mf: string,
        ss: string 
    },
    images: {
        banner: string,
        steps: string
    },
}