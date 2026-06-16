import { visitTeamStudents } from './visitTeamStudents';

export type ScheduleEventVariant = 'default' | 'travel' | 'staying-behind';

export type ScheduleEventIcon =
  | 'plane'
  | 'train'
  | 'graduation'
  | 'utensils'
  | 'landmark'
  | 'compass'
  | 'image';

export interface ScheduleParticipant {
  name: string;
  image: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  funFact?: string;
  slug?: string;
  location?: string;
  variant?: ScheduleEventVariant;
  icon?: ScheduleEventIcon;
  steps?: readonly string[];
  participants?: readonly ScheduleParticipant[];
  image?: string;
  /** Render side-by-side with the adjacent parallel event(s) — for things that happen at the same time. */
  parallel?: boolean;
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

/** Everyone who travelled — shown once as a sideways team rail on the schedule. */
export const tripTeam: readonly ScheduleParticipant[] = allParticipants;

export const visitSchedule: readonly ScheduleDay[] = [
  {
    date: 'Monday, 18th May 2026',
    dayNumber: 1,
    summary: 'Arrival & Settling In',
    events: [
      {
        time: 'Morning',
        title: 'CX410: HKG to ICN',
        icon: 'plane',
        slug: 'departure-hk-seoul-arrival',
        location: 'Hong Kong International Airport · Aisle A',
        description:
          'All participants gathered at 7:00 AM at Hong Kong International Airport, Aisle A, took the morning flight CX410 and landed at Incheon International Airport. We took group photos with the CityU props before clearing immigration together.',
        participants: allParticipants,
      },
      {
        time: 'Afternoon',
        title: 'Travel to Hotel via AREX & Seoul Metro',
        icon: 'train',
        variant: 'travel',
        location: 'Incheon Airport → Hongik University / Sinchon',
        description:
          'After arriving at Incheon International Airport, all participants collected their WOWPASS and T-Money cards at the CU convenience store, then took the AREX all-stop train toward the Hongik University and Sinchon area to check in to their hotels.',
        image: '/images/visit/airport/inchon.jpeg',
      },
      {
        time: 'Evening',
        title: 'Rest & Self Exploration',
        icon: 'compass',
        location: 'Sinchon, Seoul',
        description:
          'All participants rested and explored the lively Sinchon neighbourhood at their own pace, settling in for the academic visits ahead.',
      },
    ],
  },
  {
    date: 'Tuesday, 19th May 2026',
    dayNumber: 2,
    summary: 'Sungkyunkwan University & Graduate School of AI at KAIST',
    events: [
      {
        time: '8:10 - 9:30',
        title: 'Travel to SKKU via Seoul Metro',
        icon: 'train',
        variant: 'travel',
        location: 'Sinchon → Sindorim → SKKU Station (Exit 2)',
        description:
          'All participants gathered at their hotel lobbies, walked to Sinchon Station together and took the Seoul Metro through Sindorim toward SKKU Station, then walked to the main campus via the campus gate.',
        funFact:
          'Sindorim is so notoriously overcrowded that locals nicknamed it "Helldorim" (헬도림) — a mashup of Hell and Sindorim.',
      },
      {
        time: '10:00 AM - 12:00 PM',
        title: 'Sungkyunkwan University (SKKU)',
        icon: 'graduation',
        slug: 'skku-visit',
        location: 'Main Campus, Suwon',
        description:
          'A visit to Sungkyunkwan University, where Prof. Kyuhong Shim and Prof. Jongwuk Lee introduced their research and walked us through the engineering department and its laboratories.',
        participants: allParticipants,
      },
      {
        time: '12:00 - 1:30 PM',
        title: 'Travel to Graduate School of AI at KAIST via Metro',
        icon: 'train',
        variant: 'travel',
        location: 'SKKU → Suwon → Jeongja → Yangjae',
        description:
          'After the morning session, all participants travelled from Suwon toward Seoul, alighting at Yangjae Citizen Forest and walking to the Graduate School of AI at KAIST.',
      },
      {
        time: '2:00 PM - 4:00 PM',
        title: 'Graduate School of AI at KAIST',
        icon: 'graduation',
        slug: 'kaist-ai-visit',
        location: 'Graduate School of AI at KAIST · Yangjae · 6F · CVML Lab',
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
        icon: 'train',
        variant: 'travel',
        location: 'Sinchon → Sindang → Anam (Exit 4)',
        description:
          'All participants departed from the Sinchon area and took the Seoul Metro through Sindang to Anam Station, then walked to the main gate of the Science & Engineering campus.',
      },
      {
        time: '10:00 AM - 1:00 PM',
        title: 'Campus Visit @ Korea University',
        icon: 'graduation',
        slug: 'koreau',
        location: 'Korea University · Science & Engineering and Main Campus',
        description:
          'A visit to Korea University, where Prof. Paul Seo welcomed us at the Science & Engineering campus and Dr. William Stewart led a tour of the historic main campus, including the Centennial Memorial Samsung Hall and the Ilmin Museum.',
        participants: allParticipants,
      },
      {
        time: '2:00 - 2:35 PM',
        title: 'Travel to Yonsei University via Seoul Metro',
        icon: 'train',
        variant: 'travel',
        location: 'Korea University → Sindang → Sinchon (Exit 2/3)',
        description:
          'All participants travelled from Korea University back toward Sinchon via the Seoul Metro and walked to the Yonsei Engineering Research Park (YERP).',
      },
      {
        time: '3:00 PM - 5:30 PM',
        title: 'Research Exchange @ Yonsei University',
        icon: 'graduation',
        slug: 'yonsei',
        location: 'Yonsei Engineering Research Park (YERP)',
        description:
          'A visit to Yonsei University, where students of Prof. Jeon hosted a campus tour and a mutual research introduction with 14 students from the Visual AI Lab and other laboratories.',
        participants: allParticipants,
      },
      {
        time: '6:00 PM',
        title: 'Group Dinner with Yonsei Students',
        icon: 'utensils',
        slug: 'yonsei-dinner',
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
        icon: 'train',
        variant: 'travel',
        location: 'Sinchon → City Hall (Exit 4)',
        description:
          'All participants departed from the Sinchon area and took the Seoul Metro to City Hall Station, walking to Seoul City Hall.',
      },
      {
        time: '9:30 AM - 12:00 PM',
        title: 'Visit to Seoul Gallery',
        icon: 'image',
        slug: 'seoul-gallery',
        location: 'Seoul City Hall · B1 & B2 (free admission)',
        description:
          'A free visit to the Seoul Gallery beneath City Hall, after which participants explored the city centre in their teams and enjoyed lunch on their own before regrouping for the afternoon visit.',
        participants: allParticipants,
      },
      {
        time: '1:00 PM',
        title: 'Visit to Seoul TOPIS',
        icon: 'landmark',
        slug: 'topis',
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
        icon: 'train',
        variant: 'travel',
        location: 'Seoul → Incheon International Airport',
        description:
          'Participants returning to Hong Kong travelled from Seoul to Incheon International Airport, ready to say goodbye to Korea.',
      },
      {
        time: 'Afternoon',
        title: 'CX Flight: ICN to HKG',
        icon: 'plane',
        location: 'Incheon International Airport',
        description:
          'The return group departed from Incheon International Airport on the afternoon flight back to Hong Kong International Airport.',
        parallel: true,
      },
      {
        time: 'Staying Behind',
        title: 'Self-Exploration in Korea',
        icon: 'compass',
        variant: 'staying-behind',
        description:
          'While most of the team flew home, a few of us stayed behind to keep exploring — more of Seoul, and beyond — before heading back.',
        parallel: true,
      },
    ],
  },
];
