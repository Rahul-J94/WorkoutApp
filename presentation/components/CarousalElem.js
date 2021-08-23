import React, { Component } from 'react'
import Carousel from 'react-native-snap-carousel';
import { View, Text, Image } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import mainStyle, {windowWidth} from '../../globalStyles/mainStyle';


export default class CarousalElem extends Component {

    constructor(props) {
        super(props);
        this.data = this.props.data
        this.navigation = this.props.navigate
        this.state = {
            activeIndex: 0
        }
    }
    
    _returnStar = (count) => {
        let response = []
        for (let i = 0; i < count; i++) {
            response.push(<AntDesign name="star" size={18} color="#ff2d55" key={`star${i}`}  />)
        }
        return response
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={mainStyle.carousalContainer}
            >
                <View>
                    <Image 
                        source={ item.image } 
                        style={mainStyle.carousalImageBg}
                    ></Image>
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={mainStyle.carousalHeading}
                        onPress={() => this.navigation.navigate("ExcerciseDetail", {
                            id: item.key
                        })}
                    >
                        {item.excercise}
                    </Text>
                    <Text style={mainStyle.carousallight}>{item.repetation} repetation</Text>
                    <View style={{ paddingTop: 5, flexDirection: 'row' }} >
                        {
                            this._returnStar(item.stars)
                        }
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={mainStyle.carousalMain}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    layout={'default'}
                    data={this.data}
                    renderItem={this._renderItem}
                    sliderWidth={windowWidth}
                    itemWidth={250}
                    // containerCustomStyle={{ padding: 0, margin: 0 }}
                    // slideStyle = {{ padding: 0, margin: 0}}
                    contentContainerCustomStyle = {{ padding: 0, margin: 20 }}
                    // activeSlideOffset={10}
                    activeSlideAlignment={'start'}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) }
                />
            </View>
        )
    }
}
