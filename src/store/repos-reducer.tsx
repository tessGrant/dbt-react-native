import {allRepos} from "../mockedData";
import {State} from "../interfaces";

const initialState: State = {
    repos: allRepos,
    starredByMeRepos: []
};

const reposReducer = (state: State = initialState, action) => {
    return state;
};

export default reposReducer;