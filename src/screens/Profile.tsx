import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import http from "@/utils/http";
import Toast from "react-native-root-toast";

interface Profile {
  weightTarget?: number;
  currentWeight?: number;
  height?: number;
  nickname?: string;
  birthday?: Date;
  gender?: "Male" | "Female";
  startWeight?: number;
  email: string;
  name: string;
  picture: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const handleButtonClick = () => {
    navigation.navigate("profile-edit");
  };

  async function getProfile() {
    try {
      const result = await http.get("/profile");
      const profile = result.data.data;

      console.log(profile);

      setProfile({
        ...profile,
        birthday: profile.birthDate ? new Date(profile.birthDate) : undefined,
      });
    } catch (err) {
      Toast.show("failed to fetch profile");
    }
  }

  useEffect(() => {
    getProfile();
  }, [isFocused]);

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
              uri:
                profile?.picture ??
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzWUGVq2Bs9eGsO1wkhrdop9RB-rWekOuQw&usqp=CAU",
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
              {profile?.name ?? ""}
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
              {profile?.birthday?.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }) ?? "Not set"}
            </Text>
          </View>
          <View style={style.verticalLine}></View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="gender-male-female"></MaterialCommunityIcons>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 12 }}>
              {profile?.gender ?? "Not set"}
            </Text>
          </View>
          <View style={style.verticalLine}></View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="human-male-height"></MaterialCommunityIcons>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 12 }}>
              {profile?.height ?? "Not set"}
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
          {profile?.currentWeight ? (
            <View style={style.weightDisplay}>
              <Text style={{ fontFamily: "Open-Sans", fontSize: 20 }}>
                {profile.currentWeight}
              </Text>
              <Text style={{ fontFamily: "Open-Sans", fontSize: 10 }}>kg</Text>
            </View>
          ) : (
            <View style={{ padding: 30 }}>
              <Text
                style={{
                  fontFamily: "Open-Sans",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Not set
              </Text>
            </View>
          )}
        </View>
      </View>
      {/* <View style={style.sectionContainer}>
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
      </View> */}
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
