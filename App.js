import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
//Khai bao authentication
import Authentication from './src/components/Authentication/Authentication';
import OrderHistory from './src/components/OrderHistory/OrderHistory';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';
// khai bao cac tab
import Cart from './src/components/Cart/Cart';
import Search from './src/components/Search/Search';
import Contact from './src/components/Contact/Contact';
import SignIn from './src/components/SignIn/SignIn';
import SignUp from './src/components/SignUp/SignUp';
import SignOut from './src/components/SignOut/SignOut';
import Home from './src/components/Home/Home';
import ListProduct from './src/components/ListProduct/ListProduct';
// import ProductDetail from './src/components/ProductDetail/ProductDetail';

const MyTabnavigator = TabNavigator({
  Home: { screen: Home },
  Cart: { screen: Cart },
  Search: { screen: Search },
  Contact: { screen: Contact }
},
  {
    swipeEnabled: true,
    tabBarPosition: 'bottom',

  }
);
const MySlideMenu = DrawerNavigator({
  HomeSlide: { screen: MyTabnavigator },
},
  {
    contentComponent: props => <Authentication {...props} />
  }
);
const Mystack = StackNavigator({
  Home: {
    screen: MySlideMenu,
    navigationOptions: {
      header: null
    },
  },
  Order: { screen: OrderHistory },
  Change: { screen: ChangeInfo },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
});
export default Mystack;

