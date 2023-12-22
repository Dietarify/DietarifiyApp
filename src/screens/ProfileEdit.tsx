import http from "@/utils/http";
import React, { useEffect, useState } from "react";
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
import Toast from "react-native-root-toast";

interface Profile {
  currentWeight?: string;
  height?: string;
  nickname?: string;
  birthDate?: string;
  gender?: string;
  email?: string;
  name?: string;
  picture?: string;
}

export default function ProfileEdit() {
  const [profile, setProfile] = useState<Profile | null>(null);

  async function getProfile() {
    try {
      const result = await http.get("/profile");
      const profile = result.data.data;

      const stateProfile = {
        ...profile,
        birthDate: profile.birthDate,
        currentWeight: profile.currentWeight.toString(),
        height: profile.height.toString(),
      };

      console.log(stateProfile);

      setProfile(stateProfile);
    } catch (err) {
      Toast.show("failed to fetch profile");
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  const handleSave = async () => {
    // Implement your logic to send data to the API
    try {
      const dataToSend = {
        currentWeight: Number(profile?.currentWeight ?? undefined),
        height: Number(profile?.height ?? undefined),
        nickname: profile?.nickname ?? undefined,
        birthDate: profile?.birthDate
          ? new Date(profile?.birthDate).toISOString()
          : undefined,
        gender: profile?.gender,
      };

      await http.patch("/profile", dataToSend);
      Toast.show("Profile Updated");
    } catch (err) {
      Toast.show("Failed to Update Profile");
    }
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
              uri:
                profile?.picture ??
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzWUGVq2Bs9eGsO1wkhrdop9RB-rWekOuQw&usqp=CAU",
            }}
            style={{ width: 120, aspectRatio: 1, borderRadius: 100 }}
          />
          {/* to be developed: edit photo */}
        </View>
        <View style={styles.formsContainer}>
          <PaperTextInput
            // mode="flat"
            label="Nick Name"
            value={profile?.nickname}
            onChangeText={(text) =>
              setProfile({
                ...(profile ?? {}),
                nickname: text,
              })
            }
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
            value={profile?.birthDate}
            onChangeText={(text) =>
              setProfile({
                ...(profile ?? {}),
                birthDate: text,
              })
            }
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
            value={profile?.currentWeight}
            onChangeText={(text) =>
              setProfile({
                ...(profile ?? {}),
                currentWeight: text,
              })
            }
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
            value={profile?.height?.toString()}
            onChangeText={(text) =>
              setProfile({
                ...(profile ?? {}),
                height: text,
              })
            }
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
            onValueChange={(value) =>
              setProfile({
                ...(profile ?? {}),
                gender: value,
              })
            }
            value={profile?.gender ?? ""}
          >
            <View style={styles.radioGroup}>
              <PaperRadioButton.Item
                label="Male"
                value="Male"
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
                value="Female"
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
