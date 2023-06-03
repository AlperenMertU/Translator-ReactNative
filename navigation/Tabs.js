import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Text, Image, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';

import Help from "../screens/Help";
import Home from "../screens/Home";
import Info from "../screens/Info";

const Tab = createBottomTabNavigator();


function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 70,
          ...styles.shadow
        },
      }}
    >

      <Tab.Screen name="help" component={Help} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#6590e0' : 'gray',
                }}
              />
              <Text style={{ color: focused ? '#6590e0' : 'white' }}>Help</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center", top: 10}}>
            <Image source={require("../assets/gtrkTranslate.png")}
              resizeMode="contain"
              style={{
                width: 45,
                height: 30,
              }}
            />
            <Text style={{ color: focused ? "#6590e0" : "white"}}>Çevir</Text>
          </View>
        ),
      }} />

      <Tab.Screen name="Info" component={Info} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center", top: 10 }}>
            <Image source={require("../assets/help.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#6590e0" : "gray"
              }}
            />
            <Text style={{ color: focused ? "#6590e0" : "white" }}>BİLGİ</Text>
          </View>
        ),
      }} />

    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
})

export default Tabs;
