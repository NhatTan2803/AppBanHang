import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import IcM from "../img/ic_menu.png";
import IcL from "../img/ic_logo.png";

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

export default class Container extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        const { logo, wrapper, text, textIput } = styles
        return (
            <View style={styles.container}>
                <View style={wrapper}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                        <TouchableOpacity onPress={this.props.method}>
                            <Image
                                source={IcM} style={logo}
                            />
                        </TouchableOpacity>
                        <Text style={text}>Wearing a Dress</Text>
                        <TouchableOpacity>
                            <Image
                                source={IcL} style={logo}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, paddingTop: 10, alignItems: 'center', }}>
                        <TextInput style={textIput}></TextInput>
                    </View>
                </View>
                <View style={{
                    flex: 5
                    // alignItems: 'center'
                }}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#40C4FF',
        justifyContent: 'space-between',
        paddingTop: 5,
        // alignItems: 'center',
        //paddingBottom: 'auto',
    },
    textIput: {

        height: height / 23,
        backgroundColor: '#FFF',
        width: width / 1.1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    logo: {
        height: 20, width: 20,
    },
    text: {
        color: '#FFF', fontFamily: 'Avenir', fontSize: 20, alignItems: 'center', paddingTop: 0.2,
    },
})