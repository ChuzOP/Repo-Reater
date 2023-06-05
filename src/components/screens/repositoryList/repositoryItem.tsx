import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Repository } from "../../../data/repositories";
import StyledText from "../../../styles/StyledText";

interface props {
  item: Repository;
}

const RepositoryItem = ({ item }: props) => {
  const thousandParser = (num: number) => {
    if (num > 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num;
  };
  return (
    <View key={item.id} style={styles.box}>
      <Image
        style={styles.image}
        source={{
          uri: item.ownerAvatarUrl,
        }}
      />
      <StyledText big bold center>
        {item.fullName}
      </StyledText>
      <StyledText separated> {item.description} </StyledText>
      <View style={styles.statsContainer}>
        <View>
          <StyledText small bold>
            {thousandParser(item.stargazersCount)}
          </StyledText>
          <StyledText small>Stars</StyledText>
        </View>
        <View>
          <StyledText small bold>
            {thousandParser(item.forksCount)}
          </StyledText>
          <StyledText small>Forks</StyledText>
        </View>
        <View>
          <StyledText small bold>
            {item.reviewCount}
          </StyledText>
          <StyledText small>Reviews</StyledText>
        </View>
      </View>
      <View style={styles.languageContainer}>
        <Text style={styles.language}>{item.language}</Text>
      </View>
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  containter: {},
  box: {
    backgroundColor: "#fff",
    padding: 10,
    width: "80%",
    alignSelf: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  languageContainer: {
    alignSelf: "flex-end",
  },
  language: {
    fontStyle: "italic",
    backgroundColor: "#0074D9",
    padding: 5,
    borderRadius: 5,
    color: "#fff",
  },
  description: {
    textAlign: "justify",
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    alignSelf: "center",
  },
});
