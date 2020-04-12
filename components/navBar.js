import React , {Component}  from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createSwitchNavigator} from 'react-navigation';
import {FontAwesome5} from '@expo/vector-icons';
import Statistics from './statistics';
import HomePage from './homePage';
import Farm from './farmPage';
import Settings from './settings.js';
import SupplyChain from './supplyChain.js';
import LoginPage from './loginPage.js'

class HomeScreen extends Component {

  async componentDidMount() {
    await Font.loadAsync({
      QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
      NunitoSemiBold: require('../assets/fonts/Nunito-SemiBold.ttf'),
      NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
    });
  }
  render() {
  return (

      <HomePage/>

  );
}};

class SettingsScreen extends Component {

  render() {
  return (
    <Settings/>
  );
}};

class StatisticsScreen extends Component {
  render() {
  return (
   <Statistics/>
  );
}};


class FarmScreen extends Component {
  render() {
  return (
    <Farm/>
  );
}};


class WeatherScreen extends Component {
  render() {
  return (
    <SupplyChain/>
  );
}};





const Tabs =  createMaterialBottomTabNavigator({
  Home:{screen:HomeScreen,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({tintColor})=>(
        <FontAwesome5 name="home" size={20} color={tintColor} />
      )
    }
  },
  Settings:{screen:SettingsScreen,
    navigationOptions:{
      tabBarLabel:'Settings',
      tabBarIcon:({tintColor})=>(
        <FontAwesome5 name="cog" size={20} color={tintColor} />
      )
    }},
  Statistics:{screen:StatisticsScreen,
    navigationOptions:{
      tabBarLabel:'Statistics',
      tabBarIcon:({tintColor})=>(
        <FontAwesome5 name="chart-line" size={20} color={tintColor} />
        )
  }},
  Farm:{screen:FarmScreen,
    navigationOptions:{
      tabBarLabel:'Farm',
      tabBarIcon:({tintColor})=>(
        <FontAwesome5 name="leaf" size={20} color={tintColor} />
        )
  }},
  Weather:{screen:WeatherScreen,
    navigationOptions:{
      tabBarLabel:'Supply Chain',
      tabBarIcon:({tintColor})=>(
        <FontAwesome5 name="briefcase" size={20} color={tintColor} />
      ),

  }},
}, {
  initialRouteName:'Home',
  backBehaviour:'initialRoute',
  labeled:true,
  activeColor:'#15AB2B',
  inactiveColor:'#BFC1C2',
  activeTintColor:'white',
  order:['Settings', 'Statistics', 'Home', 'Weather', 'Farm'],
  shifting:true,
  barStyle:{
    backgroundColor:"white",
    borderTopColor:'#ffffff',
    borderTopWidth:2,
    elevation:15,
    shadowOffset:{x:5,y:5},
    shadowColor:'black',
    shadowWidth:5,
  },
  screenOptions:{
    activeTintColor:'orange',
    showLabel:false
  }
})




export default createSwitchNavigator({
  Tabs:{ screen: Tabs},
  Login:{screen: LoginPage},
}, {
  initialRouteName:'Login'
})




const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
    zIndex:5,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    zIndex:10,
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
