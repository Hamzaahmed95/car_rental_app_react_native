import React, { useState, useEffect } from "react";
import { Dropdown } from "react-native-material-dropdown";
import { SliderPicker } from "react-native-slider-picker";
import { globalStyles } from "../../../styles/global";
import { styles } from "./styles";
import ImagePickerComp from "../../../utilities/ImagePicker";
import { useForm } from "../../../customHooks/useForm";
import Toast from "react-native-toast-message";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import firebase from "firebase";

import {
  fuelData,
  typeData,
  seatingData,
  transmissionData,
  commonNavigation,
  showAlert,
  pickImages,
  isEmpty,
  checkImageStatus
} from "../../../utilities/AppUtils";
import {
  TextInput,
  View,
  Text,
  YellowBox,
  LogBox,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const ListYourCarScreen = props => {
  const [values, handleChange] = useForm({
    name: "",
    color: "",
    type: "",
    fuel: "",
    seating: "",
    address: "",
    transmission: ""
  });
  const [image, setImage] = useState(null);
  const [rate, setRate] = useState(25);
  const [Loading, isLoading] = useState(false);

  const handleSubmit = e => {
    const object = {
      ...values,
      rate,
      image
    };
    if (isEmpty(object)) {
      showAlert("Kindly fill all the fields");
    } else {
      isLoading(true);

      storeCarList(object);
      console.log(object);
    }
  };

  async function uploadImageAsync(uri, name) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = firebase
      .storage()
      .ref()
      .child("uploads/" + name);
    const snapshot = await ref.put(blob);

    // We're done with the blob, close and release it
    blob.close();

    return await snapshot.ref.getDownloadURL();
  }

  const storeCarList = item => {
    var postListRef = firebase.database().ref("rentCarsList");
    var newPostRef = postListRef.push();
    newPostRef
      .set(item)
      .then(uploadImageAsync(image, values.name))
      .then(
        setTimeout(() => {
          props.navigation.goBack();
          Toast.show({
            text1: "Congrats",
            text2: "Car added succesfully 👋"
          });
        }, 2000)
      )
      .catch(err => showAlert("There is an error while uploading"));
  };

  useEffect(() => {
    YellowBox.ignoreWarnings(["Animated: `useNativeDriver`"]);
    checkImageStatus();
    console.log("hamza ahmed");
    getData();
  }, []);
  const getData = () => {
    firebase
      .database()
      .ref("rentCarsList")
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());
      });
  };

  return (
    <View style={globalStyles.container}>
      {Loading ? (
        <AnimatedCircularProgress
          style={styles.animatedCircular}
          size={50}
          width={10}
          fill={100}
          duration={2000}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#3d5875"
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={globalStyles.heading}>Car Information</Text>
            <TextInput
              placeholder="Car name"
              style={globalStyles.input}
              onChangeText={txt => handleChange("name", txt)}
              value={values.name}
            />
            <TextInput
              placeholder="Car color"
              style={globalStyles.input}
              onChangeText={txt => handleChange("color", txt)}
              value={values.color}
            />
            <View style={styles.container1}>
              <View style={styles.inputs}>
                <Dropdown
                  value={values.type}
                  label="Car type"
                  data={typeData}
                  inputContainerStyle={{ borderBottomColor: "transparent" }}
                  useNativeDriver={true}
                  onChangeText={txt => handleChange("type", txt)}
                />
              </View>
              <View style={styles.inputs}>
                <Dropdown
                  value={values.fuel}
                  label="Fuel"
                  useNativeDriver={true}
                  data={fuelData}
                  inputContainerStyle={{ borderBottomColor: "transparent" }}
                  onChangeText={txt => handleChange("fuel", txt)}
                />
              </View>
            </View>

            <View style={styles.container1}>
              <View style={styles.inputs} useNativeDriver={true}>
                <Dropdown
                  value={values.transmission}
                  label="Transmission"
                  data={transmissionData}
                  inputContainerStyle={{ borderBottomColor: "transparent" }}
                  onChangeText={txt => handleChange("transmission", txt)}
                />
              </View>
              <View style={styles.inputs}>
                <Dropdown
                  value={values.seating}
                  label="Seatings"
                  data={seatingData}
                  useNativeDriver={true}
                  inputContainerStyle={{ borderBottomColor: "transparent" }}
                  onChangeText={txt => handleChange("seating", txt)}
                />
              </View>
            </View>
            <Text style={globalStyles.heading}>Rate</Text>
            <SliderPicker
              callback={position => {
                setRate(position);
              }}
              defaultValue={values.rate}
              maxValue={100}
              labelFontColor={"#6c7682"}
              labelFontWeight={"600"}
              fillColor={"#3B5998"}
              labelFontWeight={"bold"}
              heightPercentage={1}
              widthPercentage={80}
            />

            <Text>{values.rate}</Text>
            <Text style={globalStyles.heading}>Address line</Text>
            <TextInput
              placeholder="Address"
              style={globalStyles.input}
              onChangeText={txt => handleChange("address", txt)}
              value={values.address}
            />
            <ImagePickerComp
              image={image}
              pickImage={async () => setImage(await pickImages())}
            />

            <TouchableOpacity
              onPress={handleSubmit}
              style={globalStyles.appButtonContainer}
            >
              <Text style={globalStyles.appButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

ListYourCarScreen.navigationOptions = commonNavigation("List your car");
export default ListYourCarScreen;
