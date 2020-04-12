import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button, StatusBar, Dimensions, ImageBackground, Image ,TextInput, Modal, ScrollView, ToastAndroid} from 'react-native';
import InputUserInfo from './inputUserInfo.js';
import MotionSlider from 'react-native-motion-slider';
import {FontAwesome5} from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input'
import BackArrow from './backArrow.js';
import * as Font from 'expo-font';
import { CheckBox } from 'react-native-elements';
import SwitchSelector from 'react-native-switch-selector';
import Lottie from 'lottie-react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import { AppLoading } from 'expo';

const CONTENT = [
  {
    title: 'How do I view the sensors in my farm?',
    content :'You can view the general layout of your farm and the position of the sensors by clicking on the Farm tab (rightmost), of course, for examining the actual sensor device, you will have to make a trip to you farm !',
  },
  {
    title: 'How can I view data collected by the sensors?',
    content :'You can view detailed real time sensor data by going to Farm tab (rightmost), and scrolling down, wherein you shall be able to view temperature, light, moisture and energy readings of the sensors installed in your farm. For past data, you can click on the 3 dots icon in top right of the tab and select Past Data.',
  },
  {
    title: 'How can I change the farm details?',
    content :'To change the farm details, go to Farm tab (rightmost) , click on the 3 dots in the top right corner of the tab, and select Update Farm Details, you will be redirected to a page where you can edit the details. Note that width and length of farm are not editable. To do that, you will have to delete current model, and register a new one. See FAQ for more details.',
  },
  {
    title: 'Where can I see a statistical analysis of sensor data?',
    content :'You can view basic and advanced statistical anaylisis by going to Statistics Tab (second-from-left). There you will be able to view data of one last week. Click on the advanced statistics panel to view statistics within a date range which you can define, as well some advanced charts.',
  },
  {
    title: 'How do I update my profile details?',
    content :'To update profile details, go to Settings tab (leftmost) and select Update User Information under Personalization. You will be redirected to a page where you will be able to edit your profile.',
  },
  {
    title: 'How can I update my Location?',
    content :'To update location, go to Settings tab (leftmost) and select Update Location under Personalization. You will be redirected to a page where you will be able to edit your location.',
  },
  {
    title: 'The sensors are showing invalid / no data. What do I do?',
    content :'The sensors may sometimes show invalid data due to unavoidable circumstances encountered while measuring. However , if the problem persists, you may go to your farm and check whether the sensors are in a proper condition, whether the device is in a stable position.',
  },
  
];




export default class Settings extends React.Component{

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
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
    moreQuesModalVisible:false

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

  moreQuesopenModal() {
    this.setState({moreQuesModalVisible:true});
  }

  moreQuescloseModal() {
    this.setState({moreQuesModalVisible:false});
  }


  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
        <FontAwesome5
          name="chevron-down"
          size={24}
          color="#0FA0C0"
          style={isActive ? styles.iconActive : styles.iconInactive}
        />
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={100}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          style={styles.info}
          animation={isActive ? undefined : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }



  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };




  render(){

    const { multipleSelect, activeSections } = this.state;




   if (!this.state.fontLoaded) {
     return (
       <View> 
        <AppLoading
          startAsync={this.componentDidMount}
          onFinish={() => this.setState({ fontLoaded: true })}
          onError={console.warn}
        />
       
       </View>
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


      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}} onPress={()=>this.UUIopenModal()}>
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


      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}} onPress={()=>this.FAQopenModal()}>
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


      <Modal visible={this.state.FAQmodalVisible} animationType='slide' animationDuration={1500} onRequestClose={() => this.FAQcloseModal()} transparent={true}>

      


      <View style={{flex:1,backgroundColor:'#fff',}}>

      <View style={{ marginHorizontal:15, marginTop:15, position:'absolute', }}>
              <TouchableOpacity style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center',}} onPress={()=>{this.FAQcloseModal()}}  >
              <FontAwesome5 name="chevron-left" size={30} color={'#d3d3d3'} />
              </TouchableOpacity>
      </View>


      <View style={{alignItems:'center', marginTop:60}}>

      <Text style={{fontSize:26, fontFamily:'QuicksandBold', color:'#797777', marginVertical:10,marginHorizontal:20, marginBottom:20}}>Frequently Asked Questions</Text>

      <ScrollView style={{paddingBottom:50,height:Dimensions.get('window').height * 0.55}}>

      <Accordion
              activeSections={activeSections}
              sections={CONTENT}
              touchableComponent={TouchableOpacity}
              expandMultiple={multipleSelect}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={200}
              onChange={this.setSections}
      />

      </ScrollView>

      <View style={{marginHorizontal:20, height:Dimensions.get('window').height * 0.1, borderRadius:40, width:Dimensions.get('window').width - 40, backgroundColor:'#fff', marginTop:Dimensions.get('window').height*0.065, elevation:3, paddingVertical:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center', marginHorizontal:10}}>
        <FontAwesome5 name='question-circle' size={24} color='#1692BB'/>
        <View>
        <Text style={{fontSize:16, fontFamily:'NunitoRegular', color:'#1692BB', marginLeft:10,width:Dimensions.get('window').width*0.5}}>Have more questions?</Text>
        <Text style={{fontSize:11, fontFamily:'NunitoRegular', color:'#d3d3d3',marginLeft:10,width:Dimensions.get('window').width*0.5 }}>Send us your question. We will answer asap</Text>
        </View>
        </View>

        <TouchableOpacity style={{width:70, height:Dimensions.get('window').height * 0.07,borderRadius:40,backgroundColor:'#1692BB',marginHorizontal:10,alignItems:'center', justifyContent:'center',elevation:3}} onPress={()=>this.moreQuesopenModal()}>
          <FontAwesome5 name='arrow-right' size={24} color='#fff'/>
        </TouchableOpacity>

      </View>
      
      </View>





        

      </View>
      </Modal>





      <Modal visible={this.state.moreQuesModalVisible} animationType='slide' animationDuration={1500} onRequestClose={() => this.moreQuescloseModal()} transparent={true}>
      <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#00000080'}}>

        <View style={{height:300, width:Dimensions.get('window').width - 60, backgroundColor:'#fff', borderRadius:5, justifyContent:'center', alignItems:'center', paddingVertical:5}}>

          <Text style={{marginTop:20, marginBottom:10, marginHorizontal:20, fontFamily:'QuicksandBold', fontSize:25, color:'#787A7B'}}>Have a Question ?</Text>

          <Text style={{marginTop:5, marginBottom:10, marginHorizontal:20, fontFamily:'NunitoRegular', fontSize:13, color:'#9B9D9E', textAlign:'center'}}>Type in your question and we will add it to the FAQ real soon 😀 </Text>

          <TextInput style={{width:Dimensions.get('window').width - 100, height:80, borderRadius:8, backgroundColor:'#f6f6f6', padding:10, fontSize:12, color:'#9B9D9E', marginTop:25, marginBottom:10}} placeholder='Enter your question here' placeholderTextColor='#9B9D9E' multiline/>

          <TouchableOpacity style={{width:80, height:40, borderRadius:20, elevation:4, backgroundColor:'#1692BB',alignItems:'center', justifyContent:'center', marginTop:5, marginBottom:10}} onPress={()=>this.moreQuescloseModal()}>
              <Text style={{fontSize:14, fontFamily:'NunitoSemiBold', color:'#fff'}}>Submit</Text>
          </TouchableOpacity>




        

        </View>

      </View>
      </Modal>





      <Modal visible={this.state.UUImodalVisible} animationType='slide' animationDuration={1500} onRequestClose={() => this.UUIcloseModal()} transparent={true}>
        <View style={{flex:1,backgroundColor:'#fff',}}>


        <View style={{ marginHorizontal:15, marginTop:15, position:'absolute', }}>
              <TouchableOpacity style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center',}} onPress={()=>{this.UUIcloseModal()}}  >
              <FontAwesome5 name="chevron-left" size={30} color={'#d3d3d3'} />
              </TouchableOpacity>
        </View>


      


      <View style={{ marginTop:60,}}>

      <Text style={{fontSize:26, fontFamily:'QuicksandBold', color:'#797777', marginVertical:10, marginBottom:20,marginHorizontal:20}}>Update User Profile</Text>

      <View style={{marginHorizontal:20}}>

      
      <ScrollView contentContainerStyle={{paddingBottom:50}} showsVerticalScrollIndicator={false}>
      <Text style={{fontSize:13, fontFamily:'NunitoRegular', color:'#9B9D9E', marginVertical:10,marginLeft:10}}>Tap on the field you want to edit</Text>

      

      <Text style={{fontSize:14, fontFamily:'NunitoRegular', color:'#1986BC', marginVertical:2,marginTop:10,marginLeft:10}}>Name</Text>
      <TextInput style={{width:Dimensions.get('window').width - 60, height:35, paddingVertical:3, paddingHorizontal:10, backgroundColor:'#f6f6f6', fontSize:12, fontFamily:'NunitoRegular', marginVertical:5, borderRadius:10}} placeholder='Edit Name' placeholderTextColor='#9B9D9E' />


      <Text style={{fontSize:14, fontFamily:'NunitoRegular', color:'#1986BC', marginVertical:2,marginTop:6,marginLeft:10}}>Age</Text>
      <TextInput style={{width:80, height:35, paddingVertical:3, paddingHorizontal:10, backgroundColor:'#f6f6f6', fontSize:12, fontFamily:'NunitoRegular', marginVertical:5, borderRadius:10}} placeholder='Edit Age' placeholderTextColor='#9B9D9E' keyboardType='numeric' />


      <Text style={{fontSize:14, fontFamily:'NunitoRegular', color:'#1986BC', marginVertical:2,marginTop:6,marginLeft:10}}>E-mail ID</Text>
      <TextInput style={{width:Dimensions.get('window').width - 60, height:35, paddingVertical:3, paddingHorizontal:10, backgroundColor:'#f6f6f6', fontSize:12, fontFamily:'NunitoRegular', marginVertical:5, borderRadius:10}} placeholder='Edit E-Mail' placeholderTextColor='#9B9D9E' keyboardType='email-address' />


      <Text style={{fontSize:14, fontFamily:'NunitoRegular', color:'#1986BC', marginVertical:2,marginTop:6,marginLeft:10}}>Password</Text>
      <TextInput style={{width:Dimensions.get('window').width - 60, height:35, paddingVertical:3, paddingHorizontal:10, backgroundColor:'#f6f6f6', fontSize:12, fontFamily:'NunitoRegular', marginVertical:5, borderRadius:10}} placeholder='Edit Password' placeholderTextColor='#9B9D9E' secureTextEntry={true} />

      <TouchableOpacity style={{height:40, width:100, elevation:5, backgroundColor:'#1986BC', alignItems:'center', justifyContent:'center', borderRadius:20,alignSelf:'center',marginVertical:20}} onPress={()=>this.UUIcloseModal()}>

        <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', color:'#fff'}}>
          Update
        </Text>

      </TouchableOpacity>

      </ScrollView>



      </View>




      
      </View>

      </View>
      </Modal>





      <Modal visible={this.state.myProfileModalVisible} animationType='slide' animationDuration={1500} onRequestClose={() => this.myProfilecloseModal()} transparent={true}>
        <View style={{flex:1,backgroundColor:'#fff',}}>


        <View style={{ marginHorizontal:15, marginTop:15, position:'absolute', }}>
              <TouchableOpacity style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center',}} onPress={()=>{this.myProfilecloseModal()}}  >
              <FontAwesome5 name="chevron-left" size={30} color={'#d3d3d3'} />
              </TouchableOpacity>
        </View>


      


      <View style={{ marginTop:60,}}>

      <Text style={{fontSize:26, fontFamily:'QuicksandBold', color:'#797777', marginVertical:10, marginBottom:10,marginHorizontal:20}}>My Profile</Text>

      <View style={{marginHorizontal:20}}>

      
      <ScrollView contentContainerStyle={{paddingBottom:150, alignItems:'center'}} showsVerticalScrollIndicator={false}>

      <View style={{height:200, width:200, borderRadius:100, marginTop:10, marginBottom:15,alignItems:'center', justifyContent:'center' }}>

        <TouchableOpacity style={{height:40, width:40, borderRadius:20, backgroundColor:'#139A17', alignItems:'center', justifyContent:'center', position:'absolute', top:125, right:5 , elevation:11, }}>
          <FontAwesome5 name='edit' size={16} color='#fff'/>
        </TouchableOpacity>

        <View style={{height:180, width:180, borderRadius:100, elevation:10, backgroundColor:'#fff',alignItems:'center', justifyContent:'flex-end'}}>

          <Image source={require('../assets/profilepic.png')} style={{height:160, width:160, borderRadius:78}}/>
        </View>

      </View> 

      <Text style={{fontSize:26, fontFamily:'QuicksandBold', color:'#424542', textAlign:'center',marginBottom:10, marginTop:0}}>User12345</Text> 

      <View style={{flexDirection:'row', alignItems:'center', paddingVertical:10, }}>

        <FontAwesome5 name='map-marker-alt' size={24} color='#888D88' style={{marginHorizontal:10, marginVertical:10, flex:1,alignSelf:'center'}}/>

        <Text style={{flex:6, textAlignVertical:'center', paddingRight:10, fontFamily:'NunitoRegular', fontSize:13, color:'#CFD2CF'}}>45/A Mangaon, near Mahad, Raigad, Maharashtra, India</Text>
      </View>


      <View style={{flexDirection:'row', alignItems:'center', paddingVertical:10, }}>

        <FontAwesome5 name='envelope' size={24} color='#888D88' style={{marginHorizontal:10, marginVertical:10, flex:1,alignSelf:'center'}}/>

        <Text style={{flex:6, textAlignVertical:'center', paddingRight:10, fontFamily:'NunitoRegular', fontSize:13, color:'#CFD2CF'}}>user12345@example.com</Text>
      </View>


      <View style={{flexDirection:'row', justifyContent:'space-between',marginVertical:10}}>

        <View style={{flex:15, height:100, backgroundColor:'#fff', alignItems:'center',}}>

          <FontAwesome5 name='cube' size={20} color='grey'/>
          <Text style={{marginTop:5, fontFamily:'NunitoRegular', color:'#159215', fontSize:35}}>4</Text>
          <Text style={{marginBottom:5, fontFamily:'NunitoRegular', color:'#C7CBC7', fontSize:13}}>Sensors</Text>

        </View>

        <View style={{height:70, width:1, backgroundColor:'#d3d3d3', borderRadius:1}}>
        </View>


        <View style={{flex:15, height:90, backgroundColor:'#fff', alignItems:'center',}}>

        
          <FontAwesome5 name='tags' size={20} color='grey'/>
          <Text style={{marginTop:5, fontFamily:'NunitoRegular', color:'#159215', fontSize:35}}>65</Text>
          <Text style={{marginBottom:5, fontFamily:'NunitoRegular', color:'#C7CBC7', fontSize:13,textAlign:'center'}}>Tonnes crop supplied</Text>



        </View>

        <View style={{height:70, width:1, backgroundColor:'#d3d3d3', borderRadius:1}}>
        </View>


        <View style={{flex:15, height:90, backgroundColor:'#fff', alignItems:'center',}}>

          <FontAwesome5 name='users' size={20} color='grey'/>
          <Text style={{marginTop:5, fontFamily:'NunitoRegular', color:'#159215', fontSize:35}}>7</Text>
          <Text style={{marginBottom:5, fontFamily:'NunitoRegular', color:'#C7CBC7', fontSize:13}}>Suppliers</Text>



        </View>

      </View>


      <View style={{marginTop:10}}>


      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}} onPress={()=>this.UUIopenModal()}>
      <FontAwesome5 name="user-cog" size={18} color={'grey'} style={{marginHorizontal:0}} />
      <Text style={{fontSize:14, fontFamily:'NunitoRegular', color:'#BFBFBE', marginHorizontal:10}}>Update Profile</Text>
      </TouchableOpacity>

      <View style={{borderWidth:0.5, borderColor:'#ECEEEF', height:1, marginVertical:7, borderRadius:1, width:Dimensions.get('window').width - 60}}></View>

      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}}  onPress={()=>{this.ULopenModal()}}>
      <FontAwesome5 name="map-marker-alt" size={18} color={'grey'} style={{marginHorizontal:2,marginLeft:2}} />
      <Text style={{fontSize:14, fontFamily:'NunitoRegular', color:'#BFBFBE', marginHorizontal:10,marginLeft:15}}>Update my Location</Text>
      </TouchableOpacity>

      <View style={{borderWidth:0.5, borderColor:'#ECEEEF', height:1, marginVertical:7, borderRadius:1, width:Dimensions.get('window').width - 60}}></View>

      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:6}}>
      <FontAwesome5 name="user-times" size={18} color={'grey'} style={{marginHorizontal:0}} />
      <Text style={{fontSize:14, fontFamily:'NunitoRegular', color:'#BFBFBE', marginHorizontal:10,marginLeft:11}}>Delete my Profile</Text>
      </TouchableOpacity>

      </View>





      

      </ScrollView>



      </View>




      
      </View>

      </View>
      </Modal>










      </View>


    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
    marginVertical: 3,
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    width:Dimensions.get('window').width - 40,
    paddingVertical:5,
    marginBottom:5
  },
  headerText: {
    textAlign: 'left',
    fontSize: 15,
    paddingRight: 10,
    width: Dimensions.get('window').width - 80,
    fontFamily:'NunitoRegular',
    color: '#ABAAAA',
    
  },
  content: {
    marginHorizontal:20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical:5
  },
  active: {
    backgroundColor: 'white',
  },
  inactive: {
    backgroundColor: 'white',
  },
  iconActive: {
    alignItems: 'flex-end',
    transform: [{ rotateX: '180deg' }],
    padding: 5,
    color: '#30B0F1',
    right: 10,
    textAlignVertical: 'center',
  },
  iconInactive: {
    alignItems: 'flex-end',
    padding: 5,
    right: 10,
    textAlignVertical: 'center',
    color:'#1692BB'
  },
  info: {
    color: '#d3d3d3',
    
  },
})

// <Modal visible={this.state.UUImodalVisible} animationType='slide' animationDuration={1000} onRequestClose={() => this.UUIcloseModal()}>
// <View style={{height:100, width:100, backgroundColor:'red'}}>
// </View>
// </Modal>
