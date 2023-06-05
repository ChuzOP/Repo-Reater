import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { repositories } from "../../../data";
import RepositoryItem from "./repositoryItem";

const RepositoryList = () => {
  // const [repositories, setRepositories] = useState<any>(null);
  // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiYmU0Mjk4NC0wNTFiLTRhMDEtYjQ1ZC1iOGQyOWMzMjIwMGMiLCJpYXQiOjE2ODU5MzI1NDksImV4cCI6MjI5MDczMjU0OSwic3ViIjoiYWNjZXNzVG9rZW4ifQ.Os2Vn0kheJ8OoWDmoRYiUu1wZxKS8b4iaA-QEy33X4w"
  // const fetchRepositories = async () => {
  //   await globalThis
  //     .fetch("http://192.168.1.77:4000/api/repositories",
  //     // .fetch("http://localhost:4000/api/repositories",
  //     // {
  //       // headers: {
  //         // "Accept": "application/json",
  //         // "Content-Type": "application/json",
  //         // 'Authorization': `Bearer ${token}`,
  //       // },
  //     // }
  //     )
  //     .then((response) => {
  //       console.log(response, "res")
  //       // const json = response.json()
  //       // setRepositories(json)
  //     })
      
  //     .catch((error) => console.error(error));
  //   // console.log(response)
  //   // const json = await response.json();
  //   // setRepositories(json);
  // };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);

  // const repositoriesNodes = repositories
  //   ? repositories.map((edge: any) => edge.node)
  //   : [];

  return (
    <FlatList
      data={repositories}
      style={styles.containter}
      ItemSeparatorComponent={() => (
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        />
      )}
      renderItem={({ item }) => <RepositoryItem item={item} />}
    />
  );
};

export default RepositoryList;

const styles = StyleSheet.create({
  containter: {
    marginBottom: 10,
  },
});
