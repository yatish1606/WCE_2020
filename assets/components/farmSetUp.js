import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button, StatusBar, Dimensions, ImageBackground, TextInput} from 'react-native';
import InputUserInfo from './inputUserInfo.js';
import MotionSlider from 'react-native-motion-slider';
import {FontAwesome5} from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input'
import BackArrow from './backArrow.js';
import {Font} from 'expo-font';
import { CheckBox } from 'react-native-elements';
import Profile from './profile.js';
import GetStarted from './getStarted.js';


export default class FarmSetUp extends React.Component{

  state = {
    value:null,
    fontLoaded:false,
    checked:false
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

   const { navigate } = this.props.navigation;

   if(!this.state.fontLoaded) {
     return(
       <View></View>
     );
   }

    return (

      <ImageBackground source={require('../assets/farmSetUpBG.png')} style={{marginTop:StatusBar.currentHeight, flex:1,}} >


      <TouchableOpacity><BackArrow/></TouchableOpacity>


        <View style={{alignItems:'center', justifyContent:'center', marginTop:15}}>

        <View style={{width:Dimensions.get('window').width-70, marginVertical:2 }}>
        <Text style={{color:'#fff', fontFamily:'NunitoBold', fontSize:13}}> HEY , USER12345 </Text>
        </View>

        <Text style={{ color:'#fff', marginTop:5, fontFamily:'QuicksandBold', fontSize:25}}>Let's set up your Farm !</Text>


        <View style={{marginTop:20}}>
        <View style={{marginVertical:10}}>
        <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:15, paddingVertical:5, marginVertical:5 }}>

        <Text style={{marginHorizontal:5, fontSize:13, paddingLeft:5, color:'white', fontFamily:'NunitoSemiBold'}}>FARM LENGTH</Text>
        </View>
        <MotionSlider
        height={25}
        width={Dimensions.get('window').width-10}
        min={0}
        max={400}
        value={200}
        decimalPlaces={0}
        //units={'metres'}
        backgroundColor={['#E38E14']}
        fontSize={10}
        fontWeight={'bold'}
        borderRadius={15}
      //  onValueChanged={(value) => console.log(value)}
      //  onPressIn={() => console.log('Pressed in')}
      //  onPressOut={() => console.log('Pressed out')}
      //  onDrag={() => console.log('Dragging')}
        />

        <View style={{marginVertical:10}}>
        <View style={{flexDirection:'row', alignItems:'center',marginHorizontal:15, paddingVertical:5, marginVertical:5 }}>

        <Text style={{marginHorizontal:5, fontSize:13, paddingLeft:5, color:'white', fontFamily:'NunitoSemiBold'}}>FARM WIDTH</Text>
        </View>
        <MotionSlider
        height={25}
        width={Dimensions.get('window').width-10}
        min={0}
        max={400}
        value={200}
        decimalPlaces={0}
        //units={'metres'}
        backgroundColor={['#ABE314']}
        fontSize={10}
        fontWeight={'bold'}
        borderRadius={15}
      //  onValueChanged={(value) => console.log(value)}
      //  onPressIn={() => console.log('Pressed in')}
      //  onPressOut={() => console.log('Pressed out')}
      //  onDrag={() => console.log('Dragging')}
        />
        </View>


        </View>

        <View style={{height:130, backgroundColor:'#fff', marginTop:20, marginHorizontal:20, elevation:5, borderRadius:15, alignItems:'center', justifyContent:'space-around',}}>

        <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', width: Dimensions.get('window').width-80}}>

        <View style={{flexDirection:'row', alignItems:'center',}}>
        <FontAwesome5 name="square" size={20} color={'mediumturquoise'} />
        <Text style={{paddingLeft:5, fontSize:14, fontFamily:'NunitoSemiBold'}}> Number of grids </Text>
        </View>
        <NumericInput
            value={this.state.value}
            onChange={value => this.setState({value})}
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={80}
            totalHeight={30}
            iconSize={15}
            step={1}
            valueType='integer'
            rounded
            textColor='#B0228C'
            iconStyle={{ color: 'white' }}
            rightButtonBackgroundColor='#D94646'
            leftButtonBackgroundColor='#D94646'
            type='plus-minus'
            sepratorWidth={0}
            borderColor='white'
            />


        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff', width: Dimensions.get('window').width-80}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <FontAwesome5 name="tint" size={23} color='mediumturquoise' style={{paddingLeft:4}}  />
          <Text style={{paddingLeft:10, fontSize:14, fontFamily:'NunitoSemiBold'}}>Water Tank Capacity</Text>
          </View>
          <TextInput
          height={30}
          width={80}
          borderRadius={4}
          borderColor='#DBDADA'
          borderWidth={1}
          keyboardType='numeric'
          placeholder='Litres'
          maxLength={10}
          placeholderTextColor='#E4E4E4'
          textAlign='center'
          style={{paddingLeft:3, paddingVertical:3}}
          />
        </View>
        </View>






        </View>

        <TouchableOpacity style={{width:140, height:50, backgroundColor:'#fff', borderRadius:25, marginVertical:20, alignItems:'center', justifyContent:'center', elevation:4, paddingVertical:5,}}  onPress={()=>{this.props.navigation.navigate('InputUserInfo')} } >
          <Text style={{fontSize:18, color:'#2FB12B', fontFamily:'QuicksandBold'}}> Proceed </Text>
        </TouchableOpacity>

        </View>


      </ImageBackground>
    )
  }
}
