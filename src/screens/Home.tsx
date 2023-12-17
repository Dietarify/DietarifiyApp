import React, { useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { StyleSheet, Text, View, Button } from "react-native";
import useAuth from "@/hooks/auth";
import http from "@/utils/http";
import Toast from "react-native-root-toast";
import ProgressBarHrzntl from "@/components/global/ProgressBarHrzntl";

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
      <View style={style.targetSection}>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            // alignContent: "space-between",
            width: "100%",
          }}
        >
          <View>
            <Text style={{ fontSize: 16 }}>Hi, Azmi!</Text>
          </View>
          <View style={style.button}>
            <Text style={{ color: "#FFF", fontSize: 8 }}>Check My Goals</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 132 }}>573</Text>
          <Text style={{ textAlign: "right" }}>kcal needed</Text>
        </View>
        <ProgressBarHrzntl percentage={90} />
        <View style={{ width: "100%" }}>
          <Text style={{ textAlign: "right" }}>
            you've eaten 4500 kcal today
          </Text>
        </View>
      </View>
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
    paddingTop: 52,
    paddingBottom: 52,
    backgroundColor: "#eaeff2",
    alignItems: "center",
    paddingHorizontal: "5%",
    // justifyContent: "center",
  },
  targetSection: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexWrap: "wrap",
    width: "90%",
    alignContent: "center",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#F89841",
    justifyContent: "center",
    alignItems: "center",
    width: 71,
    // padding: 20,
  },
});
