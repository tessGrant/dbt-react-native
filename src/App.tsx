import React from 'react';
import ReposNavigator from './navigation/appStackNavigator';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reposReducer from './store/repos-reducer';
import ReduxThunk from 'redux-thunk';
import { getAllRepos } from './store/repos-actions';

const rootReducer = combineReducers({
  repos: reposReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  public render = () => {
    return (
      <Provider store = {store}>
        <ReposNavigator />
      </Provider>
    );
  }
}