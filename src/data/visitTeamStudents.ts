const placeholderImage = '/images/team/placeholder.svg';

export type VisitTeamStudent = {
  id: string;
  name: string;
  nickname: string;
  year: 'Year 1' | 'Year 2' | 'Year 3' | 'Year 4';
  email: string;
  image: string;
  reflection: string;
};

export type VisitTeamGroup = {
  id: string;
  name: string;
  students: VisitTeamStudent[];
};

function createPlaceholder(teamIndex: number, studentIndex: number): VisitTeamStudent {
  const globalIndex = (teamIndex - 1) * 5 + studentIndex;
  const padded = String(globalIndex).padStart(2, '0');

  return {
    id: `student-${padded}`,
    name: 'Your Full Name',
    nickname: '',
    year: 'Year 1',
    email: 'yourname-c@my.cityu.edu.hk',
    image: placeholderImage,
    reflection: '',
  };
}

function createTeam(
  teamIndex: number,
  overrides: Partial<VisitTeamStudent>[] = []
): VisitTeamGroup {
  return {
    id: `team-${teamIndex}`,
    name: `Team ${teamIndex}`,
    students: Array.from({ length: 5 }, (_, index) => ({
      ...createPlaceholder(teamIndex, index + 1),
      ...overrides[index],
    })),
  };
}

const team1Students: Partial<VisitTeamStudent>[] = [
  {
    id: 'student-01',
    name: 'Bolat Sherniyaz',
    nickname: 'Shera',
    year: 'Year 2',
    email: 'yourname-c@my.cityu.edu.hk',
    image: '/images/team/student-01.jpg',
    reflection:
      'The CityU CS Department study tour to Seoul was a genuinely memorable experience. Through academic sessions at SKKU and Yonsei University, we were introduced to AI research from PhD students and faculty — work I found accessible and deeply insightful. In the evenings, I connected with Kazakh students studying at Korean universities; time together outside the formal programme was a highlight in its own right.',
  },
];

const team2Students: Partial<VisitTeamStudent>[] = [
  {
    name: 'Wing Ting SIU',
    nickname: 'Fiona',
    year: 'Year 1',
    email: 'wingtsiu4-c@my.cityu.edu.hk',
    image: '/images/team/fiona-siu.jpg',
    reflection:
      'The CityU CS Department study tour to Seoul was impressive. Visiting universities such as KAIST, Yonsei University, and Korea University broadened my horizons and showed me the differences between university life in Hong Kong and Korea. The talks also gave me deeper knowledge of AI. At TOPIS, I learned how a smart city operates, especially in transportation. During free time, we explored Korean food and culture, which made the trip both educational and enjoyable.',
  },
  {
    name: 'Bo Wa SO',
    nickname: 'Bowa',
    year: 'Year 2',
    email: 'bowso2-c@my.cityu.edu.hk',
    image: '/images/team/bowa-so.jpg',
    reflection:
      'Participating in this Seoul Study Tour was an incredibly rewarding experience. It was eye-opening to immerse ourselves in the vibrant academic atmosphere and cutting-edge research directions at top-tier institutions like SKKU, KAIST AI Hub, Korea University, and Yonsei. Seeing Seoul\'s highly digitized and intelligent TOPIS system in action showed us the powerful real-world impact of computer science on urban mobility. Beyond the advanced technology, experiencing South Korea\'s seamless public transit and rich cultural heritage firsthand was unforgettable. I am deeply grateful to the Department of Computer Science at CityU for organizing this inspiring journey. It allowed us to appreciate Seoul from diverse perspectives and truly expanded our global horizons as future tech innovators.',
  },
  {
    name: 'Bexultan Karimtayev',
    nickname: '',
    email: 'bkarimtay2-c@my.cityu.edu.hk',
    image: '/images/team/bexultan-karimtayev.jpg',
  },
  {
    name: 'Mei Yan LAI',
    nickname: 'Ashley',
    year: 'Year 3',
    email: 'meiyanlai5-c@my.cityu.edu.hk',
    image: '/images/team/ashley-lee.jpg',
    reflection:
      'The Seoul Study Tour gave me a fresh perspective on how AI and smart-city technology are taught and applied beyond Hong Kong. Campus visits to KAIST and Yonsei, together with the TOPIS briefing, connected classroom concepts to real infrastructure at scale. Exploring the city between sessions — from transit to local food — made the learning feel lived-in, not just academic. I left with a clearer sense of where I want to take my CS studies next.',
  },
  {
    name: 'Sin Ching CHAN',
    nickname: 'Eunice',
    image: '/images/team/eunice-chan.jpg',
  },
];

// HOW TO ADD YOUR INFO:
// 1) Find your team and replace name, nickname (optional), year, and email in your slot.
// 2) Add your photo at public/images/team/student-XX.jpg (match your id).
// 3) Replace image with /images/team/student-XX.jpg and save.
export const visitTeamGroups: VisitTeamGroup[] = [
  createTeam(1, team1Students),
  createTeam(2, team2Students),
  createTeam(3),
  createTeam(4),
  createTeam(5),
];

export const visitTeamStudents: VisitTeamStudent[] = visitTeamGroups.flatMap((team) => team.students);
