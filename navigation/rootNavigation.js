import React from 'react'
import { Stack } from "."
import colorScheme from "../globalConfigs/useColorSchema"
import { NavigationContainer } from '@react-navigation/native';
import { customdark, customlight } from '../globalConfigs/themes';
import Home from '../presentation/screens/Home';
import ExcerciseDetail from '../presentation/screens/ExcerciseDetail';
import { StatusBar } from 'expo-status-bar';

export default function RootNavigation() {

    const userScheme = colorScheme()
    const customTheme = userScheme == "light" ? customlight: customdark

    return (
        <NavigationContainer theme={customTheme}>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen 
                    name="Home" component={Home}
                />
                <Stack.Screen 
                    name="ExcerciseDetail" component={ExcerciseDetail}
                ></Stack.Screen>
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    )
}
