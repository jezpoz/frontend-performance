import PageTitleComponent from './page-title';
import HeroComponent from './hero';
import BodyComponent from './body';

export default function ([type, content], index) {
  switch (type) {
    case 'title': {
      return <PageTitleComponent key={index} {...content} />
    }
    case 'hero': {
      return <HeroComponent key={index} {...content} />
    }
    case 'body': {
      return <BodyComponent key={index} {...content} />
    }
    default: {
      return null;
    }
  }
}