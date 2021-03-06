/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Back_White from "../../img/back_white.png";
import Iclogo from "../../img/ic_logo.png";

export default class SignIn extends Component {

    static navigationOptions = {
        header: null
    }
    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;
        const { container, v1, v2, v3, T_sign, textinput, bigButton } = styles;
        return (
            <View style={styles.container} >

                <Text>Sign Out</Text>/
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#40C4FF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,

    },
    textinput: {
        height: 40,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 15,

    },
    v1: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        marginTop: 20,
        justifyContent: 'space-around',
        //alignItems: 'stretch'
    },
    v2: {
        flex: 5,
    },
    T_sign: {
        color: 'white', fontFamily: 'Avenir', fontSize: 27, alignItems: 'center', paddingTop: 0.2,

    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
});
