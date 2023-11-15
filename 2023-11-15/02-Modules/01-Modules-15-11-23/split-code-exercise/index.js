//namespace import
import * as teams from "./modules/teams.js";
//named imports
import {
  //with alias we can change the name of a named import
  getHowManyTeams as howManyTeams,
  getTeamNames,
  getTeamPlayersFirstName,
} from "./modules/actions.js";
//default and named
import teamsRanking, { scores } from "./modules/statistics.js";
//default
import bestTeam from "./modules/bestTeam.js";
//side-effect import
import "./modules/sideEffect.js";

//TEAM
// console.log("teams:", teams);
console.log("teamA:", teams.teamA);

//destructuring
const { players } = teams.teamA;
console.log("players-team-A:", players);

//ACTIONS
console.log("getTeamNames:", getTeamNames(teams.allTeams));
console.log("howManyTeams:", howManyTeams(teams.allTeams));
console.log("getTeamPlayersFirstName:", getTeamPlayersFirstName(teams.teamA));

//STATISTICS
console.log("teamsRanking:", teamsRanking);
console.log("scores:", scores);

//BEST TEAM

//if the variable has not been defined and we return a function:

// const bestTeamObj = bestTeam()
// console.log('bestTeam:',bestTeamObj);
// console.log('bestTeam:',bestTeam());

////if the variable has been defined and we return a VARIABLE:
console.log("bestTeam:", bestTeam);
