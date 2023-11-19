import { AppDispatch } from '.';
import { Repo } from '../types';

export const TOGGLE_STAR = 'TOGGLE_STAR';
export const GET_ALL_REPOS = 'GET_ALL_REPOS';
export const GET_PERSON = 'GET_PERSON';

export const toggleStarred = (repo: Repo) => {
  return { type: TOGGLE_STAR, starredRepo: repo };
};
