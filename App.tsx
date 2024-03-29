import React from "react";
import {View,Text,StyleSheet,StatusBar} from "react-native"
import { colors } from "./src/global/styles"
import { Icon } from "react-native-elements"
import SignInScreen from "./src/screens/authScreens/SignInScreen"
// import SignInWelcomeScreen from "./src/screens/authScreens/SignInWelcomeScreen";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App(){
  return (
    <View style={styles.container}>
      <StatusBar
           barStyle= "light-content"
           backgroundColor = {colors.statusBar} 
      />
      <SignInScreen/>
      {/* <SignInWelcomeScreen/> */}
      <RootNavigator/>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {flex:1}
})
