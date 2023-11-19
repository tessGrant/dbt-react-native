import React from 'react';
import { Stack } from 'expo-router';
import AllRepos from '../../src/screens/allRepos';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';
import { View } from 'react-native';

const Home = () => {
  return (
    <View>
      <Provider store={store}>
        <Stack.Screen options={{ headerShown: true, title: 'Home' }} />
        <AllRepos />
      </Provider>
    </View>
  );
};

export default Home;
