import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import GetStarted from './getStarted.js';
import FarmSetUp from './farmSetUp.js'
import InputUserInfo from './inputUserInfo.js';

const MainNavigator = createStackNavigator({
  GetStarted: {screen: GetStarted, navigationOptions: { headerShown: false } },
  FarmSetUp: {screen: FarmSetUp, navigationOptions: { headerShown: false }},
  InputUserInfo: {screen: InputUserInfo, navigationOptions: { headerShown: false }},
},
{
  initialRouteName : 'GetStarted',
}
);

export default MainNavigator;
