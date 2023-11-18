// import React from 'react';
// // import { createAppContainer } from 'react-navigation';
// // import { createStackNavigator } from 'react-navigation-stack';
// // import { createBottomTabNavigator } from 'react-navigation-tabs';
// import RepoDetails from '../screens/repoDetails';
// import AllRepos from '../screens/allRepos';
// import StarredByMeScreen from '../screens/starredByMe';
// import Icon from 'react-native-vector-icons/Ionicons';

// const ReposNavigator = createStackNavigator({
//   AllRepos: AllRepos,
//   RepoDetails: {
//     screen: RepoDetails,
//   },
// });
// // @ts-ignore
// ReposNavigator.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarVisible,
//   };
// };

// const StarredReposNav = createStackNavigator({
//   Starred: StarredByMeScreen,
//   RepoDetails: {
//     screen: RepoDetails,
//   },
// });

// const ReposTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: ReposNavigator,
//       navigationOptions: {
//         tabBarIcon: (tabInfo) => {
//           return (
//             <Icon name='logo-github' size={23} color={tabInfo.tintColor} />
//           );
//         },
//       },
//     },
//     Starred: {
//       screen: StarredReposNav,
//       navigationOptions: {
//         tabBarIcon: (tabInfo) => {
//           return <Icon name='md-star' size={23} color={tabInfo.tintColor} />;
//         },
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//       showLabel: false,
//     },
//   }
// );
// const ReposTabNavigatorContainer = createAppContainer(ReposTabNavigator);
// export default ReposTabNavigatorContainer;
