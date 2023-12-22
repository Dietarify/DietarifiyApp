import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CaloriesBurnCard from "@/components/global/CaloriesBurnCard";
import { useNavigation } from "@react-navigation/native";
import http from "@/utils/http";

const Goals: React.FC = () => {
  const navigation = useNavigation();
  const handleEdit = () => {
    navigation.navigate("goals-edit");
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

    async function fetchBMI() {
      try {
        const response = await http.get("/profile/bmi");
        // Replace with your API endpoint
        // console.log("response", response.data.data);
        setBmi(response.data.data.bmi);
      } catch (error) {
        console.error("Error fetching BMI data:", error);
      }
    }

    async function fetchCalories() {
      try {
        const response = await http.get("history/calories?limit=3&page=1");
        setCaloriesHistory(response.data.data);
      } catch (error) {
        console.error("Error fetching calories data : ", error);
      }
    }

    fetchGoals();
    fetchBMI();
    fetchCalories();
  }, []);
  // Dummy data for FlatList
  const data = [
    {
      id: "1",
      date: "2023-01-01",
      totalCaloriesBurned: 300,
      totalCaloriesGained: 600,
    },
    {
      id: "2",
      date: "2023-01-02",
      totalCaloriesBurned: 400,
      totalCaloriesGained: 500,
    },
    // Add more data as needed
  ];

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

  const [bmi, setBmi] = useState<number>(0);
  const calculateBMIStatus = (bmi: number): string => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };
  const status = calculateBMIStatus(bmi);

  interface caloriesHistory {
    timestamp: string;
    userId: string;
    consumedCalories: number;
    caloriesNeeds: number;
  }

  const [caloriesHistory, setCaloriesHistory] = useState<caloriesHistory[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginBottom: 20,
          }}
        >
          <Image
            style={{ width: 45, height: 45, borderRadius: 100 }}
            source={{
              uri: user.picture,
            }}
          ></Image>
          <View style={{ width: "90 %" }}>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: "Open-Sans",
                fontWeight: "bold",
                fontSize: 16,
              }}
              ellipsizeMode="tail"
            >
              {user.name}
            </Text>
          </View>
        </View>
        <View style={styles.goalContainer}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Open-Sans",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 20,
                }}
              >
                {user.currentWeight}
              </Text>
              <Text
                style={{
                  fontFamily: "Open-Sans",
                  color: "white",
                  fontSize: 10,
                }}
              >
                {" "}
                kg
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontWeight: "bold",
                color: "white",
                fontSize: 10,
              }}
            >
              Current Weight
            </Text>
          </View>

          <View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Open-Sans",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 20,
                }}
              >
                {user.weightTarget}
              </Text>
              <Text
                style={{
                  fontFamily: "Open-Sans",
                  color: "white",
                  fontSize: 10,
                }}
              >
                {" "}
                kg
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontWeight: "bold",
                color: "white",
                fontSize: 10,
              }}
            >
              Target Weight
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Ionicons name="pencil" size={18} color={"white"}></Ionicons>
            <Text
              style={{
                color: "white",
                fontFamily: "Open-Sans",
                fontWeight: "bold",
                fontSize: 10,
              }}
            >
              Update Goal
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", marginBottom: 10 }}>
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Entries
          </Text>
        </View>

        <View style={{ width: "100%", marginBottom: 10 }}>
          <FlatList
            // style={{ width: "100%" }}
            data={caloriesHistory}
            // keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CaloriesBurnCard
                date={new Date(item.timestamp).toLocaleDateString()}
                totalCaloriesBurned={(
                  item.caloriesNeeds - item.consumedCalories
                ).toFixed(2)}
                totalCaloriesGained={item.consumedCalories.toFixed(2)}
              />
            )}
          />
        </View>
        <View style={{ width: "100%", marginBottom: 10 }}>
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Body Mass Index
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#F6F7F7",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="calculator" size={40} color="#0A1936"></Ionicons>
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontFamily: "Open-Sans",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                BMI Score
              </Text>
              <Text
                style={{
                  fontFamily: "Open-Sans",
                  // fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                {status}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontWeight: "bold",
              fontSize: 28,
            }}
          >
            {bmi.toFixed(1)}
          </Text>
        </View>
      </View>
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

export default Goals;
