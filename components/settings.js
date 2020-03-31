import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button, StatusBar, Dimensions, ImageBackground, TextInput, Modal, ScrollView, ToastAndroid} from 'react-native';
import InputUserInfo from './inputUserInfo.js';
import MotionSlider from 'react-native-motion-slider';
import {FontAwesome5} from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input'
import BackArrow from './backArrow.js';
import * as Font from 'expo-font';
import { CheckBox } from 'react-native-elements';
import SwitchSelector from 'react-native-switch-selector';
import Lottie from 'lottie-react-native';



export default class FarmSetUp extends React.Component{

  state = {

    fontLoaded:false,
    checked:false,
    UUImodalVisible:false,
    ULmodalVisible:false,
    FUImodalVisible:false,
    FCMmodalVisible:false,
    FAQmodalVisible:false,
    feedbackModalVisible:false,
    notifModalVisible:false,
    myProfileModalVisible:false,

  }

  async componentDidMount() {
    await Font.loadAsync({
      QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
      QuicksandLight: require('../assets/fonts/Quicksand-Light.ttf'),
      NunitoSemiBold: require('../assets/fonts/Nunito-SemiBold.ttf'),
      NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });

    this.setState({FCmodalVisible:false});
    this.setState({FUImodalVisible:false});
  }



  UUIopenModal() {
    this.setState({UUImodalVisible:true});
  }

  UUIcloseModal() {
    this.setState({UUImodalVisible:false});
  }

  ULopenModal() {
    this.setState({ULmodalVisible:true});
  }

  ULcloseModal() {
    this.setState({ULmodalVisible:false});
  }

  FUIopenModal() {
    this.setState({FUImodalVisible:true});
  }

  FUIcloseModal() {
    this.setState({FUImodalVisible:false});
  }

  FCopenModal() {
    this.setState({FCmodalVisible:true});
  }

  FCcloseModal() {
    this.setState({FCmodalVisible:false});
  }

  FAQopenModal() {
    this.setState({FAQmodalVisible:true});
  }

  FAQcloseModal() {
    this.setState({FAQmodalVisible:false});
  }


  feedbackopenModal() {
    this.setState({feedbackModalVisible:true});
  }

  feedbackcloseModal() {
    this.setState({feedbackModalVisible:false});
  }

  notifopenModal() {
    this.setState({notifModalVisible:true});
  }

  notifcloseModal() {
    this.setState({notifModalVisible:false});
  }

  myProfileopenModal() {
    this.setState({myProfileModalVisible:true});
  }

  myProfilecloseModal() {
    this.setState({myProfileModalVisible:false});
  }




  render(){



   if (!this.state.fontLoaded) {
     return (
       <View></View>
     );
   }

    return (






















      <View style={{backgroundColor:'#fff', flex:1, marginTop:StatusBar.currentHeight}}>

      <View style={{flexDirection:'row', justifyContent:'flex-start', marginHorizontal:15, marginTop:15}}>
      <TouchableOpacity style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center',}}  >
      <FontAwesome5 name="chevron-left" size={30} color={'#d3d3d3'} />
      </TouchableOpacity>
      </View>


      <View style={{marginVertical:5, marginHorizontal:20}}>

      <Text style={{fontSize:30, color:'#5C5C5B', fontFamily:'QuicksandBold', marginBottom:20}}>Settings</Text>


      <ScrollView style={{height:Dimensions.get('window').height - 210, backgroundColor:'#fff',}} showsVerticalScrollIndicator={false}>

      <Text style={{fontSize:13, color:'#CACBCC', fontFamily:'NunitoSemiBold', marginVertical:10}}>PERSONALIZATION</Text>




      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}} onPress={()=>{this.myProfileopenModal()}}>
      <FontAwesome5 name="user-circle" size={19} color={'#E99041'} />
      <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', color:'#BFBFBE', marginHorizontal:7}}>My Profile</Text>
      </TouchableOpacity>

      <View style={{borderWidth:0.5, borderColor:'#ECEEEF', height:1, marginVertical:4, borderRadius:1}}></View>


      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}}>
      <FontAwesome5 name="user-cog" size={18} color={'#0FCF25'} />
      <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', color:'#BFBFBE', marginHorizontal:5}}>Update User Information</Text>
      </TouchableOpacity>

      <View style={{borderWidth:0.5, borderColor:'#ECEEEF', height:1, marginVertical:4, borderRadius:1}}></View>

      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}}>
      <FontAwesome5 name="map-marker-alt" size={18} color={'#CF7D0F'} style={{marginHorizontal:2}} />
      <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', color:'#BFBFBE', marginHorizontal:9}}>Update Location</Text>
      </TouchableOpacity>




      <Text style={{fontSize:13, color:'#CACBCC', fontFamily:'NunitoSemiBold', marginVertical:20}}>FORGET SYSTEM</Text>

      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}} onPress={()=>{this.FUIopenModal()}}>
      <FontAwesome5 name="user-times" size={18} color={'#1388E7'} />
      <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', color:'#BFBFBE', marginHorizontal:5}}>Forget User Information</Text>
      </TouchableOpacity>

      <View style={{borderWidth:0.5, borderColor:'#ECEEEF', height:1, marginVertical:4, borderRadius:1}}></View>

      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}} onPress={()=>{this.FCopenModal()}}>
      <FontAwesome5 name="times-circle" size={18} color={'#E11543'} />
      <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', color:'#BFBFBE', marginHorizontal:9}}>Forget Current Model</Text>
      </TouchableOpacity>





      <Text style={{fontSize:13, color:'#CACBCC', fontFamily:'NunitoSemiBold', marginVertical:20}}>MISCELLANEOUS</Text>


      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}}>
      <FontAwesome5 name="info-circle" size={18} color={'#0FCF9F'} style={{marginHorizontal:0}} />
      <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', color:'#BFBFBE', marginHorizontal:10}}>Frequently Asked Questions</Text>
      </TouchableOpacity>

      <View style={{borderWidth:0.5, borderColor:'#ECEEEF', height:1, marginVertical:4, borderRadius:1}}></View>

      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}}  onPress={()=>{this.feedbackopenModal()}}>
      <FontAwesome5 name="comment" size={18} color={'#6945FA'} style={{marginHorizontal:0}} />
      <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', color:'#BFBFBE', marginHorizontal:10}}>Feedback</Text>
      </TouchableOpacity>

      <View style={{borderWidth:0.5, borderColor:'#ECEEEF', height:1, marginVertical:4, borderRadius:1}}></View>

      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}}>
      <FontAwesome5 name="bell" size={18} color={'#41B5E9'} style={{marginHorizontal:0}} />
      <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', color:'#BFBFBE', marginHorizontal:10}}>Notifications</Text>
      </TouchableOpacity>




      <Text style={{fontSize:13, color:'#CACBCC', fontFamily:'NunitoSemiBold', marginVertical:20}}>SIGN OUT</Text>

      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}}>
      <FontAwesome5 name="times" size={18} color={'#FA5345'} style={{marginHorizontal:0}} />
      <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', color:'#BFBFBE', marginHorizontal:15}}>Sign Out</Text>
      </TouchableOpacity>


      <View style={{height:20, backgroundColor:'#fff'}}>
      </View>



      </ScrollView>




      </View>



      <Modal visible={this.state.FUImodalVisible} animationType='fade' animationDuration={1500} onRequestClose={() => this.FUIcloseModal()} transparent={true}>
      <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#00000080'}}>

        <View style={{height:300, width:300, backgroundColor:'#fff', borderRadius:5, justifyContent:'space-around', alignItems:'center', paddingVertical:5}}>


        <Lottie
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#fff',
          }}
          source={require('../assets/cancel.json')}
          autoPlay loop
        />

        <Text style={{fontSize:20, marginHorizontal:10, fontFamily:'NunitoSemiBold', color:'#5F5F5F', textAlign:'center'}}>Do you want to delete this profile?</Text>

        <Text style={{fontSize:12, fontFamily:'NunitoSemiBold', color:'#FA454D', textAlign:'center', marginHorizontal:7,marginVertical:5}}>This will delete all user information such as name, age , email and password</Text>

        <SwitchSelector options={[
          { label: "Yes", value: "false", customIcon:<FontAwesome5 name="check" size={15} color='green' style={{marginVertical:2, marginHorizontal:5}}  activeColor='green' /> },
          {label: "No", value: "true", customIcon:<FontAwesome5 name="ban" size={15} color='red' style={{marginVertical:2, marginHorizontal:5}} activeColor='red' />}
        ]} initial={1}
          style={{paddingVertical:5, marginHorizontal:10, marginVertical:5, width:200}}
          fontSize={16}
          textColor='#A6A4A4'
          buttonColor='#C4C3C3'
          fontFamily='NunitoSemiBold'
          //onPress={value => this.setState({  })}
          onPress={()=>{setTimeout(()=>{this.FUIcloseModal()}, 400), ToastAndroid.showWithGravityAndOffset(
            "Profile deleted successfully",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            150
          ); }}
          />

        </View>

      </View>
      </Modal>



      <Modal visible={this.state.FCmodalVisible} animationType='fade' animationDuration={1500} onRequestClose={() => this.FCcloseModal()} transparent={true}>
      <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#00000080'}}>

        <View style={{height:300, width:300, backgroundColor:'#fff', borderRadius:5, justifyContent:'space-around', alignItems:'center', paddingVertical:5}}>


        <Lottie
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#fff',
          }}
          source={require('../assets/forgetmodel.json')}
          autoPlay loop
        />

        <Text style={{fontSize:20, marginHorizontal:10, fontFamily:'NunitoSemiBold', color:'#5F5F5F', textAlign:'center'}}>Do you want to forget current model?</Text>

        <Text style={{fontSize:12, fontFamily:'NunitoSemiBold', color:'#FA454D', textAlign:'center', marginHorizontal:7,marginVertical:5}}>This will delete all information related to current model as well as all data associated with it</Text>

        <SwitchSelector options={[
          { label: "Yes", value: "false", customIcon:<FontAwesome5 name="check" size={15} color='green' style={{marginVertical:2, marginHorizontal:5}}  activeColor='green' /> },
          {label: "No", value: "true", customIcon:<FontAwesome5 name="ban" size={15} color='red' style={{marginVertical:2, marginHorizontal:5}} activeColor='red' />}
        ]} initial={1}
          style={{paddingVertical:5, marginHorizontal:10, marginVertical:5, width:200}}
          fontSize={16}
          textColor='#A6A4A4'
          buttonColor='#C4C3C3'
          fontFamily='NunitoSemiBold'
          //onPress={value => this.setState({  })}
          onPress={()=>{setTimeout(()=>{this.FCcloseModal()}, 400)}}
          />

        </View>

      </View>
      </Modal>



      <Modal visible={this.state.feedbackModalVisible} animationType='fade' animationDuration={1500} onRequestClose={() => this.feedbackcloseModal()} transparent={true}>
      <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#00000080'}}>

        <View style={{height:500, width:300, backgroundColor:'#fff', borderRadius:5, justifyContent:'space-around', alignItems:'center', paddingVertical:5}}>


        <Lottie
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#fff',
          }}
          source={require('../assets/cancel.json')}
          autoPlay loop
        />

        <Text style={{fontSize:20, marginHorizontal:10, fontFamily:'NunitoSemiBold', color:'#5F5F5F', textAlign:'center'}}>Do you want to delete this profile?</Text>

        <Text style={{fontSize:12, fontFamily:'NunitoSemiBold', color:'#FA454D', textAlign:'center', marginHorizontal:7,marginVertical:5}}>This will delete all user information such as name, age , email and password</Text>

        <SwitchSelector options={[
          { label: "Yes", value: "false", customIcon:<FontAwesome5 name="check" size={15} color='green' style={{marginVertical:2, marginHorizontal:5}}  activeColor='green' /> },
          {label: "No", value: "true", customIcon:<FontAwesome5 name="ban" size={15} color='red' style={{marginVertical:2, marginHorizontal:5}} activeColor='red' />}
        ]} initial={1}
          style={{paddingVertical:5, marginHorizontal:10, marginVertical:5, width:200}}
          fontSize={16}
          textColor='#A6A4A4'
          buttonColor='#C4C3C3'
          fontFamily='NunitoSemiBold'
          //onPress={value => this.setState({  })}
          onPress={()=>{setTimeout(()=>{this.feedbackcloseModal()}, 400)}}
          />

        </View>

      </View>
      </Modal>










      </View>


    )
  }
}

// <Modal visible={this.state.UUImodalVisible} animationType='slide' animationDuration={1000} onRequestClose={() => this.UUIcloseModal()}>
// <View style={{height:100, width:100, backgroundColor:'red'}}>
// </View>
// </Modal>
