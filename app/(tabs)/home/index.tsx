import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Home = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: 'Home' }} />
      <Text>Here gonna be AllRepos</Text>
    </View>
  );
};

export default Home;
