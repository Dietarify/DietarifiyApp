import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface CardPropsType {
  type: "liked" | "disliked" | "easytoget" | "allergies";
  foodlist: number[];
}

const FoodPreferenceCard: React.FC<CardPropsType> = ({ type, foodlist }) => {
  let backgroundColor;
  let color;

  switch (type) {
    case "liked":
      backgroundColor = "#FC3A78";
      color = "white";
      break;
    case "disliked":
      backgroundColor = "#8A47EB";
      color = "white";
      break;
    case "easytoget":
      backgroundColor = "#15DA97";
      color = "black";
      break;
    case "allergies":
      backgroundColor = "#F89841";
      color = "black";
      break;
    default:
      backgroundColor = "gray";
      color = "white";
      break;
  }

  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={{ color, fontFamily: "Open-Sans", fontWeight: "bold" }}>
        {capitalizedType}
      </Text>
      <Text
        style={{
          color,
          fontFamily: "Open-Sans",
          //   fontWeight: "bold",
          fontSize: 10,
        }}
      >
        1. Fried Rice {"\n"}2. Chicken Porridge
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
  },
});

export default FoodPreferenceCard;
