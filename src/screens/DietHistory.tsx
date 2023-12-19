import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import DietHistoryCard, {
  CardPropsType,
} from "@/components/global/DietHistoryCard";

const data = [
  { datetime: "10 Nov 2023 18:30", foodname: "Fried Chicken", cal: 300 },
  // Add more diet history items as needed
];

const renderItem = ({ item }: { item: CardPropsType }) => (
  <DietHistoryCard
    datetime={item.datetime}
    foodname={item.foodname}
    cal={item.cal}
  />
);

export default function DietHistory() {
  return (
    <View style={style.container}>
      <Text
        style={{
          fontFamily: "Open-Sans",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Diet History
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.datetime} // Assuming 'datetime' is unique
        // style={styles.flatList}
      ></FlatList>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#0bbaa6",
    paddingTop: 52,
    paddingBottom: 52,
    paddingHorizontal: "5%",
    flex: 1,
  },
});
