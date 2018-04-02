import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Main from './src/components/Main/Main';
import Authentication from './src/components/Authentication/Authentication';
import OrderHistory from './src/components/OrderHistory/OrderHistory';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';


const Mystack = StackNavigator({
  Home: { screen: Main },
  Order: { screen: OrderHistory },
  Auth: { screen: Authentication },
  Change: { screen: ChangeInfo }
});

export default Mystack;

