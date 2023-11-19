import { AppDispatch } from '../store';
import { GET_PERSON } from '../store/actions';

export const getProfile = () => {
  return async (dispatch: AppDispatch) => {
    const response = await fetch('https://api.github.com/users/bmizerany');
    const resData = await response.json();
    dispatch({ type: GET_PERSON, data: resData });
  };
};
