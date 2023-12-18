import React from "react";
import { StyleSheet, View } from "react-native";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBarHrzntl: React.FC<ProgressBarProps> = ({ percentage }) => {
  const interpolateColor = (percentage: number) => {
    const red = Math.min(255, Math.floor((100 - percentage) * 2.55));
    const green = Math.min(255, Math.floor(percentage * 2.55));
    return `rgb(${red}, ${green}, 150)`;
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
    borderRadius: 100, // optional: add border radius for rounded corners
    overflow: "hidden", // optional: hide overflowing content
  },
  filled: {
    height: "100%",
    borderRadius: 100,
  },
});

export default ProgressBarHrzntl;

// import React, { useEffect } from "react";
// import auth from "@react-native-firebase/auth";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   ScrollView,
//   TouchableHighlight,
// } from "react-native";
// import useAuth from "@/hooks/auth";
// import http from "@/utils/http";
// import Toast from "react-native-root-toast";
// import ProgressBarHrzntl from "@/components/global/ProgressBarHrzntl";
// import DietScheduleCard from "@components/global/DietScheduleCard";

// async function getProfileName() {
//   const { data } = await http.get("/profile");

//   return data.data.name;
// }

// export default function HomePage() {
//   const { user } = useAuth();

//   useEffect(() => {
//     async function run() {
//       const nama = await getProfileName();
//       Toast.show(`Halo, ${nama}`);
//     }

//     run();
//   }, []);

//   return (
//     <ScrollView
//       style={style.container}
//       contentContainerStyle={{ alignItems: "center" }}
//     >
//       <View style={style.sectionContainer}>
//         <View
//           style={{
//             flexWrap: "wrap",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             // alignContent: "space-between",
//             width: "100%",
//           }}
//         >
//           <View>
//             <Text style={{ fontSize: 16 }}>Hi, Azmi!</Text>
//           </View>
//           <TouchableHighlight
//             style={style.button}
//             underlayColor={"#fff"}
//             // onPress={() => console.log("hello world")}
//           >
//             <Text style={{ color: "#FFF", fontSize: 8 }}>Check My Goals</Text>
//           </TouchableHighlight>
//         </View>
//         <View>
//           <Text style={{ fontSize: 132 }}>573</Text>
//           <Text style={{ textAlign: "right" }}>kcal needed</Text>
//         </View>
//         <ProgressBarHrzntl percentage={100} />
//         <View style={{ width: "100%" }}>
//           <Text style={{ textAlign: "right" }}>
//             you've eaten 4500 kcal today
//           </Text>
//         </View>
//       </View>

//       <View style={style.sectionContainer}>
//         <Text style={{ fontSize: 15 }}>Wednesday, 22nd November</Text>
//         <DietScheduleCard schedule="breakfast"></DietScheduleCard>
//         <DietScheduleCard schedule="lunch"></DietScheduleCard>
//         <DietScheduleCard schedule="dinner"></DietScheduleCard>
//       </View>

//       <View style={style.sectionContainer}></View>

//       <Text>Hello, {user?.displayName}</Text>
//       <Text>Your email is {user?.email}</Text>

//       <Button
//         title="Log out"
//         onPress={async () => {
//           await auth().signOut();
//         }}
//       ></Button>
//     </ScrollView>
//   );
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 52,
//     paddingBottom: 52,
//     backgroundColor: "#eaeff2",
//     // alignItems: "center",
//     paddingHorizontal: "5%",
//     // justifyContent: "center",
//   },
//   sectionContainer: {
//     backgroundColor: "#fff",
//     alignItems: "center",
//     flexWrap: "wrap",
//     width: "90%",
//     alignContent: "center",
//   },
//   button: {
//     borderRadius: 50,
//     backgroundColor: "#F89841",
//     justifyContent: "center",
//     alignItems: "center",
//     width: 71,
//     // padding: 20,
//   },
// });
