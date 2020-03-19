import React from 'react';
import {View, StyleSheet, Text, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import BackArrow from './backArrow.js';
import {Font} from 'expo-font';
import Lottie from 'lottie-react-native';
import Swiper from 'react-native-swiper';
import {FontAwesome5} from '@expo/vector-icons';
import SwitchSelector from 'react-native-switch-selector';

const options = [
    { label: 'Farmer', value: '0' , imageIcon: <FontAwesome5 name='user'/> },
    { label: 'Entrepreneur', value: '1', imageIcon: <FontAwesome5 name='user' color='green' /> },

];


export class Slide1 extends React.Component{

  state = {
    fontLoaded:false,
    name:' ',
    age:0,
    email:' '
  }

  onNameChange(text) {
      this.setState({
          name:text
      });
  }

  clearName() {
      this.setState({
          name:' '
      });
  }

  onEmailChange(text) {
      this.setState({
          email:text
      });
  }

  clearEmail() {
      this.setState({
          email:' '
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



  render(){
    return(
      <View style={{ backgroundColor:'#fff', height:230, marginHorizontal:25, marginVertical:10}}>
        <View style={{marginVertical:5}}>
          <View style={{flexDirection:'row', alignItems:'center',}}>
          <FontAwesome5 name="font" size={15} color='#d3d3d3' style={{marginVertical:2, marginHorizontal:5}}  />
          <Text style={{fontFamily:'NunitoBold', fontSize:16, color:'#E7B10B'}}>Name</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <TextInput onChangeText={(text) => this.onNameChange(text)} value={this.state.name} width={Dimensions.get('window').width-100} borderWidth={1} marginVertical={4} marginHorizontal={3} borderRadius={10} borderColor='#EAE8E8' height={35} marginTop={5} paddingLeft={10} autoCapitalize={'words'}/>
        <TouchableOpacity onPress={()=> this.clearName } >
        <FontAwesome5 name="times-circle" size={15} color='#d3d3d3' style={{marginVertical:2, marginHorizontal:5}}  />
        </TouchableOpacity>
          </View>
        </View>



        <View style={{flexDirection:'row', alignItems:'center', marginVertical:5}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <FontAwesome5 name="user" size={15} color='#d3d3d3' style={{marginVertical:2, marginHorizontal:5}}  />
        <Text style={{fontFamily:'NunitoBold', fontSize:16, color:'#1EB690'}}>Age</Text>
        </View>
        <TextInput borderWidth={1} marginVertical={4} marginHorizontal={10} borderRadius={10} borderColor='#EAE8E8' height={35} marginTop={5} paddingLeft={10} width={70} keyboardType={'numeric'}/>
        </View>

        <View style={{marginVertical:15}}>
          <View style={{flexDirection:'row', alignItems:'center',}}>
          <FontAwesome5 name="at" size={15} color='#d3d3d3' style={{marginVertical:2, marginHorizontal:5}}  />
          <Text style={{fontFamily:'NunitoBold', fontSize:16, color:'#E08110'}}>Email</Text>
          </View>
          <Text style={{marginLeft:10, color:'#d3d3d3', fontFamily:'NunitoSemiBold', fontSize:12}}>Email will be used as username during logging in</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <TextInput onChangeText={(text) => this.onEmailChange(text)} value={this.state.email} width={Dimensions.get('window').width-100} borderWidth={1} marginVertical={4} marginHorizontal={3} borderRadius={10} borderColor='#EAE8E8' height={35} marginTop={5} paddingLeft={10} keyboardType='email-address'/>
        <TouchableOpacity onPress={()=> this.clearEmail } >
        <FontAwesome5 name="times-circle" size={15} color='#d3d3d3' style={{marginVertical:2, marginHorizontal:5}}  />
        </TouchableOpacity>
          </View>

        </View>



      </View>
    )
  }
}

export class Slide2 extends React.Component{

  state = {
    fontLoaded:false,
    password:'',
  }


  onPasswordChange(text) {
      this.setState({
          name:text
      });
  }

  clearPassword() {
      this.setState({
          password:''
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



  render(){
    return(
      <View style={{ backgroundColor:'#fff', height:230, marginHorizontal:25, marginVertical:10}}>
        <View style={{marginVertical:5}}>
          <View style={{flexDirection:'row', alignItems:'center',}}>
          <FontAwesome5 name="lock" size={15} color='#d3d3d3' style={{marginVertical:2, marginHorizontal:5}}  />
          <Text style={{fontFamily:'NunitoBold', fontSize:16, color:'#BD0F39'}}>Password</Text>
          </View>
          <Text style={{marginLeft:10, color:'#d3d3d3', fontFamily:'NunitoSemiBold', fontSize:12}}>Please use a minimum 6 characters, with use of numbers and/or special characters</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <TextInput onChangeText={(text) => this.onPasswordChange(text)} value={this.state.password} width={Dimensions.get('window').width-100} borderWidth={1} marginVertical={4} marginHorizontal={3} borderRadius={10} borderColor='#EAE8E8' height={35} marginTop={5} paddingLeft={10} secureTextEntry={true}/>
          <TouchableOpacity onPress={()=> this.clearPassword } >
          <FontAwesome5 name="times-circle" size={15} color='#d3d3d3' style={{marginVertical:2, marginHorizontal:5}}  />
          </TouchableOpacity>
          </View>

        </View>


        <View style={{marginTop:5}}>

        <View style={{flexDirection:'row', alignItems:'center',}}>
        <FontAwesome5 name="user-friends" size={15} color='#d3d3d3' style={{marginVertical:2, marginHorizontal:5}}  />
        <Text style={{fontFamily:'NunitoBold', fontSize:16, color:'#0F4BBD'}}>Type</Text>
        </View>
        <Text style={{marginLeft:10, color:'#d3d3d3', fontFamily:'NunitoSemiBold', fontSize:12}}>Are you also an entrepreneur dealing in supply chain? </Text>

          <SwitchSelector options={[
            { label: "Farmer", value: "f", customIcon:<FontAwesome5 name="tractor" size={15} color='green' style={{marginVertical:2, marginHorizontal:5}}  /> },
            {label: "Entrepreneur", value: "e", customIcon:<FontAwesome5 name="user-tie" size={15} color='green' style={{marginVertical:2, marginHorizontal:5}} />}
            ]} initial={0}
            style={{paddingVertical:5, marginHorizontal:10}}
            fontSize={13}
            textColor='#d3d3d3'
            //buttonColor='#A0AFF7'
            fontFamily='NunitoSemiBold'


            />
        </View>



      </View>
    )
  }
}







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
      <View style={{flex:1, marginTop:StatusBar.currentHeight, backgroundColor:'#fff' }}>
      <BackArrow/>

      <View style={{alignItems:'center'}}>

      <View style={{height:150,  width:Dimensions.get('window').width - 40, flexDirection:'row'}}>
        <View style={{flex:5, backgroundColor:'#fff', justifyContent:'flex-start', marginTop:10}}>

        <Text style={{fontFamily:'QuicksandBold', fontSize:32, color:'green', textAlign:'center'}}>Hey There!</Text>

        <Text style={{fontFamily:'NunitoSemiBold', fontSize:15, color:'#c3c3c3', textAlign:'center', marginTop:15}}>Tell us a bit more about yourself!</Text>
        </View>


        <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>
        <Lottie
          style={{
            width: 120,
            height: 120,
            backgroundColor: '#fff',
          }}
          source={require('../assets/user.json')}
          autoPlay loop
        />
        </View>


      </View>


      <View style={{backgroundColor:'#fff', height:300, width:Dimensions.get('window').width-30 , elevation:5, borderRadius:15, paddingVertical:10}}>

      <Swiper style={styles.wrapper} showsButtons={true} showsPagination={true} dot={<View style={{backgroundColor:'#d3d3d3', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 0,}} />}  activeDot={<View style={{backgroundColor: 'green', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 0,}} />} nextButton={<Text style={{color:'#d3d3d3', fontSize:60, fontFamily:'NunitoSemiBold'}}>›</Text>} prevButton={<Text style={{color:'#d3d3d3', fontSize:60, fontFamily:'NunitoSemiBold'}}>‹</Text>}>
        <View>
          <Slide1/>
        </View>

        <View>
          <Slide2/>
        </View>


      </Swiper>

      </View>

      <TouchableOpacity style={{width:140, height:50, backgroundColor:'#fff', borderRadius:25, marginVertical:20, alignItems:'center', justifyContent:'center', elevation:3, paddingVertical:5,}}  onPress={()=>{this.props.navigation.navigate('InputUserInfo')} } disabled={false}>
        <Text style={{fontSize:18, color:'green', fontFamily:'QuicksandBold'}}> Proceed </Text>
      </TouchableOpacity>


      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    //flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide2: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide3: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
