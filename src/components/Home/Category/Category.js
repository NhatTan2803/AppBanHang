import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

import littleIcon from '../../../img/temp/little.jpg';
import maxiIcon from '../../../img/temp/maxi.jpg';
import partyIcon from '../../../img/temp/party.jpg';


export default class Category extends Component {
    render() {
        const { wrapper, banner, textSpring, textStyle,imageStyle } = styles
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textSpring}>Category</Text>
                </View>
                <View style={{ flex: 7, paddingBottom: 5, paddingLeft: 10, }}>
                    <Swiper width={imageWidth} height={imageHeight}>
                        <TouchableOpacity>
                            <ImageBackground source={littleIcon} style={imageStyle}>
                                <Text style={textStyle}>Maxi Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={partyIcon} style={imageStyle}>
                                <Text style={textStyle}>Maxi Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={maxiIcon} style={imageStyle}>
                                <Text style={textStyle}>Maxi Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </Swiper>
                </View>
            </View>
        )
    }
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465
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
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF',

    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'


    },
    banner: {
        height: imageHeight,
        width: imageWidth,
        padding: 10,
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
})
