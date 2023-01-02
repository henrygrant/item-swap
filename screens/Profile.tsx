import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useQuery } from "react-query";
import { pb, allPosts } from "../pbConfig";
import { Post } from "../components";
import theme from "../styles/theme";

export function Profile({ navigation }) {
  const postQuery = useQuery(["posts"], allPosts);
  console.log(postQuery?.data);

  const logout = async () => {
    pb.authStore.clear();
    navigation.reset({ index: 0, routes: [{ name: "Sign In" }] });
  };

  return (
    <View style={styles.container}>
      <Button title="Log Out" onPress={logout} color={theme.TINTEDBLACK} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.ALMOSTBLACK,
    height: "100%",
  },
});
