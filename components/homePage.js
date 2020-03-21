import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import { Switch } from 'react-native-paper';
import {FontAwesome5} from '@expo/vector-icons';
import * as Font from 'expo-font';
import { API_KEY } from '../assets/utils/weatherAPIKey';
import Lottie from 'lottie-react-native';

const width = Dimensions.get('window').width;


export default class HomePage extends React.Component{

  state = {
      isSwitchOn: false,
      fontLoaded:false,
      minTemp:0,
      maxTemp:0,
      description:'',
      sunrise:'',
      sunset:'',
      trial:'hey',
    };


    async componentDidMount() {
      await Font.loadAsync({
        QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
        NunitoSemiBold: require('../assets/fonts/Nunito-SemiBold.ttf'),
        NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
      });

      this.setState({ fontLoaded: true })


      navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting Weather data'
        });
      }
    );

  }



    fetchWeather(lat = 25, lon = 25) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          minTemp: json.main.temp_min,
          maxTemp: json.main.temp_max,
          description: json.weather.main,
          sunrise: json.sys.sunrise,
          sunset: json.sys.sunset,
        //  isLoading: false
        });

      });
  }






  render() {

    Number.prototype.padLeft = function (width, padChar) {
    // Returns a padded string
    padChar = padChar || ' ';
    var value = this.toString();
    while (value.length < width) {
        value = padChar + value;
    }
    return value;
   };


    Date.prototype.format = function (formatString) {
      // Returns a formatted date string
      var month = this.getMonth() + 1,
          day = this.getDate(),
          year = this.getFullYear(),
          hours24 = this.getHours(),
          hours = (hours24 === 0 ? 12 : hours24 > 12 ? hours24 - 12 : hours24),
          meridiem = hours24 >= 12 ? "PM" : "AM",
          minutes = this.getMinutes(),
          seconds = this.getSeconds();

      return formatString.replace(/(MM)/g, month.padLeft(2, '0'))
          .replace(/(M)/g, month)
          .replace(/(dd)/g, day.padLeft(2, '0'))
          .replace(/(d)/g, day)
          .replace(/(yyyy)/ig, year)
          .replace(/(yy)/ig, year.toString().substring(2, 4))
          .replace(/(hh)/g, hours.padLeft(2, '0'))
          .replace(/(h)/g, hours)
          .replace(/(HH)/g, hours24.padLeft(2, '0'))
          .replace(/(H)/g, hours24)
          .replace(/(mm)/g, minutes.padLeft(2, '0'))
          .replace(/(m)/g, minutes)
          .replace(/(ss)/g, seconds.padLeft(2, '0'))
          .replace(/(s)/g, seconds)
          .replace(/(tt)/g, meridiem.toLowerCase())
          .replace(/(TT)/g, meridiem);
  };

    var sunriseTime = new Date(this.state.sunrise).format("hh:mm");
    var sunsetTime = new Date(this.state.sunset).format("hh:mm");







    const { isSwitchOn } = this.state;

    if (!this.state.fontLoaded) {
      return (
        <View></View>
      );
    }

    return (
      <View style={styles.level2Container}>



          <View style={styles.userBox}>
            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>

            <View style={{height:60, width:60, borderRadius:30, borderWidth:1, borderColor:'#E8E9EA', backgroundColor:'#fff', marginVertical:5, marginHorizontal:5, alignItems:'center', justifyContent:'center'}}>
              <Image source = {require('../assets/farmer.png')} style={{height:50, width:50, borderRadius:30}} />
            </View>

            <View style={{backgroundColor:'#fff'}}>
              <View style={{ justifyContent:'space-around', marginHorizontal:5, marginTop:10, backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <FontAwesome5 name="map-marker" size={12} color={'#1388E7'} />
                <Text style={{fontSize:12, fontFamily:'NunitoSemiBold', marginHorizontal:5, color:'#B4B1B2'}}>PUNE, INDIA</Text>
                </View>
                <Text style={{fontSize:27, fontFamily:'QuicksandBold', color:'green'}}>User12345</Text>
              </View>
            </View>



            </View>

            <TouchableOpacity style={{marginVertical:5, marginHorizontal:15}}>
              <FontAwesome5 name="bell" size={27} color={'#d4d4d4'} />
            </TouchableOpacity>
          </View>


          <View style={styles.weatherBox}>
            <View style={{flex:5, backgroundColor:'#fff', marginHorizontal:2, marginVertical:5, paddingLeft:15}}>
              <Text style={{fontFamily:'QuicksandBold', fontSize:18, marginVertical:6}}>Sunday, 15th March </Text>
              <Text style={{fontFamily:'NunitoSemiBold', fontSize:15, marginVertical:6}}>Sunny</Text>

              <View style={{flexDirection:'row', marginTop:10}}>
              <Text style={{fontFamily:'NunitoSemiBold', fontSize:13}}>Sunrise : {sunsetTime} </Text>
              <Text  style={{fontFamily:'NunitoSemiBold', fontSize:16, color:'#d3d3d3'}}> | </Text>
              <Text style={{fontFamily:'NunitoSemiBold', fontSize:13}}>Sunrise : {sunsetTime} </Text>
              </View>

            </View>

            <View style={{flex:2.5, backgroundColor:'#fff', alignItems:'center',  marginHorizontal:2}}>
              <View style={{height:70, width:70, backgroundColor:'red',}}>
              <Lottie
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: '#fff',
                }}
                source={require('../assets/cloudy.json')}
                autoPlay loop
              />
              </View>

              <View style={{flexDirection:'row', marginTop:10,}}>
                <Text style={{fontFamily:'NunitoBold', fontSize:16, color:'#338DE7'}}>{this.state.minTemp}</Text>
                <Text  style={{fontFamily:'NunitoSemiBold', fontSize:16, color:'#d3d3d3'}}> | </Text>
                <Text  style={{fontFamily:'NunitoBold', fontSize:16, color:'#E78533'}}>{this.state.maxTemp}</Text>
              </View>

            </View>

            <View style={{width:10, backgroundColor:'#fff'}}>
            </View>
          </View>



          <View style={{alignItems:'flex-start', justifyContent:'flex-start', backgroundColor:'white', width:width-60, marginTop:10, marginHorizontal:15}}>
          <Text style={styles.myFarmText}>My Farm</Text>
          </View>

          <View style={styles.gridBox}>
          </View>

          <View style={styles.mainSwitch}>
            <View style={{alignItems:'exclamation-circle', flexDirection:'row'}}>
            <FontAwesome5 name="map-marker" size={12} color={'#1388E7'} />
            <Text style={{color:'red', fontSize:15, fontWeight:'bold', paddingLeft:10}}>SWITCH OFF</Text>
            </View>
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
    backgroundColor:'white',

  },
  userBox:{
    flex:2,
    backgroundColor:'#fff',
    alignItems:'center',
    flexDirection:'row',
    borderWidth:0,
    marginHorizontal:10,
    marginVertical:5,
    justifyContent:'space-between'
  },
  weatherBox:{
    flex:3,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    marginHorizontal:10,
    elevation:2,
    shadowColor:'black',
    shadowOffset:{x:2,y:2},
    //width:width,
    marginTop:10,
    flexDirection:'row',
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
    justifyContent:'space-between',
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
    fontFamily:'QuicksandBold',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginVertical:0,
    marginHorizontal:2,
    fontSize:25
  }
})
