import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/Homescreen";
import Book from "../screens/Book";
import { create } from "react-test-renderer";

const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
     <Navigator initialRouteName="HomeScreen">
        <Screen name="HomeScreen" component={HomeScreen} />
        <Screen name="Book" component={Book} />
        </Navigator>
    </NavigationContainer>

);

export default AppNavigator;