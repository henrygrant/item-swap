import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PostsResponse } from "../types";
import theme from "../styles/theme";

export function Post(props: PostsResponse) {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price}</Text>
      </View>
      <Text style={styles.description}>{props.description}</Text>
      <Text style={styles.author}>{props.expand?.user?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "1rem",
    marginBottom: ".25rem",
    borderBottomColor: theme.TINTEDBLACK,
    borderBottomWidth: 2,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: theme.ALMOSTWHITE,
  },
  title: {
    color: theme.ALMOSTWHITE,
    fontSize: theme.FONT_SIZE_LARGE,
  },
  price: {
    color: theme.ALMOSTWHITE,
    fontWeight: "bold",
    fontSize: theme.FONT_SIZE_LARGE,
  },
  description: {
    color: theme.ALMOSTWHITE,
  },
  author: {
    marginTop: ".5rem",
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.ALMOSTWHITE,
  },
});
