import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CardProps {
  schedule: string;
  foodItem: string;
}

const DietScheduleCard: React.FC<CardProps> = ({ schedule, foodItem }) => {
  let backgroundColor = "#ffffff"; // Default background color
  let color = "#000000";
  let time = "00.00";
  let icon: "partly-sunny" | "sunny" | "moon" = "partly-sunny";
  let iconColor = "yellow";

  if (schedule === "breakfast") {
    backgroundColor = "#A0DBFD";
    color = "#000000";
    time = "06.00";
    icon = "partly-sunny";
    iconColor = "yellow";
  } else if (schedule === "lunch") {
    backgroundColor = "#FFF282";
    color = "#000000";
    time = "12.30";
    icon = "sunny";
    iconColor = "#eeb300";
  } else if (schedule === "dinner") {
    backgroundColor = "#8A47EB";
    color = "#ffffff";
    time = "18.30";
    icon = "moon";
    iconColor = "#ffe28d";
  }

  return (
    <View style={[style.container, { backgroundColor }]}>
      <Ionicons name={icon} size={40} color={iconColor}></Ionicons>
      <View style={{ flexWrap: "wrap" }}>
        <Text
          style={[
            {
              fontSize: 29,
              fontFamily: "Open-Sans",
              fontWeight: "bold",
            },
            { color },
          ]}
        >
          {time}
        </Text>
        <Text
          style={[
            {
              fontSize: 12,
              fontFamily: "Open-Sans",
              fontWeight: "900",
              alignSelf: "center",
            },
            { color },
          ]}
        >
          {schedule.charAt(0).toUpperCase() + schedule.slice(1)}
        </Text>
      </View>
      <View
        style={{
          width: 120,
          alignItems: "center",
        }}
      >
        <Text
          style={[
            {
              fontSize: 12,
              fontFamily: "Open-Sans",
              fontWeight: "900",
              alignSelf: "center",
              flex: 1,
              textAlignVertical: "center",
              textAlign: "center",
            },
            { color },
          ]}
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          {foodItem}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 77,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default DietScheduleCard;
