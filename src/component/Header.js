import React from "react";
import { View,Text,StyleSheet,Dimension } from "react-native"
// import { Icon } from "react-native-vector-icons/MaterialIcons";

import {colors, parameters} from "../global/styles"
import { Icon } from "react-native-elements"


export default function Header({title,type}){
    return(
         <View style={styles.header}>
            <View style={{marginLeft:20}}>
                {/* <Icon
                        // type="material-community"
                        name='arrow_back'
                        color={colors.headerText}
                        size={28}
                        onPress={()=>{}}
                />            */}
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
     header :{
        flexDireaction:"row",
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
     },

     headerText:{
        paddingTop:20,
        color:colors.headerText,
        fontSize:22,
        fontWeight:"bold",
        marginLeft:30

     }
})