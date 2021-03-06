import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function SearchInput(props) {
  const { onChangeText, onPress } = props;
  return (
    <View style={styles.viewStyle}>
      <TextInput
        autoCapitalize={"none"}
        onChangeText={onChangeText}
        style={styles.textStyle}
        placeholder="Search Username"
      />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={{color: "#FFF"}}>Search User</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SearchInput;
