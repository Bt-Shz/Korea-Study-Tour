import { visitTeamStudents } from './visitTeamStudents';

export type ScheduleEventVariant = 'default' | 'travel' | 'staying-behind';

export interface ScheduleParticipant {
  name: string;
  image: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  slug?: string;
  location?: string;
  variant?: ScheduleEventVariant;
  steps?: readonly string[];
  participants?: readonly ScheduleParticipant[];
}

export interface ScheduleDay {
  date: string;
  dayNumber: number;
  summary: string;
  events: readonly ScheduleEvent[];
}

const allParticipants: readonly ScheduleParticipant[] = visitTeamStudents
  .filter((student) => !student.image.includes('placeholder'))
  .map((student) => ({
    name: student.nickname?.trim() || student.name,
    image: student.image,
  }));

export const visitSchedule: readonly ScheduleDay[] = [
  {
    date: 'Monday, 18th May 2026',
    dayNumber: 1,
    summary: 'Arrival & Settling In',
    events: [
      {
        time: 'Morning',
        title: 'CX410: HKG to ICN',
        slug: 'departure-hk-seoul-arrival',
        location: 'Hong Kong International Airport · Aisle A (Cathay Pacific)',
        description:
          'All participants gathered at 7:00 AM at Hong Kong International Airport, Aisle A (Cathay Pacific), took the morning flight CX410 and landed at Incheon International Airport. We took group photos with the CityU props before clearing immigration together.',
        participants: allParticipants,
      },
      {
        time: 'Afternoon',
        title: 'Travel to Hotel via AREX & Seoul Metro',
        variant: 'travel',
        location: 'Incheon Airport → Hongik University / Sinchon',
        description:
          'After arriving at Incheon International Airport, all participants collected their WOWPASS and T-Money cards at the CU convenience store, then took the AREX all-stop train toward the Hongik University and Sinchon area to check in to their hotels.',
        steps: [
          '15:20 — Incheon T1 → Hongik University (~52 min)',
          '16:20 — Hongik University → Sinchon / Ewha Womans University (~2 min)',
          'Self check-in at the hotels, then dismiss for the day',
        ],
      },
      {
        time: 'Evening',
        title: 'Rest & Self Exploration',
        location: 'Sinchon, Seoul',
        description:
          'All participants rested and explored the lively Sinchon neighbourhood at their own pace, settling in for the academic visits ahead.',
      },
    ],
  },
  {
    date: 'Tuesday, 19th May 2026',
    dayNumber: 2,
    summary: 'Sungkyunkwan University & KAIST AI Hub',
    events: [
      {
        time: '8:10 - 9:30',
        title: 'Travel to SKKU via Seoul Metro',
        variant: 'travel',
        location: 'Sinchon → Sindorim → SKKU Station (Exit 2)',
        description:
          'All participants gathered at their hotel lobbies, walked to Sinchon Station together and took the Seoul Metro through Sindorim toward SKKU Station, then walked to the Engineering Building via the campus gate.',
        steps: [
          '8:25 — Sinchon → Sindorim (~13 min)',
          '8:50 — Sindorim → SKKU Station, Exit 2 (~32–40 min)',
          '9:30 — Walk to the Engineering Building via the West / North gate (~15 min)',
        ],
      },
      {
        time: '10:00 AM - 12:00 PM',
        title: 'Academic Visit @ Sungkyunkwan University (SKKU)',
        slug: 'skku-visit',
        location: 'SKKU Engineering Building, Suwon',
        description:
          'A visit to Sungkyunkwan University, where Prof. Kyuhong Shim and Prof. Jongwuk Lee introduced their research and walked us through the engineering department and its laboratories.',
        participants: allParticipants,
      },
      {
        time: '12:00 - 1:30 PM',
        title: 'Travel to KAIST AI Hub via Metro',
        variant: 'travel',
        location: 'SKKU → Suwon → Jeongja → Yangjae',
        description:
          'After the morning session, all participants travelled from Suwon toward Seoul, alighting at Yangjae Citizen Forest and walking to the KAIST AI Hub, with lunch on the way.',
        steps: [
          '12:20 — SKKU → Suwon (~5 min)',
          '12:30 — Suwon → Jeongja (~40 min)',
          '13:15 — Jeongja → Yangjae Citizen Forest, Exit 5 (~13 min)',
          '13:30 — Walk to the AI Hub (~1.5 km)',
        ],
      },
      {
        time: '2:00 PM - 4:00 PM',
        title: 'Lab Visit @ Graduate School of AI at KAIST',
        slug: 'kaist-ai-visit',
        location: 'KAIST AI Hub, Yangjae · 6F · CVML Lab',
        description:
          'A visit to the Graduate School of AI at KAIST, hosted by Prof. Kate Shim, featuring an introduction to the department and the CVML Lab, a session with graduate students on their research, and a tour of the research space.',
        participants: allParticipants,
      },
    ],
  },
  {
    date: 'Wednesday, 20th May 2026',
    dayNumber: 3,
    summary: 'Korea University & Yonsei University',
    events: [
      {
        time: '9:00 - 9:50',
        title: 'Travel to Korea University via Seoul Metro',
        variant: 'travel',
        location: 'Sinchon → Sindang → Anam (Exit 4)',
        description:
          'All participants departed from the Sinchon area and took the Seoul Metro through Sindang to Anam Station, then walked to the main gate of the Science & Engineering campus.',
        steps: [
          '9:15 — Sinchon → Sindang (~17 min)',
          '9:40 — Sindang → Anam, Exit 4 (~7 min)',
          '9:50 — Walk to the main gate of the Science & Engineering campus (~5 min)',
        ],
      },
      {
        time: '10:00 AM - 1:00 PM',
        title: 'Campus Visit @ Korea University',
        slug: 'korea-university-visit',
        location: 'Korea University · Science & Engineering and Main Campus',
        description:
          'A visit to Korea University, where Prof. Paul Seo welcomed us at the Science & Engineering campus and Dr. William Stewart led a tour of the historic main campus, including the Centennial Memorial Samsung Hall and the Ilmin Museum.',
        participants: allParticipants,
      },
      {
        time: '2:00 - 2:35 PM',
        title: 'Travel to Yonsei University via Seoul Metro',
        variant: 'travel',
        location: 'Korea University → Sindang → Sinchon (Exit 2/3)',
        description:
          'All participants travelled from Korea University back toward Sinchon via the Seoul Metro and walked to the Yonsei Engineering Research Park (YERP).',
        steps: [
          '14:00 — Korea University → Sindang (~9 min)',
          '14:15 — Sindang → Sinchon, Exit 2/3 (~17 min)',
          '14:35 — Walk to Yonsei Engineering Research Park (~12 min)',
        ],
      },
      {
        time: '3:00 PM - 5:30 PM',
        title: 'Research Exchange @ Yonsei University',
        slug: 'yonsei-university-visit',
        location: 'Yonsei Engineering Research Park (YERP)',
        description:
          'A visit to Yonsei University, where students of Prof. Jeon hosted a campus tour and a mutual research introduction with 14 students from the Visual AI Lab and other laboratories.',
        participants: allParticipants,
      },
      {
        time: '6:00 PM',
        title: 'Group Dinner with Yonsei Students',
        slug: 'group-dinner-yonsei',
        location: 'Restaurant near Yonsei University',
        description:
          'After the research exchange, we moved to a nearby restaurant for a group dinner together with the Yonsei students, sharing food, conversation and friendship before being dismissed for the evening.',
        participants: allParticipants,
      },
    ],
  },
  {
    date: 'Thursday, 21st May 2026',
    dayNumber: 4,
    summary: 'Seoul Gallery & TOPIS',
    events: [
      {
        time: '9:00 - 9:30',
        title: 'Travel to Seoul City Hall via Seoul Metro',
        variant: 'travel',
        location: 'Sinchon → City Hall (Exit 4)',
        description:
          'All participants departed from the Sinchon area and took the Seoul Metro to City Hall Station, walking to Seoul City Hall.',
        steps: ['9:15 — Sinchon → City Hall, Exit 4 (~7 min)'],
      },
      {
        time: '9:30 AM - 12:00 PM',
        title: 'Visit to Seoul Gallery',
        slug: 'seoul-gallery',
        location: 'Seoul City Hall · B1 & B2 (free admission)',
        description:
          'A free visit to the Seoul Gallery beneath City Hall, after which participants explored the city centre in their teams and enjoyed lunch on their own before regrouping for the afternoon visit.',
        participants: allParticipants,
      },
      {
        time: '1:00 PM',
        title: 'Visit to Seoul TOPIS',
        slug: 'seoul-topis',
        location: 'Seoul City Hall · TOPIS Office (5F)',
        description:
          'A visit to Seoul TOPIS (Seoul Transport Operation and Information Service), where we learned how the city collects and visualises big data to manage transport across the metropolis in real time.',
        participants: allParticipants,
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
        title: 'Travel to Incheon Airport via AREX',
        variant: 'travel',
        location: 'Seoul → Incheon International Airport',
        description:
          'Participants returning to Hong Kong travelled from Seoul to Incheon International Airport, ready to say goodbye to Korea.',
      },
      {
        time: 'Afternoon',
        title: 'CX Flight: ICN to HKG',
        location: 'Incheon International Airport',
        description:
          'The return group departed from Incheon International Airport on the afternoon flight back to Hong Kong International Airport.',
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
];
