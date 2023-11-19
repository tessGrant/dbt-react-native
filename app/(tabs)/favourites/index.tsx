import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import StarredByMeScreen from '../../src/screens/starredByMe';
import { Provider } from 'react-redux';
import { store } from '../../src/store';

const Favourites = () => {
  return (
    <Provider store={store}>
      <Stack.Screen options={{ headerShown: true, title: 'Favourites' }} />
      <StarredByMeScreen />
    </Provider>
  );
};

export default Favourites;
