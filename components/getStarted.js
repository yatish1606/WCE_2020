import React from 'react';
import {StyleSheet, Text, View,  Dimensions,TextInput , TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Svg,{Image,Circle,ClipPath} from 'react-native-svg';
import {FontAwesome5} from '@expo/vector-icons';
import { SocialIcon} from 'react-native-elements';
import Lottie from 'lottie-react-native';
import { Asset } from 'expo-asset';
import { AppLoading} from 'expo';
import * as Font from 'expo-font';
import OnBoard from './onBoard.js';

import FarmSetUp from './farmSetUp.js'
import Profile from './profile.js'
import Login from './loginPage.js' 

import Animated , {Easing} from 'react-native-reanimated';
import { TapGestureHandler, State} from 'react-native-gesture-handler';
import Carousel , {Pagination}from 'react-native-snap-carousel';


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

export default class GetStarted extends React.Component{
constructor(){
  super()
  this.state={
    isReady:false,
    detected:false,
    fontLoaded:false,
    isOpen:false,
    activeIndex:0,
          carouselItems: [
          {
              title:"Manage Farm Irrigation",
              ref: require('../assets/watercar.json'),
              subtitle:'Easily manage supplying water to your crops from your home'
          },
          {
             title:"View Statistics about your Farm",
              ref: require('../assets/statscar.json'),
              subtitle:'View the sesnor data in graphical forms for easy understanding'
          },
          {
              title:"Location Based Water Irrigation",
              ref: require('../assets/map.json'),
              subtitle:'Predetermined crop models suited to your location'
          },
          {
              title:"Weather based Irrigation System",
              ref: require('../assets/partlycloudy.json'),
              subtitle:'Ensure your crops get the right amount of water based on weather conditions'
          },
          
        ]
  }

  this.buttonOpacity = new Value(1)

  this.onStateChange = event([{
    nativeEvent:({state})=>block([
      cond(eq(state,State.END), set(this.buttonOpacity,runTiming(new Clock(),1,0)))
    ])
  }])


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
      NunitoRegular: require('../assets/fonts/Nunito-Regular.ttf')
    });

    this.setState({ fontLoaded: true, isOpen:false });
  }


async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('../assets/green.jpg'),
    ]);


    await Promise.all([...imageAssets]);
  }

toggleIsOpen(){
  this.setState({isOpen : !this.state.isOpen});
  console.log('click')
}  

 _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'#fff',
              borderRadius: 5,
              height: Dimensions.get('window').height*0.55,
              width:Dimensions.get('window').width - 40,
              alignItems:'center',
              justifyContent:'center'
               }}>
            
            <Lottie
                style={{
                  width: 200,
                  height: 200,
                  backgroundColor: '#fff',
                }}
                source={item.ref}
                autoPlay loop
              />
              <Text style={{fontFamily:'NunitoSemiBold', fontSize:24, color:'green', marginVertical:5, marginHorizontal:15, textAlign:'center'}}>{item.title}</Text>
              <Text style={{marginTop:15,marginBottom:5, fontFamily:'NunitoRegular', color:'#A4A6A4', marginHorizontal:15, fontSize:13, textAlign:'center'}}>{item.subtitle}</Text>
          </View>

        )
    }



  render(){

    const { navigate } = this.props.navigation.navigate;
    const { carouselItems, activeIndex } = this.state;

    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }


    return(
        <View style={{flex:1, backgroundColor:'#242724', justifyContent:'flex-end',}}>
          <Animated.View style={{...StyleSheet.absoluteFill, transform:[{translateY:this.bgY}], }}>
           <Svg height={Dimensions.get('window').height+50} width={Dimensions.get('window').width}>

           <ClipPath id='clip'>
            <Circle
              r={Dimensions.get('window').height+50} cx={Dimensions.get('window').width/2}/>
           </ClipPath>
            <Image
              href={require('../assets/white.jpg')}
              height={Dimensions.get('window').height+50}
              width={Dimensions.get('window').width}
              preserveAspectRatio='xMidYMid slice'
              clipPath='url(#clip)'
              elevation={10}
              />
            </Svg>
          </Animated.View>

          <View style={{height:Dimensions.get('window').height/3,justifyContent:'center', backgroundColor:'#242724'}}>

          
            <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View style={{...styles.loginButton, opacity:this.buttonOpacity, transform:[{translateY:this.buttonY}]}} >
              <TouchableOpacity>
                <Text style={styles.loginButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </Animated.View>
            </TapGestureHandler>
          

          <TapGestureHandler onHandlerStateChange={()=>this.props.navigation.navigate('Login')}>
            <Animated.View style={{...styles.loginButton, opacity:this.buttonOpacity, transform:[{translateY:this.buttonY}]}} >
              <TouchableOpacity>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </Animated.View>
            </TapGestureHandler>
          
          


            
            

            
            




            <Animated.View style={{ zIndex:this.textInputZindex, backgroundColor:'#242724', opacity:this.textInputOpacity,transform:[{translateY:this.textInputY}],height:Dimensions.get('window').height/3, ...StyleSheet.absoluteFill,top:null,justifyContent:'center'}}>


              <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                <Animated.View style={styles.closeButton}>
                  <Animated.Text style={{fontSize:25, color:'#d3d3d3' ,fontFamily:'NunitoSemiBold',textAlign:'center',transform:[{rotate:concat(this.rotateCross,'deg')}]}}>
                    +
                  </Animated.Text>
                </Animated.View>
              </TapGestureHandler>


              <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#242724'}}>
                <Text style={{fontSize:16, color:'#566573', fontFamily:'NunitoSemiBold'}}> Detecting Arduino Module .. </Text>
              </View>

              <View style={{alignItems:'center', justifyContent:'center'}}>
              <Lottie
                style={{
                  width: 140,
                  height: 80,
                  backgroundColor: '#242724',
                }}
                source={require('../assets/loading.json')}
                autoPlay loop
              />
              </View>

              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('OnBoard')}}>
                <Animated.View style={styles.loginButton} on>
                  <Text style={{fontSize:17, color:'#fff', fontFamily:'QuicksandBold'}}>
                    CONNECT
                  </Text>
                </Animated.View>
              </TouchableOpacity>
            </Animated.View>


          </View>

          
          <View style={{justifyContent:'center', alignItems:'center', position:'absolute', height:Dimensions.get('window').height * 0.56, width:Dimensions.get('window').width - 40, marginVertical:20, backgroundColor:'#fff', top:20, left:20, right:20 }}>
            <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } 
                  autoplay={true}
                  loop={true}
                  />

                  <Pagination
                    dotsLength={carouselItems.length}
                    activeDotIndex={activeIndex}
                    containerStyle={{ backgroundColor:'#fff', paddingVertical:10}}
                    
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        
                        
                    }}
                    dotColor='green'
                    inactiveDotColor='#d3d3d3'
                    
                    inactiveDotOpacity={0.5}
                    inactiveDotScale={0.7}
                  />
                  
          
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
    backgroundColor:'#414341',
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
  },
  container: {
    width: 200,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
})
