import teamsRanking, { scores } from "./statistics.js";

//it is possible to export witouth defined the variable, by return a function

// export default () => {
//   return {
//     name: teamsRanking.first,
//     scores: scores.teamA,
//   };
// };

const bestTeam = {
  name: teamsRanking.first,
  scores: scores.teamA,
};

export default bestTeam;
