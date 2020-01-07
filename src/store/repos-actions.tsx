import { Repo } from '../interfaces';

export const TOGGLE_STAR = 'TOGGLE_STAR';

export const toggleStarred = (repo: Repo) => {
    return {type: TOGGLE_STAR, starredRepo: repo}
}