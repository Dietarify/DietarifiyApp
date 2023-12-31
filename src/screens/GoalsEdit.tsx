import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import http from "@/utils/http";

interface UserData {
  currentWeight: number;
  height: number;
  weightTarget: number;
  nickname: string;
  birthDate: string;
  gender: string;
  dateTarget: string;
  email: string;
  name: string;
  picture: string;
}

const GoalsEdit: React.FC = () => {
  const [user, setUser] = useState<UserData>({
    currentWeight: 0,
    height: 0,
    weightTarget: 0,
    nickname: "Nick Name",
    birthDate: "00-00-0000",
    gender: "Male",
    dateTarget: "0-00-0000",
    email: "aa@gmail.com",
    name: "Name",
    picture:
      '"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzWUGVq2Bs9eGsO1wkhrdop9RB-rWekOuQw&usqp=CAU"',
  });

  const handleSave = () => {
    // Handle the logic to save the goal weight
    console.log("Goal Weight Saved:", goalWeight);
  };
  useEffect(() => {
    async function fetchGoals() {
      try {
        const response = await http.get("/profile");
        // Replace with your API endpoint
        // console.log("response", response.data.data);
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching goals data:", error);
      }
    }

    fetchGoals();
  }, []);
  const [goalWeight, setGoalWeight] = useState(user.weightTarget.toFixed()); // Set the initial value
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={{ width: "100%", marginBottom: 10, marginTop: 10 }}>
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Daily Calory Intake
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: "#F6F7F7",
            // flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: 15,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            2500
          </Text>
          <Text
            style={{
              fontFamily: "Open-Sans",
              //   fontWeight: "bold",
              fontSize: 10,
            }}
          >
            kcal / day
          </Text>
        </View>

        <View style={{ width: "100%", marginBottom: 10 }}>
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Goal Weight
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#F6F7F7",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            padding: 15,
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TextInput
              value={user.weightTarget.toFixed(2)}
              onChangeText={(text) => setGoalWeight(text)}
              keyboardType="numeric"
            />
            <Ionicons name="pencil" size={10} />
          </View>

          <Text
            style={{
              fontFamily: "Open-Sans",
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            kg
          </Text>
        </View>
        <View style={{ width: "100%", marginBottom: 10, marginTop: 10 }}>
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Weight Data
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: "#F6F7F7",
            // flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: 15,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              Current weight
            </Text>
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              {user.currentWeight.toFixed(2)} kg
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              Your Goal
            </Text>
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              {user.weightTarget.toFixed(2)} kg
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleSave}
        style={{
          //   width: "30%",
          backgroundColor: "#0BBAA6",
          padding: 10,
          borderRadius: 100,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Open-Sans",
            fontWeight: "bold",
            fontSize: 14,
            color: "white",
          }}
        >
          Update Goal
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAEFF2",
    paddingTop: 52,
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
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
  },
});

export default GoalsEdit;
