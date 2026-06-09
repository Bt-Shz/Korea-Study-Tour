export type TripVenue = {
  name: string;
  url?: string;
};

export const institutionLinks = {
  cityu: {
    label: 'City University of Hong Kong',
    href: 'https://www.cityu.edu.hk',
  },
  cityuCs: {
    label: 'Department of Computer Science',
    href: 'https://www.cs.cityu.edu.hk/en',
  },
  skku: {
    label: 'Sungkyunkwan University (SKKU)',
    href: 'https://www.skku.edu/eng/index.do',
  },
  kaistAi: {
    label: 'KAIST AI Graduate Lab',
    href: 'https://gsai.kaist.ac.kr/',
  },
  koreaUniversity: {
    label: 'Korea University',
    href: 'https://www.korea.edu/en/index.do',
  },
  yonsei: {
    label: 'Yonsei University',
    href: 'https://www.yonsei.ac.kr/en_sc/index.do',
  },
  seoulGallery: {
    label: 'Seoul Gallery',
    href: 'https://www.seoul.go.kr/seoulgallery',
  },
  seoulTopis: {
    label: 'Seoul TOPIS (Seoul Transport Operation and Information Service)',
    href: 'https://topis.seoul.go.kr/openEngIntro.do',
  },
} as const;

export const trip = {
  title: 'Seoul Study Tour 2026',
  department: 'Department of Computer Science',
  university: 'City University of Hong Kong',
  dates: {
    start: '18 May 2026',
    end: '22 May 2026',
    range: '18-22 May 2026',
    shortRange: '18-22',
    days: 5,
  },
  venuesCount: 6,
  studentCount: 25,
  staffCount: 3,
  venues: [
    {
      name: institutionLinks.skku.label,
      url: institutionLinks.skku.href,
    },
    {
      name: institutionLinks.kaistAi.label,
      url: institutionLinks.kaistAi.href,
    },
    {
      name: institutionLinks.koreaUniversity.label,
      url: institutionLinks.koreaUniversity.href,
    },
    {
      name: institutionLinks.yonsei.label,
      url: institutionLinks.yonsei.href,
    },
    {
      name: institutionLinks.seoulGallery.label,
      url: institutionLinks.seoulGallery.href,
    },
    {
      name: institutionLinks.seoulTopis.label,
      url: institutionLinks.seoulTopis.href,
    },
  ] satisfies readonly TripVenue[],
  about: {
    closing: 'Enjoy exploring our website and seeing different aspects of our tour!',
  },
} as const;
