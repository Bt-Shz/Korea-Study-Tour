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
    email: 'sbolat@gmail.com',
    image: '/images/team/student-01.jpg',
    reflection:
      'The Seoul study tour surprised me. At SKKU and Yonsei, PhD students and faculty walked us through their AI research without drowning us in jargon. I kept up, and some of the work stuck with me after we left. In the evenings I spent time with Kazakh students already studying at Korean universities. Those nights off the official schedule were my favourite part of the trip.',
  },
  {
    id: 'student-02',
    name: 'Man Nga WANG',
    nickname: 'Eva',
    year: 'Year 2',
    email: 'yourname-c@my.cityu.edu.hk',
    image: '/images/team/student-02.jpg',
    reflection:
      'This study tour to Seoul was truly eye-opening. Visiting leading universities like KAIST and Korea University, I learned directly from master\'s and doctoral students about their research projects and gained valuable insights into AI models and the latest trends. Their projects were fascinating, especially those involving 3D modelling and simulation. Beyond academics, I also immersed myself in Korean culture — from kimchi to Korean BBQ, every meal was a delight. The tour deepened my understanding of AI and broadened my cultural horizons in a meaningful way.',
  },
  {
    id: 'student-03',
    name: 'Yuan LI',
    nickname: 'Simon',
    year: 'Year 3',
    email: 'yourname-c@my.cityu.edu.hk',
    image: '/images/team/student-03.jpg',
    reflection:
      'This trip was so good! The academic visits were the highlight — SKKU\'s engineering vibe, KAIST AI Hub\'s cutting-edge work, and the joint session with Yonsei\'s Visual AI Lab where we got to talk real research with students our age from a different country. That hit different. Even the rest parts were great — TOPIS was unexpectedly cool, and the group dinners were where the real conversations happened. Biggest takeaway? Korean research culture is fast, collaborative, and they don\'t mess around. Thanks to the Department of Computer Science and the professors for making this happen. It was genuinely worth every early morning metro ride.',
  },
  {
    id: 'student-04',
    name: 'Kim Hoang Nam NGUYEN',
    nickname: 'Jerry',
    year: 'Year 1',
    email: 'yourname-c@my.cityu.edu.hk',
    image: '/images/team/student-04.jpg',
    reflection:
      'In this five-day study tour to Korea, I gained invaluable insight into a different academic culture. Visiting prestigious institutions like SKKU, Yonsei University, KAIST, and Korea University exposed me to exceptional research, particularly high-quality papers published at top conferences like ICLR and ICCV. What struck me most was the humble and respectful attitude of the students and professors — true expertise often comes with great humility. I want to thank the Department of Computer Science and the accompanying professors for giving me, a Year 1 student, this amazing opportunity.',
  },
  {
    id: 'student-05',
    name: 'Po Hei CHENG',
    nickname: 'Andy',
    year: 'Year 2',
    email: 'yourname-c@my.cityu.edu.hk',
    image: '/images/team/student-05.jpg',
    reflection:
      'The Computer Science study tour was an enriching experience, especially the two-day university visit. It provided valuable exposure to modern technologies, research developments, and real-world applications in the field. Interacting with academic staff and seeing advanced facilities helped deepen my understanding of current trends in computer science. Overall, the tour was highly informative and inspiring.',
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
