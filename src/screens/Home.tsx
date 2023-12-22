import React, { useEffect, Component, Fragment, useState } from "react";
import auth from "@react-native-firebase/auth";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableHighlight,
  FlatList,
  TextInput,
  TouchableOpacity,
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

//Navigation
export default function HomePage() {
  const navigation = useNavigation();
  const DietHistoryButton = () => {
    navigation.navigate("diet-history");
  };

  // Eat Food
  const [value, setValue] = useState();
  const [foodWeight, setFoodWeight] = useState(0);
  const foodEatenData = {
    foodId: value,
    foodItemWeight: foodWeight,
  };
  async function handleEatFood() {
    try {
      console.log(foodEatenData);
      await http.post("/diet", foodEatenData).then((response) => {
        // Handle the success response
        if (response.data.status == "success") {
          Toast.show("Your diet has been recorded!");
          fetchHistoryData();
        }
        // console.log("Response:", response.data);
      });
    } catch (error) {
      console.error("error eat food : ", error);
    }
  }

  //Food List
  interface Food {
    id: number;
    name: string;
    category: string;
    caloriesPerHundredGram: number;
    energyPerHundredGram: number;
  }

  const [foodList, setFoodList] = useState<Food[]>([]);
  const [isFocusDropDown, setIsFocusDropDown] = useState(false);

  async function getFoodList() {
    try {
      // Updated the destructure to match the actual response structure
      const { data } = await http.get("/foods?limit=150");

      // Check if the response status is 'success' before accessing data
      if (data.status === "success") {
        return data.data.foods;
      } else {
        // Handle the case where the response status is not 'success'
        console.error("Failed to fetch food list");
        return [];
      }
    } catch (error) {
      // Handle any network or server errors
      console.error("Error fetching food list:", error);
      return [];
    }
  }

  useEffect(() => {
    async function run() {
      try {
        const foodList = await getFoodList();
        setFoodList(foodList);

        // Displaying information for each food in the console
        // foodList.forEach((food: Food) => {
        //   console.log(`Food Name: ${food.name}`);
        //   console.log(`Category: ${food.category}`);
        //   console.log(`Calories per 100g: ${food.caloriesPerHundredGram}`);
        //   console.log(`Energy per 100g: ${food.energyPerHundredGram}`);
        //   console.log("------------------------");
        // });
        // console.log(foodList);
      } catch (error) {
        // Handle any errors that might occur during the execution
        console.error("Error in run function:", error);
      }
    }

    run();
  }, []);

  //Diet History
  interface HistoryItem {
    timestamp: string;
    userId: string;
    eatenFoodId: number;
    quantity: number;
    eatenFood: {
      id: number;
      name: string;
      category: string;
      caloriesPerHundredGram: number;
      energyPerHundredGram: number;
    };
  }

  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);

  async function fetchHistoryData() {
    try {
      const response = await http.get("/diet?limit=3&page=1"); // Replace with your API endpoint
      setHistoryData(response.data.data);
      // console.log("history data", historyData);
    } catch (error) {
      console.error("Error fetching history data:", error);
    }
  }
  useEffect(() => {
    fetchHistoryData();
  }, []);

  const renderHistoryCard = ({ item }: { item: HistoryItem }) => {
    const CaloriesCount =
      (item.quantity * item.eatenFood.caloriesPerHundredGram) / 100;

    return (
      <DietHistoryCard
        // date={"aaa"}
        // time={"aaa"}
        date={new Date(item.timestamp).toDateString()}
        time={new Date(item.timestamp).toTimeString().slice(0, 8)}
        foodname={item.eatenFood.name}
        cal={CaloriesCount}
      />
    );
  };

  //Food Reccomendation
  interface MealData {
    id: number;
    name: string;
    category: string;
    caloriesPerHundredGram: number;
    energyPerHundredGram: number;
  }
  const [breakfast, setBreakfast] = useState<MealData>();
  const [lunch, setLunch] = useState<MealData>();
  const [dinner, setDinner] = useState<MealData>();
  useEffect(() => {
    async function fetchFoodData() {
      try {
        const response = await http.get("/foods/recomendation"); // Replace with your API endpoint
        // console.log("food data", response.data.data);
        setBreakfast(response.data.data.breakfast);
        setLunch(response.data.data.lunch);
        setDinner(response.data.data.dinner);

        // console.log("foodData", historyData);
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    }

    fetchFoodData();
  }, []);

  //calories count
  interface Calories {
    timestamp: string;
    userId: string;
    consumedCalories: number;
    caloriesNeeds: number;
  }
  const [caloriesNeeds, setCaloriesNeeds] = useState<Calories>({
    timestamp: "0",
    userId: "0",
    consumedCalories: 0,
    caloriesNeeds: 0,
  });

  async function fetchCaloriesNeeded() {
    try {
      const response = await http.get("/history/calories?limit=1&page=1");
      // Replace with your API endpoint
      // console.log("response", response.data.data);
      setCaloriesNeeds(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching calories data:", error);
    }
  }
  useEffect(() => {
    fetchCaloriesNeeded();
  }, []);

  const caloriesNeedsFix = Number(caloriesNeeds.caloriesNeeds).toFixed(0);
  const caloriesRemainingFix = Number(
    caloriesNeeds.caloriesNeeds - caloriesNeeds.consumedCalories
  ).toFixed(0);

  //reminder

  const breakfastStartTime = 7; // 7 AM
  const lunchStartTime = 12; // 12 PM
  const dinnerStartTime = 18; // 6 PM

  const [currentTime, setCurrentTime] = useState(new Date().getHours());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update current time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date().getHours());
    }, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  let advice = "";
  let schedule = "";

  if (currentTime >= breakfastStartTime && currentTime < lunchStartTime) {
    advice = "It's already Breakfast time!";
    schedule = "breakfast";
  } else if (currentTime >= lunchStartTime && currentTime < dinnerStartTime) {
    advice = "It's already Lunchtime!";
    schedule = "lunch";
  } else if (
    currentTime >= dinnerStartTime &&
    currentTime < breakfastStartTime
  ) {
    advice = "It's already Dinner time!";
    schedule = "dinner";
  }

  let foodId;

  if (schedule === "breakfast") {
    foodId = breakfast?.id;
  } else if (schedule === "lunch") {
    foodId = lunch?.id;
  } else if (schedule === "dinner") {
    foodId = dinner?.id;
  } else {
    // Default value or error handling if schedule doesn't match any known meal
    foodId = 0;
  }

  const foodReccomendationData = {
    foodId: foodId,
    foodItemWeight: 300,
  };

  async function handleEatReccomendation() {
    try {
      console.log(foodEatenData);
      await http.post("/diet", foodReccomendationData).then((response) => {
        // Handle the success response
        if (response.data.status == "success") {
          Toast.show("Your diet has been recorded!");
          fetchHistoryData();
          fetchCaloriesNeeded();
        }
        // console.log("Response:", response.data);
      });
    } catch (error) {
      console.error("error eat food : ", error);
    }
  }

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
        </View>
        <View>
          <Text
            style={{
              fontSize: 132,
              fontFamily: "Open-Sans",
              fontWeight: "bold",
            }}
          >
            {/* {caloriesNeeds.caloriesNeeds - caloriesNeeds.consumedCalories}{" "}
             */}
            {parseInt(caloriesRemainingFix) < 0 ? "0" : caloriesRemainingFix}
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
        <ProgressBarHrzntl
          percentage={
            (caloriesNeeds.consumedCalories / caloriesNeeds.caloriesNeeds) * 100
          }
        />
        <View style={{ width: "100%" }}>
          <Text
            style={{
              textAlign: "right",
              fontFamily: "Open-Sans",
              fontSize: 16,
            }}
          >
            you've eaten {caloriesNeedsFix} kcal today
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
          {currentDate.toLocaleString()}
        </Text>
        <DietScheduleCard
          schedule="breakfast"
          foodItem={breakfast?.name}
        ></DietScheduleCard>
        <DietScheduleCard
          schedule="lunch"
          foodItem={lunch?.name}
        ></DietScheduleCard>
        <DietScheduleCard
          schedule="dinner"
          foodItem={dinner?.name}
        ></DietScheduleCard>
      </View>

      <View style={style.sectionContainer}>
        <View style={{ width: "100%" }}></View>
        <Text
          style={{
            alignSelf: "flex-start",
            fontFamily: "Open-Sans",
            fontWeight: "bold",
            marginBottom: 8,
          }}
        >
          {advice}
        </Text>
        <Text
          style={{
            fontFamily: "Open-Sans",
            fontWeight: "bold",
            alignSelf: "flex-start",
            marginBottom: 8,
          }}
        >
          Have you eaten{" "}
          {schedule === "breakfast"
            ? breakfast?.name
            : schedule === "lunch"
            ? lunch?.name
            : dinner?.name}
          ?
        </Text>
        <Text
          style={{
            fontFamily: "Open-Sans",
            alignSelf: "flex-start",
            fontSize: 10,
            marginBottom: 8,
          }}
        >
          It will gain you{" "}
          {schedule === "breakfast"
            ? (breakfast?.caloriesPerHundredGram ?? 0) * 3
            : schedule === "lunch"
            ? (lunch?.caloriesPerHundredGram ?? 0) * 3
            : (dinner?.caloriesPerHundredGram ?? 0) * 3}{" "}
          kcal
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",

            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => handleEatReccomendation()}
          >
            <Ionicons
              name="checkmark-circle"
              size={40}
              color="#0bbaa6"
              style={{
                textAlign: "center",
              }}
            ></Ionicons>
            <Text style={{ fontFamily: "Open-Sans", fontSize: 10 }}>Yes!</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => setIsFocusDropDown(true)}>
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
          </TouchableOpacity> */}
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
          onFocus={() => setIsFocusDropDown(true)}
          onBlur={() => setIsFocusDropDown(false)}
          data={foodList}
          value={value}
          labelField="name"
          search
          valueField="id"
          onChange={(item) => {
            setValue(item.id);
            console.log("berubah!, value : ", value);
          }}
          selectedTextStyle={{
            width: "100%",
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "Open-Sans",
          }}
          containerStyle={{
            width: "100%",
          }}
          placeholderStyle={{
            width: "100%",
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "Open-Sans",
          }}
          style={{ width: "100%", marginBottom: 5 }}
          maxHeight={300}
          placeholder={!isFocusDropDown ? "Select Food" : "..."}
          inputSearchStyle={{
            width: "100%",
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "Open-Sans",
          }}
          searchPlaceholder="Type your food name..."
        ></Dropdown>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: 25,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "Open-Sans",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              Input Food Weight in gram :
            </Text>
            <TextInput
              keyboardType="numeric"
              style={{
                borderColor: "gray",
                fontFamily: "Open-Sans",
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 5,
              }}
              // value={foodWeight.toString()}
              placeholder="..."
              onChangeText={(input) => setFoodWeight(parseInt(input, 10) || 0)}
            />
          </View>
          <TouchableHighlight
            style={style.button}
            onPress={() => handleEatFood()}
          >
            <Text
              style={{ fontFamily: "Open-Sans", fontSize: 8, color: "white" }}
            >
              i ate the food!
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={[style.sectionContainer, { marginBottom: 80 }]}>
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
          <TouchableHighlight style={style.button} onPress={DietHistoryButton}>
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
        <FlatList
          data={historyData}
          // keyExtractor={(item) => item.timestamp}
          renderItem={renderHistoryCard}
          scrollEnabled={false}
        />
      </View>

      {/* <Text>Hello, {user?.displayName}</Text>
      <Text>Your email is {user?.email}</Text>

      <Button
        title="Log out"
        onPress={async () => {
          await auth().signOut();
        }}
      ></Button> */}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 52,
    paddingBottom: 52,
    // marginBottom: 52,
    backgroundColor: "#eaeff2",
    // alignItems: "center",
    paddingHorizontal: "5%",
    // justifyContent: "center",
  },
  sectionContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
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
