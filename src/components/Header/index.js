import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles'

function Header(props) {
    const { name, onPress } = props
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.repoName}>{name}</Text>
            <View />
        </View>
    );
}

export default Header;
