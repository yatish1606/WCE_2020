import React from 'react';
import {StyleSheet, Text, View,  Dimensions,TextInput , TouchableOpacity } from 'react-native';
import Svg,{Image,Circle,ClipPath} from 'react-native-svg';
import {FontAwesome5} from '@expo/vector-icons';
import { SocialIcon} from 'react-native-elements';
import Lottie from 'lottie-react-native';
import { Asset } from 'expo-asset';
import { AppLoading} from 'expo';
import {Font} from 'expo-font';

import FarmSetUp from './farmSetUp.js'
import Profile from './profile.js'

import Animated , {Easing} from 'react-native-reanimated';
import { TapGestureHandler, State} from 'react-native-gesture-handler';


function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const {Value,event,block,cond,eq,set,Clock,startClock,stopClock,debug,timing,clockRunning,interpolate,Extrapolate,concat} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 800,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}

export default class Login extends React.Component{
constructor(){
  super()
  this.state={
    isReady:false,
    detected:false,
    fontLoaded:false,
  }

  this.buttonOpacity = new Value(1)
  this.onStateChange = event([{
    nativeEvent:({state})=>block([
      cond(eq(state,State.END), set(this.buttonOpacity,runTiming(new Clock(),1,0)))
    ])
  }]);


  this.onCloseState = event([{
    nativeEvent:({state}) =>block([
      cond(eq(state,State.END), set(this.buttonOpacity,runTiming(new Clock(),0,1)))
    ])
  }]);


  this.buttonY = interpolate(this.buttonOpacity, {
    inputRange:[0,1],
    outputRange:[100,0],
    extrapolate:Extrapolate.CLAMP
  });

  this.bgY = interpolate(this.buttonOpacity, {
    inputRange:[0,1],
    outputRange:[-Dimensions.get('window').height/3 -50 ,0],
    extrapolate:Extrapolate.CLAMP
  });

  this.textInputZindex =  interpolate(this.buttonOpacity, {
    inputRange:[0,1],
    outputRange:[1,-1],
    extrapolate:Extrapolate.CLAMP
  });


  this.textInputY =  interpolate(this.buttonOpacity, {
    inputRange:[0,1],
    outputRange:[0,100],
    extrapolate:Extrapolate.CLAMP
  });

  this.textInputOpacity =  interpolate(this.buttonOpacity, {
    inputRange:[0,1],
    outputRange:[1,0],
    extrapolate:Extrapolate.CLAMP
  });

  this.rotateCross = interpolate(this.buttonOpacity, {
    inputRange:[0,1],
    outputRange:[45,90],
    extrapolate:Extrapolate.CLAMP
  });

}

  async componentDidMount() {
    await Font.loadAsync({
      QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
      NunitoSemiBold: require('../assets/fonts/Nunito-SemiBold.ttf'),
      NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }


async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('../assets/green.jpg'),
    ]);


    await Promise.all([...imageAssets]);
  }



  render(){

    const { navigate } = this.props.navigation;

    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }


    return(
        <View style={{flex:1, backgroundColor:'#fff', justifyContent:'flex-end',}}>
          <Animated.View style={{...StyleSheet.absoluteFill, transform:[{translateY:this.bgY}],}}>
           <Svg height={Dimensions.get('window').height+50} width={Dimensions.get('window').width}>

           <ClipPath id='clip'>
            <Circle
              r={Dimensions.get('window').height+50} cx={Dimensions.get('window').width/2}/>
           </ClipPath>
            <Image
              href={require('../assets/green.jpg')}
              height={Dimensions.get('window').height+50}
              width={Dimensions.get('window').width}
              preserveAspectRatio='xMidYMid slice'
              clipPath='url(#clip)'
              elevation={10}
              />
            </Svg>
          </Animated.View>

          <View style={{height:Dimensions.get('window').height/3,justifyContent:'center', backgroundColor:'#fff'}}>

            <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View style={{...styles.loginButton, opacity:this.buttonOpacity, transform:[{translateY:this.buttonY}]}}>
              <Text style={styles.loginButtonText}>GET STARTED</Text>
            </Animated.View>
            </TapGestureHandler>




            <Animated.View style={{ zIndex:this.textInputZindex, backgroundColor:'#fff', opacity:this.textInputOpacity,transform:[{translateY:this.textInputY}],height:Dimensions.get('window').height/3, ...StyleSheet.absoluteFill,top:null,justifyContent:'center'}}>


              <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                <Animated.View style={styles.closeButton}>
                  <Animated.Text style={{fontSize:25, transform:[{rotate:concat(this.rotateCross,'deg')}]}}>
                    +
                  </Animated.Text>
                </Animated.View>
              </TapGestureHandler>


              <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
                <Text style={{fontSize:16, color:'#566573', fontFamily:'NunitoSemiBold'}}> Detecting Arduino Module .. </Text>
              </View>

              <View style={{alignItems:'center', justifyContent:'center'}}>
              <Lottie
                style={{
                  width: 140,
                  height: 80,
                  backgroundColor: '#fff',
                }}
                source={require('../assets/loading.json')}
                autoPlay loop
              />
              </View>

              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('FarmSetUp')}}>
                <Animated.View style={styles.loginButton} on>
                  <Text style={{fontSize:17, color:'#fff', fontFamily:'QuicksandBold'}}>
                    CONNECT
                  </Text>
                </Animated.View>
              </TouchableOpacity>
            </Animated.View>


          </View>

          <View style={{justifyContent:'center', alignItems:'center', position:'absolute', top:100, marginHorizontal:Dimensions.get('window').width/2 }}>
          <Lottie
            style={{
              width: 300,
              height: 600,
              //backgroundColor: '#000000',
              position:'absolute',
              justifyContent:'center'
            }}
            source={require('../assets/tractor.json')}
            autoPlay loop
          />
          </View>

          <View style={{position:'absolute', justifyContent:'center', alignItems:'center', top:200, width:Dimensions.get('window').width}}>
          <View>
            <Text style={{color:'#fff', fontSize:20, fontFamily:'NunitoSemiBold'}}>Farming just became easier!</Text>
          </View>
          </View>




        </View>
    )
  }
}


const styles = StyleSheet.create({

  loginButton:{
    backgroundColor:'#2ECC71',
    height:50,
    marginHorizontal:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:35,
    marginVertical:5,
    shadowOffset:{width:2,height:2},
    shadowColor:'black',
    shadowOpacity:0.2,
    elevation:2,
  },
  loginButtonText:{
    fontSize:17,
    fontFamily:'QuicksandBold',
    color:'#fff'
  },
  closeButton:{
    height:40,
    width:40,
    backgroundColor:'white',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:-20,
    left:Dimensions.get('window').width/2 -20,
    shadowOffset:{width:2,height:2},
    shadowColor:'black',
    shadowOpacity:0.2,
    elevation:3,
  },
  textInput:{
    height:40,
    borderRadius:25,
    borderWidth:0.5,
    marginHorizontal:20,
    paddingLeft:15,
    marginVertical:5,
    borderColor:'#2F9C86'
  }
})
