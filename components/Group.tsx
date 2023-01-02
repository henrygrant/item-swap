import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GroupsResponse } from "../types";
import theme from "../styles/theme";

export function Group(props: GroupsResponse) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.name}</Text>
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
    color: theme.ALMOSTWHITE,
    fontSize: theme.FONT_SIZE_LARGE,
  },
});
