/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity
} from 'react-native';

// const MenuButton = (props) => (
//   <TouchableOpacity  onPress={() => { props.navigation.navigate('DrawerOpen') }}>
//     <Image source={require('../imgs/Menu.png')} style={{height:20,width:20} }/>
//   </TouchableOpacity>
// );

export default class Home extends Component {


    //   static navigationOptions = ({ navigation }) => ({
    //     title: 'Home',
    //     headerLeft: <MenuButton navigation={navigation} />,
    //     headerBack: null,
    //     tabBarLabel: 'Home',
    //     showIcon: true,
    //     tabBarIcon: ({ tintColor }) => (
    //       <Image
    //         source={require('../imgs/Home.png')}
    //         style={[{ tintColor: tintColor }, styles = { width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }]}
    //       />
    //     )
    //   });


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text></Text>
                <Text>tan2</Text>
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
});
