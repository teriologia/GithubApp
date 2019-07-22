import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    searchView: {
        alignItems: 'center',
        marginTop: 40,
        width: width - 100,
    },
    created: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        marginBottom: 20,
    },
    error: {
        color: 'red',
        fontSize: 18,
        position: 'absolute',
        bottom: -57,
    }
})