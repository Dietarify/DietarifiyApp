import React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface CardPropsType {
  date: String;
  time: String;
  foodname: String;
  cal: number;
}

const DietHistoryCard: React.FC<CardPropsType> = ({
  date,
  time,
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
        {date}
      </Text>
      <Text
        style={{
          fontFamily: "Open-Sans",
          fontSize: 12,
        }}
      >
        {time}
      </Text>
      <Text
        style={{
          fontFamily: "Open-Sans",
          fontSize: 12,
        }}
      >
        {foodname}
      </Text>
      <Text
        style={{
          fontFamily: "Open-Sans",
          fontSize: 12,
        }}
      >
        {cal}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 41,
    flexDirection: "row",
    justifyContent: "space-around",
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
