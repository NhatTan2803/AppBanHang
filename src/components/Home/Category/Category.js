import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

const url = 'http:/localhost/api/images/type/'
export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            types: []
        };
    }
    componentWillMount() {
        fetch('http://localhost/api/')
            .then(res => res.json())
            .then(resJSON => {
                const { type } = resJSON;
                this.setState({
                    types: type,
                });
                console.log(this.state.types);
            });
    }
    render() {
        const { wrapper, banner, textSpring, textStyle, imageStyle } = styles
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textSpring}>Category</Text>
                </View>
                <View style={{ flex: 7, paddingBottom: 5, paddingLeft: 10, }}>
                    <Swiper width={imageWidth} height={imageHeight}>
                        {this.state.types.map(e => (
                            <TouchableOpacity key={e.id} >
                                <ImageBackground source={{ uri: `${url}${e.image}` }} style={imageStyle}>
                                    <Text style={textStyle}>{e.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </Swiper>
                </View>
            </View>
        );
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
