import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import constats from "expo-constants";
import AppBarTab from "./AppBarTab";

const AppBarIOS = () => {
  
  return (
    <ScrollView horizontal style={styles.container}>
      <AppBarTab active text="Home" to="/" />
      <AppBarTab text="SignIn" to="/signin" />
    </ScrollView>
  );
};

export default AppBarIOS;

const styles = StyleSheet.create({
  container: {
    paddingTop: constats.statusBarHeight,
    backgroundColor: "red",
    paddingBottom: 5,
    flexDirection: "row",
    maxHeight: 80,
  },
});
