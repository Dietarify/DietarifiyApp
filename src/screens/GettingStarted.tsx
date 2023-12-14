import GoogleSignIn from "@components/auth/GoogleSignIn";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function GettingStarted() {
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <Image style={style.icon} source={require("@assets/icon.png")} />
      </View>
      <View style={style.innerContainer}>
        <Text style={style.text}>
          Welcome to Dietarify! wanna be healthier with us?
        </Text>
        <Text style={style.text}>
          Use your account so we can help you more personally{" "}
        </Text>
      </View>
      <View style={style.googleLogin}>
        <GoogleSignIn />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0BBAA6",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "600",
  },
  icon: {
    width: 96,
    height: 96,
  },
  innerContainer: {
    marginTop: "auto",
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  googleLogin: {
    marginBottom: "auto",
  },
});
