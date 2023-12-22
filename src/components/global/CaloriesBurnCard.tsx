// Import necessary dependencies
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Define the CardProps type
interface CardProps {
  date: string;
  totalCaloriesGained: number;
  totalCaloriesBurned: number;
}

// Define the Card component
const CaloriesBurnCard: React.FC<CardProps> = ({
  date,
  totalCaloriesGained,
  totalCaloriesBurned,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>{date}</Text>
      <View style={[styles.row, { justifyContent: "space-around" }]}>
        <View style={[styles.row]}>
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            {" "}
            {totalCaloriesGained}
          </Text>
          <Text
            style={{
              fontFamily: "Open-Sans",
              //   fontWeight: "bold",
              fontSize: 12,
            }}
          >
            {" "}
            kcal
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            {" "}
            {totalCaloriesBurned}
          </Text>
          <Text
            style={{
              fontFamily: "Open-Sans",
              //   fontWeight: "bold",
              fontSize: 12,
            }}
          >
            {" "}
            kcal burned
          </Text>
        </View>
      </View>
    </View>
  );
};

// Define the styles
const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#F6F7F7",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  date: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "Open-Sans",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

// Export the Card component
export default CaloriesBurnCard;
