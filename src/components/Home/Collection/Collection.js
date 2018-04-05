import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native'
const { height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper } = styles
        return (
            <View style={styles.wrapper}>
                <Text>Shop</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignSelf: 'stretch',
        margin: 10,
    }
})
