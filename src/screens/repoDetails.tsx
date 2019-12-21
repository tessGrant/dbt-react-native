import React from "react";
import {View, Text, StyleSheet } from "react-native";

 const RepoDetails = () => {
    return (
        <View style={styles.screen}>
            <Text>Repo details</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default RepoDetails;