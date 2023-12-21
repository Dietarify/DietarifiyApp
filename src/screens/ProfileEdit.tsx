import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import {
  TextInput as PaperTextInput,
  Button as PaperButton,
  RadioButton as PaperRadioButton,
} from "react-native-paper";

export default function ProfileEdit() {
  const [nickName, setNickName] = useState("Azmi");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");
  const [birthDate, setBirthDate] = useState("1990-01-01");
  // const [birthDate, setBirthDate] = useState(new Date("1990-01-01"));
  // const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    // Implement your logic to send data to the API
    console.log("Data to be sent:", {
      nickName,
      birthDate,
      gender,
      weight,
      height,
    });
  };

  // const handleDateChange = (
  //   event: DateTimePickerEvent,
  //   selectedDate?: Date
  // ) => {
  //   setShowDatePicker(false);
  //   if (selectedDate) {
  //     setBirthDate(selectedDate);
  //   }
  // };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        //   style={styles.container}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View
          style={{ width: "90%", alignItems: "flex-start", marginBottom: 10 }}
        >
          <Text
            style={{
              fontFamily: "Open-Sans",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Profile Data
          </Text>
        </View>
        <View style={styles.photoContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzWUGVq2Bs9eGsO1wkhrdop9RB-rWekOuQw&usqp=CAU",
            }}
            style={{ width: 120, aspectRatio: 1, borderRadius: 100 }}
          />
          {/* to be developed: edit photo */}
        </View>
        <View style={styles.formsContainer}>
          <PaperTextInput
            // mode="flat"
            label="Nick Name"
            value={nickName}
            onChangeText={(text) => setNickName(text)}
            style={styles.input}
            contentStyle={{
              backgroundColor: "white",
              fontFamily: "Open-Sans",
              fontWeight: "bold",
            }}
            activeUnderlineColor="#0BBAA6"
            underlineColor="#15DA97"
          />
          <PaperTextInput
            label="Birth Date"
            // value={birthDate.toISOString().split("T")[0]}
            value={birthDate}
            onChangeText={(text) => setBirthDate(text)}
            style={styles.input}
            contentStyle={{
              backgroundColor: "white",
              fontFamily: "Open-Sans",
              fontWeight: "bold",
            }}
            activeUnderlineColor="#0BBAA6"
            underlineColor="#15DA97"
          />
          {/* <View style={styles.datePicker}>
            <PaperButton onPress={() => setShowDatePicker(true)}>
              Select Date
            </PaperButton>
            {showDatePicker && (
              <DateTimePicker
                value={birthDate}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View> */}

          <PaperTextInput
            label="Weight"
            value={weight}
            onChangeText={(text) => setWeight(text)}
            style={styles.input}
            keyboardType="numeric"
            contentStyle={{
              backgroundColor: "white",
              fontFamily: "Open-Sans",
              fontWeight: "bold",
            }}
            activeUnderlineColor="#0BBAA6"
            underlineColor="#15DA97"
          />
          <PaperTextInput
            label="Height"
            value={height}
            onChangeText={(text) => setHeight(text)}
            style={styles.input}
            keyboardType="numeric"
            contentStyle={{
              backgroundColor: "white",
              fontFamily: "Open-Sans",
              fontWeight: "bold",
            }}
            activeUnderlineColor="#0BBAA6"
            underlineColor="#15DA97"
          />
          <Text
            style={{
              paddingLeft: 3,
              fontFamily: "Open-Sans",
              fontWeight: "bold",
            }}
          >
            Gender
          </Text>
          <PaperRadioButton.Group
            onValueChange={(value) => setGender(value)}
            value={gender}
          >
            <View style={styles.radioGroup}>
              <PaperRadioButton.Item
                label="Male"
                value="male"
                labelStyle={{
                  fontFamily: "Open-Sans",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
                color="#0BBAA6"
                // uncheckedColor="#0BBAA6"
              />
              <PaperRadioButton.Item
                label="Female"
                value="female"
                labelStyle={{
                  fontFamily: "Open-Sans",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
                color="#0BBAA6"
              />
            </View>
          </PaperRadioButton.Group>
          <PaperButton
            mode="contained"
            onPress={handleSave}
            style={styles.button}
            buttonColor="#0BBAA6"
          >
            Save
          </PaperButton>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 52,
    paddingBottom: 52,
    backgroundColor: "#eaeff2",
  },
  photoContainer: {
    backgroundColor: "#0BBAA6",
    alignItems: "center",
    flexWrap: "wrap",
    width: "90%",
    alignContent: "center",
    paddingVertical: 25,
    marginBottom: 18,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  formsContainer: {
    width: "90%",
    // backgroundColor: "black",
  },
  input: {
    marginBottom: 16,
    fontFamily: "Open-Sans",
    fontSize: 14,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    // marginTop: 16,
  },
  datePicker: {},
});
