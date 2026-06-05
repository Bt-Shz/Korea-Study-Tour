export const socialFilters = [
  { key: 'youtube', label: 'YouTube', color: '#FF0000', url: 'https://youtube.com' },
  { key: 'facebook', label: 'Facebook', color: '#1877F2', url: 'https://facebook.com' },
  { key: 'instagram', label: 'Instagram', color: '#E4405F', url: 'https://instagram.com' },
  { key: 'x', label: 'X', color: '#111111', url: 'https://x.com' },
] as const;

export type SocialPlatformKey = (typeof socialFilters)[number]['key'];

export const socialPosts = [
  {
    id: 1,
    platform: 'YouTube',
    platformKey: 'youtube' as const,
    color: '#FF0000',
    username: '@CityUCS',
    thumbnail:
      'https://images.unsplash.com/photo-1637073760127-1c914f00d3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxTZW91bCUyMGNpdHlzY2FwZSUyMG5pZ2h0JTIwbW9kZXJufGVufDF8fHx8MTc3OTM2ODMwOHww&ixlib=rb-4.1.0&q=80&w=600',
    title: 'Day 1: Seoul Tech Tour Highlights',
    link: 'https://youtube.com',
    type: 'video' as const,
  },
  {
    id: 2,
    platform: 'YouTube',
    platformKey: 'youtube' as const,
    color: '#FF0000',
    username: '@CityUCS',
    thumbnail:
      'https://images.unsplash.com/photo-1706520559246-daa3cf872267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBLb3JlYSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc5MzY4MzA4fDA&ixlib=rb-4.1.0&q=80&w=600',
    title: 'KAIST AI Graduate Lab — Full Walkthrough',
    link: 'https://youtube.com',
    type: 'video' as const,
  },
  {
    id: 3,
    platform: 'YouTube',
    platformKey: 'youtube' as const,
    color: '#FF0000',
    username: '@CityUCS',
    thumbnail:
      'https://images.unsplash.com/photo-1709382204074-de328e811d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBLb3JlYSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc5MzY4MzA4fDA&ixlib=rb-4.1.0&q=80&w=600',
    title: 'Quick Tour of Korea University Campus 🎓',
    link: 'https://youtube.com/shorts',
    type: 'short' as const,
  },
  {
    id: 4,
    platform: 'Facebook',
    platformKey: 'facebook' as const,
    color: '#1877F2',
    username: 'CityU CS Department',
    thumbnail:
      'https://images.unsplash.com/photo-1637073760092-a3f0ef3fb07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW91bCUyMGNpdHlzY2FwZSUyMG5pZ2h0JTIwbW9kZXJufGVufDF8fHx8MTc3OTM2ODMwOHww&ixlib=rb-4.1.0&q=80&w=600',
    title: 'Cultural visit to the Seoul Gallery at City Hall 🏛️',
    link: 'https://facebook.com',
    type: 'post' as const,
  },
  {
    id: 5,
    platform: 'Facebook',
    platformKey: 'facebook' as const,
    color: '#1877F2',
    username: 'CityU CS Department',
    thumbnail:
      'https://images.unsplash.com/photo-1761528953320-7c003e3e651c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW91bCUyMEd5ZW9uZ2Jva2d1bmclMjBwYWxhY2UlMjBtb2Rlcm4lMjBza3lsaW5lfGVufDF8fHx8MTc3OTM2ODMxM3ww&ixlib=rb-4.1.0&q=80&w=600',
    title:
      'Our team at the Seoul TOPIS Safety Integration Center. What an incredible briefing! 🙌',
    link: 'https://facebook.com',
    type: 'post' as const,
  },
  {
    id: 6,
    platform: 'Facebook',
    platformKey: 'facebook' as const,
    color: '#1877F2',
    username: 'CityU CS Department',
    thumbnail:
      'https://images.unsplash.com/photo-1709382204074-de328e811d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBLb3JlYSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc5MzY4MzA4fDA&ixlib=rb-4.1.0&q=80&w=600',
    title: 'Group photo at Yonsei Engineering Research Park — thank you for having us! 🙏',
    link: 'https://facebook.com',
    type: 'post' as const,
  },
  {
    id: 7,
    platform: 'Instagram',
    platformKey: 'instagram' as const,
    color: '#E4405F',
    username: '@cityucs',
    thumbnail:
      'https://images.unsplash.com/photo-1761528953320-7c003e3e651c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW91bCUyMEd5ZW9uZ2Jva2d1bmclMjBwYWxhY2UlMjBtb2Rlcm4lMjBza3lsaW5lfGVufDF8fHx8MTc3OTM2ODMxM3ww&ixlib=rb-4.1.0&q=80&w=600',
    title: 'Seoul vibes ✨ #TechTour #CityU #Seoul',
    link: 'https://instagram.com',
    type: 'post' as const,
  },
  {
    id: 8,
    platform: 'Instagram',
    platformKey: 'instagram' as const,
    color: '#E4405F',
    username: '@cityucs',
    thumbnail:
      'https://images.unsplash.com/photo-1637073759412-9d3ddd764bd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxTZW91bCUyMGNpdHlzY2FwZSUyMG5pZ2h0JTIwbW9kZXJufGVufDF8fHx8MTc3OTM2ODMwOHww&ixlib=rb-4.1.0&q=80&w=600',
    title: 'Seoul Gallery visit day 🏛️ #Seoul #Korea #CityUSeoul',
    link: 'https://instagram.com',
    type: 'post' as const,
  },
  {
    id: 9,
    platform: 'Instagram',
    platformKey: 'instagram' as const,
    color: '#E4405F',
    username: '@cityucs',
    thumbnail:
      'https://images.unsplash.com/photo-1706520559246-daa3cf872267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBLb3JlYSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc5MzY4MzA4fDA&ixlib=rb-4.1.0&q=80&w=600',
    title: 'When technology meets tradition 🏯💻 #CityUTour #KoreaTech',
    link: 'https://instagram.com',
    type: 'post' as const,
  },
  {
    id: 10,
    platform: 'X',
    platformKey: 'x' as const,
    color: '#ffffff',
    username: '@CityU_CS',
    thumbnail:
      'https://images.unsplash.com/photo-1709382204074-de328e811d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBLb3JlYSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc5MzY4MzA4fDA&ixlib=rb-4.1.0&q=80&w=600',
    title: 'Day 2: Incredible insights from KAIST AI Graduate Lab research exchange 🔬 Thread below →',
    link: 'https://x.com',
    type: 'post' as const,
  },
  {
    id: 11,
    platform: 'X',
    platformKey: 'x' as const,
    color: '#ffffff',
    username: '@CityU_CS',
    thumbnail:
      'https://images.unsplash.com/photo-1637073760127-1c914f00d3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxTZW91bCUyMGNpdHlzY2FwZSUyMG5pZ2h0JTIwbW9kZXJufGVufDF8fHx8MTc3OTM2ODMwOHww&ixlib=rb-4.1.0&q=80&w=600',
    title:
      'Just landed in Seoul! Kicking off the Seoul Tech & Culture Tour 2026 with 25 amazing students from @CityU ✈️🇰🇷',
    link: 'https://x.com',
    type: 'post' as const,
  },
  {
    id: 12,
    platform: 'X',
    platformKey: 'x' as const,
    color: '#ffffff',
    username: '@CityU_CS',
    thumbnail:
      'https://images.unsplash.com/photo-1637073759412-9d3ddd764bd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxTZW91bCUyMGNpdHlzY2FwZSUyMG5pZ2h0JTIwbW9kZXJufGVufDF8fHx8MTc3OTM2ODMwOHww&ixlib=rb-4.1.0&q=80&w=600',
    title:
      'Fascinating discussion at the KAIST AI Graduate Lab. The future of AI is being shaped right here 🧠',
    link: 'https://x.com',
    type: 'post' as const,
  },
] as const;

export function platformAccentColor(key: SocialPlatformKey): string {
  return key === 'x' ? '#111' : socialFilters.find((f) => f.key === key)?.color ?? '#111';
}
