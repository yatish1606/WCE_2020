import React from 'react'
import {View, Text, TouchableOpacity, StatusBar, Dimensions,Image, ScrollView, Modal, StyleSheet, TextInput} from 'react-native';
import * as Font from 'expo-font';
import {FontAwesome5} from '@expo/vector-icons';
import ModalWrapper from 'react-native-modal-wrapper';
import NavBar from './navBar.js';
import Lottie from 'lottie-react-native';
import SwitchSelector from 'react-native-switch-selector';
import MotionSlider from 'react-native-motion-slider';
import NumericInput from 'react-native-numeric-input';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import { Dropdown } from 'react-native-material-dropdown';

let cropData = [{
      value: 'Wheat',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

class GridCard extends React.Component{
    render(){
        return(

            <View style={{width:Dimensions.get('window').width - 38, backgroundColor:'#fff', borderWidth:1, borderColor:'#f6f6f6', borderRadius:10,paddingVertical:10 }}> 

                <View style={{flex:1, width:Dimensions.get('window').width - 40,flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10, marginVertical:5}}>

                <Text style={{fontFamily:'NunitoSemiBold', fontSize:16, color:'green', marginHorizontal:10}}>Crop</Text>


                <TextInput style={{width:Dimensions.get('window').width * 0.6, height:35, backgroundColor:'#f6f6f6', paddingHorizontal:10, borderRadius:10, fontFamily:'NunitoRegular', fontSize:12}} placeholder='Enter crop' placeholderTextColor='#929290' />

                </View>


                <View style={{flex:1, width:Dimensions.get('window').width - 40,flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10, marginVertical:5}}>

                <Text style={{fontFamily:'NunitoSemiBold', fontSize:16, color:'green', marginHorizontal:10}}>Soil</Text>


                <TextInput style={{width:Dimensions.get('window').width * 0.6, height:35, backgroundColor:'#f6f6f6', paddingHorizontal:10, borderRadius:10, fontFamily:'NunitoRegular', fontSize:12}} placeholder='Enter soil type' placeholderTextColor='#929290' />
                </View>


            </View>

        )
    }
}


const CONTENT = [
  {
    title: 'Crop Details for Grid 1',
    content :  <GridCard/> ,
  },
  {
    title: 'Crop Details for Grid 2',
    content :  <GridCard/> ,
  },
  {
    title: 'Crop Details for Grid 3',
    content :  <GridCard/> ,
  },
  {
    title: 'Crop Details for Grid 4',
    content :  <GridCard/> ,
  },
  
];



export default class OnBoard extends React.Component {

    state = {
        isActiveOne:true,
        isActiveTwo:false,
        isActiveThree:false,
        currentState:1,
        disablePrev:true,
        nextIsGo:false,
        fontLoaded:false,
        activeSections:[],
        multipleSelect:false
    } 


    async componentDidMount() {
        await Font.loadAsync({
          QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
          NunitoSemiBold: require('../assets/fonts/Nunito-SemiBold.ttf'),
          NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
          NunitoRegular: require('../assets/fonts/Nunito-Regular.ttf'),
        });
    
        this.setState({fontLoaded:true, isActiveOne: true , isActiveTwo:false, isActiveThree:false, disablePrev:true})
    
    }

    nextState(){
        this.setState({currentState : this.state.currentState+1})
        console.log(this.state.currentState)

        

        if(this.state.currentState === 1){
            this.setState({isActiveTwo:true, isActiveOne:false, isActiveThree:false, disablePrev:false})
        }

        if(this.state.currentState === 2){
            this.setState({isActiveTwo:false, isActiveOne:false, isActiveThree:true, nextState:true, nextIsGo:true})
        }

        if(this.state.currentState === 3){
            ()=>{this.props.navigation.navigate('NavBar')}
        }
    }

    prevState(){
        this.setState({currentState : this.state.currentState-1, nextIsGo:false})
        console.log(this.state.currentState)

        if(this.state.currentState === 2){
            this.setState({isActiveTwo:false, isActiveOne:true, isActiveThree:false, disablePrev:true})
        }

        if(this.state.currentState === 3){
            this.setState({isActiveTwo:true, isActiveOne:false, isActiveThree:false})
        }

        
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
        <Animatable.View
          style={styles.info}
          animation={isActive ? undefined : undefined}>
          {section.content}
        </Animatable.View>
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

        const {navigate} = this.props.navigation.navigate;
        const { multipleSelect, activeSections } = this.state;

        

        return(
            <View>

            <View style={{ width:Dimensions.get('window').width, height:Dimensions.get('window').height,marginTop:StatusBar.currentHeight, zIndex:10, backgroundColor:'#fff'}}>
            <View style={{ width:Dimensions.get('window').width, height:Dimensions.get('window').height *0.1, flexDirection:'row', alignItems:'center', top:0, justifyContent:'center'}}>

                <TouchableOpacity style={this.state.isActiveOne ? styles.oneIsActive : styles.oneIsInactive} onPress={()=>this.setState({isActiveOne:true, isActiveTwo:false, isActiveThree:false})}>
                    <FontAwesome5 name='user-cog' size={18} color={this.state.isActiveOne ? 'green' : '#d3d3d3'} />
                </TouchableOpacity>

                <View style={{height:0.7, width:Dimensions.get('window').width * 0.2, backgroundColor:'#d3d3d3'}}>
                    
                </View>

                <TouchableOpacity style={this.state.isActiveTwo ? styles.twoIsActive : styles.twoIsInactive} onPress={()=>this.setState({isActiveOne:false, isActiveTwo:true, isActiveThree:false})}>
                    <FontAwesome5 name='cubes' size={18} color={this.state.isActiveTwo ? 'green' : '#d3d3d3'} />
                </TouchableOpacity>

                <View style={{height:0.7, width:Dimensions.get('window').width * 0.2, backgroundColor:'#d3d3d3'}}>
                </View>

                <TouchableOpacity style={this.state.isActiveThree ? styles.threeIsActive : styles.threeIsInactive} onPress={()=>this.setState({isActiveOne:false, isActiveTwo:false, isActiveThree:true})}>
                    <FontAwesome5 name='map-marker-alt' size={18} color={this.state.isActiveThree ? 'green' : '#d3d3d3'} />
                </TouchableOpacity>



            </View>



            <ModalWrapper visible={this.state.isActiveOne} isNative={false} animateOnMount={true} position='right' showOverlay={false} animationDuration={0}>

                <View style={{width:Dimensions.get('window').width,backgroundColor:'#fff', height:Dimensions.get('window').height * 0.78}}>
                    <ScrollView >
                    <View style={{width:Dimensions.get('window').width, height:120, alignItems:'center', flexDirection:'row', paddingHorizontal:30, marginTop:10}}>

                        <View style={{flex:5}}>
                            <Text style={{fontSize:30, fontFamily:'QuicksandBold', color:'green'}}>Hey There !</Text>
                            <Text style={{fontFamily:'NunitoRegular', fontSize:13, color:'#CFD2CF', marginTop:10}}>Enter a few details about yourself to get started!</Text>
                        </View>

                        <Lottie
                        style={{
                        width: 100,
                        height: 100,
                        flex:3
                        }} 
                        source={require('../assets/user.json')}
                        autoPlay loop
                        />


                    </View>

                    <View style={{width:Dimensions.get('window').width, height:80,  paddingHorizontal:30, marginTop:10,}}>

                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name='user-alt' size={16} color='#959795'/>
                        <Text style={{fontSize:14, fontFamily:'NunitoSemiBold', color:'green', marginVertical:5, marginHorizontal:5}}>Name</Text>
                        </View>


                        <TextInput style={{width:Dimensions.get('window').width - 60, height:35, borderRadius:20, backgroundColor:'#f6f6f6', marginVertical:5, paddingHorizontal:10,fontSize:12, fontFamily:'NunitoRegular'}} placeholder='Enter your name' placeholderTextColor='#BABCBA'/>
                        

                    </View>


                    <View style={{width:Dimensions.get('window').width, height:60,  paddingHorizontal:30,  flexDirection:'row', alignItems:'center'}}>

                        
                        <FontAwesome5 name='tag' size={16} color='#959795'/>
                        <Text style={{fontSize:14, fontFamily:'NunitoSemiBold', color:'green', marginHorizontal:5}}>Age</Text>
                        


                        <TextInput style={{width:Dimensions.get('window').width * 0.3, height:35, borderRadius:20, backgroundColor:'#f6f6f6',  paddingHorizontal:10,fontSize:12, fontFamily:'NunitoRegular'}} placeholder='Enter your age' placeholderTextColor='#BABCBA' keyboardType='numeric'/>
                        

                    </View>


                    <View style={{width:Dimensions.get('window').width, height:80,  paddingHorizontal:30, marginTop:10,}}>

                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name='envelope-square' size={16} color='#959795'/>
                        <Text style={{fontSize:14, fontFamily:'NunitoSemiBold', color:'green', marginVertical:5, marginHorizontal:5}}>E-Mail ID</Text>
                        </View>


                        <TextInput style={{width:Dimensions.get('window').width - 60, height:35, borderRadius:20, backgroundColor:'#f6f6f6', marginVertical:5, paddingHorizontal:10,fontSize:12, fontFamily:'NunitoRegular'}} placeholder='Enter your email ID' placeholderTextColor='#BABCBA' keyboardType='email-address'/>
                        

                    </View>


                    <View style={{width:Dimensions.get('window').width, height:120,  paddingHorizontal:30, marginTop:10,}}>

                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name='user-cog' size={16} color='#959795'/>
                        <Text style={{fontSize:14, fontFamily:'NunitoSemiBold', color:'green', marginVertical:5, marginHorizontal:5}}>Supply Chain</Text>
                        </View>

                        <Text style={{fontSize:12, fontFamily:'NunitoRegular', color:'#d3d3d3', marginVertical:5,}}>Are you an entrepreneur dealing with the supply chain of farm produce?</Text>

                        <SwitchSelector options={[
                            { label: "Farmer", value: "f", customIcon:<FontAwesome5 name="tractor" size={15} color='green' style={{marginVertical:2, marginHorizontal:5}} /> ,activeColor:'#0F8E0F5a' },
                            {label: "Entrepreneur", value: "e", customIcon:<FontAwesome5 name="user-tie" size={15} color='green' style={{marginVertical:2, marginHorizontal:5}} /> ,activeColor:'#0F8E0F5a' }
                            ]} initial={0}
                            style={{paddingVertical:5,width:Dimensions.get('window').width - 60}}
                            fontSize={13}
                            textColor='#d3d3d3'
                            //buttonColor='#A0AFF7'
                            fontFamily='NunitoSemiBold'


                        />
                        
                        

                    </View>



                    </ScrollView>
                </View>
            </ModalWrapper>



            <ModalWrapper visible={this.state.isActiveTwo} isNative={false} animateOnMount={true} position='right' showOverlay={false} animationDuration={400}>

                <View style={{width:Dimensions.get('window').width,backgroundColor:'#fff', height:Dimensions.get('window').height * 0.78}}>
                    <ScrollView contentContainerStyle={{paddingBottom:50}} >
                    <View style={{width:Dimensions.get('window').width, height:120, alignItems:'center', flexDirection:'row', paddingHorizontal:30, marginTop:10}}>



                        <Lottie
                        style={{
                        width: 100,
                        height: 100,
                        flex:3
                        }} 
                        source={require('../assets/calculate.json')}
                        autoPlay loop
                        />


                        <View style={{flex:5}}>
                            <Text style={{fontSize:30, fontFamily:'QuicksandBold', color:'green'}}>Hey User12345 !</Text>
                            <Text style={{fontFamily:'NunitoRegular', fontSize:13, color:'#CFD2CF', marginTop:10}}>Enter a few details about your farm to get started!</Text>
                        </View>

                        


                    </View>

                    <View style={{width:Dimensions.get('window').width, height:60,  paddingHorizontal:30, marginTop:10,alignItems:'center'}}>

                        <View style={{flexDirection:'row', alignItems:'center', width:Dimensions.get('window').width - 60, marginHorizontal:20}}>
                        <FontAwesome5 name='arrows-alt' size={16} color='#959795' />
                        <Text style={{fontSize:14, fontFamily:'NunitoSemiBold', color:'green', marginVertical:5, marginHorizontal:5}}>Length</Text>
                        </View>

                        <MotionSlider
                            height={25}
                            width={Dimensions.get('window').width}
                            min={0}
                            max={400}
                            value={200}
                            decimalPlaces={0}
                            backgroundColor={['green']}
                            fontSize={10}
                            fontFamily={'NunitoSemiBold'}
                            borderRadius={15}
                            style={{marginVertical:5}}
                        //  onValueChanged={(value) => console.log(value)}
                        //  onPressIn={() => console.log('Pressed in')}
                        //  onPressOut={() => console.log('Pressed out')}
                        //  onDrag={() => console.log('Dragging')}
                        />

                    </View>

                    <View style={{width:Dimensions.get('window').width, height:60,  paddingHorizontal:30, marginTop:10,alignItems:'center'}}>

                        <View style={{flexDirection:'row', alignItems:'center', width:Dimensions.get('window').width - 60, marginHorizontal:20}}>
                        <FontAwesome5 name='arrows-alt' size={16} color='#959795' />
                        <Text style={{fontSize:14, fontFamily:'NunitoSemiBold', color:'green', marginVertical:5, marginHorizontal:5}}>Width</Text>
                        </View>

                        <MotionSlider
                            height={25}
                            width={Dimensions.get('window').width}
                            min={0}
                            max={400}
                            value={200}
                            decimalPlaces={0}
                            backgroundColor={['green']}
                            fontSize={10}
                            fontFamily={'NunitoSemiBold'}
                            borderRadius={15}
                            style={{marginVertical:5}}
                        //  onValueChanged={(value) => console.log(value)}
                        //  onPressIn={() => console.log('Pressed in')}
                        //  onPressOut={() => console.log('Pressed out')}
                        //  onDrag={() => console.log('Dragging')}
                        />

                    </View>


                    <View style={{width:Dimensions.get('window').width - 40, marginHorizontal:20, height:0.7, backgroundColor:'#d3d3d3', borderRadius:1, marginVertical:8}}></View>


                    <View style={{width:Dimensions.get('window').width, height:60,  paddingHorizontal:30,  flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <FontAwesome5 name='tint' size={16} color='#959795'/>
                        <Text style={{fontSize:14, fontFamily:'NunitoSemiBold', color:'green', marginHorizontal:5}}>Water Tank Capacity</Text>
                        </View>
                        


                        <TextInput style={{width:Dimensions.get('window').width * 0.4, height:35, borderRadius:20, backgroundColor:'#f6f6f6',  paddingHorizontal:10,fontSize:12, fontFamily:'NunitoRegular'}} placeholder='Enter water capacity' placeholderTextColor='#BABCBA' keyboardType='numeric'/>
                        

                    </View>

                    <View style={{width:Dimensions.get('window').width, height:60,  paddingHorizontal:30,  flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name='th-large' size={16} color='#959795'/>
                        <Text style={{fontSize:14, fontFamily:'NunitoSemiBold', color:'green', marginHorizontal:5}}>Number of Grids</Text>
                        </View>
                        

                        
                        <NumericInput
                            value={this.state.value} 
                            onChange={value => this.setState({value})}
                            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                            totalWidth={100}
                            totalHeight={30}
                            iconSize={18}
                            step={1}
                            valueType='integer'
                            rounded
                            textColor='#AAADAA'
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor='#098609'
                            leftButtonBackgroundColor='#098609'
                            type='plus-minus'
                            sepratorWidth={0}
                            borderColor='white'
                            fontSize={20}
                            marginHorizontal={10}
                            
                        />
                        
                        

                    </View>


                    <View style={{width:Dimensions.get('window').width - 40, marginHorizontal:20, height:0.7, backgroundColor:'#d3d3d3', borderRadius:1, marginVertical:8}}></View>

                    <View style={{ width:Dimensions.get('window').width - 40, marginHorizontal:20, flexDirection:'column', flexDirection:'row' ,alignItems:'center'}}>

                        
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <FontAwesome5 name='info-circle' size={25} color='#D19814' />
                        </View>

                        <View style={{ flex:5, paddingHorizontal:10, }}>
                            
                            <Text style={{fontSize:20, fontFamily:'NunitoSemiBold', color:'#959795',}}>Grid Details</Text>
                            <Text style={{fontSize:12, fontFamily:'NunitoRegular', color:'#ABABAB', marginVertical:5, textAlign:'justify'}}>Please input the details of crops with respect to each grid. You may use predetermined models to select soil and water configs automatically</Text>
                        </View>

                       

                    </View>

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
                </View>
            </ModalWrapper>


            <ModalWrapper visible={this.state.isActiveThree} isNative={false} animateOnMount={true} position='right' showOverlay={false} animationDuration={400}>

                <View style={{width:Dimensions.get('window').width,backgroundColor:'red', height:Dimensions.get('window').height * 0.78, alignItems:'center'}}>

                <View style={{backgroundColor:'cyan', flex:7, width:Dimensions.get('window').width}}>

                    
                    <View style={{position:'absolute', top:10, width:Dimensions.get('window').width - 60, alignItems:'center', zIndex:20, flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>
                    <TextInput style={{height:40,  marginRight:15, borderRadius:20, backgroundColor:'#fff', width:Dimensions.get('window').width - 80, alignItems:'center', justifyContent:'center', paddingHorizontal:10, fontFamily:'NunitoRegular', fontSize:12, elevation:2}} placeholder='Search for your location' placeholderTextColor='#d3d3d3' /> 
                        
                    <TouchableOpacity style={{height:30, width:30, borderRadius:15, backgroundColor:'#fff', alignItems:'center', justifyContent:'center', elevation:5}}> 
                        <FontAwesome5 name='question' size={15} color='#198EB4'/>
                    </TouchableOpacity>

                    </View>

                    <Image source={require('../assets/temp_loc.png')} />

                    


                </View>

                <View style={{flex:2 ,width:Dimensions.get('window').width, backgroundColor:'#fff', bottom:0,flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>

                    

                        <Lottie
                            style={{
                            width:50,
                            height:50,
                            flex:2,
                            
                            }} 
                            source={require('../assets/map.json')}
                            autoPlay loop
                        />

                        <View style={{flex:4, justifyContent:'center', paddingRight:20, alignItems:'center'}}>

                            <Text style={{fontFamily:'NunitoSemiBold', fontSize:18, color:'#676767', width:Dimensions.get('window').width * 0.6}}>Please help us locate you</Text>

                            <Text style={{fontFamily:'NunitoRegular', fontSize:12, color:'#9EA19E',width:Dimensions.get('window').width * 0.6, textAlign:'justify', marginTop:10}}>Simply drag the map pin to your location, or search your location in the search bar</Text>

                        </View>

                    

                    
                </View>
                   
                </View>
            </ModalWrapper>


            
            
           
            


            <View style={{height:Dimensions.get('window').height * 0.09, width:Dimensions.get('window').width, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10,marginBottom:20}}>

                <TouchableOpacity style={{height:Dimensions.get('window').height * 0.06, width:50, borderRadius:Dimensions.get('window').height * 0.03,alignItems:'center', justifyContent:'center'}} onPress={()=>this.prevState()} disabled={this.state.disablePrev}>

                    { this.state.disablePrev ? 

                     <View></View>
                    
                    : 
                    
                    <FontAwesome5 name='long-arrow-alt-left' size={40} color='#d3d3d3'/> 

                }

                </TouchableOpacity>


                <TouchableOpacity style={this.state.nextIsGo ? styles.nextIsGo : styles.nextIsArrow} onPress = {()=>this.nextState()}>

                { this.state.nextIsGo ? 

                     <Text style={{fontFamily:'NunitoSemiBold', color:'#fff', fontSize:14, textAlignVertical:'center'}}>Done</Text>
                    
                    : 
                    
                    <FontAwesome5 name='long-arrow-alt-right' size={40} color='#d3d3d3'/> 

                }
                 

                </TouchableOpacity>

            </View>
            </View>

            
            
            
            </View>

        )
    }
}



const styles = StyleSheet.create({

    oneIsActive:{
        width:40, height:40,  borderRadius:20, alignItems:'center', justifyContent:'center', marginHorizontal:10,
        borderWidth:2,
        borderColor:'green'
    },
    oneIsInactive:{
        width:40, height:40,  borderRadius:20, alignItems:'center', justifyContent:'center', marginHorizontal:10,
        borderWidth:1,
        borderColor:'#d3d3d3'
    },
    twoIsActive:{
        width:40, height:40,  borderRadius:20, alignItems:'center', justifyContent:'center', marginHorizontal:10,
        borderWidth:2,
        borderColor:'green'
    },
    twoIsInactive:{
        width:40, height:40,  borderRadius:20, alignItems:'center', justifyContent:'center', marginHorizontal:10,
        borderWidth:1,
        borderColor:'#d3d3d3'
    },
    threeIsActive:{
        width:40, height:40,  borderRadius:20, alignItems:'center', justifyContent:'center', marginHorizontal:10,
        borderWidth:2,
        borderColor:'green'
    },
    threeIsInactive:{
        width:40, height:40,  borderRadius:20, alignItems:'center', justifyContent:'center', marginHorizontal:10,
        borderWidth:1,
        borderColor:'#d3d3d3'
    },
    nextIsArrow:{
        height:Dimensions.get('window').height * 0.06, width:50, borderRadius:Dimensions.get('window').height * 0.03,alignItems:'center', justifyContent:'center', 
    },
    nextIsGo:{
        height:Dimensions.get('window').height * 0.065, width:100, borderRadius:Dimensions.get('window').height * 0.04,alignItems:'center', justifyContent:'center', marginBottom:5,
        backgroundColor:'green'
    },
    header: {
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    //borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
    marginTop: 3,
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    width:Dimensions.get('window').width - 40,
    paddingVertical:5,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 17,
    paddingRight: 10,
    width: Dimensions.get('window').width - 80,
    fontFamily:'NunitoSemiBold',
    color: '#9DA09D',
    marginLeft:15
    
  },
  content: {
    marginHorizontal:20,
    backgroundColor: '#fff',
    flexDirection: 'row',
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
    color: '#E0B814',
    right: 10,
    textAlignVertical: 'center',
  },
  iconInactive: {
    alignItems: 'flex-end',
    padding: 5,
    right: 10,
    textAlignVertical: 'center',
    color:'#D19814'
  },
  info: {
    color: '#d3d3d3',
    
  },
    
})