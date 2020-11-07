import { combineReducers } from 'redux';
import projects from './projects_reducer.js';

const rootReducer = combineReducers({
    projects
})

export default rootReducer;