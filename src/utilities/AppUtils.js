import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const fuelData = [
  {
    value: "E85"
  },
  {
    value: "Gasoline"
  },
  {
    value: "Diesel"
  }
];

export const typeData = [
  {
    value: "SEDAN"
  },
  {
    value: "COUPE"
  },
  {
    value: "SPORTS CAR"
  },
  {
    value: "STATION WAGON"
  }
];

export const transmissionData = [
  {
    value: "Manual"
  },
  {
    value: "Automatic"
  },
  {
    value: "Continuously variable transmission"
  }
];

export const seatingData = [
  {
    value: "1"
  },
  {
    value: "2"
  },
  {
    value: "3"
  },
  {
    value: "4"
  },
  {
    value: "5"
  },
  {
    value: "6"
  }
];

export const commonNavigation = name => {
  return {
    title: name,
    headerStyle: {
      backgroundColor: "#56CCF2",
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: "#ffffff",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#ffffff"
    }
  };
};

export const isEmpty = values => {
  let isEmptys = false;
  Object.entries(values).map(([key, value]) => {
    if (key === "image" && value === null) {
      isEmptys = true;
    } else {
      if (value.length === 0) {
        isEmptys = true;
      }
    }
  });

  return isEmptys;
};

export const showAlert = name =>
  Alert.alert(
    "Error",
    name,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );

export const pickImages = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    multiple: true,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  if (!result.cancelled) {
    return result.uri;
  } else {
    return null;
  }
};

export const checkImageStatus = async () => {
  if (Platform.OS !== "web") {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  }
};
