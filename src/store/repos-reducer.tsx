import {allRepos} from "../mockedData";
import {State, Repo} from "../interfaces";
import { TOGGLE_STAR } from "./repos-actions";

const initialState: State = {
    repos: allRepos,
    starredByMeRepos: []
};

const reposReducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_STAR:
            const existingIndex = state.starredByMeRepos.findIndex((repo: Repo) => repo.id === action.starredRepo.id);
            if(existingIndex >= 0) {
                const updatedStarredRepos = [...state.starredByMeRepos];
                updatedStarredRepos.splice(existingIndex, 1);
                return {...state, starredByMeRepos: updatedStarredRepos};
            } else {
                const iRepo = state.repos.find(
                    (repo: Repo) => repo.id === action.starredRepo.id);
                return {...state, starredByMeRepos: state.starredByMeRepos.concat(iRepo)}

            }
        default:
            return state;
    }
    
};

export default reposReducer;