import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class CustomHeader extends Component {
    
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <View>
                <Ionicons name="ios-cloud-upload-outline" size={26} color="white" style={{ paddingTop: 10 }} />
            </View>
        )
    }
}
