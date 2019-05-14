import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles'

function Header(props) {
    const { name, onPress } = props
    return (
        <SafeAreaView style={{flexDirection: 'row'}}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={onPress}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.back} onPress={onPress}>
                    <Text style={styles.repoName}>{name}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.back} onPress={onPress}>
                    <View />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Header;
