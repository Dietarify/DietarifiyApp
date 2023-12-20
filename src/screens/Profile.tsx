import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FoodPreferenceCard from "@/components/global/FoodPreferenceCard";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  const handleButtonClick = () => {
    navigation.navigate("profile-edit");
  };

  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={style.sectionContainer}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzWUGVq2Bs9eGsO1wkhrdop9RB-rWekOuQw&usqp=CAU",
            }}
            style={{ width: "25%", aspectRatio: 1, borderRadius: 100 }}
          ></Image>
          <View style={{ width: "70%", justifyContent: "flex-end" }}>
            <Text
              ellipsizeMode="tail"
              style={{
                fontFamily: "Open-Sans",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Azmi Alfatih Shalahuddin
            </Text>
            <TouchableOpacity onPress={handleButtonClick}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <MaterialCommunityIcons name="pencil"></MaterialCommunityIcons>
                <Text style={{ fontFamily: "Open-Sans", fontSize: 10 }}>
                  Change Profile
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ borderBottomWidth: 1, width: "100%", marginBottom: 10 }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="calendar"></MaterialCommunityIcons>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 12 }}>
              April 15th, 2002
            </Text>
          </View>
          <View style={style.verticalLine}></View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="gender-male-female"></MaterialCommunityIcons>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 12 }}>Male</Text>
          </View>
          <View style={style.verticalLine}></View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="human-male-height"></MaterialCommunityIcons>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 12 }}>
              162 cm
            </Text>
          </View>
        </View>
      </View>
      <View style={style.sectionContainer}>
        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            Current User Weight
          </Text>
          <View style={style.weightDisplay}>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 20 }}>72.5</Text>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 10 }}>kg</Text>
          </View>
          <TouchableOpacity
            style={{ alignSelf: "flex-end", flexDirection: "row" }}
          >
            <MaterialCommunityIcons name="pencil"></MaterialCommunityIcons>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 10 }}>
              Update Weight
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.sectionContainer}>
        <View style={{ width: "100%", marginBottom: 10 }}>
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            Food Preferences
          </Text>
        </View>
        <FoodPreferenceCard type="liked" foodlist={[1, 2]}></FoodPreferenceCard>
        <FoodPreferenceCard
          type="disliked"
          foodlist={[1, 2]}
        ></FoodPreferenceCard>
        <FoodPreferenceCard
          type="easytoget"
          foodlist={[1, 2]}
        ></FoodPreferenceCard>
        <FoodPreferenceCard
          type="allergies"
          foodlist={[1, 2]}
        ></FoodPreferenceCard>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 52,
    paddingBottom: 52,
    backgroundColor: "#eaeff2",
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
  verticalLine: {
    height: "100%",
    borderRightWidth: 0.5,
  },
  weightDisplay: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
