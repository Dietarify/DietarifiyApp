import * as Font from "expo-font";

const loadCustomFonts = async (): Promise<void> => {
  await Font.loadAsync({
    "Open-Sans": require("@/assets/fonts/OpenSans.ttf"),
    "Open-Sans-Italic": require("@/assets/fonts/OpenSansItalic.ttf"),
    // Add more fonts if needed
  });
};

export default loadCustomFonts;
