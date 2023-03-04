import { View, Text, StyleSheet, Dimension, TextInput } from "react-native"
import React from "react";  
import { colors, parameters, title } from "../../global/styles"
import { Button, Image, } from "react-native-elements"
import { Icon } from "react-native-vector-icons/MaterialIcons";
import Swiper from "react-native-swiper";


export default function SignInWelcomeScreen(navigation) {
    return(
        <View  style={{flex:1}}>
            <View style={{flex:3,justifyContent:'flex-start',alignItems: 'center',paddingTop:20}}>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>NEAR YOU</Text>
            </View>


            <View style={{flex:4,justifyContent:"center",marginBottom:200}}>
                    <Swiper autoplay={true}>
                        <View style={style.slide1}>
                            <Image
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEKEl_1S7wgVGo72C1w0awtuPgQaJ1d03MrQPDa9SBQ&s"}}
                                    style={{height:400,width:400}}
                                    />

                        </View>
                        <View style={style.slide1}>
                            <Image
                            source={{uri:"https://thumbs.dreamstime.com/b/healthy-food-background-fruits-vegetables-cereal-nuts-superfood-dietary-balanced-vegetarian-eating-products-kitchen-143677456.jpg"}}
                            
                            style={{height:400,width:400}}

                            
                            />

                        </View>
                        <View style={style.slide1}>
                            <Image
                            source={{uri:"https://thumbs.dreamstime.com/b/healthy-food-background-fruits-vegetables-cereal-nuts-superfood-dietary-balanced-vegetarian-eating-products-kitchen-143677456.jpg"}}
                            style={{height:400,width:400}}
                            />

                        </View>
                    </Swiper>
            </View>

            <View style={{ flex:4,justifyContent:"flex-end",marginBottom:20}}>

                <View style={{alignItems:"center", marginBottom:20 ,color:"#702f0f",}}>
                <Button
                            style={{alignItems:"center",}}
                            title={"SIGN IN"}
                            onPress={()=>{
                                navigation.navigate("SignInScreen")
                            }}

                            // buttonStyle={style.siginHome}
                            // titleStyle={parameters.buttonStyle}
                    />
                </View> 
                <View>
                    <Button
                        title="create an account"
                        buttonStyle={style.createButton}
                        titleStyle={style.createButtonTitle}                    />
                </View>
            </View>
        </View>
    )
}




const style=StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'

}, 
slide2: {
    flex: 1,
    justifyContent: 'center',
     alignitems: 'center' ,
    backgroundColor: '#97CAES'
},

slide3: {
    flex: 1,
    justifyContent: 'center',
     alignItems: 'center',
    backgroundColor: '#92BBD9'
    },
    createButton:{
        aligncontent:"center",
        justifyContent:"center",
        backgroundColor: "white",
        borderRadius:12, 
        borderWidth:1, 
        borderColor: "#702f0f",
        height:40,
        alignItems: 'center', 
        
        },
    createButtonTitle:{
        color: "#702f0f",
        alignItems: "center",
        justifyContent:"center",
        marginTop:-3,
    

        },
    // siginHome:{
    //     marginHorizontal:'20',
    //     backgroundColor:"#702f0f",
    //     alignContent:"center",
    //     justifyContent:"center",
    //     borderRadius:12,
    //     borderWidth:1,
    //     borderColor:"#702f0f",
    //     height:50,
    //     paddingHorizontal:20,

    // }
})
