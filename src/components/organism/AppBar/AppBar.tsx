import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import constats from "expo-constants";
import AppBarTab from "./AppBarTab";

const AppBar = () => {
  
  return (
    <ScrollView horizontal style={styles.container}>
      <AppBarTab active text="Home" to="/" />
      <AppBarTab text="Sign In" to="/signin" />
    </ScrollView>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: constats.statusBarHeight,
    backgroundColor: "#24292e",
    paddingBottom: 5,
    flexDirection: "row",
    maxHeight: 90, // TODO: fix this
  },
});
