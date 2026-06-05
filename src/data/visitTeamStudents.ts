const placeholderImage = '/images/team/placeholder.svg';

export type VisitTeamStudent = {
  id: string;
  name: string;
  nickname: string;
  year: 'Year 1' | 'Year 2' | 'Year 3' | 'Year 4';
  email: string;
  image: string;
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
  };
}

// HOW TO ADD YOUR INFO:
// 1) Replace name, nickname (optional), year, and email in your own slot.
// 2) Add your photo at public/images/team/student-XX.jpg (match your id).
// 3) Replace image with /images/team/student-XX.jpg and save.
export const visitTeamStudents: VisitTeamStudent[] = Array.from({ length: 25 }, (_, index) =>
  createPlaceholder(index + 1)
);
