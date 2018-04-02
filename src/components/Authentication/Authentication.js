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

export default class Authentication extends Component {
    // static navigationOptions = ({navigation})=>({
    //   title: `${navigation.state.params.username}`
    // })
    //   static navigationOptions = {
    //     title:'Chat',
    //   }
    render() {
        const { params } = this.props.navigation.state;
        const { goBack } = this.props.navigation;
        console.log(params)
        return (
            <View style={styles.container}>
                <Text>{params.username}</Text>

                <Button title="Back"
                    onPress={() => {
                        goBack();
                    }}
                />
                <Text>Mang hinh chat</Text>
            </View>
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
