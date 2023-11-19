import React from 'react';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import RepoDetails from '../../src/screens/repoDetails';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';

const RepoDetailsScreen = () => {
  return (
    <View>
      <Provider store={store}>
        <Stack.Screen options={{ headerShown: true, title: 'Repo details' }} />
        <RepoDetails />
      </Provider>
    </View>
  );
};

export default RepoDetailsScreen;
