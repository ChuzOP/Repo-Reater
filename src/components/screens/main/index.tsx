import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RepositoryList from "../repositoryList/index";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 10,
  },
});
