import { AppDispatch } from '../store';
import { GET_ALL_REPOS } from '../store/actions';

export const getAllRepos = () => {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(
      'https://api.github.com/users/bmizerany/repos'
    );
    const resData = await response.json();
    dispatch({ type: GET_ALL_REPOS, data: resData });
  };
};
