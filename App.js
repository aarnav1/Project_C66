import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import  TransactionScreen  from './Screens/BookTransactionScreen';
import  SearchScreen  from './Screens/SearchScreen'; 

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  )
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen : TransactionScreen},
  Search : {screen : SearchScreen}
});

const AppContainer = createAppContainer(TabNavigator);
