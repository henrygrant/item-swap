import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useQuery } from "react-query";
import { allPosts } from "../pbConfig";
import { Post } from "../components/Post";
import theme from "../styles/theme";

export function Feed() {
  const postQuery = useQuery(["posts"], allPosts);
  console.log(postQuery?.data);

  return (
    <FlatList
      style={styles.container}
      data={postQuery.data}
      renderItem={({ item }) => <Post {...item} />}
      keyExtractor={(item) => item.id}
    >
      {/* <StatusBar style="auto" /> */}
    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.ALMOSTBLACK,
  },
});
