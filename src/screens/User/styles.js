import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainView: {
    width: "100%",
    height: 200,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#333",
    paddingLeft: 10,
    paddingTop: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#FFF"
  },
  userName: {
    color: "#FFF",
    fontSize: 24
  },
  repo: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 40
  },
  name: {
    color: "#FFF"
  },
  userDetail: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10
  },
  detailText: {
    color: "#FFF",
    fontSize: 14
  },
  location: {
    marginTop: 10,
    color: "#FFF"
  },
  repoView: {
    flex: 1,
    alignItems: "center",
    marginTop: 10
  }
});
