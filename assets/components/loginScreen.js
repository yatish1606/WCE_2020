import React from 'react';
import {StyleSheet, Text, View,  Dimensions,TextInput , } from 'react-native';
import Svg,{Image,Circle,ClipPath} from 'react-native-svg';
import {FontAwesome5} from '@expo/vector-icons';
import { SocialIcon} from 'react-native-elements';

import { Asset } from 'expo-asset';
import { AppLoading} from 'expo';

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
    duration: 1000,
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
    isReady:false
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


async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('../assets/crop.jpg'),
    ]);


    await Promise.all([...imageAssets]);
  }



  render(){

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
        <View style={{flex:1, backgroundColor:'white',justifyContent:'flex-end', }}>
          <Animated.View style={{...StyleSheet.absoluteFill, transform:[{translateY:this.bgY}], alignItems:'center'}}>
           <Svg height={Dimensions.get('window').height+50} width={Dimensions.get('window').width}>

           <ClipPath id='clip'>
            <Circle
              r={Dimensions.get('window').height} cx={Dimensions.get('window').width/2}/>
           </ClipPath>
            <Image
              href={require('../assets/crop.jpg')}
              height={Dimensions.get('window').height+50}
              width={Dimensions.get('window').width}
              preserveAspectRatio='xMidYMid slice'
              clipPath='url(#clip)'
              />
            </Svg>
          </Animated.View>

          <View style={{height:Dimensions.get('window').height/3,justifyContent:'center'}}>

            <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View style={{...styles.loginButton, opacity:this.buttonOpacity, transform:[{translateY:this.buttonY}]}}>
              <Text style={styles.loginButtonText}>LET'S GET STARTED</Text>
            </Animated.View>
            </TapGestureHandler>



            <Animated.View style={{ zIndex:this.textInputZindex, opacity:this.textInputOpacity,transform:[{translateY:this.textInputY}],height:Dimensions.get('window').height/3, ...StyleSheet.absoluteFill,top:null,justifyContent:'center'}}>


              <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                <Animated.View style={styles.closeButton}>
                  <Animated.Text style={{fontSize:25, transform:[{rotate:concat(this.rotateCross,'deg')}]}}>
                    +
                  </Animated.Text>
                </Animated.View>
              </TapGestureHandler>





                <Animated.View style={styles.loginButton}>
                  <Text style={{fontSize:17,fontWeight:'bold', color:'#2F9C86'}}>
                    SIGN IN
                  </Text>
                </Animated.View>

            </Animated.View>

          </View>


        </View>
    )
  }
}


const styles = StyleSheet.create({

  loginButton:{
    backgroundColor:'white',
    height:65,
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
    fontWeight:'bold',
    color:'green'
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




// <TextInput
//   placeholder="Email ID"
//   style={styles.textInput}
//   placeholderTextColor='#BFC3C2'
//   />
//
//  <TextInput
//   placeholder="Password"
//   style={styles.textInput}
//   placeholderTextColor='#BFC3C2'
//   />
