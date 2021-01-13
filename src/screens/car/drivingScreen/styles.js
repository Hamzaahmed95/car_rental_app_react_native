import { StyleSheet } from "react-native";
import {
  appBackgrounColor,
  appColor,
  btnFontColor
} from "../../../utilities/Consants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: appBackgrounColor
  },
  containersub: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column"
  },
  tinyLogo: {
    width: 286,
    height: 211
  },
  content: {
    fontSize: 14,
    marginTop: 30,
    color: "black",
    fontWeight: "bold",
    fontFamily: "Roboto"
  },
  buttonContent: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: btnFontColor
  },
  buttonContainer: {
    backgroundColor: appColor,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 196,
    height: 36
  },
  buttonBottomContainer: {
    backgroundColor: appColor,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 143,
    height: 36
  },
  bottomContainer: {
    paddingBottom: 50,
    position: "absolute",
    alignItems: "center",
    bottom: 0
  }
});
