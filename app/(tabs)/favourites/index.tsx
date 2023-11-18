import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Favourites = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: 'Favourites' }} />
      <Text>Here will be Favourites Repos</Text>
    </View>
  );
};

export default Favourites;
