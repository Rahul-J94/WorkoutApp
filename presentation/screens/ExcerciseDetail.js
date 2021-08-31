import React, { Component } from 'react'
import mainStyle from '../../globalStyles/mainStyle';

import { Dimensions, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';

import { Button as IOSButton } from 'react-native-ios-kit';

const windowHeight = Dimensions.get('window').height;

export default class ExcerciseDetail extends Component {

    constructor(props) {
        super(props);
        this.route = this.props.route
        this.navigation = this.props.navigation
    }

    render() {
        return (
            <View style={mainStyle.container}>
                <ImageBackground source={require("../../assets/images/high_jumps.jpg")} resizeMode="cover" style={styles.image}>
                  <View style={{ padding: 20, justifyContent: "flex-end", flex: 1, marginBottom: 15 }}>
                    <Text style={styles.text}>Inside</Text>
                    <IOSButton rounded inverted >
                      Accept the challenge for $15
                    </IOSButton>
                  </View>
                </ImageBackground>

                <ScrollBottomSheet
                    componentType="ScrollView"
                    snapPoints={['50%', '50%', windowHeight - 200]}
                    initialSnapIndex={2}
                    renderHandle={() => (
                      <View>
                        <View style={styles.header}>
                          <View style={styles.panelHandle} />
                        </View>
                        <View style={styles.contentContainerStyle}>
                          <Text>Description:</Text>
                          <Text>Loream </Text>
                        </View>
                      </View>
                    )}
                    // data={Array.from({ length: 200 }).map((_, i) => String(i))}
                    // keyExtractor={i => i}
                    // renderItem={({ item }) => (
                    // <View style={styles.item}>
                    //     <Text>{`Item ${item}`}</Text>
                    // </View>
                    // )}
                    contentContainerStyle={styles.contentContainerStyle}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainerStyle: {
      padding: 16,
      backgroundColor: '#F3F4F9',
    },
    header: {
      alignItems: 'center',
      backgroundColor: 'white',
      paddingVertical: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    panelHandle: {
      width: 40,
      height: 2,
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: 4
    },
    item: {
      padding: 20,
      justifyContent: 'center',
      backgroundColor: 'white',
      alignItems: 'center',
      marginVertical: 10,
    },
    image: {
      height: windowHeight-180
    },
    text: {
    }
  });