const getTeamNames = (teams) => teams.map((team) => team.name);

const getHowManyTeams = (teams) => teams.length;

const getTeamPlayersFirstName = (team) => team.players.map((player) => player.firstName);

// We don't use "export" in every function because we export everything together with object destructuring at the end
export { getTeamNames, getHowManyTeams,getTeamPlayersFirstName };
