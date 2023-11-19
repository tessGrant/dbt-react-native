import { State } from '../types';
import { TOGGLE_STAR, GET_ALL_REPOS, GET_PERSON } from './actions';
import { getStarredRepos } from './utils';

const initialState: State = {
  repos: [],
  starredByMeRepos: [],
  owner: {},
};

const reposReducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case GET_PERSON:
      return { ...state, owner: action.data };
    case GET_ALL_REPOS:
      return { ...state, repos: action.data };
    case TOGGLE_STAR:
      return {
        ...state,
        starredByMeRepos: getStarredRepos(state, action.starredRepo),
      };
    default:
      return state;
  }
};

export default reposReducer;
