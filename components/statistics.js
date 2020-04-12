import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, Dimensions,Image, ScrollView, Modal} from 'react-native';
import * as Font from 'expo-font';
import {FontAwesome5} from '@expo/vector-icons';
import SwitchSelector from 'react-native-switch-selector';
import Lottie from 'lottie-react-native';
import SlidingPanel from 'react-native-sliding-up-down-panels';
import DatepickerRange from 'react-native-range-datepicker';
import { AreaChart, Grid, YAxis } from 'react-native-svg-charts';
import { Circle, Path, Rect } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts'

class PieChartWithDifferentArcs extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                value: 40,
                svg: { fill: '#1DAD17' },
                arc: { outerRadius: '125%', cornerRadius: 10,  }
            },
            {
                key: 2,
                value: 60,
                svg: { fill: '#1DAD172a' },
                arc: { outerRadius: '100%', cornerRadius: 4,  }
            },
            
        ]


       

        return (
            <PieChart
                style={{ height: 200, width:200, margin:10 }}
                outerRadius={'70%'}
                innerRadius={10}
                data={data}
                
            />
                
           
            
            
        );
    }
}   


class TempGraph extends React.Component{

    state = {
        tempData:[23,24,27,32,28,33,36,39,40,36,35,29,33,36],
    }

    render(){

        const Decorator = ({ x, y, data }) => {
            return this.state.tempData.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 4 }
                    stroke={ '#E82C19' }
                    fill={ 'white' }
                    strokeWidth={1.5}
                />
            ))
        }

        const Line = ({ line }) => (
            <Path
                d={ line }
                stroke={ '#E82C19' }
                fill={ 'none' }
                strokeWidth={2}
            />
        )



        
        return(
            <View style={{height:200, marginVertical:10, backgroundColor:'#fff', borderRadius:10, flexDirection:'row',  justifyContent:'center', paddingVertical:5, alignItems:'center'}}>

                  <YAxis
                    data={this.state.tempData}
                    style={{flex:0.5, alignItems:'center', justifyContent:'center', backgroundColor:'white',height:180, borderRadius:10, marginTop:20,marginRight:5}}
                    contentInset={{top:10, bottom:10}}
                    svg={{fontSize: 10, fill: 'grey'}}
                    />

                
                  <AreaChart
                    style={{ height: 200, flex:8, width:Dimensions.get('window').width - 100, borderRadius:40, }}
                    data={ this.state.tempData }
                    svg={{ fill: '#F663553a' }}
                    contentInset={{ top: 20, bottom: 30 }}
                    yMax={45}
                    numberOfTicks={0}
                    
                  >
                <Grid/>
                <Line/>
                <Decorator/>
                </AreaChart>
                

            </View>
        )
    }
}




class MoistureGraph extends React.Component{

    state = {
        moistureData:[12,15,12,13,10,16,14,17,18,19,15,13,17],
    }
    render(){

        const Decorator = ({ x, y, data }) => {
            return this.state.moistureData.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 4 }
                    stroke={ '#19A2E8' }
                    fill={ 'white' }
                    strokeWidth={1.5}
                />
            ))
        }

        const Line = ({ line }) => (
            <Path
                d={ line }
                stroke={ '#19A2E8' }
                fill={ 'none' }
                strokeWidth={2}
            />
        )



        
        return(
            <View style={{height:200, marginVertical:10, backgroundColor:'#fff', borderRadius:10, flexDirection:'row',  justifyContent:'center', paddingVertical:5, alignItems:'center'}}>

                  <YAxis
                    data={this.state.moistureData}
                    style={{flex:0.5, alignItems:'center', justifyContent:'center', backgroundColor:'white',height:180, borderRadius:10, marginTop:20,marginRight:5}}
                    contentInset={{top:10, bottom:10}}
                    svg={{fontSize: 10, fill: 'grey'}}
                    />

                
                  <AreaChart
                    style={{ height: 200, flex:8, width:Dimensions.get('window').width - 100, borderRadius:40, }}
                    data={ this.state.moistureData }
                    svg={{ fill: '#27AEF33a' }}
                    contentInset={{ top: 20, bottom: 30 }}
                    yMax={20}
                    numberOfTicks={0}
                    
                    
                  >
                <Grid/>
                <Line/>
                <Decorator/>
                </AreaChart>
                

            </View>
        )
    }
}



class LightGraph extends React.Component{

    state = {
        lightData:[55,46,50,56,59,62,60,55,52,47,45,47,43,48,50,44],
    }
    render(){

        const Decorator = ({ x, y, data }) => {
            return this.state.lightData.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 4 }
                    stroke={ '#FBE392' }
                    fill={ 'white' }
                    strokeWidth={1.5}
                />
            ))
        }

        const Line = ({ line }) => (
            <Path
                d={ line }
                stroke={ '#FBE392' }
                fill={ 'none' }
                strokeWidth={2}
            />
        )



        
        return(
            <View style={{height:200, marginVertical:10, backgroundColor:'#fff', borderRadius:10, flexDirection:'row',  justifyContent:'center', paddingVertical:5, alignItems:'center'}}>

                  <YAxis
                    data={this.state.lightData}
                    style={{flex:0.5, alignItems:'center', justifyContent:'center', backgroundColor:'white',height:180, borderRadius:10, marginTop:20,marginRight:5}}
                    contentInset={{top:10, bottom:10}}
                    svg={{fontSize: 10, fill: 'grey'}}
                    />

                
                  <AreaChart
                    style={{ height: 200, flex:8, width:Dimensions.get('window').width - 100, borderRadius:40, }}
                    data={ this.state.lightData }
                    svg={{ fill: '#FBE3923a' }}
                    contentInset={{ top: 20, bottom: 30 }}
                    yMax={70}
                    numberOfTicks={0}
                    
                  >
                <Grid/>
                <Line/>
                <Decorator/>
                </AreaChart>
                

            </View>
        )
    }
}





export default class Statistics extends React.Component{


    state={
        fontLoaded:false,
        startDate:'',
        untilDate:'',
        dateModalVisible:false,
        whichData:'t',
        
    
      }
    
    
      async componentDidMount() {
        await Font.loadAsync({
          QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
          NunitoSemiBold: require('../assets/fonts/Nunito-SemiBold.ttf'),
          NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
        });
    
        this.setState({ fontLoaded: true })
    
    }


    dateopenModal() {
        this.setState({dateModalVisible:true});
      }
    
    datecloseModal() {
        this.setState({dateModalVisible:false});
      }
    

    
    render(){


       





        return(
            <View style={{marginTop:StatusBar.currentHeight, backgroundColor:'#1F1C1C', flex:1}}>


            <View style={{ marginHorizontal:15, marginTop:15, position:'absolute', }}>
              <TouchableOpacity style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center',}} onPress={()=>{this.props.navigation.navigate('Home')}}  >
              <FontAwesome5 name="chevron-left" size={30} color={'#d3d3d3'} />
              </TouchableOpacity>
            </View>


            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:30, color:'#D3D5D5', fontFamily:'QuicksandBold', textAlign:'center', marginTop:60}}>
                    Statistics
                </Text>
            </View>

            <View style={{height:Dimensions.get('window').height*0.25 , marginHorizontal:20, backgroundColor:'#2D2F2F', borderRadius:10, marginTop:20, marginBottom:5, alignItems:'center', justifyContent:'space-around'}}>

                <Text style={{fontSize:17, fontFamily:'NunitoSemiBold', color:'#C5C6C6', textAlign:'center', marginTop:10}}>One Week Average Readings</Text>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', width:Dimensions.get('window').width - 200, marginVertical:5}}>
                    <Text style={{fontSize:13, fontFamily:'NunitoBold', color:'#12C9A4', textAlign:'center', marginVertical:5}}>from</Text>
                    <Text style={{fontSize:13, fontFamily:'NunitoBold', color:'#C5C6C6', textAlign:'center', marginVertical:5, paddingHorizontal:5,paddingVertical:2, backgroundColor:'#999A9A1c', borderRadius:10}}>20/3</Text>
                    <Text style={{fontSize:13, fontFamily:'NunitoBold', color:'#12C9A4', textAlign:'center', marginVertical:5}}>to</Text>
                    <Text style={{fontSize:13, fontFamily:'NunitoBold', color:'#C5C6C6', textAlign:'center', marginVertical:5, paddingHorizontal:5,paddingVertical:2, backgroundColor:'#999A9A1c', borderRadius:10}}>26/3</Text>
                </View>
                

                
                <View style={{marginBottom:5,alignItems:'center'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-around', backgroundColor:'#1F1C1C', width:Dimensions.get('window').width - 50, alignItems:'center', paddingVertical:5, borderTopRightRadius:5, borderTopLeftRadius:5, paddingTop:10}}>
                        <FontAwesome5 name='thermometer-half' size={20} color='#FB675E' style={{margin:5}}/>
                        <FontAwesome5 name='tint' size={20} color='#0E9EEE' style={{margin:5}}/>
                        <FontAwesome5 name='lightbulb' size={20} color='#EEA70E' style={{margin:5}}/>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly', backgroundColor:'#1F1C1C', width:Dimensions.get('window').width - 50, alignItems:'center', paddingVertical:5, borderBottomLeftRadius:5, borderBottomRightRadius:5, }}>
                        <Text style={{fontFamily:'NunitoBold', fontSize:20, color:'#FB675E', marginHorizontal:5}}>35 °C</Text>
                        <View style={{width:1, height:30, backgroundColor:'#4A4B4B', borderRadius:1}}></View>
                        <Text style={{fontFamily:'NunitoBold', fontSize:20, color:'#0E9EEE', marginHorizontal:5}}>35 %</Text>
                        <View style={{width:1, height:30, backgroundColor:'#4A4B4B', borderRadius:1}}></View>
                        <Text style={{fontFamily:'NunitoBold', fontSize:20, color:'#EEA70E', marginHorizontal:5}}>35 W/s</Text>
                        
                    </View>

                </View>
                   
                
                
            </View>

            <View style={{height:70, marginHorizontal:20, borderRadius:10, backgroundColor:'#2D2F2F', marginVertical:5, flexDirection:'row', justifyContent:'space-around', paddingHorizontal:10, alignItems:'center'}}>
                <FontAwesome5 name='question-circle' size={20} color='#1BC415'/>
                <View style={{marginHorizontal:10}}>
                    <Text style={{color:'#15C496', fontFamily:'NunitoSemiBold', fontSize:16}}>Know More</Text>
                    <Text style={{color:'#A2A5A4', fontFamily:'NunitoSemiBold', fontSize:10, maxWidth:Dimensions.get('window').width - 140}}>A deeper insight into how statistics are collected and calculated</Text>
                </View>
                <TouchableOpacity style={{height:30, width:30, borderRadius:15,backgroundColor:'#ffffff1b', alignItems:'center', justifyContent:'center'}} underlayColor='#fff'>
                    <FontAwesome5 name='chevron-right' size={16} color='#d3d3d3'/>
                </TouchableOpacity>
            </View>


            <SlidingPanel
            headerLayoutHeight = {280}
            headerLayout = { () =>
                <View style={{width:Dimensions.get('window').width, height: 280, backgroundColor: '#fff',  alignItems: 'center',borderTopRightRadius:40, borderTopLeftRadius:40, marginTop:3*StatusBar.currentHeight,  }}>
                 
                  <FontAwesome5 name='chevron-up' size={20} color='#d3d3d3' style={{marginVertical:10}} /> 

                  <Text style={{color:'#F25454', fontSize:22, fontFamily:'NunitoSemiBold'}}>Advanced Statistics</Text>

                  <View style={{flexDirection:'row', backgroundColor:'#fff', marginHorizontal:20, marginTop:20}}>
                    <Image
                    source={require('../assets/analyt.png')}
                    style={{width:100, height:100, flex:2.5}}
                    resizeMode='contain'
                    />
                    <Text style={{fontSize:12, color:'#ababab', fontFamily:'NunitoSemiBold', flex:3, marginLeft:5, textAlign:'center', textAlignVertical:'center'}}>View advanced charts depicting sensor data over the last few timelines</Text>
                  </View>

                  

                </View>
            }
            slidingPanelLayout = { () =>
                <View style={{width:Dimensions.get('window').width , height:Dimensions.get('window').height - 280, backgroundColor: '#fff', alignItems: 'center', paddingHorizontal:20,  }}>

                  <View style={{height:2, width:Dimensions.get('window').width - 60, backgroundColor:'#ECEAEA', marginTop:10}}></View>

                  <ScrollView contentContainerStyle={{alignItems:'center', paddingBottom:30}}>

                  <View style={{width:Dimensions.get('window').width - 60, flexDirection:'row',borderRadius:10,backgroundColor:'#17AD732a',marginVertical:15,paddingHorizontal:10, alignItems:'center'}}>
                    <TouchableOpacity style={{marginVertical:10, alignItems:'center', flexDirection:'row',marginLeft:5, }} onPress={()=>{this.dateopenModal()}}>
                        <FontAwesome5 name='calendar-alt' size={20} color='#1FA48E'/>
                        <Text style={{marginHorizontal:5, marginVertical:5, fontSize:12, color:'#878787', fontFamily:'NunitoBold'}}>Select Date Range</Text>
                    </TouchableOpacity>
                  </View> 

                  



                  <Text style={{fontFamily:'NunitoBold', fontSize:16, color:'green', marginBottom:15, marginTop:5,  width:Dimensions.get('window').width - 60,borderRadius:5, textAlign:'center', height:24, }}>Sensor Data</Text>


                  <SwitchSelector options={[
                     { label: "Temperature", value: "t", customIcon:<FontAwesome5 name="thermometer-half" size={15} color='#EE4541' style={{marginVertical:2, marginHorizontal:5}}  /> ,activeColor:'#FCA7A5' },
                     {label: "Moisture", value: "m", customIcon:<FontAwesome5 name="tint" size={15} color='#419EEE' style={{marginVertical:2, marginHorizontal:5}} />, activeColor:'#92CBFB'},
                     {label: "Light", value: "l", customIcon:<FontAwesome5 name="lightbulb" size={15} color='#F3C31E' style={{marginVertical:2, marginHorizontal:5}}  /> , activeColor:'#FBE392'}
                     ]} initial={0}
                     style={{width:Dimensions.get('window').width - 60, marginHorizontal:5}}
                     fontSize={13}
                     textColor='#CACAC9'
                     onPress={(value)=>this.setState({whichData: value })}
                     fontFamily='NunitoSemiBold'
                  /> 

                {this.state.whichData === 't' ? <TempGraph/> : this.state.whichData === 'm' ? <MoistureGraph/> : <LightGraph/>}


                <View style={{height:2, width:Dimensions.get('window').width - 60, backgroundColor:'#ECEAEA', marginTop:10}}></View>

                <Text style={{fontFamily:'NunitoBold', fontSize:16, color:'green', marginVertical:5,  width:Dimensions.get('window').width - 60,borderRadius:5, textAlign:'center', height:24, marginTop:20,}}>Energy Analytics</Text>
                <PieChartWithDifferentArcs/> 
                <Text style={{fontFamily:'NunitoSemiBold', fontSize:12, color:'green', marginVertical:5,  width:Dimensions.get('window').width - 60,borderRadius:5, textAlign:'center', marginTop:10,marginBottom:40}}>Your sensors used 40% renewable energy collected form solar panels!</Text>
                
                      
                  </ScrollView>  
                   
                  
                  
                  
                </View>
            }
            />



            <Modal visible={this.state.dateModalVisible} animationType='fade' onRequestClose={() => this.datecloseModal()}>
                <View style={{flex:1,backgroundColor:'#00000080', alignItems:'center', justifyContent:'center',}}>
                    <View style={{height:Dimensions.get('window').height - 200, width:300, backgroundColor:'#fff', borderRadius:5, justifyContent:'space-around', alignItems:'center', paddingVertical:5, marginHorizontal:10,}}>
                        <DatepickerRange

                        textStyle={{fontSize:10}}
                        startDate= '30032020'
                        untilDate= '26032020'
                        onSelect= {( startDate, untilDate ) => {this.setState({ startDate, untilDate })}}
                        buttonColor= '#2FC59B'
                        initialMonth= ''
                        dayHeadings= {['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                        maxMonth= {12}
                        buttonContainerStyle= {{borderRadius:20, marginHorizontal:20}}
                        showReset= {true}
                        showClose= {true}
                        showSelectionInfo= {true}
                        showButton= {true}
                        ignoreMinDate= {false}
                        isHistorical= {true} //Switches direction of months from forward to a historical view with the current month on top.
                        onClose={() => {this.datecloseModal()}} 
                        onConfirm= {() => {this.datecloseModal()}}
                        placeHolderStart= 'Start Date'
                        placeHolderUntil= 'Until Date'
                        selectedBackgroundColor= 'green'
                        selectedTextColor= 'white'
                        todayColor= 'green'
                        infoText= 'Select the starting and ending date'
                        infoStyle= {{color: '#d3d3d3', fontSize: 8}}
                        infoContainerStyle= {{marginRight: 20, paddingHorizontal: 20, paddingVertical: 5, backgroundColor: '#fff', borderRadius: 20, alignSelf: 'flex-start'}}
                        
                    />
                    </View>    
                </View>
            </Modal>




            





            </View>
        )
    }
}


{/* <DatepickerRange
                    startDate= '13052017'
                    untilDate= '26062017'
                    onConfirm= {( startDate, untilDate ) => this.setState({ startDate, untilDate })}
                    buttonColor= 'red'
                    initialMonth: '',
	                dayHeadings: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	                maxMonth: 12,
	                buttonColor: 'green',
	                buttonContainerStyle: {},
	                showReset: true,
	                showClose: true,
	                showSelectionInfo: true,
	                showButton: true,
	                ignoreMinDate: false,
                    isHistorical: false, //Switches direction of months from forward to a historical view with the current month on top.
	                onClose: () => {},
	                onSelect: () => {},
	                onConfirm: () => {},
	                placeHolderStart: 'Start Date',
	                placeHolderUntil: 'Until Date',
	                selectedBackgroundColor: 'green',
	                selectedTextColor: 'white',
	                todayColor: 'green',
	                startDate: '',
	                untilDate: '',
	                minDate: '',
	                maxDate: '',
	                infoText: '',
	                infoStyle: {color: '#fff', fontSize: 13},
	                infoContainerStyle: {marginRight: 20, paddingHorizontal: 20, paddingVertical: 5, backgroundColor: 'green', borderRadius: 20, alignSelf: 'flex-end'},
                  />

 */}
