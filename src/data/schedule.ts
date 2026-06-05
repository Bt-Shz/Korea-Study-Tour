export const visitSchedule = [
  {
    date: 'Monday, 18th May 2026',
    dayNumber: 1,
    summary: 'Arrival & Settling In',
    events: [
      {
        time: '7:00 AM',
        title: 'Departure from Hong Kong → Arrival in Seoul',
        slug: 'departure-hk-seoul-arrival',
        variant: 'travel',
        location: 'HKIA Aisle A · Cathay Pacific',
        description:
          'Group meet-up at HK International Airport Aisle A (Cathay Pacific). Group photos with CityU props before security, then flight to Incheon and AREX transfer to Hongik University / Shinchon-Ewha area.',
      },
      {
        time: '4:20 PM',
        title: 'Travel to hotel and check-in',
        variant: 'travel',
        description:
          'Self check-in at accommodation around Hongik University and Shinchon-Ewha. Evening free for rest and settling in; dismiss for the day.',
      },
    ],
  },
  {
    date: 'Tuesday, 19th May 2026',
    dayNumber: 2,
    summary: 'SKKU & KAIST Academic Visits',
    events: [
      {
        time: '10:00 AM',
        title: 'Campus Visit @ Sungkyunkwan University (SKKU)',
        description:
          'Depart Shinchon at 8:25 AM via Sindorim to SKKU Station. Visit with Prof. Kyuhong Shim and Prof. Jongwuk Lee — engineering department tour and research discussions.',
      },
      {
        time: '2:00 PM',
        title: 'Visit to KAIST AI Graduate Lab',
        description:
          'Lunch on-site, then visit to the KAIST AI Graduate Lab for department introduction, research overview, meeting with graduate students, and Q&A.',
      },
    ],
  },
  {
    date: 'Wednesday, 20th May 2026',
    dayNumber: 3,
    summary: 'Korea University & Yonsei University',
    events: [
      {
        time: '10:00 AM',
        title: 'Campus Visit @ Korea University',
        description:
          'Meet Prof. Paul Seo at the Main Gate of the Science & Engineering Campus, then walk to the Main Campus to meet Dr. William Stewart at the Centennial Memorial Samsung Hall / Ilmin Museum Building for a campus tour.',
      },
      {
        time: '3:00 PM',
        title: 'Campus Visit @ Yonsei University',
        description:
          'Meet students of Prof. Jeon at the YERP lobby. Campus tour followed by a mutual research introduction with 14 students from the Visual AI Lab and other labs.',
      },
      {
        time: '6:00 PM',
        title: 'Group Dinner with Yonsei Students',
        description:
          'Group dinner together with Yonsei students and faculty after the research exchange. Dismiss directly after dinner.',
      },
    ],
  },
  {
    date: 'Thursday, 21st May 2026',
    dayNumber: 4,
    summary: 'Seoul City & TOPIS',
    events: [
      {
        time: '9:30 AM',
        title: 'Visit to Seoul Gallery',
        description:
          'Free visit to the Seoul Gallery on B1 and B2 of Seoul City Hall, followed by team-based exploration and lunch on your own before the afternoon TOPIS visit.',
      },
      {
        time: '1:00 PM',
        title: 'Visit to Seoul TOPIS',
        description:
          'Meet on the first floor of Seoul City Hall and proceed to the Seoul Safety Integration Center (B3). Join a promotional video session, briefing on Seoul TOPIS (Seoul Transport Operation and Information Service), Q&A, and group photo.',
      },
    ],
  },
  {
    date: 'Friday, 22nd May 2026',
    dayNumber: 5,
    summary: 'Departure & Extended Stay',
    events: [
      {
        time: 'Morning',
        title: 'Return Group — Travel to Incheon Airport',
        variant: 'travel',
        description:
          'Participants returning to Hong Kong travel from Seoul to Incheon International Airport.',
      },
      {
        time: 'Afternoon',
        title: 'Flight ICN to HKG',
        description:
          'The return group departs from Incheon International Airport and flies back to Hong Kong.',
      },
      {
        time: 'Staying Behind',
        title: 'Continue Exploring Korea',
        variant: 'staying-behind',
        description:
          'Some members of the visit team chose to stay behind and continue exploring different places in Korea.',
      },
    ],
  },
] as const;
