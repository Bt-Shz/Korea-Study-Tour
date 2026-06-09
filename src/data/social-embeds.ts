export type YouTubeEmbed = {
  videoId: string;
  watchUrl: string;
};

export type InstagramEmbed = {
  permalink: string;
};

export type TwitterEmbed = {
  tweetId: string;
  tweetUrl: string;
};

export type FacebookEmbed = {
  href: string;
  postUrl: string;
};

const EMBED_SLOT_WIDTH = 500;

function facebookPluginUrl(href: string): string {
  return `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(href)}&show_text=true&width=${EMBED_SLOT_WIDTH}`;
}

/** YouTube watch URLs for youtube.com/embed iframes */
export const youtubeEmbeds: YouTubeEmbed[] = [
  { videoId: 'R2xB8wJH808', watchUrl: 'https://youtu.be/R2xB8wJH808' },
  { videoId: '5MGEQP_FSks', watchUrl: 'https://youtu.be/5MGEQP_FSks' },
  { videoId: 'gugPUEgnfew', watchUrl: 'https://youtu.be/gugPUEgnfew' },
];

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

const facebookPostHrefs = [
  'https://www.facebook.com/CityU.CSDept/posts/pfbid0AGtqGXuYZjh49wE6x42kcNJwLrGvnoHDtaTyGS1iHTwWSCnTEUWupUFjNTeJYmASl',
  'https://www.facebook.com/CityU.CS/posts/pfbid0HszdrLvN6KWfV7ivheiuHFMhU1rt6A9kPZQVm4SNFPn9xpef8v6k9uKwvgvtLUDql',
  'https://www.facebook.com/CityU.CS/posts/pfbid02jjEEesk5drwAKk6tzHSRMxqmEbXha7SQtE3o6zZEXeFnwMk4bTbLD8wHHUgEmt31l',
] as const;

/** Facebook post plugin iframes */
export const facebookEmbeds: FacebookEmbed[] = facebookPostHrefs.map((href) => ({
  href,
  postUrl: facebookPluginUrl(href),
}));
