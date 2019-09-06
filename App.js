import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/Screens/SearchScreen";
import CardView from './src/Components/CardView'; 


const navigator = createStackNavigator(
    {
        Search: SearchScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Restaurant search'
        }
    }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(navigator);