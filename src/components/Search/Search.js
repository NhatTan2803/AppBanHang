import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Container from '../Container';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import SearchView from './SearchView';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.detailGoBack = this.detailGoBack.bind(this);
        this.MoSlide = this.MoSlide.bind(this);
        this.state = {
            showSearch: true,
        };
    }
    static navigationOptions = {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../img/search.png')}
                style={[{ tintColor: tintColor }, styles = { width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }]}
            />
        )
    }
    onPressShowDetail() {
        this.setState({
            showSearch: false,
        });
    }
    detailGoBack() {
        this.setState({
            showSearch: true,
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
                        this.state.showSearch ? (
                            <View>
                                <SearchView showDetail={this.onPressShowDetail.bind(this)} />
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
