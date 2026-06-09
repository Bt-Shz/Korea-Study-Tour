import { facebookEmbeds, instagramEmbeds, twitterEmbeds } from './social-embeds';

export type SocialFallbackCard = {
  href: string;
  external?: boolean;
  image: string;
  imageAlt: string;
  title: string;
  meta: string;
};

export type PlatformFallback = {
  message: string;
  cards: SocialFallbackCard[];
};

const scheduleImg =
  'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc5Mzc1MzI4fDA&ixlib=rb-4.1.0&q=80&w=600';

const kaistImg =
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGxhYiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc5Mzc1MzM4fDA&ixlib=rb-4.1.0&q=80&w=600';

const palaceImg =
  'https://images.unsplash.com/photo-1761528953320-7c003e3e651c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW91bCUyMEd5ZW9uZ2Jva2d1bmclMjBwYWxhY2UlMjBtb2Rlcm4lMjBza3lsaW5lfGVufDF8fHx8MTc3OTM2ODMxM3ww&ixlib=rb-4.1.0&q=80&w=600';

const skylineImg =
  'https://images.unsplash.com/photo-1637073760127-1c914f00d3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxTZW91bCUyMGNpdHlzY2FwZSUyMG5pZ2h0JTIwbW9kZXJufGVufDF8fHx8MTc3OTM2ODMwOHww&ixlib=rb-4.1.0&q=80&w=600';

const campusImg =
  'https://images.unsplash.com/photo-1706520559246-daa3cf872267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBLb3JlYSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc5MzY4MzA4fDA&ixlib=rb-4.1.0&q=80&w=600';

const topisImg =
  'https://images.unsplash.com/photo-1637073760092-a3f0ef3fb07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW91bCUyMGNpdHlzY2FwZSUyMG5pZ2h0JTIwbW9kZXJufGVufDF8fHx8MTc3OTM2ODMwOHww&ixlib=rb-4.1.0&q=80&w=600';

const studentsImg =
  'https://images.unsplash.com/photo-1709382204074-de328e811d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBLb3JlYSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc5MzY4MzA4fDA&ixlib=rb-4.1.0&q=80&w=600';

const instagramFallbackImages = [palaceImg, campusImg, studentsImg];
const twitterFallbackImages = [skylineImg, kaistImg, campusImg];
const facebookFallbackImages = [topisImg, scheduleImg, studentsImg];

export const instagramFallback: PlatformFallback = {
  message:
    'Instagram content is not available in some regions or when third-party scripts are blocked. Open the posts on Instagram or explore tour highlights on our site.',
  cards: [
    ...instagramEmbeds.map((embed, index) => ({
      href: embed.permalink,
      external: true,
      image: instagramFallbackImages[index]!,
      imageAlt: 'CityU CS on Instagram',
      title: 'View post on Instagram',
      meta: '@hkcityucs',
    })),
  ],
};

export const twitterFallback: PlatformFallback = {
  message:
    'X embeds could not be loaded in your browser. Open the posts on X or browse highlights below.',
  cards: [
    ...twitterEmbeds.map((embed, index) => ({
      href: embed.tweetUrl,
      external: true,
      image: twitterFallbackImages[index]!,
      imageAlt: 'CityU CS on X',
      title: 'View post on X',
      meta: '@CityUCS',
    })),
  ],
};

export const facebookFallback: PlatformFallback = {
  message:
    'Facebook embeds could not be loaded in your browser. Open the posts on Facebook or see tour highlights below.',
  cards: [
    ...facebookEmbeds.map((embed, index) => ({
      href: embed.href,
      external: true,
      image: facebookFallbackImages[index]!,
      imageAlt: 'CityU CS on Facebook',
      title: index === 0 ? 'View post on CityU CS Department' : 'View post on CityU CS',
      meta: 'Facebook',
    })),
  ],
};
