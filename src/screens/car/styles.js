import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  },
  container1: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  containerSub: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  input: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    margin: 2,
    fontSize: 18,
    borderRadius: 6
  },
  inputs: {
    flexBasis: "48%",
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#3B5998",
    fontSize: 18,
    borderRadius: 6
  },
  animatedCircular: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
