export const socialFilters = [
  {
    key: 'youtube',
    label: 'YouTube',
    color: '#FF0000',
    url: 'https://www.youtube.com/@CityUCS',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    color: '#1877F2',
    url: 'https://www.facebook.com/CityU.CS',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    color: '#E4405F',
    url: 'https://www.instagram.com/cityucs/',
  },
  { key: 'x', label: 'X', color: '#111111', url: 'https://twitter.com/CityUCS' },
] as const;

export type SocialPlatformKey = (typeof socialFilters)[number]['key'];

export function platformAccentColor(key: SocialPlatformKey): string {
  return key === 'x' ? '#111' : socialFilters.find((f) => f.key === key)?.color ?? '#111';
}
