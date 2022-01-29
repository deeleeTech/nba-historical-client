const allTeamsReducer = (state = null, action) => {
    switch(action.type){
        case 'GET_ALL_TEAMS':
            return action.payload
        default:
            return state
    }
}
export default allTeamsReducer;