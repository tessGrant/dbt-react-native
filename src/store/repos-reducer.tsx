import {allRepos} from '../mockedData';
import {State, Repo} from '../interfaces';
import { TOGGLE_STAR, GET_ALL_REPOS, getAllRepos } from './repos-actions';
import { getStarredRepos } from './reducer-util';

const initialState: State = {
    repos: allRepos,
    starredByMeRepos: []
};

const reposReducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case GET_ALL_REPOS:
            return {...state, repos: action.data};
        case TOGGLE_STAR:
            return { ...state, starredByMeRepos: getStarredRepos(state, action.starredRepo) }
        default:
            return state;
    }
    
};

export default reposReducer;