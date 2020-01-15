import React, { useEffect, useCallback } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Repo, State } from '../interfaces';
import { useSelector, useDispatch } from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import ReposHeaderButton from '../components/HeaderButton';
import {toggleStarred} from '../store/repos-actions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RepoDetails = (props: any) => {
    const id =  props.navigation.getParam('reposId');
    const allRepos: Repo[] = useSelector((state: State) => state.repos.repos);
    // @ts-ignore
    const selectedRepo: Repo = allRepos.find(item => item.id === id);
    const activeFavoriteRepo = useSelector((state: State) => 
        state.repos.starredByMeRepos.some((repo:Repo) => repo.id === selectedRepo.id));
    const dispatch = useDispatch();

    const toggleStarHandler = useCallback(() => {
        dispatch(toggleStarred(selectedRepo));
    }, [dispatch, selectedRepo]);

    useEffect(() => {
        props.navigation.setParams({starred: toggleStarHandler});
    }, [toggleStarHandler]);

    useEffect(() => {
        props.navigation.setParams({isStarred: activeFavoriteRepo});
    }, [activeFavoriteRepo]);

    return (
        <View style={styles.screen}>
            <Text style={styles.textTitle}>Repo details</Text>
            <View style={styles.detailsCard}>
                <Text style={styles.textSubTitle}>Repo name: {selectedRepo.name}</Text>
                <Text style={styles.textStyle}>Description:  {selectedRepo.description}</Text>
                <Text style={styles.starStyle}>
                    <Ionicons
                        size={20}
                        name='md-star'
                        color='goldenrod'
                    /> {selectedRepo.stargazers_count}
                </Text>
            </View>
        </View>
    );
}

RepoDetails.navigationOptions = (navigationData: any) => {
    const toggleStarred = navigationData.navigation.getParam('starred');
    const isStarredRepo = navigationData.navigation.getParam('isStarred');
    return {
        headerTitle: navigationData.navigation.getParam('repoTitle'),
        headerRight: <HeaderButtons HeaderButtonComponent={ReposHeaderButton}>
            <Item
                title='Star'
                iconName={isStarredRepo ? 'md-star' : 'md-star-outline'}
                onPress={toggleStarred}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    detailsCard: {
        paddingVertical: 10,
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    starStyle: {
        textAlign: 'left',
        fontSize: 16,
        paddingVertical: 15,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '800',
        paddingVertical: 25
    },
    textSubTitle: {
        fontSize: 20,
        fontWeight: "600",
        paddingVertical: 15,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 30,
    }
});

export default RepoDetails;