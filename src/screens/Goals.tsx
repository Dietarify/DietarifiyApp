import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Goals() {
  return (
    <View style={style.container}>
      <View style={style.sectionContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginBottom: 20,

            //   justifyContent: "space-around",
          }}
        >
          <Image
            style={{ width: 45, height: 45, borderRadius: 100 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzWUGVq2Bs9eGsO1wkhrdop9RB-rWekOuQw&usqp=CAU",
            }}
          ></Image>
          <Text style={{ marginLeft: 10, fontFamily: "Open-Sans" }}>
            Azmi Alfatih Shalahuddin
          </Text>
        </View>
        <View style={style.goalContainer}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "white",
              borderRadius: 100,
            }}
          ></View>
          <View>
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontSize: 10,
                color: "#F89841",
              }}
            >
              You're going to reach your goal by
            </Text>
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontSize: 12,
                color: "#F89841",
                fontWeight: "bold",
              }}
            >
              20th December 2023
            </Text>
          </View>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Ionicons
              name="md-pencil"
              size={15}
              style={{ color: "white" }}
            ></Ionicons>
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontSize: 10,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Update Goal
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            // backgroundColor: "#F6F7F7",
          }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text
                style={{
                  fontFamily: "Open-Sans",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                55
              </Text>
              <Text>kg</Text>
            </View>
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              Current Weight
            </Text>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text
                style={{
                  fontFamily: "Open-Sans",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                65
              </Text>
              <Text>kg</Text>
            </View>
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              Goal Weight
            </Text>
          </View>
        </View>
      </View>
      <View style={style.sectionContainer}>
        <View
          style={{
            width: "100%",
            alignItems: "flex-start",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontSize: 18,
              color: "#0A1936",
              fontWeight: "bold",
            }}
          >
            Weight Progress
          </Text>
          <TouchableOpacity style={style.button}>
            <Text
              style={{
                color: "white",
                fontFamily: "Open-Sans",
                fontWeight: "bold",
              }}
            >
              View Detail
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.sectionContainer}>
        <Text
          style={{
            fontFamily: "Open-Sans",
            fontSize: 18,
            color: "#0A1936",
            fontWeight: "bold",
          }}
        >
          Calories
        </Text>
      </View>
      <View style={style.sectionContainer}>
        <Text
          style={{
            fontFamily: "Open-Sans",
            fontSize: 18,
            color: "#0A1936",
            fontWeight: "bold",
          }}
        >
          Body Mass Index
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#EAEFF2",
    paddingTop: 80,
    paddingBottom: 52,
    paddingHorizontal: "5%",
    flex: 1,
  },
  sectionContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    alignContent: "center",
    paddingHorizontal: "5%",
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
  goalContainer: {
    width: "111%",
    backgroundColor: "#0A1936",
    flexDirection: "row",
    borderRadius: 10,
    height: 100,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: "5%",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#F89841",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
