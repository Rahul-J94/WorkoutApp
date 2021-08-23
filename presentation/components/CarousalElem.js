import React, { Component } from 'react'
import Carousel from 'react-native-snap-carousel';
import { View, Text, Image } from "react-native"
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const carousalTypesList = {

// }

// function name(params) {
    
// }

export default class CarousalElem extends Component {

    constructor(props) {
        super(props);
        this.data = this.props.data
        // this.type = this.props.carousalType
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
            <View style={{
                    // backgroundColor:'floralwhite',
                    borderWidth: 1,
                    borderRadius: 25,
                    height: windowHeight/2,
                    borderColor: "#ececec"
                    // padding: 10,
                    // marginLeft: 20,
                    // marginRight: 10, 
                }}
            >
                <View>
                    <Image 
                        source={ item.image } 
                        style={{ 
                            width: 248, height: windowHeight/3,
                            borderTopRightRadius:25, borderTopLeftRadius: 25,
                        }} 
                    ></Image>
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{fontSize: 25, fontFamily: "sfBold"}}>{item.excercise}</Text>
                    <Text style={{ padding: 5, fontFamily: "sfRegular", color: "#c0c0c0" }}>{item.repetation} repetation</Text>
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
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center' }}>
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
