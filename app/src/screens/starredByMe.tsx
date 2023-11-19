import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ReposList from '../components/ReposList';
import { Repo, State } from '../types';
import { useSelector } from 'react-redux';

const StarredByMeScreen = (props: any) => {
  const storedRepos: Repo[] = useSelector(
    (state: State) => state.repos.starredByMeRepos
  );
  if (!storedRepos || storedRepos.length === 0) {
    return (
      <View style={styles.body}>
        <Text style={styles.textTitle}>No starred by you repositories.</Text>
        <Text style={styles.textStyle}>
          To be able to see your personally starred repositories, you should
          press sign 'star' in the top right corner of the screen.
        </Text>
      </View>
    );
  }
  return (
    <View>
      <ReposList displayedRepos={storedRepos} />
    </View>
  );
};

StarredByMeScreen.navigationOptions = {
  headerTitle: 'Starred By Me Repositories',
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  textTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 15,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 25,
  },
});

export default StarredByMeScreen;
