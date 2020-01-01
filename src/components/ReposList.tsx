import React from "react";
import { Button, Card, SearchBar } from 'react-native-elements'

import Ionicons from "react-native-vector-icons/Ionicons";
import {State, Repo} from "../interfaces";
import { View, Text, FlatList, StyleSheet } from "react-native";
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

interface IProps {
    displayedRepos: Repo[],
    navigation: any,
};

const ReposList = (props: IProps) => {
    Ionicons.loadFont();
    return (
        <FlatList
            contentContainerStyle={styles.body}
            horizontal={false}
            numColumns={2}
            data={props.displayedRepos.sort((a, b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1)}
            renderItem={({item}) => (
            <Card title={item.name} containerStyle={styles.tabRepos}>
                <View style={{marginBottom: 10, justifyContent: "center", flexDirection: "row"}}>
                <Ionicons
                    size={16}
                    name='md-star'
                    color='olivedrab'
                />
                <Text style={{marginLeft: 5, fontSize: 14}}>
                {item.stargazers_count.toString()}
                </Text>
                </View>
                <Button
                    icon={<Ionicons size={26} name='ios-code' color='#ffffff' style={{marginHorizontal: 5, marginTop: 5}} />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: 'olivedrab'}}
                    title='Details'
                    onPress={() => {props.navigation.navigate("RepoDetails",
                    { 
                        reposId: item.id,
                        repoTitle: item.name
                    },
                    )}}
                />
            </Card>
            )}
            />
    );
};

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
  },
  body: {
      paddingVertical: 10,
      paddingBottom: 50,
      backgroundColor: Colors.white,
    },
    tabRepos: {
      width: 165,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
  });
  

export default ReposList;