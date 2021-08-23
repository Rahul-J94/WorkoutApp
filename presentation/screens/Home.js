import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import mainStyle from '../../globalStyles/mainStyle';
import { HOME_CAROUSAL } from '../../constants';
import CarousalElem from '../components/CarousalElem';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation
    }
    

    render() {
        return (
            <SafeAreaView style={mainStyle.container}>
                <CarousalElem data={HOME_CAROUSAL} navigate={this.navigation} />
            </SafeAreaView>
        )
    }
}
