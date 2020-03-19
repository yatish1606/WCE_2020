import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import NavBar from './components/navBar.js';
import Wizard from './components/wizard.js'


export default createAppContainer( createSwitchNavigator({
  Home:{ screen: NavBar},
  Wizard:{screen:Wizard},
}, {
  initialRouteName:'Wizard'
}))
