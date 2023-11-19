import React from 'react';
import { Button, Card } from '@rneui/themed';
import { useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { State, Repo } from '../types';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Link, useNavigation } from 'expo-router';
import RepoDetailsScreen from '../../(tabs)/home/repoDetailsScreen';

interface IProps {
  displayedRepos: Repo[];
}

const ReposList = (props: IProps) => {
  const navigation = useNavigation();
  const starredByMeRepos = useSelector(
    (state: State) => state.repos.starredByMeRepos
  );
  const renderRepoItem = (item: Repo) => {
    const isStarredByMeRepo = starredByMeRepos.some(
      (repo: Repo) => repo.id === item.id
    );

    return (
      <Card containerStyle={styles.tabRepos}>
        <Card.Title>{item.name}</Card.Title>
        <View style={styles.repoInfo}>
          <Ionicons size={16} name='md-star' color='goldenrod' />
          <Text style={styles.starsAmountText}>
            {item.stargazers_count.toString()}
          </Text>
        </View>
        <Link
          href={{
            pathname: '/home/repoDetailsScreen',
            params: { repoId: item.id },
          }}
          style={styles.tabButton}>
          <Text>Go to Details</Text>
        </Link>
      </Card>
    );
  };
  Ionicons.loadFont();
  return (
    <FlatList
      contentContainerStyle={styles.body}
      horizontal={false}
      numColumns={2}
      data={props.displayedRepos.sort((a, b) =>
        a.stargazers_count > b.stargazers_count ? -1 : 1
      )}
      renderItem={({ item }) => renderRepoItem(item)}
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    paddingVertical: 10,
    paddingBottom: 50,
    backgroundColor: Colors.white,
  },
  tabRepos: {
    width: 165,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  repoInfo: {
    marginBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  tabButton: {
    width: '90%',
    height: 40,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'olivedrab',
  },
  starsAmountText: { marginLeft: 5, fontSize: 14 },
});

export default ReposList;
