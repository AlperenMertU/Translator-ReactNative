import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';

import Help from "../screens/Help";
import Home from "../screens/Home";
import Info from "../screens/Info";

const Tab = createBottomTabNavigator();




function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
      }
  }}>
    <Tab.Screen name="Help" component={Help} />
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Info" component={Info} />
  </Tab.Navigator>

  );
}



const styles = StyleSheet.create({
  container:{
    position:"absolute",
    bottom:25,
    left:20,
    right:20,
    elevation:0,
    backgroundColor:"red",
    borderRadius:15,
    height:90,
  },
})

export default Tabs;
