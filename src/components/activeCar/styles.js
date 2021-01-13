import { StyleSheet } from "react-native";
import { appDisableColor } from "../../utilities/Consants/Colors";
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
    paddingTop: 30
  },
  tinyLogo: {
    width: 254,
    height: 163
  },
  lock: {
    width: 16,
    margin: 10,
    height: 21
  },
  subContent: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  lockItem: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  lockContent: {
    flexDirection: "row"
  },
  timeEndingContent: {
    flexDirection: "row",
    paddingTop: 10
  },
  timeEndingText: {
    color: appDisableColor,
    paddingTop: 3,
    paddingRight: 3,
    fontSize: 16
  },
  buttonActiveContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonActiveContent: {
    fontFamily: "Roboto",
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#2F80ED"
  },
  timeEndingDayText: {
    color: appDisableColor,
    fontWeight: "bold",
    fontSize: 20
  },
  animatedCircular: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  lockItemContent: {
    justifyContent: "center",
    paddingLeft: 10
  },
  lockItemText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000"
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
