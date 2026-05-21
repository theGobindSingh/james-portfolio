import pencilPhoto from '@images/pencil_drawing_wr.png';

export const firstName = 'James';
export const lastName = 'Loder';
export const fullName = `${firstName} ${lastName}`;

export const about = `I lead at the intersection of brand strategy, art direction, and corporate identity—unifying visual systems to protect enterprise equity and drive long-term commercial value.`;

export const designation = 'Art Director | Brand Manager | Creative Strategist';

export const email = 'android.gobind@gmail.com';

export const headerAndNavData: {
  logoText: string;
  middleText?: string;
  bottomPrimaryLink?: {
    text: string;
    url: string;
  };
  links: {
    text: string;
    targetClassName: string;
  }[];
  bottomLinks?: {
    text: string;
    url: string;
  }[];
} = {
  logoText: fullName,
  middleText: designation,
  links: [
    {
      text: 'Home',
      targetClassName: 'hero',
    },
    {
      text: 'About',
      targetClassName: 'about',
    },
    {
      text: 'Contact',
      targetClassName: 'contact',
    },
  ],
  bottomPrimaryLink: {
    text: 'Email address',
    url: `mailto:${email}`,
  },
  bottomLinks: [
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thegobindsingh/',
    },
    {
      text: 'GitHub',
      url: 'https://www.github.com/theGobindSingh',
    },
    {
      text: 'Twitter',
      url: 'https://www.twitter.com/theGobindSingh',
    },
  ],
};

export const homeHeroData = {
  title: `${fullName}.`,
  text: about,
  img: pencilPhoto,
  dateText: 'Building exceptional digital experiences since',
  date: '2015',
  buttonText: 'Contact ↗',
  buttonTargetClassName: 'contact',
};
