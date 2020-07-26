import React, {useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
//import { TextInput } from 'react-native-gesture-handler'

const MainScreen = (props)=>{

    const [name, changename] = useState("")

    return(
        <View style={styles.MainContainer}>

            <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('state')}>
            <Text style={styles.txt}>Input using hooks</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate('nothooks')}>
            <Text style={styles.txt}>Input using state </Text>
            </TouchableOpacity>
            
        </View>
    )

}

const styles = StyleSheet.create({

    input:{
        borderColor:'black',
        borderRadius:5,
        borderWidth:2,
        marginTop:'5%',
        width:'70%',
        height:60,
        fontSize:25,
        alignSelf:'center',
        alignContent:'center',
    },
    MainContainer:{
        flex:1,
        flexDirection:'column',
    },
    txt1:{
        fontSize:30,
        marginTop:'2%',
        alignSelf:'center',
    },
    
    btn:{
        height:50,
        width:"70%",
        borderRadius:10,
        textAlign:'center',
        alignSelf:"center",
        fontSize:0, 
        backgroundColor:'black',
        marginTop:'10%',
        paddingTop:'2%'

    },
    txt:{
        fontSize:20,
        alignSelf:'center',
        color:'white',

    },

}
)

export default MainScreen