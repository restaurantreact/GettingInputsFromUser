import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

class InpWithoutHooks extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            pass:'',
        }
    }

    render(){
        return(
            <View>
                <TextInput
            //this is one of the standard way of creating user input
                
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                //value ={this.state.name }
                onChangeText = {(value)=>this.state.name = value}
            />
                <TextInput
            //this is one of the standard way of creating user input
                
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
               // value ={this.state.pass}
                secureTextEntry={true}
                onChangeText = {(value)=>this.state.pass = value}
            />
            <Text style={styles.txt}> entered txt is </Text>
            <Text style={styles.txt}>{this.state.name}</Text>
            
            </View>
        )
    }
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

export default InpWithoutHooks