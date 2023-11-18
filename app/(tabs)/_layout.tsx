import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name='logo-github'
                size={23}
                color={tabInfo.color.valueOf()}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name='favourites'
        options={{
          title: 'Favourites',
          tabBarLabel: 'Favourites',
          tabBarIcon: (tabInfo) => {
            return (
              <Icon name='md-star' size={23} color={tabInfo.color.valueOf()} />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;
