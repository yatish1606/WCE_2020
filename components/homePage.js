import React from 'react';
import { Text, View, StyleSheet, Dimensions, } from 'react-native';
import { StatusBar } from 'react-native';
import { Switch } from 'react-native-paper';

const width = Dimensions.get('window').width;


export default class HomePage extends React.Component{
  state = {
      isSwitchOn: false,
    };


  render() {

    const { isSwitchOn } = this.state;

    return (
      <View style={styles.level2Container}>


          <View style={styles.weatherBox}>
            <Text style={{color:'black',}}>weather API</Text>
          </View>



          <View style={{alignItems:'flex-start', justifyContent:'flex-start', backgroundColor:'white', width:width-60, marginTop:10, marginHorizontal:15}}>
          <Text style={styles.myFarmText}>My Farm</Text>
          </View>

          <View style={styles.gridBox}>
          </View>

          <View style={styles.mainSwitch}>
            <Text style={{color:'red', fontSize:15, fontWeight:'bold', paddingLeft:10}}>SWITCH OFF</Text>
            <View style={{width:width - 200}}></View>
            <Switch
            value={isSwitchOn}
            onValueChange={() =>{ this.setState({ isSwitchOn: !isSwitchOn }); }}
            color={'green'}
          />
          </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  level2Container:{
    marginTop: StatusBar.currentHeight,
    flex:1,
    backgroundColor:'white'
  },
  weatherBox:{
    flex:3,
    backgroundColor:'#7FEAE3',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:40,
    marginVertical:5,
    marginHorizontal:10,
    elevation:2,
    shadowColor:'black',
    shadowOffset:{x:2,y:2},
    //width:width,
    marginTop:10,
  },
  gridBox:{
    flex:6,
    backgroundColor:'#BBFDB7',
    alignItems:'center',
    justifyContent:'space-between',
    //borderRadius:20,
    marginVertical:5,
    marginHorizontal:10,
    //elevation:2,
    //borderRadius:40,
    //borderWidth:1,
    //borderColor:'#d3d3d3'
  },
  mainSwitch:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'white',
    marginHorizontal:10,
    marginVertical:5,
    borderTopWidth:1,
    borderTopColor:'#d3d3d3',
    flexDirection:'row',
  },
  myFarmText:{
    color:'green',
    fontWeight:'bold',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginVertical:2,
    marginHorizontal:2,
    fontSize:20
  }
})
