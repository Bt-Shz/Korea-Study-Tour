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
    email: 'yourname-c@my.cityu.edu.hk',
    image: '/images/team/student-01.jpg',
    reflection:
      'The CityU CS Department study tour to Seoul was a genuinely memorable experience. Through academic sessions at SKKU and Yonsei University, we were introduced to AI research from PhD students and faculty — work I found accessible and deeply insightful. In the evenings, I connected with Kazakh students studying at Korean universities; time together outside the formal programme was a highlight in its own right.',
  },
  ...Array.from({ length: 24 }, (_, index) => createPlaceholder(index + 2)),
];
