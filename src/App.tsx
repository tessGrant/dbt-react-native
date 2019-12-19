import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Button, Card } from 'react-native-elements'

import {allRepos} from "./mockedData";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {
  public render = () => {
    Ionicons.loadFont();
    return (
      <>
        <SafeAreaView>
          <View>
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
                    title='Details' />
                </Card>
              )}
              />
          </View>
        </SafeAreaView>
      </>
    );
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
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
