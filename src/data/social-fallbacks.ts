import { instagramEmbeds, twitterEmbeds } from './social-embeds';

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

// Real tour photos used as fallback thumbnails when a social embed can't load.
const scheduleImg = '/images/visit/skku/hero.jpeg';
const kaistImg = '/images/visit/kaist/hero.jpg';
const palaceImg = '/images/visit/koreau/hero.jpg';
const skylineImg = '/images/visit/topis/hero.jpg';
const campusImg = '/images/visit/yonsei/hero.jpg';
const topisImg = '/images/visit/topis/control/screens.jpeg';
const studentsImg = '/images/visit/kaist/entrance/group.jpeg';

const instagramFallbackImages = [palaceImg, campusImg, studentsImg];
const twitterFallbackImages = [skylineImg, kaistImg, campusImg];
const youtubeHighlightCards: SocialFallbackCard[] = [
  {
    href: '/visit-schedule/kaist-ai-visit',
    image: kaistImg,
    imageAlt: 'CityU CS delegation visiting KAIST AI',
    title: 'KAIST AI visit highlights',
    meta: 'Tour story',
  },
  {
    href: '/visit-schedule/topis',
    image: skylineImg,
    imageAlt: 'Seoul TOPIS visit highlights',
    title: 'Seoul TOPIS visit highlights',
    meta: 'Tour story',
  },
  {
    href: '/visit-schedule/yonsei',
    image: campusImg,
    imageAlt: 'CityU CS delegation visiting Yonsei University',
    title: 'Yonsei University visit highlights',
    meta: 'Tour story',
  },
];

const facebookHighlightCards: SocialFallbackCard[] = [
  {
    href: '/visit-schedule/topis',
    image: topisImg,
    imageAlt: 'Seoul TOPIS control room screens',
    title: 'Seoul TOPIS highlights',
    meta: 'Tour story',
  },
  {
    href: '/visit-schedule/skku-visit',
    image: scheduleImg,
    imageAlt: 'CityU CS delegation visiting SKKU',
    title: 'SKKU visit highlights',
    meta: 'Tour story',
  },
  {
    href: '/visit-schedule/kaist-ai-visit',
    image: studentsImg,
    imageAlt: 'CityU CS delegation group photo at KAIST AI',
    title: 'KAIST AI group highlights',
    meta: 'Tour story',
  },
];

export const youtubeFallback: PlatformFallback = {
  message:
    'YouTube embeds may be unavailable in some regions or when third-party frames are blocked. Browse tour highlights here instead.',
  cards: youtubeHighlightCards,
};

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
    'Facebook embeds may be unavailable in some regions or when third-party frames are blocked. Browse tour highlights here instead.',
  cards: facebookHighlightCards,
};
