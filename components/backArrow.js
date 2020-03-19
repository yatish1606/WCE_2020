import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default class BackArrow extends React.Component {
  render() {
    return (
      <View style={{flexDirection:'row', justifyContent:'flex-start', marginHorizontal:15, marginTop:15}}>
      <TouchableOpacity style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center',}}  >
      <FontAwesome5 name="chevron-left" size={30} color={'#d3d3d3'} />
      </TouchableOpacity>
      </View>
    )
  }
}
