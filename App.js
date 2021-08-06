import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import useSplash from './globalConfigs/useSplash';
import mainStyle from './globalStyles/mainStyle';

export default function App() {

  const appLoaded = useSplash()

  if(!appLoaded){
    return null
  }else{
    return (
      <View style={mainStyle.container}>
        <Text style={{ fontFamily: "sfBold" }} >Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }

  
}
