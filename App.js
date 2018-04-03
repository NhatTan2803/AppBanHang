import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Authentication from './src/components/Authentication/Authentication';
import OrderHistory from './src/components/OrderHistory/OrderHistory';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';

import Home from './src/components/Home/Home';
import Cart from './src/components/Cart/Cart';
import Search from './src/components/Search/Search';
import Contact from './src/components/Contact/Contact';
import Container from './src/components/Container';
// const Mystack = StackNavigator({
//   Home: { screen: Main },
//   Order: { screen: OrderHistory },
//   Auth: { screen: Authentication },
//   Change: { screen: ChangeInfo }
// });
const MyTabnavigator = TabNavigator({
  Home: { screen: Home },
  Cart: { screen: Cart },
  Search: { screen: Search },
  Contact: { screen: Contact },
},
  {
    swipeEnabled: true,
    tabBarPosition: 'bottom',

  });

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
    }
  },
  Order: { screen: OrderHistory },
  Auth: { screen: Authentication },
  Change: { screen: ChangeInfo }
});
export default Mystack;

