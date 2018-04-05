import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Container from '../Container'
import Collection from '../Home/Collection/Collection';
import Category from '../Home/Category/Category'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.MoSlide = this.MoSlide.bind(this);
    }
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../img/home.png')}
                style={[{ tintColor: tintColor }, styles = { width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }]}
            />
        )
    }
    
    MoSlide() {
        this.props.navigation.navigate("DrawerOpen")
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, }}>
                <Container method={this.MoSlide} >
                    <Collection />
                    <Category/>
                </Container>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        margin: 10,
    },
});
