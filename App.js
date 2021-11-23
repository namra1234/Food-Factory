import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import SearchBar from "./src/components/SearchBar";
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const navigator = createStackNavigator(
  {
    search: SearchScreen,
    searchbar:SearchBar
  },
  {
    initialRouteName: "search",
   defaultNavigationOption:{
     title:"Business App"
   }
  }
);

export default createAppContainer(navigator);
