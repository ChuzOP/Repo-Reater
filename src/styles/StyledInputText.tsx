import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const StyledInputText = ({ style = {}, error = "", ...props }) => {
  const textInputStyles = [styles.textInput, style, error && styles.error];

  return <TextInput style={textInputStyles} {...props} />;
};

export default StyledInputText;

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  error: {
    borderColor: "#f00",
  },
});
