import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useLocalSearchParams } from 'expo-router';
import { useGetReposQuery } from '../redux/apiSlice';

const RepoDetails = () => {
  const { repoId } = useLocalSearchParams();
  const { data: repos } = useGetReposQuery();

  const selectedRepo = repos?.find((item) => item.id.toString() === repoId);

  return (
    <View style={styles.screen}>
      <Text style={styles.textSubTitle}>Repo name: {selectedRepo?.name}</Text>
      <Text style={styles.textStyle}>
        Description: {selectedRepo?.description}
      </Text>
      <Text style={styles.starStyle}>
        <Ionicons size={20} name='md-star' color='goldenrod' />{' '}
        {selectedRepo?.stargazers_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  starStyle: {
    textAlign: 'left',
    fontSize: 16,
    paddingVertical: 15,
  },
  textSubTitle: {
    fontSize: 20,
    paddingVertical: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
  },
});

export default RepoDetails;
