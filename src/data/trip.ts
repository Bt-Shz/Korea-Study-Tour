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
  title: 'Seoul Tech & Culture Tour 2026',
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
    'Sungkyunkwan University (SKKU)',
    'KAIST AI Graduate Lab',
    'Korea University',
    'Yonsei University',
    'Seoul Gallery',
    'Seoul TOPIS (Seoul Transport Operation and Information Service)',
  ],
  about: {
    closing: 'Enjoy exploring our website and seeing different aspects of our tour!',
  },
} as const;
