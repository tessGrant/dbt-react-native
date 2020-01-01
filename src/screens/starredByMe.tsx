import React from "react";
import {View } from "react-native";
import ReposList from "../components/ReposList";
import { Repo, State } from "../interfaces";
import { useSelector } from "react-redux";

const StarredByMeScreen = (props: any) => {
    const storedRepos: Repo[] = useSelector((state: State) => state.repos.starredByMeRepos);
    return (
        <View>
            <ReposList displayedRepos={storedRepos} navigation={props.navigation} />
        </View>
    );
}

StarredByMeScreen.navigationOptions = {
    headerTitle: "Starred By Me Repositories"
}

export default StarredByMeScreen;