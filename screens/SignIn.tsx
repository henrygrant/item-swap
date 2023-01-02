import React, { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import theme from "../styles/theme";
import { pb } from "../pbConfig";

export function SignIn({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const signIn = async () => {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    // console.log(authData);
    if (pb.authStore.isValid) {
      navigation.reset({ index: 0, routes: [{ name: "Main" }] });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Enter Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="Enter Password"
      />
      <View style={styles.signInButtonContainer}>
        <Button
          title="Sign In"
          onPress={signIn}
          color={theme.TINTEDBLACK}
          disabled={!(email && password)}
        />
      </View>
      <Pressable
        onPress={() =>
          navigation.reset({ index: 0, routes: [{ name: "Sign Up" }] })
        }
      >
        <Text style={styles.swapper}>
          Don't have an account?{" "}
          <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.ALMOSTBLACK,
    padding: "1rem",
    height: "100%",
  },
  input: {
    backgroundColor: theme.TINTEDBLACK,
    color: theme.ALMOSTWHITE,
    marginBottom: 8,
    height: 30,
    padding: 10,
  },
  signInButtonContainer: {
    marginTop: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 8,
  },
  swapper: {
    color: theme.ALMOSTWHITE,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 8,
  },
});
