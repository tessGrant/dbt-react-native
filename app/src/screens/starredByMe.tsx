import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StarredByMe = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.textTitle}>No starred by you repositories.</Text>
      <Text style={styles.textStyle}>
        To be able to see your personally starred repositories, you should press
        sign 'star' in the top right corner of the screen.
      </Text>
    </View>
  );
};

export default StarredByMe;

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  textTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 15,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
});
