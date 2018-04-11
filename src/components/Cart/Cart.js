import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Container from '../Container';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import CartView from './CartView';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.detailGoBack = this.detailGoBack.bind(this);
        this.MoSlide = this.MoSlide.bind(this);
        this.state = {
            showCart: true,
        };
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
            showCart: false,
        });
    }
    detailGoBack() {
        this.setState({
            showCart: true,
        });
    }
    MoSlide() {
        this.props.navigation.navigate('DrawerOpen');
    }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <Container method={this.MoSlide} >
                    {
                        this.state.showCart ? (
                            <View>
                                <CartView showDetail={this.onPressShowDetail.bind(this)} />
                            </View>
                        ) : (
                                <View>
                                    <ProductDetail method={this.detailGoBack.bind(this)} />
                                </View>
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
