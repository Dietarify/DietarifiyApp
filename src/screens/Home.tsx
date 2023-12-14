import React, { useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { StyleSheet, Text, View, Button } from "react-native";
import useAuth from "@/hooks/auth";
import http from "@/utils/http";
import Toast from "react-native-root-toast";

async function getProfileName() {
  const { data } = await http.get("/profile");

  return data.data.name;
}

export default function HomePage() {
  const { user } = useAuth();

  useEffect(() => {
    async function run() {
      const nama = await getProfileName();
      Toast.show(`Halo, ${nama}`);
    }

    run();
  }, []);

  return (
    <View style={style.container}>
      <Text>Hello, {user?.displayName}</Text>
      <Text>Your email is {user?.email}</Text>

      <Button
        title="Log out"
        onPress={async () => {
          await auth().signOut();
        }}
      ></Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
