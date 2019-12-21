import React from 'react';
import ReposNavigator from "./navigation/appStackNavigator";

export default class App extends React.Component {
  public render = () => {
    return (
      <ReposNavigator />
    );
  }
}