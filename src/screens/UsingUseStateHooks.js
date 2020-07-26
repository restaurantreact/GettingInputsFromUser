import React, {useState} from 'react'
import { View, StyleSheet, Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const UsingUseStateHooks = ()=>{

    const [name, changename] = useState("")

    return(
        <View style={styles.MainContainer}>
            <TextInput
            //this is one of the standard way of creating user input
                
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value ={name}
                onChangeText = {(value)=>changename(value)}
            />
            <Text style={styles.txt}> entered txt is </Text>
            <Text style={styles.txt}>{name}</Text>
            
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
    txt:{
        fontSize:30,
        marginTop:'2%',
        alignSelf:'center',
    },

}
)

export default UsingUseStateHooks