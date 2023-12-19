import React, { useEffect, Component, Fragment } from "react";
import auth from "@react-native-firebase/auth";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableHighlight,
  FlatList,
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
import { useNavigation } from "@react-navigation/native";

async function getProfileName() {
  const { data } = await http.get("/profile");

  return data.data.name;
}

export default function HomePage() {
  const navigation = useNavigation();
  const handleButtonClick = () => {
    navigation.navigate("diet-history");
  };
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
            onPress={() => {
              console.log("hello world");
              handleButtonClick();
            }}
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
        <Text
          style={{
            fontSize: 15,
            alignSelf: "flex-start",
            fontFamily: "Open-Sans",
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Wednesday, 22nd November
        </Text>
        <DietScheduleCard
          schedule="breakfast"
          foodItem="Lontong Kari"
        ></DietScheduleCard>
        <DietScheduleCard
          schedule="lunch"
          foodItem="Baso Sapi"
        ></DietScheduleCard>
        <DietScheduleCard
          schedule="dinner"
          foodItem="Sate Ayam"
        ></DietScheduleCard>
      </View>

      <View style={style.sectionContainer}>
        <View style={{ width: "100%" }}>
          <TouchableHighlight style={[style.button, { alignSelf: "flex-end" }]}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 10,
                fontFamily: "Open-Sans",
                fontWeight: "bold",
              }}
            >
              Check Dietary Menu
            </Text>
          </TouchableHighlight>
        </View>
        <Text
          style={{
            alignSelf: "flex-start",
            fontFamily: "Open-Sans",
            fontWeight: "bold",
            marginBottom: 8,
          }}
        >
          It's Already Breakfast Time!
        </Text>
        <Text
          style={{
            fontFamily: "Open-Sans",
            fontWeight: "bold",
            alignSelf: "flex-start",
            marginBottom: 8,
          }}
        >
          Have you eat Fried Rice?
        </Text>
        <Text
          style={{
            fontFamily: "Open-Sans",
            // fontWeight: "bold",
            alignSelf: "flex-start",
            fontSize: 10,
            marginBottom: 8,
          }}
        >
          it will gain you 500 kcal
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",

            justifyContent: "space-around",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="checkmark-circle"
              size={40}
              color="#0bbaa6"
              style={{
                textAlign: "center",
              }}
            ></Ionicons>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 10 }}>Yes!</Text>
          </View>
          <View>
            <Ionicons
              name="ios-search"
              size={40}
              color="#000"
              style={{
                textAlign: "center",
              }}
            ></Ionicons>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 10 }}>
              I ate another food
            </Text>
          </View>
          <View>
            <MaterialIcons
              name="cancel"
              size={40}
              color={"#FC3A78"}
              style={{
                textAlign: "center",
              }}
            ></MaterialIcons>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 10 }}>
              I skipped this meal
            </Text>
          </View>
        </View>
      </View>

      <View style={style.sectionContainer}>
        <Text
          style={{
            fontFamily: "Open-Sans",
            fontWeight: "bold",
            alignSelf: "flex-start",
          }}
        >
          Check your food calories
        </Text>

        <Dropdown
          data={["wow", "wow", , "woooooow"]}
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
          <TouchableHighlight style={style.button}>
            <Text
              style={{ fontFamily: "Open-Sans", fontSize: 8, color: "white" }}
            >
              Check the Calories
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={style.button}>
            <Text
              style={{ fontFamily: "Open-Sans", fontSize: 8, color: "white" }}
            >
              i ate the food!
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={style.sectionContainer}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontFamily: "Open-Sans", fontWeight: "bold" }}>
            Diet History
          </Text>
          <TouchableHighlight style={style.button}>
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontSize: 10,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Check Full History
            </Text>
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
    backgroundColor: "#0BBAA6",
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
