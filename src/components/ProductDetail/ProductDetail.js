import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default class Detail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', padding: 150, }}>
                <TouchableOpacity onPress={this.props.method}>
                    <Text style={{ fontSize: 200, }}>Back</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
