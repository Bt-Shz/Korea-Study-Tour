export type InstagramEmbed = {
  permalink: string;
};

export type TwitterEmbed = {
  tweetId: string;
  tweetUrl: string;
};

/** Instagram oEmbed permalinks — processed by instagram.com/embed.js */
export const instagramEmbeds: InstagramEmbed[] = [
  { permalink: 'https://www.instagram.com/p/DKyext2Bkds/' },
  { permalink: 'https://www.instagram.com/p/DK3VkPdhaq7/' },
  { permalink: 'https://www.instagram.com/p/DK1SYXnBBd-/' },
];

/** X (Twitter) tweet IDs for platform.twitter.com embed iframes */
export const twitterEmbeds: TwitterEmbed[] = [
  {
    tweetId: '1933011283407970788',
    tweetUrl: 'https://twitter.com/CityUCS/status/1933011283407970788',
  },
  {
    tweetId: '1933430391236669733',
    tweetUrl: 'https://twitter.com/CityUCS/status/1933430391236669733',
  },
  {
    tweetId: '1933711001855406152',
    tweetUrl: 'https://twitter.com/CityUCS/status/1933711001855406152',
  },
];
