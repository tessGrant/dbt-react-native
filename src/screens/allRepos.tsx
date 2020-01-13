import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View } from 'react-native';

import { SearchBar } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {State, Repo} from '../interfaces';
import ReposList from '../components/ReposList';
import { getAllRepos } from '../store/repos-actions';


const AllRepos = (props: any) => {
    Ionicons.loadFont();
    const storedRepos: Repo[] = useSelector((state: State) => state.repos.repos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRepos());
    }, [dispatch]);


    return (
        <View>
            <SearchBar
                containerStyle={{backgroundColor: '#fff'}}
                inputContainerStyle={{backgroundColor: '#fff'}}
                placeholder='Type Here...'
                onChangeText={() => {}}
                value={''}
                lightTheme
                searchIcon={
                <Ionicons
                    size={16}
                    name='ios-search'
                    color='#000000'
                />
                }
            />
            <ReposList
                displayedRepos={storedRepos}
                navigation={props.navigation}
             />
            
        </View>
    );
};


AllRepos.navigationOptions = {
    headerTitle: 'All Repositories'
};

export default AllRepos;