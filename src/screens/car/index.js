import React, { useState, useEffect } from "react";
import { Dropdown } from "react-native-material-dropdown";
import { SliderPicker } from "react-native-slider-picker";
import { globalStyles } from "../../styles/global";
import { styles } from "./styles";
import ImagePickerComp from "../../utilities/ImagePicker";
import { useForm } from "../../customHooks/useForm";
import { AnimatedCircularProgress } from "react-native-circular-progress";
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
} from "../../utilities/AppUtils";
import {
  TextInput,
  View,
  Text,
  YellowBox,
  LogBox,
  TouchableOpacity,
  ScrollView
} from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const Car = () => {
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
      showAlert();
    } else {
      isLoading(true);
      console.log(object);
    }
  };
  animationBegin = () => {
    setTimeout(() => {}, 3000);
  };

  useEffect(() => {
    YellowBox.ignoreWarnings(["Animated: `useNativeDriver`"]);
    checkImageStatus();
  }, []);
  // LogBox.ignoreLogs();
  return (
    <View style={globalStyles.container}>
      {Loading ? (
        <AnimatedCircularProgress
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

Car.navigationOptions = commonNavigation("Car");
export default Car;
