import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import { Avatar, SearchBar } from '@rneui/themed';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { State, Repo, Profile } from '../types';
import ReposList from '../components/ReposList';
import { getAllRepos } from '../api/getAllRepos';
import { getProfile } from '../api/getProfile';

const AllRepos = () => {
  const repoOwner: Profile = useSelector((state: State) => state.repos.owner);
  const storedRepos: Repo[] = useSelector((state: State) => state.repos.repos);
  const dispatch = useDispatch();

  const [repos, setFilteredRepos] = useState(storedRepos);
  const [search, setSearch] = useState('');

  const handleSearchInput = (val: string) => {
    setSearch(val);
    const res = storedRepos.filter((repo) =>
      repo.name.toLowerCase().includes(val.toLowerCase())
    );
    setFilteredRepos(res);
  };
  // fix the STORE!!!
  useEffect(() => {
    dispatch(getAllRepos());
    dispatch(getProfile());
    return setFilteredRepos(storedRepos);
  }, []);

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
          source={{ uri: `${repoOwner.avatar_url}` }}
        />
        <Text style={styles.textSubTitle}>
          {repoOwner.name} / {repoOwner.login}
        </Text>
      </View>
      <ReposList displayedRepos={repos} />
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
