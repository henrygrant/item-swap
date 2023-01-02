import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useQuery } from "react-query";
import { allGroups } from "../pbConfig";
import { Group } from "../components";
import theme from "../styles/theme";

export function Groups() {
  const groupQuery = useQuery(["currentUser"], allGroups);
  // console.log(groupQuery?.data);

  return (
    <FlatList
      style={styles.container}
      data={groupQuery.data}
      renderItem={({ item }) => <Group {...item} />}
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
