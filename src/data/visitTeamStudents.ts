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
    name: 'Sherniyaz BOLAT',
    nickname: 'Shera',
    year: 'Year 2',
    email: 'sbolat-c@my.cityu.edu.hk',
    image: '/images/team/student-01.jpg',
    reflection:
      'The Seoul study tour surprised me. At SKKU and Yonsei, PhD students and faculty walked us through their AI research without drowning us in jargon. I kept up, and some of the work stuck with me after we left. In the evenings I spent time with Kazakh students already studying at Korean universities. Those nights off the official schedule were my favourite part of the trip.',
  },
  {
    id: 'student-02',
    name: 'Man Nga WANG',
    nickname: 'Eva',
    year: 'Year 2',
    email: 'mnwang8-c@my.cityu.edu.hk',
    image: '/images/team/student-02.jpg',
    reflection:
      'This study tour to Seoul was truly eye-opening. Visiting leading universities like KAIST and Korea University, I learned directly from master\'s and doctoral students about their research projects and gained valuable insights into AI models and the latest trends. Their projects were fascinating, especially those involving 3D modelling and simulation. Beyond academics, I also immersed myself in Korean culture — from kimchi to Korean BBQ, every meal was a delight. The tour deepened my understanding of AI and broadened my cultural horizons in a meaningful way.',
  },
  {
    id: 'student-03',
    name: 'Yuan LI',
    nickname: 'Simon',
    year: 'Year 3',
    email: 'yuanli2-c@my.cityu.edu.hk',
    image: '/images/team/student-03.jpg',
    reflection:
      'This trip was so good! The academic visits were the highlight — SKKU\'s engineering vibe, KAIST AI Hub\'s cutting-edge work, and the joint session with Yonsei\'s Visual AI Lab where we got to talk real research with students our age from a different country. That hit different. Even the rest parts were great — TOPIS was unexpectedly cool, and the group dinners were where the real conversations happened. Biggest takeaway? Korean research culture is fast, collaborative, and they don\'t mess around. Thanks to the Department of Computer Science and the professors for making this happen. It was genuinely worth every early morning metro ride.',
  },
  {
    id: 'student-04',
    name: 'Kim Hoang Nam NGUYEN',
    nickname: 'Jerry',
    year: 'Year 1',
    email: 'nnguyen6-c@my.cityu.edu.hk',
    image: '/images/team/student-04.jpg',
    reflection:
      'In this five-day study tour to Korea, I gained invaluable insight into a different academic culture. Visiting prestigious institutions like SKKU, Yonsei University, KAIST, and Korea University exposed me to exceptional research, particularly high-quality papers published at top conferences like ICLR and ICCV. What struck me most was the humble and respectful attitude of the students and professors — true expertise often comes with great humility. I want to thank the Department of Computer Science and the accompanying professors for giving me, a Year 1 student, this amazing opportunity.',
  },
  {
    id: 'student-05',
    name: 'Po Hei CHENG',
    nickname: 'Andy',
    year: 'Year 2',
    email: 'pohcheng4-c@my.cityu.edu.hk',
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
    name: 'Bexultan KARIMTAYEV',
    nickname: 'Beka',
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
    email: 'sincchan3-c@my.cityu.edu.hk',
    image: '/images/team/eunice-chan.jpg',
  },
];

const team4Students: Partial<VisitTeamStudent>[] = [
  {
    name: 'Sum Yi LEE',
    nickname: 'Eugenia',
    email: 'sumylee6-c@my.cityu.edu.hk',
    image: '/images/team/eugenia-lee.jpg',
    reflection:
      'To recap the whole trip, it was interesting and meaningful. I met so many new friends from different years and got a lot of tips from others. At the same time, I gained a deeper understanding of the cutting-edge research from local professors and students, especially regarding AI applications. I also fully enjoyed the local culture and lifestyle, which made the whole study tour very memorable.',
  },
  {
    name: 'Sasina PARINKARN',
    nickname: 'Prin',
    email: 'sparinkar2-c@my.cityu.edu.hk',
    image: '/images/team/prin-parinkarn.jpg',
    reflection:
      'The study tour to Seoul was a highlight of my academic journey. Visiting local universities gave me a unique perspective on the Korean higher education system, which feels both rigorous and highly collaborative. The most memorable part was undoubtedly the interaction with local students; our informal discussions allowed for a genuine exchange of ideas on project management and research challenges that you just don\'t get in a typical lecture. I am deeply grateful to the department for organizing this experience, as it has broadened my outlook on how computer science is applied in the real world.',
  },
  {
    name: 'Taimas YEDRISSOV',
    nickname: '',
    image: '/images/team/taimas-yedrissov.jpg',
    reflection:
      'I am very thankful for the opportunity to have joined the Seoul study tour. While I arrived with an interest in Korean academic research, I left with a much deeper appreciation for the country\'s unique blend of tradition and high-speed innovation. Seeing the contrast between the historic palaces and the bustling, modern tech districts was fascinating. This trip pushed me to engage with people outside of my usual circles, and the conversations I had with peers and researchers during the trip have provided me with a fresh perspective on my own studies back at CityU.',
  },
  {
    name: 'Pang Fai CHEN',
    nickname: 'Frank',
    email: 'pfchen3-c@my.cityu.edu.hk',
    image: '/images/team/frank-chen.jpg',
    reflection:
      'The Seoul study tour was an eye-opening experience that went beyond simple site visits. Engaging with students from different years provided me with a wealth of practical, \'insider\' tips on how to balance coursework and research—advice that has proven to be incredibly useful. Watching the local students work on their current projects showed me a different side of the field, one that is driven more by hands-on experimentation than just theory. I am grateful for the friendships forged during this time; it was a deeply inspiring trip that has left me much more motivated for my upcoming academic challenges.',
  },
  {
    name: 'Ho Kwan Sam WONG',
    nickname: 'Sam',
    email: 'samhkwong2-c@my.cityu.edu.hk',
    image: '/images/team/sam-wong.jpg',
    reflection:
      'The 5-day study tour to Seoul was a truly memorable experience. I am very grateful to the department for organizing this trip, as it gave me a great opportunity to step outside my comfort zone. Visiting local universities and seeing their research projects was eye-opening and helped me understand the field from a different angle. On top of the academic side, exploring the local culture and lifestyle was just as rewarding. I really enjoyed discovering the mix of history and modern life in Seoul. This trip has definitely added a lot of value to my university life and left me with many great memories.',
  },
];

const team5Students: Partial<VisitTeamStudent>[] = [
  {
    name: 'Ho Hin YIM',
    nickname: 'Alex',
    year: 'Year 4',
    email: 'hhyim3-c@my.cityu.edu.hk',
    image: '/images/team/alex-yim.png',
    reflection:
      'Our South Korea study tour is an incredible blend of academic inspiration, cutting-edge technology, and unforgettable memories. Visiting top-tier universities exposes us to world-class research cultures. Even the rainy days couldn\'t slow us down, bringing our CityU CS crew closer together as we navigated historic campuses and vibrant cultural hubs. This trip beautifully bridges the gap between the classroom and global industry innovation. We return to Hong Kong with impressive experience, a broader tech perspective, and fresh inspiration to bring back to our study life!',
  },
  {
    name: 'Hang Yi KWAI',
    nickname: 'Kessie',
    year: 'Year 2',
    email: 'hykwai2-c@my.cityu.edu.hk',
    image: '/images/team/kessie-kwai.png',
    reflection:
      'This five-day Seoul trip with computer science students was an unforgettable and enriching experience. Through academic talks and campus tours at different universities, such as Sungkyunkwan University, the KAIST AI Lab, Korea University and Yonsei University, we gained valuable exposure to Korean culture and their ongoing research projects. I am grateful for having this amazing experience with my peers.',
  },
  {
    name: 'Yuet Ki WONG',
    nickname: 'Ally',
    year: 'Year 2',
    email: 'yuetkwong9-c@my.cityu.edu.hk',
    image: '/images/team/ally-wong.png',
    reflection:
      'During this 5-day Seoul study tour, we have visited different universities. I am inspired by master/phd students sharing their recent work in CS, such as open-vocabulary object detection and VLA. Through the presentations by each student, I have a better understanding of how AI is used now in research areas or even in real life. We have also visited a company called TOPIS which monitors transportation in Seoul, I can see how they handle big data and transfer it to a readable message for the public. These visits broadened my perspective and showed me how the technology is used in real life. It was a valuable tour.',
  },
  {
    name: 'Wai Kit TONG',
    nickname: 'Jay',
    year: 'Year 4',
    email: 'waiktong6-c@my.cityu.edu.hk',
    image: '/images/team/jay-tong.png',
    reflection:
      'The Seoul Study Tour organized by the CityU CS Department was a meaningful experience for me. During the trip, we visited different universities and technology-related places, such as SKKU and KAIST AI Hub. These visits helped me understand more about how Computer Science and AI research are developed outside the classroom. I also enjoyed exploring Seoul with my teammates and meeting CS students from different years. They were friendly, hardworking, and fun to travel with, which made the trip more memorable. This tour not only gave me more academic exposure, but also allowed me to learn more about Korean culture and student life. I am grateful to Prof. Howard Leung, Dr. Kenneth Lee, Mr. Jacky Tam, and the department for this opportunity.',
  },
  {
    name: 'Shun Yat CHAN',
    nickname: 'Evelyn',
    year: 'Year 1',
    email: 'sychan632-c@my.cityu.edu.hk',
    image: '/images/team/evelyn-chan.jpg',
    reflection:
      'Visits to Yonsei University, Korea University, KAIST, and SKKU gave me valuable insight into how AI and innovative technology research is conducted in Korea. Our tour of TOPIS showed me how AI and big data can improve everyday life for citizens across a modern city like Seoul.',
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
  createTeam(4, team4Students),
  createTeam(5, team5Students),
];

export const visitTeamStudents: VisitTeamStudent[] = visitTeamGroups.flatMap((team) => team.students);
