import React , {Component}  from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {FontAwesome5} from '@expo/vector-icons';
import Login from './loginScreen';
import HomePage from './homePage';
import Farm from './farmPage';

class HomeScreen extends Component {
  render() {
  return (

      <HomePage/>

  );
}};

class SettingsScreen extends Component {
  render() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}};

class StatisticsScreen extends Component {
  render() {
  return (
    <Login/>
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
    <View style={styles.container}>
      <Text>weather</Text>
    </View>
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
        <FontAwesome5 name="chart-bar" size={20} color={tintColor} />
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
      tabBarLabel:'Weather',
      tabBarIcon:({tintColor})=>(
        <FontAwesome5 name="sun" size={20} color={tintColor} />
      ),
  }},
}, {
  initialRouteName:'Home',
  labeled:true,
  activeColor:'#15AB2B',
  inactiveColor:'#759179',
  activeTintColor:'white',
  order:['Settings', 'Statistics', 'Home', 'Weather', 'Farm'],
  shifting:true,
  barStyle:{
    backgroundColor:"white",
    borderTopColor:'#ffffff',
    borderTopWidth:2,
    elevation:15,
    shadowOffset:{x:10,y:10},
    shadowColor:'black',
    shadowWidth:5,
  },
  screenOptions:{
    activeTintColor:'orange',
    showLabel:false
  }
})

export default Tabs;

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
