import React, { Component } from 'react'
import { View, Text } from 'react-native'
import mainStyle from '../../globalStyles/mainStyle';
import { StatusBar } from 'expo-status-bar';

export default class Home extends Component {
    render() {
        return (
            <View style={mainStyle.container}>
                <Text style={{ fontFamily: "sfBold" }}>hihi from home</Text>
                <StatusBar style="auto" />
            </View>
        )
    }
}
