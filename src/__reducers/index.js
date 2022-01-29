import { combineReducers } from 'redux';
import allTeamsReducer from './allTeams';
import loggedReducer from './isLogin';

const allReducers = combineReducers({
    loggedInStatus: loggedReducer,
    teams: allTeamsReducer
});

    export default allReducers;