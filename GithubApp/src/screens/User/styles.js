import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    mainView:{
        width: '100%',
        height: 200,
        flexDirection: 'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#c4c2c1',
        paddingLeft: 10,
        paddingTop:  20,
    },
    avatar:{
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#FFF',
    },
    userName:{
       
        color: '#000',
        fontSize: 24,
    },
    repo:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 40,
    },
    name:{
        
    },
    userDetail: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 10,
    },
    detailText:{
        color: '#000',
        fontSize: 14,
    },
    location:{
        marginTop: 10,
    },
    repoView:{
        flex: 1, 
        alignItems: 'center', 
        marginTop: 10,
    }

})