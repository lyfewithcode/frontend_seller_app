import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import { Appbar } from 'react-native-paper';

import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';
import SalesScreen from './SalesScreen';
import ExploreScreen from './ExploreScreen';
import SearchScreen from './SearchProductScreen';

const HomeStack = createStackNavigator();
const ProductStack = createStackNavigator();
const SalesStack = createStackNavigator();
const SearchStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#008adc',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductScreen"
        component={ProductStackScreen}
        options={{
          tabBarLabel: 'Product',
          tabBarColor: '#008adc',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-wallet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SalesScreen"
        component={SalesStackScreen}
        options={{
          tabBarLabel: 'Sales',
          tabBarColor: '#008adc',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-wallet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#008adc',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-analytics" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#008adc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Home',
        headerLeft: () => (
            <Appbar.Action icon="menu" size={25} onPress={() => navigation.openDrawer()} />
            ),
        headerRight: () => (
            <Appbar.Action icon="magnify" size={25} backgroundColor="#008adc" onPress={() => navigation.navigate("SearchProductScreen")} />
            )
        }} />
</HomeStack.Navigator>
);

const ProductStackScreen = ({navigation}) => (
<ProductStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#008adc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ProductStack.Screen name="Product" component={ProductScreen} options={{
        headerLeft: () => (
          <Appbar.Action icon="menu" size={25} onPress={() => navigation.openDrawer()} />
          ),
      headerRight: () => (
          <Appbar.Action icon="magnify" size={25} backgroundColor="#008adc" onPress={() => navigation.navigate("SearchProductScreen")} />
          )
        }} />
</ProductStack.Navigator>
);

const SalesStackScreen = ({navigation}) => (
  <SalesStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#008adc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <SalesStack.Screen name="Sales" component={SalesScreen} options={{
          headerLeft: () => (
            <Appbar.Action icon="menu" size={25} onPress={() => navigation.openDrawer()} />
            ),
        headerRight: () => (
            <Appbar.Action icon="magnify" size={25} backgroundColor="#008adc" onPress={() => navigation.navigate("SearchTransactionScreen")} />
            )
          }} />
  </SalesStack.Navigator>
  );