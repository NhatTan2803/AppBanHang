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
        const {navigate} = this.props.navigatetion;
        return (
            
            <View style={styles.container}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#81C784'
                }}>
                    <TouchableOpacity onPress={() => { this.props.navigatetion.navigate("DrawerOpen") }}>
                        <Text>mo side</Text>
                    </TouchableOpacity>
                    <Text style={styles.openSlide}>Chao ban</Text>
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
    },
    openSlide: {
        paddingTop: 30,

    }
})