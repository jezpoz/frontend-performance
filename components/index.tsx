import TitleComponent, { TitleComponentProps } from './title';
import HeroComponent from './hero';
import Body from './body';

export default function ([type, content], index) {
  switch (type) {
    case 'title': {
      return <TitleComponent key={index} {...content as TitleComponentProps}/>
    }
    case 'hero': {
      return <HeroComponent key={index} {...content} />
    }
    case 'body': {
      return <Body key={index} {...content} />
    }
    default: {
      return null;
    }
  }
}