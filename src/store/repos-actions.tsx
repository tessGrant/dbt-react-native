import { Repo } from '../interfaces';

export const TOGGLE_STAR = 'TOGGLE_STAR';
export const GET_ALL_REPOS = 'GET_ALL_REPOS';

export const toggleStarred = (repo: Repo) => {
    return {type: TOGGLE_STAR, starredRepo: repo}
}

export const getAllRepos = () => {
    return async (dispatch: any) => {
        const response = await fetch('https://api.github.com/users/bmizerany/repos');
        const resData = await response.json();
        dispatch({ type: GET_ALL_REPOS, data: resData });
    }
};

export const resolvedGetRepo = (data: any) => ({type: GET_ALL_REPOS, repos: data});
