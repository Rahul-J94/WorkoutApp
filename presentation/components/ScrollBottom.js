import React, { Component } from 'react'
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';

export default class ScrollBottom extends Component {
    render() {
        return (
            <ScrollBottomSheet
                componentType="FlatList"
                snapPoints={['50%', '50%', windowHeight - 200]}
                initialSnapIndex={2}
                renderHandle={() => (
                <View style={styles.header}>
                    <View style={styles.panelHandle} />
                </View>
                )}
                data={Array.from({ length: 200 }).map((_, i) => String(i))}
                keyExtractor={i => i}
                renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text>{`Item ${item}`}</Text>
                </View>
                )}
                contentContainerStyle={styles.contentContainerStyle}
            />
        )
    }
}
