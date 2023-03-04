import { View, Text, StyleSheet, Dimension, TextInput } from "react-native"
import React from "react";
import { colors, parameters, title } from "../../global/styles"
import { Button } from "react-native-elements"
import { Icon } from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable"
import Header from "../../component/Header"


export default function creen() {
    return (
        <View style={styles.container}>
            <View>
                <Header title="MY ACCOUNT"/>
            </View>
            <View style={{alignItems:"center", marginTop: 10 ,color:"#702f0f",}}>
                <Text style={title}>Sign In</Text>
            </View> 

            <View style={{alignItems:"center", marginTop: 10 }}>
                <Text style={styles.text1}>Please enter email and password</Text>
            </View>

            <View style={{marginTop:20}}>
	            <View>
		        <TextInput
               		style={styles.TextInput1}
          		    placeholder="Email"
              		  />
	            </View>

                <View style={styles.TextInput2}>
                <TextInput
          		    placeholder="Password"
              		  />
                </View>

            </View>

            <View style={{marginTop:20,marginHorizontal:20}}>
                    <Button
                            title={"SIGN IN"}
                            buttonStyle={parameters.styledButton}
                            titleStyle={parameters.buttonStyle}
                    />
            </View>
            <View style={{alignItems:"center",marginTop:15}}>
                <Text style={{...styles.text1,textDecorationLine:"underline"}}>
                    Forgot Password?
                </Text>
            </View>
            <View style={{alignItems:"center",marginTop:15}}>
                <Text style={{...styles.text1,textDecorationLine:"underline"}}>
                    New User
                </Text>
            </View>


        </View>

)}
const styles=StyleSheet.create({
    container:{
        flex: 1,
    },

    text1:{
        color:colors.grey3,
        fontSize:16
    },
    header :{
       flexDireaction:"row",
       backgroundColor:colors.buttons,
       height:parameters.headerHeight,
       alignContent:"center"
    },

    headerText:{
       color:colors.headerText,
       fontSize:22,
       fontWeight:"bold",
       marginLeft:30

    },
    TextInput1:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15
    },
    TextInput2:{
        borderWidth:1,
        borderRadius: 12,
        marginHorizontal:20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        aligncontent:"center",
        alignItems: "center",
        paddingLeft:15
    },
    
})
