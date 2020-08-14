import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,TextInput} from 'react-native';
import AppHeader from '../Components/AppHeader';
export default class TaskScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
           <AppHeader></AppHeader>
           <View style={{flexDirection:'row'}}>
           <TextInput style={styles.textinput}></TextInput>
            <TouchableOpacity style={styles.design}>
                <Text style={styles.designText}>Add To-Do Reminder</Text>
            </TouchableOpacity>
            </View>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff9d5c',
        alignItems: 'center',
        justifyContent: 'center',
        width:500
      },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        }
    },
    design:{
        width:150,
        height:40,
        marginTop:300,
        backgroundColor:'red',
        alignItems:'center',
        
    },
    designText:{
        fontSize:20,
        
    },
    textinput:{
        width:200,
        height:50,
        borderWidth:3,
        borderColor:'black',
        marginTop:300,
    }
})

