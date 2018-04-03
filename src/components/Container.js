import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
export default class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#81C784'
                }}>
                </View>
                <View style={{
                    flex: 9, justifyContent: 'center',
                    alignItems: 'center'
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

    }
})