import React from "react";
import auth from "@react-native-firebase/auth";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Toast from "react-native-root-toast";

GoogleSignin.configure({
  webClientId:
    "640387379525-mb673sojrj4b075iadmiqanvmtsqtdo9.apps.googleusercontent.com",
});

async function googleSignIn() {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    await auth().signInWithCredential(googleCredential);
  } catch (e) {
    Toast.show("failed to login to your account");
  }
}

export default function GoogleSignIn() {
  return (
    <TouchableOpacity onPress={googleSignIn} style={style.button}>
      <Image style={style.icon} source={require("@assets/google.png")} />
      <Text style={style.text}>Sign in with google</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#d9d9d9",
    opacity: 1,
    padding: 15,
    borderRadius: 20,
    flexDirection: "row",
    gap: 10,
  },
  text: {
    fontSize: 15,
    marginRight: "auto",
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
  },
});
