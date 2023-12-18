import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CardProps {
  schedule: string;
}

const DietScheduleCard: React.FC<CardProps> = ({ schedule }) => {
  return (
    <View style={style.container}>
      <Ionicons name="partly-sunny" size={40} color={"yellow"}></Ionicons>
      <View style={{ flexWrap: "wrap" }}>
        <Text style={{ fontSize: 29, fontFamily: "Open-Sans-Italic" }}>
          06.00
        </Text>
        <Text
          style={{ fontSize: 12, fontFamily: "Open-Sans", fontWeight: "900" }}
        >
          Breakfast
        </Text>
      </View>
      <Text>Fried Rice with Egg</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 77,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DietScheduleCard;
