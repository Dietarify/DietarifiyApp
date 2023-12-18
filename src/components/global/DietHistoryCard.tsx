import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface CardProps {
  datetime: String;
  foodname: String;
  cal: Number;
}

const DietHistoryCard: React.FC<CardProps> = ({ datetime, foodname, cal }) => {
  return (
    <View style={style.container}>
      <Text>10 Nov 2023</Text>
      <Text>18.30</Text>
      <Text>Fried Chicken</Text>
      <Text>300kcal</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 41,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DietHistoryCard;
