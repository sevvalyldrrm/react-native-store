import { StyleSheet, Dimensions, BackHandler } from 'react-native'

export const bookStoreStyle = StyleSheet.create({
    container: {
        backgroundColor: '#ECF9FF',
        flex:1,
        margin:10,
        borderWidth: 1,
        borderColor:'gray',
        borderRadius:10,
        alignItems: 'center',

    },
    image: {
        height: Dimensions.get('window').height/ 3,
        width: Dimensions.get('window').width/ 2,
        borderRadius:10,
        margin:10,

    },

    title: {
        textAlign:'left',
        fontWeight:'bold',
        fontSize:18,
        margin:10,
    },
    price:{
        marginTop: 3,
        margin :10,
        textAlign: 'center'
    },

    description: {

    },
    author: {
        fontStyle: 'italic',
        fontSize: 14,
        textAlign: 'center'

    },

    inStock: {
        textAlign: 'center',
        fontWeight:"bold",
        fontSize:20,
        color:"red",
        marginTop:3,
    }
}); 