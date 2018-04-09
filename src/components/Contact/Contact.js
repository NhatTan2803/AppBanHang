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
    Image
} from 'react-native';
import Container from '../Container';
import ContactView from './ContactView';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.MoDrawer = this.MoSlide.bind(this);
    }
    static navigationOptions = {
        tabBarLabel: 'Contact',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../img/contact.png')}
                style={[{ tintColor: tintColor }, styles = { width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }]}
            />
        )
    }
    MoSlide() {
        this.props.navigation.navigate("DrawerOpen")
    }
    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <Container method={this.MoDrawer}>
                <ContactView />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
