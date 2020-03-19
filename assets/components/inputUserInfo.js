import React from 'react';
import {View, StyleSheet, Text, StatusBar, Dimensions} from 'react-native';
import BackArrow from './backArrow.js';
import {Font} from 'expo-font';

export default class InputUserInfo extends React.Component{


  state = {
    fontLoaded:false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
      NunitoSemiBold: require('../assets/fonts/Nunito-SemiBold.ttf'),
      NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }



  render(){
    return (
      <View style={{flex:1, marginTop:StatusBar.currentHeight}}>
      <BackArrow/>

      <View style={{alignItems:'center'}}>

      <View style={{height:150, backgroundColor:'red', width:Dimensions.get('window').width - 40, flexDirection:'row'}}>
        <View style={{flex:5, backgroundColor:'#fff'}}>
        </View>
        <View style={{flex:3}}>
        </View>
      </View>
      </View>

      </View>
    )
  }
}
