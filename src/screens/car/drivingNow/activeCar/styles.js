import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  subContainer: {
    alignItems: "center"
  },
  statusContent: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30
  },
  tinyLogo: {
    width: 254,
    height: 163
  },
  subContent: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContent: {
    fontFamily: "Roboto",
    fontSize: 14,
    alignItems: "center",
    color: "#2F80ED"
  }
});
