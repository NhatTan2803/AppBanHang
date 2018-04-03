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

export default class Cart extends Component {
    // static navigationOptions = ({navigation})=>({
    //   title: `${navigation.state.params.username}`
    // })
    static navigationOptions = {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('../../img/cart.png')}
              style={[{ tintColor: tintColor }, styles = { width: 20, height: 20, justifyContent: 'center', alignItems: 'center'}]}
            />
          )
    }
    render() {
        const { goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <Container>
            <Text>Home</Text>
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
