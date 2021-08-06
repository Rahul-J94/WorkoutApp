import React from 'react'
import { Stack } from "."
import colorScheme from "../globalConfigs/useColorSchema"
import { NavigationContainer } from '@react-navigation/native';
import { customdark, customlight } from '../globalConfigs/themes';

export default function RootNavigation() {

    const userScheme = colorScheme()
    const customTheme = userScheme == "light" ? customlight: customdark

    return (
        <NavigationContainer theme={customTheme}>

        </NavigationContainer>
    )
}


