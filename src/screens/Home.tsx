import React, { useEffect, Component, Fragment } from "react";
import auth from "@react-native-firebase/auth";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import useAuth from "@/hooks/auth";
import http from "@/utils/http";
import Toast from "react-native-root-toast";
import ProgressBarHrzntl from "@/components/global/ProgressBarHrzntl";
import DietScheduleCard from "@components/global/DietScheduleCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Dropdown } from "react-native-searchable-dropdown-kj";
import DietHistoryCard from "@/components/global/DietHistoryCard";
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
    <ScrollView
      style={style.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={style.sectionContainer}>
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
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Open-Sans",
                fontWeight: "bold",
              }}
            >
              Hi, Azmi!
            </Text>
          </View>
          <TouchableHighlight
            style={style.button}
            underlayColor={"#fff"}
            // onPress={() => console.log("hello world")}
          >
            <Text
              style={{
                color: "#FFF",
                fontSize: 10,
                fontFamily: "Open-Sans",
                fontWeight: "bold",
              }}
            >
              Check My Goals
            </Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text
            style={{
              fontSize: 132,
              fontFamily: "Open-Sans",
              fontWeight: "bold",
            }}
          >
            573
          </Text>
          <Text
            style={{
              textAlign: "right",
              fontFamily: "Open-Sans",
              marginTop: -20,
              marginBottom: 20,
              fontSize: 12,
            }}
          >
            kcal needed
          </Text>
        </View>
        <ProgressBarHrzntl percentage={80} />
        <View style={{ width: "100%" }}>
          <Text
            style={{
              textAlign: "right",
              fontFamily: "Open-Sans",
              fontSize: 16,
            }}
          >
            you've eaten <>4500</> kcal today
          </Text>
        </View>
      </View>

      <View style={style.sectionContainer}>
        <Text style={{ fontSize: 15 }}>Wednesday, 22nd November</Text>
        <DietScheduleCard schedule="breakfast"></DietScheduleCard>
        <DietScheduleCard schedule="lunch"></DietScheduleCard>
        <DietScheduleCard schedule="dinner"></DietScheduleCard>
      </View>

      <View style={style.sectionContainer}>
        <View>
          <TouchableHighlight>
            <Text>Check Dietary Menu</Text>
          </TouchableHighlight>
        </View>
        <Text>It's Already Breakfast Time!</Text>
        <Text>Have you eat Fried Rice?</Text>
        <Text>it will gain you 500 kcal</Text>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Ionicons
              name="checkmark-circle"
              size={40}
              color="#0bbaa6"
            ></Ionicons>
            <Text>Yes!</Text>
          </View>
          <View>
            <Ionicons name="ios-search" size={40} color="#000"></Ionicons>
            <Text>I ate another food</Text>
          </View>
          <View>
            <MaterialIcons
              name="cancel"
              size={40}
              color={"#FC3A78"}
            ></MaterialIcons>
            <Text>I skipped this meal</Text>
          </View>
        </View>
        <View style={style.sectionContainer}>
          <Text>Check your food calories</Text>

          <Dropdown
            data={[1, 2, 3]}
            labelField="Cari Makanan"
            valueField="hahaa"
            onChange={() => {}}
          ></Dropdown>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TouchableHighlight>
              <Text>Check the Calories</Text>
            </TouchableHighlight>
            <TouchableHighlight>
              <Text>i ate the food!</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={style.sectionContainer}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text>Diet History</Text>
            <TouchableHighlight>
              <Text>Check Full History</Text>
            </TouchableHighlight>
          </View>
          <DietHistoryCard
            datetime={"a"}
            foodname={"a"}
            cal={100}
          ></DietHistoryCard>
          <DietHistoryCard
            datetime={"a"}
            foodname={"a"}
            cal={100}
          ></DietHistoryCard>
          <DietHistoryCard
            datetime={"a"}
            foodname={"a"}
            cal={100}
          ></DietHistoryCard>
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
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 52,
    paddingBottom: 52,
    backgroundColor: "#eaeff2",
    // alignItems: "center",
    // paddingHorizontal: ,
    // justifyContent: "center",
  },
  sectionContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexWrap: "wrap",
    width: "90%",
    alignContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 18,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#F89841",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    // padding: 20,
  },
});
