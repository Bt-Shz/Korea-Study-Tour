export type TripVenue = {
  name: string;
  url?: string;
};

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
      url: 'https://www.skku.edu/eng/index.do',
    },
    {
      name: 'KAIST AI Graduate Lab',
      url: 'https://www.kaist.ac.kr/en/',
    },
    {
      name: 'Korea University',
      url: 'https://www.korea.edu/',
    },
    {
      name: 'Yonsei University',
      url: 'https://www.yonsei.ac.kr/en_sc/',
    },
    {
      name: 'Seoul Gallery',
      url: 'https://www.seoul.go.kr/main/index.do',
    },
    {
      name: 'Seoul TOPIS (Seoul Transport Operation and Information Service)',
      url: 'https://topis.seoul.go.kr/',
    },
  ] satisfies readonly TripVenue[],
  about: {
    purpose:
      'The purpose of this website is to provide a window into a 5-day study tour that the Department of Computer Science at City University of Hong Kong made possible. The trip took place 18-22 May 2026, aiming to expose students to a different educational system, introduce them to new collaboration and career opportunities, and expand their horizons.',
    leadership:
      'The tour was led by the esteemed Dr. Howard Leung and Dr. Kenneth Lee from the Department of Computer Science at City University of Hong Kong.',
    closing: 'Enjoy exploring our website and seeing different aspects of our tour!',
  },
} as const;
