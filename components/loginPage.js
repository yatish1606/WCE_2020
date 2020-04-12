import React, {useState} from 'react'
import {Text,View, StatusBar, Dimensions, TouchableOpacity, TextInput, Modal, Image, Animated, StyleSheet} from 'react-native'
import * as Font from 'expo-font';
import Lottie from 'lottie-react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell,} from 'react-native-confirmation-code-field';
import Home from './homePage.js';


export const CELL_SIZE = 40;
export const CELL_BORDER_RADIUS = 5;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#159C16';
export const ACTIVE_CELL_BG_COLOR = '#F1FEF1';


const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 4;


const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};



const AnimatedExample = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
  
    const renderCell = ({index, symbol, isFocused}) => {
      const hasValue = Boolean(symbol);
      const animatedCellStyle = {
        backgroundColor: hasValue
          ? animationsScale[index].interpolate({
              inputRange: [0, 1],
              outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
            })
          : animationsColor[index].interpolate({
              inputRange: [0, 1],
              outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
            }),
        borderRadius: animationsScale[index].interpolate({
          inputRange: [0, 1],
          outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
        }),
        transform: [
          {
            scale: animationsScale[index].interpolate({
              inputRange: [0, 1],
              outputRange: [0.2, 1],
            }),
          },
        ],
      };
  
      
      setTimeout(() => {
        animateCell({hasValue, index, isFocused});
      }, 0);
  
      return (
        <AnimatedText
          key={index}
          style={[styles.cell, animatedCellStyle]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </AnimatedText>
      );
    };
  
    return (
  
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFiledRoot}
          keyboardType="number-pad"
          renderCell={renderCell}
        />
    );
  };
  




export default class Login extends React.Component{

    state = {
        fontLoaded:false,
        forgotPasswordModalVisible:false,
        verifCodeModalVisible:false,
    }

    async componentDidMount() {
        await Font.loadAsync({
          QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
          NunitoSemiBold: require('../assets/fonts/Nunito-SemiBold.ttf'),
          NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
          NunitoRegular: require('../assets/fonts/Nunito-Regular.ttf'),
          QuicksandMedium : require('../assets/fonts/Quicksand-Medium.ttf')
        });
    
        this.setState({ fontLoaded: true })
        
    
    }

    forgotPasswordCloseModal(){
        this.setState({forgotPasswordModalVisible:false})
    }

    forgotPasswordOpenModal(){
        this.setState({forgotPasswordModalVisible:true})
    }

    verifCodeCloseModal(){
        this.setState({verifCodeModalVisible:false})
    }

    verifCodeOpenModal(){
        this.setState({verifCodeModalVisible:true})
    }


    render(){

      const {navigate} = this.props.navigation.navigate;

      if(!this.state.fontLoaded){
        return(
          <View></View>
        )
      }


        return(
            <View style={{flex:1, backgroundColor:'#fff', marginTop:StatusBar.currentHeight}}>

               


                <View style={{alignItems:'center', width:Dimensions.get('window').width, paddingHorizontal:20, height:Dimensions.get('window').height - StatusBar.currentHeight - 70, backgroundColor:'#fff', }}>

                    <View style={{height:200, width:200, borderRadius:100, backgroundColor:'#17A7281a',alignItems:'center', justifyContent:'center', marginBottom:5, marginTop:15}}>
                        <Lottie
                                style={{
                                width: 200,
                                height: 200,
                                
                                }} 
                            source={require('../assets/plant.json')}
                            autoPlay loop
                        />
                    </View>

                    <Text style={{marginHorizontal:20,marginVertical:5, fontSize:25, fontFamily:'NunitoBold', color:'#1F941F'}}>
                        Hey, User12345
                    </Text>


                    <Text style={{fontSize:13, color:'#B8B7B7', fontFamily:'NunitoRegular', marginTop:5, marginBottom:5}}>Login to view your farm data and sensor readings</Text>

                    <TextInput style={{backgroundColor:'#F2F1F1', width:Dimensions.get('window').width - 80 , borderRadius:10, paddingHorizontal:10, height:40, fontSize:13, marginVertical:5, elevation:0}} placeholder='Username' placeholderTextColor='#d3d3d3' keyboardType='default' autoCompleteType='username' disableFullscreenUI={true}/>

                    <TextInput style={{backgroundColor:'#F2F1F1', width:Dimensions.get('window').width - 80 , borderRadius:10, paddingHorizontal:10, height:40, fontSize:13, marginVertical:5, elevation:0}} placeholder='Password' placeholderTextColor='#d3d3d3' keyboardType='default' secureTextEntry={true}/>

                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-end', width:Dimensions.get('window').width - 80}}>
                        <TouchableOpacity onPress={()=>{this.forgotPasswordOpenModal()}}>
                            <Text style={{fontSize:11, fontFamily:'NunitoRegular', color:'#18A113', marginVertical:3}}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{height:50, width:Dimensions.get('window').width - 80, borderRadius:25, elevation:1, backgroundColor:'#18A113', marginVertical:10, alignItems:'center', justifyContent:'center'}} onPress={()=>{this.props.navigation.navigate('Home')}}>
                            <Text style={{fontFamily:'NunitoSemiBold', fontSize:18, color:'#fff'}}>Login</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row', width:Dimensions.get('window').width - 80, alignItems:'center', justifyContent:'center'}}>
                        <View style={{height:0.7, backgroundColor:'#EEEEEE', width:Dimensions.get('window').width*0.35}}></View>
                        <Text style={{fontSize:12, fontFamily:'NunitoRegular', color:'#18A113', marginHorizontal:7,}} >or</Text>
                        <View style={{height:0.7, backgroundColor:'#EEEEEE', width:Dimensions.get('window').width*0.35}}></View>
                    </View>

                    <Text style={{fontSize:14, fontFamily:'NunitoRegular', color:'#d3d3d3',marginHorizontal:5, marginTop:10}}>Login using a social profile</Text>

                    <View style={{height:45, backgroundColor:'#fff', width:Dimensions.get('window').width-100, flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>

                                

                                <TouchableOpacity>
                                    <FontAwesome5 name='facebook' color='#287BBE' size={24}/>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <FontAwesome5 name='google' color='#F96363' size={22}/>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <FontAwesome5 name='twitter' color='#60D1D8' size={24}/>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <FontAwesome5 name='envelope' color='grey' size={24}/>
                                </TouchableOpacity>

                                
                    

                    </View>


                    <View style={{flexDirection:'column', alignItems:'center', width:Dimensions.get('window').width-80, marginTop:10}}>
                            <Text style={{fontSize:11, color:'#C9C9C9', fontFamily:'NunitoRegular'}}>Not User12345 ? </Text>
                            <TouchableOpacity>
                                <Text style={{fontSize:13, color:'#18a113', fontFamily:'NunitoSemiBold'}}>Sign in using a different profile</Text>
                            </TouchableOpacity>
                    </View>

                    
                    

                </View>



                <Modal visible={this.state.forgotPasswordModalVisible} onRequestClose={()=>this.forgotPasswordCloseModal()} animationType='slide' >

                    <View style={{flex:1, backgroundColor:'#fff', height:Dimensions.get('window').height}}>

                        <TouchableOpacity onPress={()=>{this.forgotPasswordCloseModal()}}>
                            <FontAwesome5 name='chevron-left' size={30} color='#d3d3d3' style={{marginTop:20, marginLeft:20,}}/>
                        </TouchableOpacity>


                        <View style={{alignItems:'center',}}>
                            <Image source={require('../assets/forgotgif.gif')} style={{height:200, width:200,marginLeft:50}}/>


                            <Text style={{fontSize:26, fontFamily:'QuicksandBold', color:'green', marginVertical:10}}>Forgot Password ?</Text>

                            <Text style={{fontSize:15, fontFamily:'NunitoRegular', color:'#CAC8C8', textAlign:'center', marginVertical:5,width:Dimensions.get('window').width-80}}>
                                Enter the email address associated with your account
                            </Text>

                            <TextInput style={{borderColor:'#CAC8C8', height:40, borderRadius:15, width:Dimensions.get('window').width - 80, borderWidth:0, marginVertical:10, paddingHorizontal:10, backgroundColor:'#f6f6f6'}} placeholder='myemailid@example.com' placeholderTextColor='#d3d3d3'/>
                            
                            <TouchableOpacity style={{marginVertical:10, height:50, width:Dimensions.get('window').width - 80, borderRadius:25, backgroundColor:'#209614', alignItems:'center', justifyContent:'center'}} onPress={()=>{this.verifCodeOpenModal()}}>
                                <Text style={{fontSize:16, fontFamily:'NunitoSemiBold', textAlign:'center', color:'#fff'}}>Send Verification Code</Text>
                            </TouchableOpacity>
                            
                        </View>


                        

                        

                    </View>


                </Modal>



                <Modal visible={this.state.verifCodeModalVisible} onRequestClose={()=>this.verifCodeCloseModal()} animationType='slide' >

                    <View style={{flex:1, backgroundColor:'#fff', height:Dimensions.get('window').height}}>

                        <TouchableOpacity onPress={()=>{this.verifCodeCloseModal()}}>
                            <FontAwesome5 name='chevron-left' size={30} color='#d3d3d3' style={{marginTop:20, marginLeft:20,}}/>
                        </TouchableOpacity>


                        <View style={{alignItems:'center',}}>

                            <Lottie
                              style={{
                              width: 200,
                              height: 200,
                              
                              }} 
                              source={require('../assets/emailverif.json')}
                              autoPlay loop
                          />
                            


                            <Text style={{fontSize:26, fontFamily:'QuicksandBold', color:'green', marginVertical:10}}>Verify your email</Text>

                            <Text style={{fontSize:15, fontFamily:'NunitoRegular', color:'#CAC8C8', textAlign:'center', marginVertical:5,width:Dimensions.get('window').width-80}}>
                                Please enter the 4 digit code we sent to myemail@example.com
                            </Text>

                            <AnimatedExample/>

                            <TouchableOpacity>
                                <Text style={{fontSize:14, fontFamily:'NunitoRegular', color:'#D0D1D0',marginTop:20}}>Resend Code</Text>
                            </TouchableOpacity>
                            
                            
                            
                            <TouchableOpacity style={{marginVertical:10, height:50, width:Dimensions.get('window').width - 80, borderRadius:25, backgroundColor:'#209614', alignItems:'center', justifyContent:'center', marginTop:20}} onPress={()=>{this.props.navigation.navigate('Home')}}>
                                <Text style={{fontSize:16, fontFamily:'NunitoSemiBold', textAlign:'center', color:'#fff'}}>Verify</Text>
                            </TouchableOpacity>
                            
                        </View>


                        

                        

                    </View>


                </Modal>


                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    codeFiledRoot: {
      height: CELL_SIZE,
      marginTop: 30,
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    cell: {
      marginHorizontal: 8,
      height: CELL_SIZE,
      width: CELL_SIZE,
      lineHeight: CELL_SIZE - 4,
      ...Platform.select({web: {lineHeight: 65}}),
      fontSize: 20,
      textAlign: 'center',
      borderRadius: CELL_BORDER_RADIUS,
      color: '#21A128',
      backgroundColor: '#fff',
  
      
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
  
      
      elevation: 3,
    },
  
    
  
    root: {
      minHeight: 800,
      padding: 20,
    },
    title: {
      paddingTop: 50,
      color: '#000',
      fontSize: 25,
      fontWeight: '700',
      textAlign: 'center',
      paddingBottom: 40,
    },
    icon: {
      width: 217 / 2.4,
      height: 158 / 2.4,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    subTitle: {
      paddingTop: 30,
      color: '#000',
      textAlign: 'center',
    },
    nextButton: {
      marginTop: 40,
      borderRadius: 80,
      height: 80,
      backgroundColor: '#3557b7',
      justifyContent: 'center',
      minWidth: 300,
      marginBottom: 100,
    },
    nextButtonText: {
      textAlign: 'center',
      fontSize: 20,
      color: '#fff',
      fontWeight: '700',
    },
  });
  