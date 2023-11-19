import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import AllRepos from '../../src/screens/allRepos';
import { Provider } from 'react-redux';
import { store } from '../../src/store';

const Home = () => {
  return (
    <Provider store={store}>
      <Stack.Screen options={{ headerShown: true, title: 'Home' }} />
      <AllRepos />
    </Provider>
  );
};

export default Home;
