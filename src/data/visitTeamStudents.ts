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

function createPlaceholder(index: number): VisitTeamStudent {
  const padded = String(index).padStart(2, '0');
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

// HOW TO ADD YOUR INFO:
// 1) Replace name, nickname (optional), year, email, and reflection in your slot below.
// 2) Add your photo at public/images/team/student-XX.jpg (match your id).
// 3) Set image to /images/team/student-XX.jpg and save.
// 4) Run `npm run dev` and open /experiences (or /student-takeaways).
export const visitTeamStudents: VisitTeamStudent[] = [
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
    name: 'Wang Man Nga',
    nickname: 'Eva',
    year: 'Year 2',
    email: 'yourname-c@my.cityu.edu.hk',
    image: '/images/team/student-02.jpg',
    reflection:
      'This study tour to Seoul was truly eye-opening. Visiting leading universities like KAIST and Korea University, I learned directly from master\'s and doctoral students about their research projects and gained valuable insights into AI models and the latest trends. Their projects were fascinating, especially those involving 3D modelling and simulation. Beyond academics, I also immersed myself in Korean culture — from kimchi to Korean BBQ, every meal was a delight. The tour deepened my understanding of AI and broadened my cultural horizons in a meaningful way.',
  },
  {
    id: 'student-03',
    name: 'LI Yuan',
    nickname: 'Simon',
    year: 'Year 3',
    email: 'yourname-c@my.cityu.edu.hk',
    image: '/images/team/student-03.jpg',
    reflection:
      'This trip was so good! The academic visits were the highlight — SKKU\'s engineering vibe, KAIST AI Hub\'s cutting-edge work, and the joint session with Yonsei\'s Visual AI Lab where we got to talk real research with students our age from a different country. That hit different. Even the rest parts were great — TOPIS was unexpectedly cool, and the group dinners were where the real conversations happened. Biggest takeaway? Korean research culture is fast, collaborative, and they don\'t mess around. Thanks to the Department of Computer Science and the professors for making this happen. It was genuinely worth every early morning metro ride.',
  },
  {
    id: 'student-04',
    name: 'NGUYEN Kim Hoang Nam',
    nickname: 'Jerry',
    year: 'Year 1',
    email: 'yourname-c@my.cityu.edu.hk',
    image: '/images/team/student-04.jpg',
    reflection:
      'In this five-day study tour to Korea, I gained invaluable insight into a different academic culture. Visiting prestigious institutions like SKKU, Yonsei University, KAIST, and Korea University exposed me to exceptional research, particularly high-quality papers published at top conferences like ICLR and ICCV. What struck me most was the humble and respectful attitude of the students and professors — true expertise often comes with great humility. I want to thank the Department of Computer Science and the accompanying professors for giving me, a Year 1 student, this amazing opportunity.',
  },
  {
    id: 'student-05',
    name: 'Cheng Po Hei',
    nickname: 'Andy',
    year: 'Year 2',
    email: 'yourname-c@my.cityu.edu.hk',
    image: '/images/team/student-05.jpg',
    reflection:
      'The Computer Science study tour was an enriching experience, especially the two-day university visit. It provided valuable exposure to modern technologies, research developments, and real-world applications in the field. Interacting with academic staff and seeing advanced facilities helped deepen my understanding of current trends in computer science. Overall, the tour was highly informative and inspiring.',
  },
  ...Array.from({ length: 20 }, (_, index) => createPlaceholder(index + 6)),
];
