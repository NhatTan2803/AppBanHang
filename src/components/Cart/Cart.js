import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import Container from '../Container'
import Collection from '../Home/Collection/Collection';
import Category from '../Home/Category/Category'
import TopProduct from '../Home/TopProduct/TopProduct';
import Detail from '../Home/Detail';
import CartView from './CartView';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.MoSlide = this.MoSlide.bind(this);
        this.state = {
            showCart: false
        }
    }
    static navigationOptions = {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../img/cart.png')}
                style={[{ tintColor: tintColor }, styles = { width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }]}
            />
        )
    }
    onPressShowDetail() {
        this.setState({
            showCart: true
        })
    }
    detailGoBack() {
        this.props.navigation.navigate("Home")
    }
    MoSlide() {
        this.props.navigation.navigate("DrawerOpen")
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, }}>
                <Container method={this.MoSlide} >
                    {
                        this.state.showCart ? (
                            <View>
                                <Detail />
                                <TouchableOpacity onPress={() => this.setState({ showCart: false })}><Text>Cick me to back</Text></TouchableOpacity>
                            </View>
                        ) : (
                                <ScrollView>
                                    {/* <Collection
                                        showCart={this.onPressShowDetail.bind(this)}
                                    />
                                    <Category />
                                    <TopProduct /> */}
                                    <CartView/>
                                </ScrollView>
                            )
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
