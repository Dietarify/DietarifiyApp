import React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface CardPropsType {
  datetime: String;
  foodname: String;
  cal: Number;
}

const DietHistoryCard: React.FC<CardPropsType> = ({
  datetime,
  foodname,
  cal,
}) => {
  return (
    <View style={style.container}>
      <Text
        style={{
          fontFamily: "Open-Sans",
          fontSize: 12,
        }}
      >
        10 Nov 2023
      </Text>
      <Text
        style={{
          fontFamily: "Open-Sans",
          fontSize: 12,
        }}
      >
        18.30
      </Text>
      <Text
        style={{
          fontFamily: "Open-Sans",
          fontSize: 12,
        }}
      >
        Fried Chicken
      </Text>
      <Text
        style={{
          fontFamily: "Open-Sans",
          fontSize: 12,
        }}
      >
        300kcal
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 41,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
  },
});

export default DietHistoryCard;
