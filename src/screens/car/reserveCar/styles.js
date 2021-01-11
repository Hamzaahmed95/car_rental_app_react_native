import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  subcontainer: {
    backgroundColor: "#56CCF2",
    alignItems: "center",
    width: "100%"
  },
  tinyLogo: {
    width: 20.61,
    marginRight: 10,
    height: 20
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
    fontSize: 16,
    color: "black"
  },
  buttonContainer: {
    backgroundColor: "#ffffff",
    marginTop: 15,
    paddingLeft: 15,
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 328,
    height: 46
  },
  buttonBottomContainer: {
    backgroundColor: "#56CCF2",
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
