import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  main: {
    paddingVertical: 9,
    justifyContent: "center",
    width: width - 15,
    backgroundColor: "#81ecec",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 4,
    flex: 1
  }
});
