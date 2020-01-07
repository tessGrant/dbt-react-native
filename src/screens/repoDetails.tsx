import React, { useEffect, useCallback } from "react";
import {View, Text, StyleSheet } from "react-native";
import { Repo, State } from "../interfaces";
import { useSelector, useDispatch } from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import ReposHeaderButton from "../components/HeaderButton";
import {toggleStarred} from "../store/repos-actions";

const RepoDetails = (props: any) => {
    const id =  props.navigation.getParam("reposId");
    const allRepos: Repo[] = useSelector((state: State) => state.repos.repos);
    // @ts-ignore
    const selectedRepo: Repo = allRepos.find(item => item.id === id);
    const dispatch = useDispatch();

    const toggleStarHandler = useCallback(() => {
        dispatch(toggleStarred(selectedRepo));
    }, [dispatch, selectedRepo]);

    useEffect(() => {
        props.navigation.setParams({starred: toggleStarHandler});
    }, [toggleStarHandler]);

    return (
        <View style={styles.screen}>
            <Text>Repo details</Text>
            <Text>{selectedRepo.id}</Text>
            <Text>{selectedRepo.name}</Text>
            <Text>{selectedRepo.description}</Text>
            <Text>{selectedRepo.stargazers_count}</Text>
        </View>
    );
}

RepoDetails.navigationOptions = (navigationData: any) => {
    const toggleStarred = navigationData.navigation.getParam("starred");
    return {
        headerTitle: navigationData.navigation.getParam("repoTitle"),
        headerRight: <HeaderButtons HeaderButtonComponent={ReposHeaderButton}>
            <Item
                title="Star"
                iconName='md-star'
                onPress={toggleStarred}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default RepoDetails;