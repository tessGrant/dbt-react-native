import React from 'react';
import ReposNavigator from "./navigation/appStackNavigator";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import reposReducer from "./store/repos-reducer";

const rootReducer = combineReducers({
  repos: reposReducer
});
const store = createStore(rootReducer);

export default class App extends React.Component {
  public render = () => {
    return (
      <Provider store = {store}>
        <ReposNavigator />
      </Provider>
    );
  }
}