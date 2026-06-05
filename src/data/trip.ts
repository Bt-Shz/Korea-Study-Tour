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
    purpose:
      'The purpose of this website is to provide a window into a 5-day study tour that the Department of Computer Science at City University of Hong Kong made possible. The trip took place 18-22 May 2026, aiming to expose students to a different educational system, introduce them to new collaboration and career opportunities, and expand their horizons.',
    itinerary:
      'The itinerary included visits to Sungkyunkwan University (SKKU), KAIST AI Graduate Lab, Korea University, and Yonsei University. Our trip also included visits to Seoul Gallery and Seoul TOPIS (Seoul Transport Operation and Information Service), where students explored Seoul\'s smart-city operations.',
    leadership:
      'The tour was led by the esteemed Dr. Howard Leung and Dr. Kenneth Lee from the Department of Computer Science at City University of Hong Kong.',
    closing: 'Enjoy exploring our website and seeing different aspects of our tour!',
  },
} as const;
