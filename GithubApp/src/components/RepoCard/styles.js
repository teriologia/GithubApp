import {StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

export default StyleSheet.create({
    main:{
        justifyContent: 'center',
        width: width -15,
        height: 70,
        backgroundColor: '#d1d1d1',
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 4,
    }
})