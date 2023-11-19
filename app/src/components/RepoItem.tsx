import { Link } from 'expo-router';
import { Text, StyleSheet, View } from 'react-native';
import { Repo } from '../types';
import { Card } from '@rneui/base';
import Ionicons from 'react-native-vector-icons/Ionicons';

type RepoItemProps = {
  repoItem: Repo;
};

const RepoItem = (props: RepoItemProps) => {
  const { repoItem } = props;
  return (
    <Card containerStyle={styles.tabRepos}>
      <Card.Title>{repoItem.name}</Card.Title>
      <View style={styles.repoInfo}>
        <Ionicons size={16} name='md-star' color='goldenrod' />
        <Text style={styles.starsAmountText}>
          {repoItem.stargazers_count.toString()}
        </Text>
      </View>
      <Link
        href={{
          pathname: '/home/repoDetailsScreen',
          params: { repoId: repoItem.id },
        }}
        style={styles.tabButton}>
        <Text>Go to Details</Text>
      </Link>
    </Card>
  );
};

export default RepoItem;

const styles = StyleSheet.create({
  tabRepos: {
    width: 165,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  repoInfo: {
    marginBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tabButton: {
    width: '90%',
    height: 40,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'olivedrab',
  },
  starsAmountText: { marginLeft: 5, fontSize: 14 },
});
