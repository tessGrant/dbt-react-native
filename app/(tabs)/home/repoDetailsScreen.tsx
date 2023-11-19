import React from 'react';
import RepoDetails from '../../src/screens/repoDetails';
import { Provider } from 'react-redux';
import { store } from '../../src/store';
import { Stack } from 'expo-router';

const RepoDetailsScreen = () => {
  return (
    <Provider store={store}>
      <Stack.Screen options={{ headerShown: true, title: 'Repo details' }} />
      <RepoDetails />
    </Provider>
  );
};

export default RepoDetailsScreen;
