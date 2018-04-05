import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

import littleIcon from '../../../img/temp/little.jpg';
import maxiIcon from '../../../img/temp/maxi.jpg';
import partyIcon from '../../../img/temp/party.jpg';


export default class Category extends Component {
    render() {
        const { wrapper, banner, textSpring } = styles
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textSpring}>Category</Text>
                </View>
                <View style={{ flex: 7, paddingBottom: 5, paddingLeft: 10, }}>
                    <Swiper width={imgWidth} height={imgHeight}>
                        <Image source={littleIcon} style={banner} />
                        <Image source={maxiIcon} style={banner} />
                        <Image source={partyIcon} style={banner} />
                    </Swiper>
                </View>
            </View>
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
