import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Button, Card, SearchBar } from 'react-native-elements'

import {allRepos} from "../mockedData";
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    navigation: any
}

export default class AllRepos extends React.Component<Props> {
  state = {
    search: '',
  };

  private updateSearch = (search: any) => {
    this.setState({ search });
    console.log(search);
  };
  public render = () => {
      console.log(this.props);
    Ionicons.loadFont();
    const { search } = this.state;
    return (
        <View>
            <SearchBar
                containerStyle={{backgroundColor: "#fff"}}
                inputContainerStyle={{backgroundColor: "#fff"}}
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
                lightTheme
                searchIcon={
                <Ionicons
                    size={16}
                    name='ios-search'
                    color='#000000'
                />
                }
            />
            <FlatList
            contentContainerStyle={styles.body}
            horizontal={false}
            numColumns={2}
            data={allRepos.sort((a, b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1)}
            renderItem={({item}) => (
            <Card title={item.name} containerStyle={styles.tabRepos}>
                <View style={{marginBottom: 10, justifyContent: "center", flexDirection: "row"}}>
                <Ionicons
                    size={16}
                    name='ios-star'
                    color='#000000'
                />
                <Text style={{marginLeft: 5, fontSize: 14}}>
                {item.stargazers_count.toString()}
                </Text>
                </View>
                <Button
                    icon={<Ionicons size={26} name='ios-code' color='#ffffff' style={{marginHorizontal: 5, marginTop: 5}} />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,}}
                    title='Details'
                    onPress={() => {this.props.navigation.navigate("RepoDetails")}}
                />
            </Card>
            )}
            />
        </View>
    );
  }
}


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