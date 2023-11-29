import React, { useEffect, useMemo, useState } from 'react';
import { Button, Card } from '@rneui/themed';
import { useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { State, Repo } from '../types';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Link, useNavigation } from 'expo-router';
import RepoDetailsScreen from '../../(tabs)/home/repoDetailsScreen';
import RepoItem from './RepoItem';

interface IProps {
  displayedRepos: Repo[];
}

const ReposList = (props: IProps) => {
  const { displayedRepos } = props;
  Ionicons.loadFont();

  return (
    <FlatList
      contentContainerStyle={styles.body}
      horizontal={false}
      numColumns={2}
      data={displayedRepos}
      renderItem={({ item }) => <RepoItem repoItem={item} />}
    />
  );
};

export default ReposList;

const styles = StyleSheet.create({
  body: {
    paddingVertical: 10,
    paddingBottom: 50,
    backgroundColor: Colors.white,
  },
});
