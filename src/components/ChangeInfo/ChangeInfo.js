import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput
} from 'react-native';
import Back_white from '../../img/back_white.png';

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: 'Nguyen Van Pho',
            txtAddress: '92 Le Thi Rieng / Ben Thanh',
            txtPhone: '01694472176'
        };
    }
    static navigationOptions = {
        header: null,
    }
    render() {
        const { goBack } = this.props.navigation;
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;
        const { name, address, phone } = this.state;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <TouchableOpacity onPress={() => { goBack(); }}>
                        <Image source={Back_white} style={backIconStyle} />
                    </TouchableOpacity>
                    <Text style={headerTitle}>User Infomation</Text>
                    <View />

                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        value={name}
                        onChangeText={txtName => this.setState({ ...this.state, txtName })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value={address}
                        onChangeText={txtAddress => this.setState({ ...this.state, txtAddress })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value={phone}
                        onChangeText={txtPhone => this.setState({ ...this.state, txtPhone })}
                    />
                    <TouchableOpacity style={signInContainer}>
                        <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#40C4FF', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, paddingTop: 5, },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#40C4FF',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});