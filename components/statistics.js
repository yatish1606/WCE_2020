import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StatusBar} from 'react-native';


export default class Statistics extends React.Component{
  render(){
    return(
      <View style={{marginTop:StatusBar.currentHeight, backgroundColor:'red', flex:1}}>
        <Text>Statistics Screen</Text>
      </View>
    )
  }
}
 
