/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Container from '../Container'
export default class Cart extends Component {

    constructor(props) {
        super(props),
            this.MoDrawer = this.MoSlide.bind(this);
    }
    static navigationOptions = {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../img/cart.png')}
                style={[{ tintColor: tintColor }, styles = { width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }]}
            />
        )
    };
    MoSlide() {
        this.props.navigation.navigate("DrawerOpen")
    }
    render() {
        return (
            <Container method={this.MoDrawer}>
                <Text>Cart</Text>

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
});
