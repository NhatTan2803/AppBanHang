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
import Home from './src/components/Home/Home';
import Container from './src/components/Container';


const MyTabnavigator = TabNavigator({
  Home: {
    screen: Home, navigationOptions: {
      header: null
    }
  },
  Cart: {
    screen: Cart, navigationOptions: {
      header: null
    }
  },
  Search: {
    screen: Search, navigationOptions: {
      header: null
    }
  },
  Contact: {
    screen: Contact, navigationOptions: {
      header: null
    }
  }
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
});
export default Mystack;

