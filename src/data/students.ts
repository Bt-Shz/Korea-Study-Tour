import { visitTeamStudents } from './visitTeamStudents';

export const studentTakeaways = visitTeamStudents.map((student) => ({
  name: student.name,
  year: student.year,
  image: student.image,
  reflection: '',
}));
