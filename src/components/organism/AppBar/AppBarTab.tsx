import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useLocation } from "react-router-native";
import StyledText from "../../../styles/StyledText";

type props = {
  text: string;
  to: string;
  active?: boolean;
};

const AppBarTab = ({ text, to }: props) => {
  const { pathname } = useLocation();
  let active = pathname === to;
  return (
    <Link to={to}>
      <StyledText big bold style={[styles.title, active && styles.titleActive]}>
        {text}
      </StyledText>
    </Link>
  );
};

export default AppBarTab;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 22,
    paddingVertical: 5,
    marginHorizontal: 10,
    color: "#fff",
  },
  titleActive: {
    color: "#0366d6",
  },
});
