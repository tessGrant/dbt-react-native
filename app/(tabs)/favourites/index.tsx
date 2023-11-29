import { View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import StarredByMe from '../../screens/starredByMe';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';

const Favourites = () => {
  return (
    <View>
      <Provider store={store}>
        <Stack.Screen options={{ headerShown: true, title: 'Favourites' }} />
        <StarredByMe />
      </Provider>
    </View>
  );
};

export default Favourites;
