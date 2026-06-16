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
