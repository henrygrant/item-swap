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
import * as ImagePicker from "expo-image-picker";
import { pb } from "../pbConfig";

export function SignUp({ navigation }) {
  const [username, onChangeUsername] = useState("");
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const register = async () => {
    const data = {
      username: username,
      email: email,
      emailVisibility: true,
      password: password,
      passwordConfirm: confirmPassword,
      name: name,
      avatar: image,
    };
    const record = await pb.collection("users").create(data);
    // console.log(record);
    await pb.collection("users").requestVerification(email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Enter Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Enter Name"
      />
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
      <TextInput
        style={styles.input}
        onChangeText={onChangeConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
        placeholder="Confirm Password"
      />
      <Button
        title="Upload Profile Picture"
        onPress={pickImage}
        color={theme.TINTEDBLACK}
      />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.signUpButtonContainer}>
        <Button
          title="Sign Up"
          onPress={register}
          color={theme.TINTEDBLACK}
          disabled={
            !(
              username &&
              name &&
              email &&
              password &&
              confirmPassword &&
              image
            ) || password !== confirmPassword
          }
        />
      </View>
      <Pressable
        onPress={() =>
          navigation.reset({ index: 0, routes: [{ name: "Sign In" }] })
        }
      >
        <Text style={styles.swapper}>
          Already have an account?{" "}
          <Text style={{ fontWeight: "bold" }}>Sign in</Text>
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
  signUpButtonContainer: {
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
