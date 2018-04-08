import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet,TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper, banner, textSpring } = styles
        return (
            <TouchableOpacity onPress={this.props.showDetail} style={styles.wrapper}>
                <View style={{ flex: 1,justifyContent:'center' }}>
                    <Text style={textSpring}>SPRING COLLECTION</Text>
                </View>
                <View style={{ flex: 7,paddingBottom: 5,paddingLeft: 10, }}>
                    <Image
                        source={require('../../../img/temp/banner.jpg')}
                        style={banner}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}
const imgWidth = width - 40;
const imgHeight = (imgWidth / 933) * 465
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.3,
        backgroundColor: 'pink',
        alignSelf: 'stretch',
        shadowColor: '#CFD8DC',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 3,
        margin: 10,
    },
    textSpring: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 20,
        alignItems: 'center',
        paddingTop: 0.45,
        paddingLeft: 2,

    },
    banner: {
        height: imgHeight,
        width: imgWidth,
        padding: 10,
    }
})
