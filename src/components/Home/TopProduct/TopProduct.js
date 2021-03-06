import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, TouchableOpacity, ListView } from 'react-native';
import ProductDetail from '../../ProductDetail/ProductDetail';
import sp1 from '../../../img/temp/sp1.jpeg';
import sp2 from '../../../img/temp/sp2.jpeg';
import sp3 from '../../../img/temp/sp3.jpeg';
import sp4 from '../../../img/temp/sp4.jpeg';

const url = 'http://localhost/api/images/product/';
export default class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topproduct: [],
            // dataSource: ds.cloneWithRows(topproduct),
        };
    }
    componentWillMount() {
        fetch('http://localhost/api/')
            .then(res => res.json())
            .then(resJSON => {
                const { product } = resJSON;
                this.setState({
                    topproduct: product,
                });
            });
    }
    render() {
        const { topproduct } = this.state;
        const {
            container, titleContainer, title,
            body, productContainer, productImage,
            produceName, producePrice
        } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <ListView
                    contentContainerStyle={body}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topproduct)}
                    renderRow={product => (
                        <TouchableOpacity style={productContainer}>
                            <Image source={{ uri: `${url}${product.images[1]}` }} style={productImage} />
                            <Text style={produceName}>{product.name.toUpperCase()}</Text>
                            <Text style={producePrice}>$</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: produtWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: produtWidth,
        height: productImageHeight
    },
    produceName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    producePrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});

