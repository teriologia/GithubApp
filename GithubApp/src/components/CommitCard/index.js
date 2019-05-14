import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles'

function CommitCard(props) {
    const { name, author, onPress } = props
    return (
        <SafeAreaView style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.main}>
                    <Text style={{ color: '#000' }}>{name}</Text>
                    <Text style={styles.author}>Author: {author}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default CommitCard;
