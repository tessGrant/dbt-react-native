import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Avatar, SearchBar } from '@rneui/themed';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Repo } from '../types';
import ReposList from '../components/ReposList';
import { useGetProfileQuery, useGetReposQuery } from '../redux/apiSlice';

const AllRepos = () => {
  const [search, setSearch] = useState('');
  const { data: reposData, isLoading } = useGetReposQuery();
  const [repos, setRepos] = useState(reposData);
  const { data: repoOwner, isLoading: ownerIsLoading } = useGetProfileQuery();

  const handleSearchInput = (val: string) => {
    setSearch(val);
    const res = repos?.filter((repo) =>
      repo.name.toLowerCase().includes(val.toLowerCase())
    );
    setRepos(res);
  };

  useEffect(() => {
    if (!search) {
      setRepos(reposData);
    }
  }, [search]);

  if (!reposData?.length || isLoading || ownerIsLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <SearchBar
        containerStyle={{ backgroundColor: '#fff' }}
        inputContainerStyle={{ backgroundColor: '#fff' }}
        placeholder='Type Here...'
        onChangeText={(value) => handleSearchInput(value)}
        value={search}
        lightTheme
        searchIcon={<Ionicons name='ios-search' size={16} color='#000000' />}
      />
      <View style={styles.ownerCard}>
        <Avatar
          containerStyle={{ marginRight: 10 }}
          rounded
          size='small'
          source={{ uri: `${repoOwner?.avatar_url}` }}
        />
        <Text style={styles.textSubTitle}>
          {repoOwner?.name} / {repoOwner?.login}
        </Text>
      </View>
      <ReposList displayedRepos={repos ?? []} />
    </View>
  );
};

const styles = StyleSheet.create({
  ownerCard: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'stretch',
    alignSelf: 'flex-start',
  },
  textSubTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 5,
  },
});

export default AllRepos;
