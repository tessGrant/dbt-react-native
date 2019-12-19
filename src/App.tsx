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

import { ListItem, Button, Card } from 'react-native-elements'

import {allRepos} from "./mockedData";
import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from 'react-native-elements';

// @ts-ignore
export default class App extends React.Component {

  public render = () => {
    Icon.loadFont();
    return (
      <>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
             <FlatList contentContainerStyle={styles.body}
              data={allRepos.sort((a, b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1)}
              renderItem={({item, index}) => (
                // <ListItem
                //   key={index}
                //   title={item.name}
                //   subtitle={item.stargazers_count.toString()}
                //   bottomDivider
                //   chevron
                // />
                <Card title={item.name} containerStyle={styles.tabRepos}>
                  <Text style={{marginBottom: 10}}>
                  <Icon
                    size={18}
                    name="star"
                    color="#000000"
                  />
                  {item.stargazers_count.toString()}
                  </Text>
                  <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
                </Card>
              )}
              />
            </View>
          </ScrollView>
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
    flexDirection: "row",
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "flex-start",
    alignContent: "space-around",
  },
  tabRepos: {
    width: 165,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
