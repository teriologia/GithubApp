import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles'

function RepoCard(props) {
  const { names, language, created_at, onPress } = props
    return (
  <SafeAreaView>
      <TouchableOpacity onPress={onPress}>
      <View style={styles.main}>
        <Text style={{color: '#000'}}>{names}</Text>
        <Text>{language}</Text>
        <Text style={{textAlign:'right'}}>{created_at}</Text>
      </View>
    </TouchableOpacity>
  </SafeAreaView>
    );
  }

export default RepoCard;
