import React from 'react';
import { Stack } from 'expo-router';

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='repoDetailsScreen'
        options={{ title: 'Repo Details' }}
      />
    </Stack>
  );
};

export default HomeLayout;
