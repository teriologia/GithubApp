import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function RepoCard(props) {
  const { names, language, created_at, onPress } = props;

  const colors = ["#55efc4", "#81ecec", "#74b9ff", "#a29bfe", "#dfe6e9"];
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.main,
          { backgroundColor: colors[Math.floor(Math.random() * 5)] },
        ]}
      >
        <Text style={{ color: "#000" }}>{names}</Text>
        <Text>{language}</Text>
        <Text style={{ textAlign: "right" }}>{created_at}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default RepoCard;
