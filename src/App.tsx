import React from 'react';
import ReposNavigator from './navigation/appStackNavigator';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reposReducer from './store/repos-reducer';
import ReduxThunk from 'redux-thunk';
import Ionicons from 'react-native-vector-icons/Ionicons';

const rootReducer = combineReducers({
  repos: reposReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  public render = () => {
    Ionicons.loadFont();
    return (
      <Provider store = {store}>
        <ReposNavigator />
      </Provider>
    );
  }
}