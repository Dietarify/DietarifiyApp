import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Profile() {
  return (
    <View style={style.container}>
      <Text
        style={{ fontFamily: "Open-Sans", fontSize: 24, fontWeight: "bold" }}
      >
        Diet History
      </Text>
      <FlatList></FlatList>
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
