import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function RepoCard(props) {
  const { names, language, created_at, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.main}>
        <Text style={{ color: "#000" }}>{names}</Text>
        <Text>{language}</Text>
        <Text style={{ textAlign: "right" }}>{created_at}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default RepoCard;
