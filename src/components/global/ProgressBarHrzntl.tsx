import React from "react";
import { StyleSheet, View } from "react-native";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBarHrzntl: React.FC<ProgressBarProps> = ({ percentage }) => {
  const interpolateColor = (percentage: number) => {
    const red = Math.min(255, Math.floor((100 - percentage) * 2.55));
    const green = Math.min(255, Math.floor(percentage * 2.55));
    return `rgb(${red}, ${green}, 0)`;
  };

  return (
    <View style={styles.base}>
      <View
        style={[
          styles.filled,
          {
            width: `${percentage}%`,
            backgroundColor: interpolateColor(percentage),
          },
        ]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    width: "100%",
    height: 19,
    backgroundColor: "#e0e0e0", // optional: set a background color for the base
    borderRadius: 10, // optional: add border radius for rounded corners
    overflow: "hidden", // optional: hide overflowing content
  },
  filled: {
    height: "100%",
  },
});

export default ProgressBarHrzntl;
