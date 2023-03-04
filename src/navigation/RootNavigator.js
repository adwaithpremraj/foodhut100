import React from "react";
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authNavigataion";



export default function RootNavigator(){
   return (
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
   )
}