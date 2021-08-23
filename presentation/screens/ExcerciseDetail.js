import React, { Component } from 'react'
import { View, Text } from 'react-native'
import mainStyle from '../../globalStyles/mainStyle';

export default class ExcerciseDetail extends Component {

    constructor(props) {
        super(props);
        this.route = this.props.route
        this.navigation = this.props.navigation

        console.log(this.props," /////");
    }
    

    render() {
        return (
            <View style={mainStyle.container}>
                <View 
                    style={{ padding: 30 }}
                >
                    <Text>{ this.route.params.id }</Text>
                </View>
            </View>
        )
    }
}
