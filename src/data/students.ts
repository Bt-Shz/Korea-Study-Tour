import { visitTeamStudents } from './visitTeamStudents';

export const studentTakeaways = visitTeamStudents.map(
  ({ name, nickname, year, image, reflection }) => ({
    name,
    nickname,
    year,
    image,
    reflection,
  })
);
