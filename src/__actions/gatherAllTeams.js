export const gather_all_teams = (allTeams) => {
    return{
        type: 'GET_ALL_TEAMS',
        payload: allTeams
    }
}