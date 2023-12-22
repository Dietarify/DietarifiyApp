import React from "react";
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

const Goals: React.FC = () => {
  const navigation = useNavigation();
  const handleEdit = () => {
    navigation.navigate("goals-edit");
  };
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

  // const [user, setUser] = useState<UserData>({
  //   currentWeight : 0,
  //   height : 0,
  //   weightTarget,
  // })

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
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzWUGVq2Bs9eGsO1wkhrdop9RB-rWekOuQw&usqp=CAU",
            }}
          ></Image>
          <View style={{ width: "100%" }}>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: "Open-Sans",
                fontWeight: "bold",
                fontSize: 16,
              }}
              ellipsizeMode="tail"
            >
              Azmi Alfatih Shalahuddin
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
                55
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
                55
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
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CaloriesBurnCard
                date={item.date}
                totalCaloriesBurned={item.totalCaloriesBurned}
                totalCaloriesGained={item.totalCaloriesGained}
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
                Normal
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
            21.2
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
