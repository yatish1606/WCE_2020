import React from 'react';
import Lottie from 'lottie-react-native';
import { View, StyleSheet , StatusBar, Dimensions, TouchableOpacity, Text, ScrollView} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';



export class CardComponent extends React.Component{

  state={
    fontLoaded:false,

  }


  async componentDidMount() {
    await Font.loadAsync({
      QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
      NunitoSemiBold: require('../assets/fonts/Nunito-SemiBold.ttf'),
      NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
    });

    this.setState({ fontLoaded: true })

}



  render(){



    return(



      <View style={{width:Dimensions.get('window').width - 40, height:170, backgroundColor:'#fff', marginVertical:10, borderRadius:5, elevation:3,}}>




      <View style={{flex:2, backgroundColor:'#fff', justifyContent:'center'}}>

      <Text style={{fontFamily:'NunitoSemiBold', fontSize:18, color:'#878787', marginHorizontal:20, marginVertical:5, marginTop:5}}>Arduino Sensor ID : 4563</Text>
      </View>

      <View style={{flex:5, backgroundColor:'#fff', marginHorizontal:10, marginBottom:10, marginTop:5 }}>

        <View style={{flexDirection:'row', flex:1, backgroundColor:'#fff'}}>


            <View style={{flex:1, backgroundColor:'#FEEAE3', marginVertical:4, marginHorizontal:4, borderRadius:4, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
              <FontAwesome5 name="thermometer-empty" size={25} color='#FC2246' style={{marginVertical:5, marginHorizontal:5}}/>
              <Text style={{fontSize:15, fontFamily:'NunitoBold', color:'#fc2246', marginHorizontal:3, marginVertical:3}}>25 °C</Text>
            </View>

            <View style={{flex:1, backgroundColor:'#FEFAC0', marginVertical:4, marginHorizontal:4, borderRadius:4,justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
              <FontAwesome5 name="lightbulb" size={23} color='#E1A615' style={{marginVertical:5, marginHorizontal:5}}/>
              <Text style={{fontSize:15, fontFamily:'NunitoBold', color:'#E1A615', marginHorizontal:3, marginVertical:3}}>50 W/s</Text>
            </View>

        </View>

        <View style={{flexDirection:'row', flex:1, backgroundColor:'#fff'}}>

        <View style={{flex:1, backgroundColor:'#B6DEFC', marginVertical:4, marginHorizontal:4, borderRadius:4,justifyContent:'center', alignItems:'center', flexDirection:'row'}}>

        <FontAwesome5 name="tint" size={23} color={'#2295FC'} style={{marginVertical:5, marginHorizontal:5}}/>
        <Text style={{fontSize:15, fontFamily:'NunitoBold', color:'#2295FC', marginHorizontal:3, marginVertical:3}}>25 %</Text>
        </View>

        <View style={{flex:1, backgroundColor:'#D3FBCD', marginVertical:4, marginHorizontal:4, borderRadius:4,justifyContent:'center', alignItems:'center', flexDirection:'row'}}>

          <FontAwesome5 name="plug" size={22} color={'#16A40D'} style={{marginVertical:5, marginHorizontal:5}}/>
          <Text style={{fontSize:15, fontFamily:'NunitoBold', color:'#16A40D', marginHorizontal:3, marginVertical:3}}>125 W</Text>
        </View>

        </View>

      </View>

      </View>
    );


}

}

export default class MyFarm extends React.Component {


  UNSAFE_ComponentWillMount() {
    this.animation.reset();
  }

  state={
    fontLoaded:false,
    tempVisible:false,
    lightVisible:false,
    moistureVisible:false,
    energyVisible:false,
  }


  async _loadAssetsAsync() {
    await Font.loadAsync({
      QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
      NunitoSemiBold: require('../assets/fonts/Nunito-SemiBold.ttf'),
      NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
    });

    this.setState({ fontLoaded: true })

}



    changeTemp(){
      this.setState({tempVisible: !this.state.tempVisible, lightVisible:false, moistureVisible:false, energyVisible:false, })
    }

    changeLight(){
      this.setState({lightVisible: !this.state.lightVisible,   moistureVisible:false, energyVisible:false, tempVisible:false})
    }

    changeMoisture(){
      this.setState({moistureVisible: !this.state.moistureVisible,  lightVisible:false,  energyVisible:false, tempVisible:false})
    }

    changeEnergy(){
      this.setState({energyVisible: !this.state.energyVisible,  lightVisible:false, moistureVisible:false, tempVisible:false})
    }



  render() {



    if(this.state.fontLoaded) {
      return(
        <View style={{flex:1, marginTop:StatusBar.currentHeight, backgroundColor:'#fff'}}>







              <View style={{position:'absolute', width:50, height:205, borderRadius:10, backgroundColor:'white', right:5, top:180, zIndex:10, elevation:20, alignItems:'center', justifyContent:'space-around', paddingVertical:5}}>

              <TouchableOpacity onPress={()=>{this.changeTemp()}}>
              <FontAwesome5 name="thermometer-empty" size={25} color={'#FC2246'} style={{marginVertical:5, marginHorizontal:5}}/>
              </TouchableOpacity >
                <TouchableOpacity onPress={()=>{this.changeLight()}}>
              <FontAwesome5 name="lightbulb" size={25} color={'#E1A615'} style={{marginVertical:5, marginHorizontal:5}} />
              </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.changeMoisture()}}>
              <FontAwesome5 name="tint" size={25} color={'#2295FC'} style={{marginVertical:5, marginHorizontal:5}}/>
              </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.changeEnergy()}}>
              <FontAwesome5 name="plug" size={25} color={'#16A40D'} style={{marginVertical:5, marginHorizontal:5}}/>
              </TouchableOpacity>

              </View>


              {this.state.tempVisible ?
              <View style={{position:'absolute', width:Dimensions.get('window').width - 100 , height:100, borderRadius:10, backgroundColor:'#ffffff', right:60, top:180, zIndex:10, alignItems:'center',  paddingVertical:5}}>

              <View style={{flexDirection:'row', alignItems:'center'}}>
              <FontAwesome5 name="thermometer-empty" size={20} color={'#FC2246'} style={{marginVertical:5, marginHorizontal:5}}/>
              <Text style={{fontSize:20, fontFamily:'NunitoBold', color:'#fc2246', marginHorizontal:3}}>Temperature</Text>
              </View>

              <Text style={{fontSize:12, fontFamily:'NunitoSemiBold', color:'#B8B8B8', marginHorizontal:10, textAlign:'center', marginVertical:10}}>Specifies the current temperature in degrees Celcius recorded by the sensor in your farm</Text>


              </View> : <View></View>}

              {this.state.lightVisible ?
              <View style={{position:'absolute', width:Dimensions.get('window').width - 100 , height:100, borderRadius:10, backgroundColor:'#ffffff', right:60, top:215, zIndex:10, alignItems:'center',  paddingVertical:5}}>

              <View style={{flexDirection:'row', alignItems:'center'}}>
              <FontAwesome5 name="lightbulb" size={20} color={'#E1A615'} style={{marginVertical:5, marginHorizontal:5}} />
              <Text style={{fontSize:20, fontFamily:'NunitoBold', color:'#E1A615', marginHorizontal:3}}>Light Energy</Text>
              </View>

              <Text style={{fontSize:12, fontFamily:'NunitoSemiBold', color:'#B8B8B8', marginHorizontal:10, textAlign:'center', marginVertical:10}}>Specifies the current light energy in Watts/seconds recorded by the sensor in your farm</Text>


              </View> : <View></View>}


              {this.state.moistureVisible ?
              <View style={{position:'absolute', width:Dimensions.get('window').width - 100 , height:100, borderRadius:10, backgroundColor:'#ffffff', right:60, top:250, zIndex:10, alignItems:'center',  paddingVertical:5}}>

              <View style={{flexDirection:'row', alignItems:'center'}}>
              <FontAwesome5 name="tint" size={20} color={'#2295FC'} style={{marginVertical:5, marginHorizontal:5}}/>
              <Text style={{fontSize:20, fontFamily:'NunitoBold', color:'#2295FC', marginHorizontal:3}}>Soil Moisture</Text>
              </View>

              <Text style={{fontSize:12, fontFamily:'NunitoSemiBold', color:'#B8B8B8', marginHorizontal:10, textAlign:'center', marginVertical:10}}>Specifies the current soil moisture in percent recorded by the sensor in your farm</Text>


              </View>  : <View></View>}


              {this.state.energyVisible ?
              <View style={{position:'absolute', width:Dimensions.get('window').width - 100 , height:100, borderRadius:10, backgroundColor:'#ffffff', right:60, top:285, zIndex:10, alignItems:'center',  paddingVertical:5}}>

              <View style={{flexDirection:'row', alignItems:'center'}}>
              <FontAwesome5 name="plug" size={20} color={'#16A40D'} style={{marginVertical:5, marginHorizontal:5}}/>
              <Text style={{fontSize:20, fontFamily:'NunitoBold', color:'#16A40D', marginHorizontal:3}}>Energy Collected</Text>
              </View>

              <Text style={{fontSize:12, fontFamily:'NunitoSemiBold', color:'#B8B8B8', marginHorizontal:10, textAlign:'center', marginVertical:10}}>Specifies the current energy in Watts collected by the solar panel of the module</Text>


              </View>  : <View></View>}


              <View style={{flexDirection:'row', justifyContent:'flex-start', marginHorizontal:15, marginTop:15, position:'absolute',  zIndex:15}}>
              <TouchableOpacity style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center',}}  >
              <FontAwesome5 name="chevron-left" size={30} color={'#d3d3d3'} />
              </TouchableOpacity>
              </View>
















        <View style={{backgroundColor:'#fff', marginHorizontal:15, flex:1}}>





          <ScrollView style={{ backgroundColor:'#fff', width:Dimensions.get('window').width -  30,}} contentContainerStyle={{alignItems:'center', justifyContent:'center', paddingTop:60,paddingBottom:10}} showsVerticalScrollIndicator={false}>





          <Text style={{fontSize:30, fontFamily:'QuicksandBold', color:'green', marginHorizontal:10, marginVertical:5}}>My Farm</Text>

          <View style={{height:Dimensions.get('window').width - 40, width:Dimensions.get('window').width - 40, borderRadius:8, backgroundColor:'#E2FCDE',  marginVertical:5,}}>


          <View style={{width:2,height:Dimensions.get('window').width - 40, borderRadius:1, backgroundColor:'#fff', alignSelf:'center'}}>
          </View>

          <View style={{height:2,width:Dimensions.get('window').width - 40, borderRadius:1, backgroundColor:'#fff', alignSelf:'center', position:'absolute', top: (Dimensions.get('window').width - 40)/2 }}>
          </View>


          <TouchableOpacity style={{position:'absolute', height:30, width:30, borderRadius:15, top:(Dimensions.get('window').width - 40)/4.8 ,left:(Dimensions.get('window').width - 40)/4.8 }}>
          <Lottie
            style={{
              width: 30,
              height: 30,
              backgroundColor: '#00000000',


            }}
            source={require('../assets/sensor.json')}
            autoPlay loop duration={2000}
          />
          </TouchableOpacity>


          <TouchableOpacity style={{position:'absolute', height:30, width:30, borderRadius:15, top:(Dimensions.get('window').width - 40)/4.8 ,right:(Dimensions.get('window').width - 40)/4.8 }}>
          <Lottie
            style={{
              width: 30,
              height: 30,
              backgroundColor: '#00000000',


            }}
            source={require('../assets/sensor.json')}
            autoPlay loop duration={2000}
          />
          </TouchableOpacity>


          <TouchableOpacity style={{position:'absolute', height:30, width:30, borderRadius:15, bottom:(Dimensions.get('window').width - 40)/4.8 ,left:(Dimensions.get('window').width - 40)/4.8 }}>
          <Lottie
            style={{
              width: 30,
              height: 30,
              backgroundColor: '#00000000',


            }}
            source={require('../assets/sensor.json')}
            autoPlay loop duration={2000}
          />
          </TouchableOpacity>


          <TouchableOpacity style={{position:'absolute', height:30, width:30, borderRadius:15, bottom:(Dimensions.get('window').width - 40)/4.8 ,right:(Dimensions.get('window').width - 40)/4.8 }}>
          <Lottie
            style={{
              width: 30,
              height: 30,
              backgroundColor: '#00000000',


            }}
            source={require('../assets/sensor.json')}
            autoPlay loop duration={2000}
          />
          </TouchableOpacity>






          </View>


          <Text style={{fontSize:22, fontFamily:'QuicksandBold', color:'green', marginHorizontal:10, marginVertical:10}}>Sensor Data</Text>


          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>


          <Lottie
            style={{
              width: 200,
              height: 200,

            }}
            source={require('../assets/nodata.json')}
            autoPlay loop duration={2000}
          />

          <Text style={{fontSize:21, fontFamily:'NunitoBold', color:'#d4d4d4', marginHorizontal:5, alignSelf:'center'}}>That's all!</Text>




          </ScrollView>



        </View>






        </View>

      )
    }
    else {
      return(
        <View>
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ fontLoaded: true }) }
          onError={console.warn}
        />

        <Lottie
          style={{
            width: 200,
            height: 200,

          }}
          source={require('../assets/loading.json')}
          autoPlay loop duration={2000}
        />
        </View>

      );
    }


}
}

const styles = StyleSheet.create({

  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    //height:50,
    //position:'absolute'
  },

});



// } else {
//   return (   <AppLoading
//         startAsync={this.componentDidMount}
//         onFinish={() => this.setState({ fontLoaded: true })}
//         onError={console.warn}
//     />  )
//
// }


//
// <View>
// <Lottie
//   style={{
//     width: 200,
//     height: 200,
//
//   }}
//   source={require('../assets/loading.json')}
//   autoPlay loop duration={2000}
// />
// </View>
//
