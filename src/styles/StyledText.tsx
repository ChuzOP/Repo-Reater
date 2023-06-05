import { StyleSheet, Text, View } from "react-native";
import { theme } from "../utils/theme";

const styles = StyleSheet.create({
  normal: {
    fontFamily: "Roboto",
    fontSize: theme.fontSizes.medium,
    fontWeight: "normal",
    letterSpacing: 0.44,
  },
  separated: {
    lineHeight: 24,
  },
  big: {
    fontSize: theme.fontSizes.large,
  },
  small: {
    fontSize: theme.fontSizes.small,
  },
  italic: {
    fontStyle: "italic",
  },
  bold: {
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
  },
});

export default function StyledText({
  italic,
  bold,
  big,
  small,
  center,
  separated,
  style,
  children,
}: props) {
  let textStyles = [
    styles.normal,
    italic && styles.italic,
    bold && styles.bold,
    big && styles.big,
    small && styles.small,
    center && styles.center,
    separated && styles.separated,
    style,
  ];
  return <Text style={textStyles}>{children}</Text>;
}

interface props {
  italic?: boolean;
  bold?: boolean;
  big?: boolean;
  small?: boolean;
  center?: boolean;
  separated?: boolean;
  children: any;
  style?: any;
}
