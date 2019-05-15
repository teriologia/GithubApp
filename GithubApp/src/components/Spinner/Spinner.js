import React from 'react';
import {View, ActivityIndicator} from 'react-native';

function Spinner({size}) {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    )
}
export default Spinner