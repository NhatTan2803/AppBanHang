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

export default class SignUp extends Component {

    static navigationOptions = {
        header: null
    }
    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;
        const { container, v1, v2, v3, T_sign, textinput, bigButton } = styles;
        return (
            <View style={styles.container} >

                < View style={v1} >
                    <TouchableOpacity onPress={() => { goBack(); }}>
                        <Image source={Back_White} style={{ height: 40, width: 40, marginLeft: 0.1 }} />
                    </TouchableOpacity>

                    <Text style={T_sign}>Wearing a Dress</Text>
                    <TouchableOpacity>
                        <Image source={Iclogo} style={{ height: 30, width: 30, alignContent: 'center', marginTop: 5, }} />

                    </TouchableOpacity>
                </View >

                <View style={v2}>
                    <TextInput placeholder={"   Nhập tên"} style={textinput}></TextInput>
                    <TextInput placeholder={"   Nhập Email"} style={textinput}></TextInput>
                    <TextInput placeholder={"   Nhập mật khẩu"} style={textinput}></TextInput>
                    <TextInput placeholder={"   Nhập lại mật khẩu"} style={textinput}></TextInput>
                    <TouchableOpacity style={bigButton} >
                        <Text style={T_sign}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
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
