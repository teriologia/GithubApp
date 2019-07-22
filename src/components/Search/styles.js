import { StyleSheet } from "react-native";

export default StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    flex: 1
  },
  textStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flex: 2,
    fontSize: 18,
    color: "#000",
    paddingHorizontal: 5,
    height: 60
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    height: 35,
    marginTop: 20,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});
