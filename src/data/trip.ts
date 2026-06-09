export type TripVenue = {
  name: string;
  listName?: string;
  mapLabel: string;
  mapQuery: string;
  url?: string;
  lat: number;
  lng: number;
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
    label: 'Graduate School of AI at the Korea Advanced Institute of Science and Technology',
    shortName: 'KAIST AI',
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
      name: 'Sungkyunkwan University (SKKU)',
      mapLabel: 'Sungkyunkwan University (SKKU)',
      mapQuery: '2066 Seobu-ro, Jangan-gu, Suwon-si, Gyeonggi-do, South Korea',
      url: institutionLinks.skku.href,
      lat: 37.2941,
      lng: 126.9727,
    },
    {
      name: 'Graduate School of AI at KAIST',
      listName: 'KAIST AI',
      mapLabel: 'Graduate School of AI at KAIST',
      mapQuery: '141 Umyeon-dong, Seocho-gu, Seoul, South Korea',
      url: institutionLinks.kaistAi.href,
      lat: 37.4648,
      lng: 127.0189,
    },
    {
      name: 'Korea University',
      mapLabel: 'Korea University',
      mapQuery: '145 Anam-ro, Seongbuk-gu, Seoul, South Korea',
      url: institutionLinks.koreaUniversity.href,
      lat: 37.588,
      lng: 127.0324,
    },
    {
      name: 'Yonsei University',
      mapLabel: 'Yonsei University',
      mapQuery: '50 Yonsei-ro, Seodaemun-gu, Seoul, South Korea',
      url: institutionLinks.yonsei.href,
      lat: 37.561,
      lng: 126.9396,
    },
    {
      name: 'Seoul Gallery - City Hall',
      mapLabel: 'Seoul Gallery - City Hall',
      mapQuery: '110 Sejong-daero, Jung-gu, Seoul, South Korea',
      url: institutionLinks.seoulGallery.href,
      lat: 37.5668,
      lng: 126.9783,
    },
    {
      name: 'Seoul TOPIS',
      listName: 'TOPIS',
      mapLabel: 'Seoul TOPIS',
      mapQuery: '110 Sejong-daero, Jung-gu, Seoul, South Korea',
      url: institutionLinks.seoulTopis.href,
      lat: 37.5666,
      lng: 126.9786,
    },
  ] satisfies readonly TripVenue[],
  about: {
    closing: 'Enjoy exploring our website and seeing different aspects of our tour!',
  },
} as const;
