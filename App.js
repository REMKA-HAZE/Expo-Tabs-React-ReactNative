import React, { useState, useEffect } from 'react';
import {   } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Counter from './Pages/Counter';
import Agregar from './Pages/Agregar';
import Lista from './Pages/Lista';


const Tab = createBottomTabNavigator();

const MyTabs=()=> {
    const DATA = [];
    const [initData, setData] = useState(DATA);

    useEffect(() => {  }, [initData]);

    return (
      <Tab.Navigator
        initialRouteName="Agregar producto"

        screenOptions={{
            
            tabBarActiveTintColor: '#daa520',
            }}>
      <Tab.Screen
        name="Counter"
        component={Counter}
        options={{
          headerTintColor:'#daa520',
          headerStyle: { backgroundColor: 'black' },
          tabBarStyle: { backgroundColor: 'black' },
          tabBarLabel: 'Counter',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Agregar producto"
        color="red"
        component={Agregar} 
        initialParams={{setData}} 
        options={{
          headerStyle: { backgroundColor: 'white' },
          headerTintColor:'#daa520',
          tabBarLabel: 'Agregar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
        }}        
      />
      <Tab.Screen
        name="Lista"
        options={{
          tabBarStyle: { backgroundColor: 'black' },
          headerStyle: { backgroundColor: 'black' },
          headerTintColor:'#daa520',
          tabBarLabel: 'Lista',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
          ),
        }}
      >{(props)=>
      <Lista initData={initData} {...props} />}</Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



