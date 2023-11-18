import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import { Avatar, SearchBar } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { State, Repo, Profile } from '../interfaces';
import ReposList from '../components/ReposList';
import { getAllRepos, getProfile } from '../store/repos-actions';

const AllRepos = (props: any) => {
  const repoOwner: Profile = useSelector((state: State) => state.repos.owner);
  const storedRepos: Repo[] = useSelector((state: State) => state.repos.repos);
  const dispatch = useDispatch();

  const [repos, setFilteredRepos] = useState(storedRepos);
  const [search, setSearch] = useState('');

  const handleSearchInput = (val: string) => {
    setSearch(val);
    const res = storedRepos.filter((repo) => {
      return repo.name.toLowerCase().includes(val.toLowerCase());
    });
    setFilteredRepos(res);
  };

  useEffect(() => {
    // dispatch(getAllRepos());
    // dispatch(getProfile());
  }, []);

  return (
    <View>
      {/* <SearchBar
        containerStyle={{ backgroundColor: '#fff' }}
        inputContainerStyle={{ backgroundColor: '#fff' }}
        placeholder='Type Here...'
        onChangeText={(value) => handleSearchInput(value)}
        value={search}
        lightTheme
        searchIcon={<Ionicons size={16} name='ios-search' color='#000000' />}
      /> */}
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
      <ReposList displayedRepos={repos} navigation={props.navigation} />
    </View>
  );
};

AllRepos.navigationOptions = {
  headerTitle: 'All Repositories',
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
