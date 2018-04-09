import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Container from '../Container';
import Collection from '../Home/Collection/Collection';
import Category from '../Home/Category/Category';
import TopProduct from '../Home/TopProduct/TopProduct';
import Detail from '../Home/Detail';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.listGoBack = this.listGoBack.bind(this);
        this.MoSlide = this.MoSlide.bind(this);
        this.state = {
            showHome: true,
            showList: false,
            showDetail: false,
        };
    }
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../img/home.png')}
                style={[{ tintColor: tintColor }, styles = { width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }]}
            />
        )
    };

    onPressShowList() {
        this.setState({
            showHome: false,
            showList: true,
        });
    }
    onPressShowDetail() {
        this.setState({
            showDetail: true,
            showList: false,
            showHome: false,
        });
    }
    listGoBack() {
        this.setState({
            showHome: true,
        });
        console.log('quay lai');
    }
    MoSlide() {
        this.props.navigation.navigate('DrawerOpen');
    }
    renderInterface() {
        if (this.state.showHome) {
            return (
                <ScrollView>
                    <Collection
                        showList={this.onPressShowList.bind(this)}
                    />
                    <Category />
                    <TopProduct />
                </ScrollView>
            );
        }
        else {
            if (this.state.showList) {
                return (
                    <View>
                        <ListProduct method={this.listGoBack.bind(this)} />
                    </View>
                );
            } else {
                return (
                    <View>
                        <ListProduct method={this.listGoBack.bind(this)} />
                    </View>
                );
            }
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Container method={this.MoSlide} >
                    {
                        this.renderInterface()
                    }
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
