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
    
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('../../img/home.png')}
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
