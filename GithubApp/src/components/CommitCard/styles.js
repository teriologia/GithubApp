import { StyleSheet, Dimensions } from 'react-native'

const {width} = Dimensions.get('window')

export default StyleSheet.create({
    main: {
        paddingVertical: 9,
        justifyContent: 'center',
        width: width - 15,
        backgroundColor: '#d1d1d1',
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 4,
        flex: 1,
    },
    header: {
        flex: 1,
        height: 60,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    back: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    repoName: {
        fontSize: 18,
        color: '#000',
    },
    author:{
        marginTop: 8
    }
})