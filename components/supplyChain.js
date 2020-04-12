import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions, StatusBar,ScrollView, Modal, TextInput, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import Lottie from 'lottie-react-native';
import SlidingPanel from 'react-native-sliding-up-down-panels';
import {FontAwesome5} from '@expo/vector-icons';
import { Switch } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import SwitchSelector from 'react-native-switch-selector';
 


class MySupplierListCard  extends React.Component {

    
    
    render(){

    
        var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

        return(
            <View style={{height:120, width:Dimensions.get('window').width - 60, backgroundColor:'#2D2F2F', borderRadius:5, marginVertical:5, alignItems:'center'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:10, alignItems:'center', width:Dimensions.get('window').width-80, }}>
                    <Text style={{fontSize:20, fontFamily:'NunitoBold', color:ColorCode, flex:5}}>{this.props.supplierName}</Text>
                    
                    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                        <View style={{height:40, width:40, borderRadius:20, backgroundColor:'#1F1C1C', alignItems:'center', justifyContent:'center'}}>
                            <Image source = {require('../assets/farmer.png')} style={{height:35, width:35, borderRadius:18,}} />
                        </View>

                    </View>

                </View>

                <View style={{paddingHorizontal:10,flexDirection:'row', width:Dimensions.get('window').width - 60,marginTop:15 }}>

                    <View style={{flex:6,}}>
                    <View style={{marginTop:0, alignItems:'center',flexDirection:'row'}}>
                        <Text style={{fontFamily:'NunitoSemiBold', fontSize:14, color:'#A2A5A4'}}>Types of crops supplied : </Text>
                         <Text style={{fontSize:13, fontFamily:'NunitoBold', color:'#C5C6C6', textAlign:'center', paddingHorizontal:8,paddingVertical:2, backgroundColor:'#999A9A1c', borderRadius:10}}>{this.props.typesOfCropsSupplied}</Text>
                     </View>  

                     <View style={{marginTop:0, alignItems:'center',flexDirection:'row'}}>
                        <Text style={{fontFamily:'NunitoSemiBold', fontSize:14, color:'#A2A5A4'}}>Total tonnes of crops supplied : </Text>
                        <Text style={{fontSize:13, fontFamily:'NunitoBold', color:'#C5C6C6', textAlign:'center', paddingHorizontal:8,paddingVertical:2, backgroundColor:'#999A9A1c', borderRadius:10}}>{this.props.tonnesSupplied}</Text>
                    </View> 

                    </View>

                    <TouchableOpacity style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                        <FontAwesome5 name='phone' size={25} color='green' style={{marginVertical:5,}}/>
                    </TouchableOpacity>
                    

                                   
                  

                </View>



            </View>
        )
    }
}


class SupplyHistoryCard extends React.Component{


    state = {
        moreInfoModalVisible:false,
    }

    moreInfocloseModal(){
        this.setState({moreInfoModalVisible:false})
    }

    moreInfoopenModal(){
        this.setState({moreInfoModalVisible:true})
    }



    render(){
        return(
            <View style={{height:100, width:Dimensions.get('window').width - 40, alignSelf:'center', backgroundColor:'#252525', elevation:3, borderRadius:10, marginVertical:5, flexDirection:'row',justifyContent:'center'}}>

                <View style={{width:Dimensions.get('window').width - 100, height:100, backgroundColor:'#252525'}}>
                    <View style={{flexDirection:'row', height:20, width:Dimensions.get('window').width - 100,  paddingVertical:2, alignItems:'center'}}>
                        <Text style={{fontSize:11, fontFamily:'NunitoSemiBold', color:'#d3d3d3',marginTop:5}}>Transaction ID : </Text>
                        <Text style={{fontSize:11, fontFamily:'NunitoSemiBold', color:'#11A111',marginTop:5}}>{this.props.transactionID}</Text>
                    </View>

                    <View style={{height:37, width:Dimensions.get('window').width - 100, flexDirection:'row', paddingVertical:2, alignItems:'center', marginTop:2}}>
                        <View style={{height:35, width:35, borderRadius:20, backgroundColor:'#151312', alignItems:'center', justifyContent:'center'}}>

                        </View>

                        <Text style={{fontFamily:'NunitoSemiBold', fontSize:16, color:'#208CCF', marginHorizontal:5}}>{this.props.supplierName}</Text>

                    </View>

                    <View style={{height:35, width:Dimensions.get('window').width - 100, flexDirection:'row', alignItems:'center', paddingVertical:2}}>

                        <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                            <Text style={{fontSize:12, fontFamily:'NunitoRegular', color:'#d3d3d3'}}>Crops : </Text>

                            <View style={{height:30, width:30, borderRadius:15, backgroundColor:'black', alignItems:'center', justifyContent:'center', marginHorizontal:3}}>

                                {
                                    this.props.whichCrop === 'corn' ? 
                                        <Image source={require('../assets/corn.png')} style={{width:25, height:25}}/>
                                    : 
                                    this.props.whichCrop === 'wheat' ? 
                                        <Image source={require('../assets/wheat.png')} style={{width:25, height:25}}/>
                                    : 
                                    this.props.whichCrop === 'barley' ? 
                                        <Image source={require('../assets/barley.png')} style={{width:25, height:25}}/>
                                    : 
                                    this.props.whichCrop === 'rice' ? 
                                        <Image source={require('../assets/rice.png')} style={{width:25, height:25}}/>
                                    : 
                                    this.props.whichCrop === 'pea' ? 
                                        <Image source={require('../assets/pea.png')} style={{width:20, height:20}}/>
                                    : 
                                    <View></View>
                                    
                                }
                                    
                                

                            </View>


                        </View>

                        <View style={{flexDirection:'row', flex:1,alignItems:'center'}}>

                            <Text style={{fontSize:12, fontFamily:'NunitoRegular', color:'#d3d3d3'}}>Date : </Text>
                            <Text style={{textAlign:'center',color:'#d3d3d3',marginHorizontal:2, fontSize:12, fontFamily:'NunitoSemiBold'}}>{this.props.date}</Text>

                        </View>
                        

                        
                                            
                    </View>

                </View>    


                <View style={{width:40, height:100, alignItems:'center', justifyContent:'center', backgroundColor:'#252525'}}>

                    <TouchableOpacity style={{height:35, width:35, borderRadius:20, backgroundColor:'#ffffff1c', alignItems:'center', justifyContent:'center'}} onPress={()=>this.moreInfoopenModal()}>
                        <FontAwesome5 name='chevron-right' size={25} color='#252525'/> 
                    </TouchableOpacity>

                </View>



        <Modal visible={this.state.moreInfoModalVisible} onRequestClose={()=>this.moreInfocloseModal()} animationType='slide'>
            <View style={{flex:1, backgroundColor:'#2d2f2f'}}>


                <View style={{ marginHorizontal:15, marginTop:15, position:'absolute', }}>
                    <TouchableOpacity style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center',}} onPress={()=>this.moreInfocloseModal()}  >
                        <FontAwesome5 name="chevron-left" size={30} color={'#d3d3d3'} />
                    </TouchableOpacity>
                </View>


                <View style={{alignItems:'center', width:Dimensions.get('window').width, paddingHorizontal:20, height:Dimensions.get('window').height - StatusBar.currentHeight - 50, marginTop:55}}>
                    <ScrollView contentContainerStyle={{paddingBottom:50}} showsVerticalScrollIndicator={false} >

                    <Text style={{fontSize:30, fontFamily:'NunitoSemiBold', color:'#d3d3d3', textAlign:'center', }}>Transaction</Text>

                    <View style={{width:Dimensions.get('window').width - 40, marginTop:25, borderRadius:10, paddingHorizontal:10, paddingVertical:5,flexDirection:'row',backgroundColor:'#1D1E20',}}>
                            <Text style={{fontSize:13, fontFamily:'QuicksandBold', color:'#F3980D',}}>Transaction ID : </Text>
                            <Text style={{fontSize:13, color:'#d3d3d3', fontFamily:'NunitoRegular'}}>{this.props.transactionID}</Text>

                    </View>

                    <View style={{width:Dimensions.get('window').width - 40, backgroundColor:'#1D1E20', borderRadius:10, elevation:2, marginTop:5, paddingVertical:5, }}>

                        <Text style={{fontSize:13, fontFamily:'QuicksandBold', color:'#166FBC', marginHorizontal:10}}>Supplier Information</Text>

                            <View style={{width:Dimensions.get('window').width - 60, flexDirection:'row', alignItems:'center', marginTop:10, marginHorizontal:10}}>

                                <View style={{width:45, height:45, borderRadius:25, backgroundColor:'#151312',alignItems:'center', justifyContent:'center', marginRight:5}}>


                                </View>

                            <Text style={{fontSize:17, textAlign:'center', marginHorizontal:5, color:'#d3d3d3', fontFamily:'NunitoRegular'}}>{this.props.supplierName}</Text>

        

                    </View>

                    <View style={{width:Dimensions.get('window').width-40, height:1.0, backgroundColor:'#2d2f2f',marginVertical:5}}></View>

                    <View style={{width:Dimensions.get('window').width - 60, flexDirection:'row', alignItems:'center', marginVertical:5}}>

        

                        <FontAwesome5 name='map-marker-alt' size={25} color='orange' style={{marginHorizontal:15}}/>

                        <Text style={{width:Dimensions.get('window').width - 110, textAlign:'center', fontSize:13, color:'#d3d3d3', marginRight:10}}>

                            {this.props.supplierAddress}

                        </Text>

                    </View>

                    <View style={{width:Dimensions.get('window').width-40, height:1.0, backgroundColor:'#2d2f2f',marginVertical:5}}></View>

                        <View style={{width:Dimensions.get('window').width - 60, flexDirection:'row', alignItems:'center', marginVertical:10, justifyContent:'space-around'}}>

                            <TouchableOpacity>
                                <FontAwesome5 name='envelope' size={20} color='#C4C3C1'/>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <FontAwesome5 name='phone' size={20} color='#C4C3C1'/>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <FontAwesome5 name='star' size={20} color='#C4C3C1'/>
                            </TouchableOpacity>

            

                        </View>


                    </View>


                    <View style={{width:Dimensions.get('window').width - 40, backgroundColor:'#1D1E20', borderRadius:10, elevation:2, marginTop:5, paddingVertical:5, }}>

                        <Text style={{fontSize:13, fontFamily:'QuicksandBold', color:'salmon', marginHorizontal:10}}>Transaction Information</Text>

                        <View style={{width:Dimensions.get('window').width-60, marginHorizontal:10, flexDirection:'row', marginTop:10,alignItems:'center'}}>

                            <FontAwesome5 name='leaf' size={18} color='#149E1E'/>

                            <Text style={{fontSize:13, color:'#d3d3d3', fontFamily:'NunitoRegular', marginHorizontal:10}}>Crop : </Text>


                            <View style={{height:30, width:30, borderRadius:15, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>

                                    {
                                        this.props.whichCrop === 'corn' ? 
                                        <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:5}}>
                                            <Image source={require('../assets/corn.png')} style={{width:25, height:25}}/>
                                            <Text style={{fontSize:12, color:'#d3d3d3', fontFamily:'NunitoRegular', marginHorizontal:5}}>(Corn)</Text>
                                        </View>
                                            
                                        : 
                                        this.props.whichCrop === 'wheat' ? 
                                        <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:5}}>
                                            <Image source={require('../assets/wheat.png')} style={{width:25, height:25}}/>
                                            <Text style={{fontSize:12, color:'#d3d3d3', fontFamily:'NunitoRegular', marginHorizontal:5}}>(Wheat)</Text>
                                        </View>
                                        : 
                                        this.props.whichCrop === 'barley' ? 
                                        <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:5}}>
                                            <Image source={require('../assets/barley.png')} style={{width:25, height:25}}/>
                                            <Text style={{fontSize:12, color:'#d3d3d3', fontFamily:'NunitoRegular', marginHorizontal:5}}>(Barley)</Text>
                                        </View>
                                        : 
                                        this.props.whichCrop === 'rice' ? 
                                        <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:5}}>
                                            <Image source={require('../assets/rice.png')} style={{width:25, height:25}}/>
                                            <Text style={{fontSize:12, color:'#d3d3d3', fontFamily:'NunitoRegular', marginHorizontal:5}}>(Rice)</Text>
                                        </View>
                                        : 
                                        this.props.whichCrop === 'pea' ? 
                                        <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:5}}>
                                            <Image source={require('../assets/pea.png')} style={{width:20, height:20}}/>
                                            <Text style={{fontSize:12, color:'#d3d3d3', fontFamily:'NunitoRegular', marginHorizontal:5}}>(Pea)</Text>
                                        </View>
                                        : 
                                        <View></View>
                                        
                                    }
                
            

                            </View>

                        </View>

                        <View style={{width:Dimensions.get('window').width-40, height:1.0, backgroundColor:'#2d2f2f',marginVertical:5}}></View>

                        <View style={{width:Dimensions.get('window').width-60, marginHorizontal:10, flexDirection:'row', marginTop:5,alignItems:'center'}}>

                            <FontAwesome5 name='cubes' size={20} color='#2577D5'/>
                            <Text style={{fontSize:13, color:'#d3d3d3', fontFamily:'NunitoRegular', marginHorizontal:5}}>Total tonnes of crop supplied :</Text>
                            <Text style={{paddingVertical:3, paddingHorizontal:7, backgroundColor:'black', fontFamily:'NunitoBold', fontSize:13, color:'#d3d3d3', borderRadius:5}}>{this.props.amountSupplied}</Text>

                        </View>

                        <View style={{width:Dimensions.get('window').width-40, height:1.0, backgroundColor:'#2d2f2f',marginVertical:5}}></View>

                        <View style={{width:Dimensions.get('window').width-60, marginHorizontal:10, flexDirection:'row', marginTop:5,alignItems:'center'}}>

                            <Text style={{marginHorizontal:4, fontSize:24, color:'#E99C15'}}>₹</Text>
                            <Text style={{fontSize:13, color:'#d3d3d3', fontFamily:'NunitoRegular', marginHorizontal:5}}>Total amount :</Text>
                            <Text style={{paddingVertical:3, paddingHorizontal:7, backgroundColor:'black', fontFamily:'NunitoBold', fontSize:13, color:'#d3d3d3', borderRadius:5}}>₹ {this.props.price}</Text>

                        </View>

    
    


            </View>


                        <View style={{width:Dimensions.get('window').width - 40, backgroundColor:'#1D1E20', borderRadius:10, elevation:2, marginTop:5, paddingVertical:5, }}>

                            <Text style={{fontSize:13, fontFamily:'QuicksandBold', color:'#23AD0F', marginHorizontal:10}}>Other Information</Text>

                            <Text style={{fontSize:13, fontFamily:'NunitoRegular', color:'#d3d3d3', marginHorizontal:10, marginTop:5}}>Comments</Text>

                            <Text style={{width:Dimensions.get('window').width-60, marginHorizontal:10, backgroundColor:'#151312', borderRadius:7, textAlign:'justify', paddingHorizontal:5, paddingVertical:5, fontSize:12, color:'#d3d3d37a',marginVertical:5, minHeight:20}}>{this.props.comments}</Text>

                            <View style={{width:Dimensions.get('window').width-40, height:1.0, backgroundColor:'#2d2f2f',marginVertical:5}}></View>

                            <TouchableOpacity style={{width:Dimensions.get('window').width-60, marginHorizontal:10, flexDirection:'row', marginVertical:10,alignItems:'center'}}>

                            <FontAwesome5 name='times' size={20} color='#FB5C46'/>
                            <Text style={{fontSize:13, color:'#d3d3d3', fontFamily:'NunitoRegular', marginHorizontal:5}}>Report an error with this transaction</Text>

                            </TouchableOpacity>


                            

                            
                            

                        </View>

                    </ScrollView>
                    

                    
                    
                </View>


                    

            </View>

            </Modal>


                
            </View>



            
        )
    }
}









export default class SupplyChain extends React.Component{

    state={
        fontLoaded:false,
        newSupplierModalVisible:false,
        newtransactionModalVisible:false,
        name:' ',
        isActiveCorn:false,
        isActiveSugarcane:false,
        isActiveRice:false,
        isActiveWheat:false,
        isActiveBarley:false,
        isActiveBean:false,
        isActivePea:false,
        count:0,
        isSwitchOn: true,
        mySuppliersModalVisible:false,
        cost:' ',
        whichFilter:'',
        comment:' ',
        amount :' ',
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
        this.setState({newSupplierModalVisible:false})
        this.setState({count:0})
    
    }


    addSupplieropenModal() {
        this.setState({newSupplierModalVisible:true});
      }
    
    addSuppliercloseModal() {
        this.setState({newSupplierModalVisible:false});
      }

    mySuppliersopenModal() {
        this.setState({mySuppliersModalVisible:true});
      }
    
    mySupplierscloseModal() {
        this.setState({mySuppliersModalVisible:false});
      } 

    newTransactionopenModal() {
        this.setState({newtransactionModalVisible:true});
      }
    
    newTransactioncloseModal() {
        this.setState({newtransactionModalVisible:false});
      } 
  

    toggleStatesCorn() {
        console.log(this.noOfCrops)
        this.setState({isActiveCorn: ! this.state.isActiveCorn});
        this.noOfCrops = this.noOfCrops+1;
        console.log(this.noOfCrops)
    }  

    toggleStatesSugarcane() {
        this.setState({isActiveSugarcane: ! this.state.isActiveSugarcane})
    }  

    toggleStatesRice() {
        this.setState({isActiveRice: ! this.state.isActiveRice})
    }  

    toggleStatesWheat() {
        this.setState({isActiveWheat: ! this.state.isActiveWheat})
    }  

    toggleStatesBarley() {
        this.setState({isActiveBarley: ! this.state.isActiveBarley})
    } 

    toggleStatesPea() {
        this.setState({isActivePea: ! this.state.isActivePea})
    }  

    toggleStatesBean() {
        this.setState({isActiveBean: ! this.state.isActiveBean})
    } 

    onNameChange(text) {
        this.setState({
            name:text
        });
    }

    onPriceChange(text) {
        this.setState({
            cost:text
        });
    }

    onCommentChange(text) {
        this.setState({
            comment:text
        });
    }

    onAmountChange(text) {
        this.setState({
            amount:text
        });
    }
  
  
  
    clearName() {
        this.setState({
            name:''
        });
    }

    increment(){
        this.setState({count : this.state.count +1})
    }
    
    
    

    render(){

        const {noOfCrops} = this.state.count;
        const { isSwitchOn } = this.state;



        let data = [{
            value: 'Supplier1',
          }, {
            value: 'Supplier2',
          }, {
            value: 'Supplier3',
          }];


        
        if(!this.state.fontLoaded){
            return(
                <View></View>
            )
        }

        return(
            <View style={{backgroundColor:'#1F1C1C', marginTop:StatusBar.currentHeight, flex:1,}}>

            {this.state.newSupplierModalVisible || this.state.mySuppliersModalVisible || this.state.newtransactionModalVisible ? <View></View> : 
            <View style={{ marginHorizontal:15, marginTop:15, position:'absolute', }}>
              <TouchableOpacity style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center',}} onPress={()=>{this.props.navigation.navigate('Home')}}  >
              <FontAwesome5 name="chevron-left" size={30} color={'#d3d3d3'} />
              </TouchableOpacity>
            </View> }


            <View style={{alignItems:'center'}}>
                {this.state.newSupplierModalVisible || this.state.mySuppliersModalVisible || this.state.newtransactionModalVisible ? <Text style={{fontSize:30, color:'#D3D5D5', fontFamily:'QuicksandBold', textAlign:'center', marginTop:20}}></Text> : 
                <Text style={{fontSize:30, color:'#D3D5D5', fontFamily:'QuicksandBold', textAlign:'center', marginTop:20}}>
                   Supply Chain
                </Text> }
            </View>

            {this.state.newSupplierModalVisible || this.state.mySuppliersModalVisible || this.state.newtransactionModalVisible ? 
             <View></View> : 
             <Lottie
                        style={{
                        width: 200,
                        height: 200,
                        position:'absolute',
                        right:0,
                        top: 20,
                        elevation:2,
                        }} 
                    source={require('../assets/supplychain.json')}
                    autoPlay loop
            />
             }



            <View style={{height:160, width:Dimensions.get('window').width - 40, marginHorizontal:20, backgroundColor:'#2D2F2F', borderRadius:20, marginTop:50, }}>

                <View style={{marginTop:15, marginLeft:15, width:Dimensions.get('window').width * 0.4, height:35, alignItems:'center',flexDirection:'row'}}>
                    <View style={{height:35, width:35, borderRadius:18,  alignItems:'center', justifyContent:'center',borderColor:'#d3d3d3', backgroundColor:'#1F1C1C'}}>
                        <Image source = {require('../assets/farmer.png')} style={{height:25, width:25, borderRadius:12.5,}} />
                    </View>
                    <Text style={{marginHorizontal:5, fontFamily:'NunitoSemiBold', color:'#d3d3d3', fontSize:18}} >User12345</Text>
                    
                </View >

                <View style={{marginTop:5, marginLeft:15, width:Dimensions.get('window').width * 0.45, height:1, backgroundColor:'#444C4C'}}></View>

                <View style={{marginTop:0, marginLeft:15, width:Dimensions.get('window').width * 0.4, height:35, alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontFamily:'NunitoSemiBold', fontSize:14, color:'#A2A5A4'}}>No of suppliers : </Text>
                    <Text style={{fontSize:13, fontFamily:'NunitoBold', color:'#C5C6C6', textAlign:'center', marginVertical:5, paddingHorizontal:8,paddingVertical:2, backgroundColor:'#999A9A1c', borderRadius:10}}>3</Text>
                </View>


                <View style={{height:60, width:Dimensions.get('window').width - 60, marginHorizontal:10,flexDirection:'row'}}>
                    <View style={{flex:3.5,}}>
                        <View style={{flexDirection:'row', alignItems:'center', marginLeft:5}}>
                            <Text style={{fontFamily:'NunitoSemiBold', fontSize:14, color:'#A2A5A4'}}>Types of crops supplied : </Text>
                            <Text style={{fontSize:13, fontFamily:'NunitoBold', color:'#C5C6C6', textAlign:'center', paddingHorizontal:8,paddingVertical:2, backgroundColor:'#999A9A1c', borderRadius:10}}>3</Text>
                        </View>

                        <View style={{flexDirection:'row', alignItems:'center', marginTop:5, marginLeft:5}}>
                            <View style={{height:35, width:35, borderRadius:18, backgroundColor:'#1F1C1C', alignItems:'center', justifyContent:'center', marginRight:5}}>
                                <Image source={require('../assets/corn.png')} style={{height:25,width:25, borderRadius:15}}/>
                            </View>

                            <View style={{height:35, width:35, borderRadius:18, backgroundColor:'#1F1C1C', alignItems:'center', justifyContent:'center', marginRight:5}}>
                                <Image source={require('../assets/sugarcane.png')} style={{height:25,width:25, borderRadius:15}}/>
                            </View>

                            <View style={{height:35, width:35, borderRadius:18, backgroundColor:'#1F1C1C', alignItems:'center', justifyContent:'center', marginRight:5}}>
                                <Image source={require('../assets/rice.png')} style={{height:25,width:25, borderRadius:15}}/>
                            </View>

                        </View>
                        
                    </View>

                    <View style={{flex:2,alignItems:'flex-end'}}>
                        <Text style={{margin:5, fontFamily:'NunitoBold', fontSize:18, color:'green'}}>Profit</Text>
                        <Text style={{fontSize:16, fontFamily:'NunitoBold', color:'#C5C6C6', textAlign:'center', paddingHorizontal:10, paddingVertical:2, backgroundColor:'#999A9A1c', borderRadius:10}}>₹ 34,000</Text>


                    </View>

                </View>


            </View>


            <View style={{height:50, marginHorizontal:20, borderRadius:10, backgroundColor:'#2D2F2F', marginTop:7, flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>  
                    <View style={{height:32, width:32,borderRadius:20, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#19B192',borderStyle:'dashed'}}>
                     <FontAwesome5 name='user-plus' size={14} color='#19B192' style={{margin:5}} /> 
                    </View>               
                    <Text style={{color:'#19B192', fontFamily:'NunitoSemiBold', fontSize:15, marginHorizontal:10}}>Add new supplier</Text>
                </View>
                <TouchableOpacity style={{height:25, width:25, borderRadius:15,backgroundColor:'#ffffff1b', alignItems:'center', justifyContent:'center'}} underlayColor='#fff' onPress={()=>{this.addSupplieropenModal()}} >
                    <FontAwesome5 name='plus' size={14} color='#d3d3d3'/>
                </TouchableOpacity>
            </View>


            <View style={{height:50, marginHorizontal:20, borderRadius:10, backgroundColor:'#2D2F2F', marginTop:7, flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>  
                    <View style={{height:32, width:32,borderRadius:20, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#FB8073',borderStyle:'dashed'}}>
                     <FontAwesome5 name='users' size={14} color='#FB8073' style={{margin:5}} /> 
                    </View>               
                    <Text style={{color:'#FB8073', fontFamily:'NunitoSemiBold', fontSize:15, marginHorizontal:10}}>My Suppliers</Text>
                </View>
                <TouchableOpacity style={{height:25, width:25, borderRadius:15,backgroundColor:'#ffffff1b', alignItems:'center', justifyContent:'center'}} underlayColor='#fff' onPress={()=>this.mySuppliersopenModal()}>
                    <FontAwesome5 name='chevron-right' size={14} color='#d3d3d3'/>
                </TouchableOpacity>
            </View>

           
            <View style={{height:70, marginHorizontal:20, borderRadius:10, backgroundColor:'#2D2F2F', marginTop:7, flexDirection:'row', justifyContent:'space-around', paddingHorizontal:10, alignItems:'center'}}>
                <View style={{height:32, width:32,borderRadius:20, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#738BFB',borderStyle:'dashed'}}>
                     <FontAwesome5 name='chart-line' size={15} color='#738BFB' style={{margin:5}} /> 
                </View> 

                <View style={{marginHorizontal:10}}>
                    <Text style={{color:'#5798F8da', fontFamily:'NunitoSemiBold', fontSize:15}}>Current Market Prices</Text>
                    <Text style={{color:'#A2A5A4', fontFamily:'NunitoRegular', fontSize:11, maxWidth:Dimensions.get('window').width - 140}}>Find out the market price of produce from reputable sources</Text>
                </View>
                <TouchableOpacity style={{height:25, width:25, borderRadius:15,backgroundColor:'#ffffff1b', alignItems:'center', justifyContent:'center'}} underlayColor='#fff'>
                    <FontAwesome5 name='chevron-right' size={13} color='#d3d3d3'/>
                </TouchableOpacity>
            </View>
 
            <View style={{height:50, marginHorizontal:20, borderRadius:10, backgroundColor:'#2D2F2F', marginTop:7, flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>  
                    <View style={{height:32, width:32,borderRadius:20, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#13B317',borderStyle:'dashed'}}>
                     <FontAwesome5 name='plus-circle' size={18} color='#13B317' style={{margin:5}} /> 
                    </View>               
                    <Text style={{color:'#13B317', fontFamily:'NunitoSemiBold', fontSize:15, marginHorizontal:10}}>New Transaction</Text>
                </View>
                <TouchableOpacity style={{height:25, width:25, borderRadius:15,backgroundColor:'#ffffff1b', alignItems:'center', justifyContent:'center'}} underlayColor='#fff' onPress={()=>this.newTransactionopenModal()}>
                    <FontAwesome5 name='plus' size={14} color='#13B317'/>
                </TouchableOpacity> 
            </View>




            <SlidingPanel
            headerLayoutHeight = {130}
            headerLayout = { () =>
                <View style={{width:Dimensions.get('window').width, height: 130, backgroundColor: '#2D2F2F',borderTopRightRadius:40, borderTopLeftRadius:40, marginTop:3*StatusBar.currentHeight,elevation:5 ,marginBottom:50 , paddingHorizontal:20}}>
                 
                 <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between'}}>
                     <View style={{flexDirection:'row',alignItems:'center'}}>
                     <FontAwesome5 name='calendar-check' size={25} color='#d3d3d3' style={{marginTop:10, marginHorizontal:10}} /> 
                    <View style={{justifyContent:'center', height:40, marginTop:5}}>
                        <Text style={{color:'#F38A0C', fontSize:20, fontFamily:'NunitoSemiBold', marginTop:5}}>Supply History</Text>
                        <Text style={{color:'#d3d3d3', fontSize:11, fontFamily:'NunitoRegular', maxWidth:Dimensions.get('window').width - 100}}>View past transactions of crops supplied </Text>
                    </View>
                    
                     </View>
                

                    <FontAwesome5 name='chevron-up' size={25} color='#d3d3d3' style={{marginVertical:15, marginHorizontal:10}} /> 
                 </View>
               


                 
                  

                  

                </View>
            }
            slidingPanelLayout = { () =>
                <View style={{width:Dimensions.get('window').width , height:Dimensions.get('window').height - 150, backgroundColor: '#1F1C1C', alignItems: 'center', paddingHorizontal:20, elevation:5 }}>

                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', backgroundColor:'#151312', borderRadius:20, width:Dimensions.get('window').width - 40, paddingLeft:5, marginVertical:15}}>

                        <FontAwesome5 name='filter' size={20} color='#D0D1D28a' style={{marginHorizontal:5,}}/>


                    <SwitchSelector options={[
                     { label: "Date", value: "date", customIcon:<FontAwesome5 name="calendar-alt" size={15} color='#EE4541' style={{marginVertical:2, marginHorizontal:5}}  /> ,activeColor:'#ffffff2a' },
                     {label: "Price", value: "price", customIcon:<Text style={{fontSize:15, color:'#208CCF', fontFamily:'NunitoBold'}}> ₹ </Text>, activeColor:'#ffffff2a'},
                     {label: "Quantity", value: "quantity", customIcon:<FontAwesome5 name="tag" size={15} color='#F3C31E' style={{marginVertical:2, marginHorizontal:5}}  /> , activeColor:'#ffffff2a'}
                     ]} initial={0}
                     style={{width:Dimensions.get('window').width - 80,  borderRadius:20}}
                     fontSize={13}
                     textColor='#CACAC9'
                     onPress={(value)=>this.setState({whichFilter: value })}
                     fontFamily='NunitoSemiBold'
                     backgroundColor='#151312'
                    /> 

                    </View>

                   

                    <ScrollView contentContainerStyle={{paddingBottom:50}}>


                    <SupplyHistoryCard whichCrop='corn' transactionID='4234223' supplierName='KGN Agro Suppliers' date='1/4/20' supplierAddress='54A, New Agriculture Market, Near Bopodi Bridge Bypass Road, Bopodi, Pune 411043' amountSupplied={25} price={20000} comments='Extra 2 tonnes of crop given to compensate for losses'/>
                    <SupplyHistoryCard whichCrop='pea' transactionID='2342345' supplierName='Organic Veggies'date='29/3/20' supplierAddress='Slot 43, Gultekdi Market, Gultekdi, Pune 411021' amountSupplied={20} price={15000} comments='Extra 2 tonnes of crop given to compensate for losses'/>
                    <SupplyHistoryCard whichCrop='rice' transactionID='5467562' supplierName='AGM Agro'date='22/3/20' supplierAddress='New Farmers Produce Godown, Near Khed Shivapur, Maharashtra' amountSupplied={5} price={5000} comments='Extra 2 tonnes of crop given to compensate for losses'/>
                    <SupplyHistoryCard whichCrop='barley' transactionID='2765435' supplierName='Noida Farmer Group'date='20/3/20' supplierAddress='Noida Farmer Group, 1A, Sector 21, Noida' amountSupplied={55} price={75000} comments='Extra 2 tonnes of crop given to compensate for losses'/>
                    <SupplyHistoryCard whichCrop='wheat' transactionID='9765432' supplierName='AG Suppliers'date='15/3/20' supplierAddress='AG Suppliers, New Agriculture Market, Near Bopodi Bridge Bypass Road, Bopodi, Pune 411043' amountSupplied={20} price={20000} comments='Extra 2 tonnes of crop given to compensate for losses'/>
                    <SupplyHistoryCard whichCrop='corn' transactionID='1256734' supplierName='Mohanlal Trading Company' date='5/3/20' supplierAddress='Mohanlal Traders, 34A, Opposite SBI ATM, Vile Parle' amountSupplied={15} price={34000} comments='Extra 2 tonnes of crop given to compensate for losses'/>
                    <SupplyHistoryCard whichCrop='rice' transactionID='7894567' supplierName='Organic Agro' date='22/2/20' supplierAddress='Organic Agro, near Vashi, Mumbai' amountSupplied={25} price={20000} comments='Extra 2 tonnes of crop given to compensate for losses'/>

                    </ScrollView>
                    
                  
                  
                  
                </View>
            }
            /> 



       


    <Modal visible={this.state.newSupplierModalVisible} animationType='slide' onRequestClose={() => this.addSuppliercloseModal()} transparent={true}>
      <View style={{flex:1,backgroundColor:'#ffffff10',alignItems:'center' }}>


      <TouchableOpacity style={{height:40, width:40, borderRadius:20, backgroundColor:'#FD685Cda', alignItems:'center', justifyContent:'center', position:'absolute', marginTop:StatusBar.currentHeight + 25, zIndex:30}} onPress={()=>{setTimeout(()=>{this.addSuppliercloseModal()}, 150)}}>
                <FontAwesome5 name='times' size={25} color='#1F1C1C'/>
      </TouchableOpacity>

        <View style={{height:Dimensions.get('window').height - 70, width:Dimensions.get('window').width, backgroundColor:'#1A1818', alignItems:'center', paddingVertical:5, marginTop:StatusBar.currentHeight, borderTopLeftRadius:15, borderTopRightRadius:15,marginTop:70}}>



            <ScrollView contentContainerStyle={{alignItems:'center'}}>

            <View style={{marginHorizontal:10, flexDirection:'row', justifyContent:'space-between', height:150 , marginTop:30, }}>
                <View style={{alignItems:'center', flex:3, marginLeft:10}}>
                    <Text style={{fontFamily:'QuicksandBold', fontSize:25, textAlign:'center', color:'green', marginVertical:5}}>
                        Add New Supplier
                    </Text>
                    <Text style={{fontFamily:'NunitoSemiBold', fontSize:12, color:'#d3d3d3', textAlign:'center', marginVertical:5}}>
                        Enter the necessary supplier details
                    </Text>
                </View>

                <Lottie
                    style={{
                    width: 100,
                    height: 100,
                    flex:2
                }}
                 source={require('../assets/user.json')}
                 autoPlay loop
                />
            </View>


            <View style={{marginVertical:5,width:Dimensions.get('window').width - 60, }}>
                <View style={{flexDirection:'row', alignItems:'center', marginVertical:5}}>
                    <FontAwesome5 name='user' size={15} color='orange' style={{marginHorizontal:5}}/>
                    <Text style={{marginHorizontal:5, fontFamily:'NunitoRegular', fontSize:15, color:'#d3d3d3'}}>Name</Text>
                </View>
                
                <View style={{width:Dimensions.get('window').width - 60, flexDirection:'row', alignItems:'center'}}>
                     <TextInput onChangeText={(text) => this.onNameChange(text)} value={this.state.name}  marginVertical={4} borderRadius={10}  height={40} marginTop={5} paddingLeft={10} autoCapitalize={'words'} backgroundColor='#ffffff10' placeholderTextColor='#ffffff1a' placeholder='Enter Name' width={Dimensions.get('window').width - 90} style={{color:'#d3d3d3'}}/>
                     <TouchableOpacity onPress={()=> this.clearName() } >
                         <FontAwesome5 name="times-circle" size={20} color='#ffffff5a' style={{margin:5,}} />
                     </TouchableOpacity>
                </View>

            </View>


            <View style={{marginVertical:5,width:Dimensions.get('window').width - 60}}>
                <View style={{flexDirection:'row', alignItems:'center', marginVertical:5}}>
                    <FontAwesome5 name='pagelines' size={15} color='green' style={{marginHorizontal:5}}/>
                    <Text style={{marginHorizontal:5, fontFamily:'NunitoRegular', fontSize:15, color:'#d3d3d3'}}>Crops to be supplied</Text>
                </View>
                
                <View style={{height:60, borderRadius:10, backgroundColor:'#ffffff10',width:Dimensions.get('window').width - 60}}>

                    <ScrollView horizontal style={{width:Dimensions.get('window').width - 80}} contentContainerStyle={{alignItems:'center', paddingHorizontal:5}}>

                        <TouchableOpacity style={this.state.isActiveCorn ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesCorn()}} >
                            <Image style={this.state.isActiveCorn ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/corn.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActiveSugarcane ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesSugarcane()}} >
                            <Image style={this.state.isActiveSugarcane ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/sugarcane.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActiveRice ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesRice()}} >
                            <Image style={this.state.isActiveRice ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/rice.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActivePea ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesPea()}} >
                            <Image style={this.state.isActivePea ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/pea.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActiveWheat ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesWheat()}} >
                            <Image style={this.state.isActiveWheat ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/wheat.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActiveBean ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesBean()}} >
                            <Image style={this.state.isActiveBean ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/bean.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActiveBarley ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesBarley()}} >
                            <Image style={this.state.isActiveBarley ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/barley.png')}/>
                        </TouchableOpacity>







                    </ScrollView>

                </View>


               

            </View>

            <View style={{marginVertical:10,flexDirection:'row', justifyContent:'space-between', width:Dimensions.get('window').width - 60,alignItems:'center', paddingHorizontal:5, paddingVertical:3}}>
                <Text style={{fontSize:13, fontFamily:'NunitoRegular', color:'#d3d3d3'}}>Add to favourites ? </Text>
                <Switch
                value={isSwitchOn}
                onValueChange={() =>{ this.setState({ isSwitchOn: !isSwitchOn }); }}
                color={'green'}
                
                 />

            </View>

            <TouchableOpacity style={{height:50, width:90, backgroundColor:'#d3d3d3', borderRadius:25, alignItems:'center', justifyContent:'center',marginVertical:20 }} onPress={()=>this.addSuppliercloseModal()}>
                <Text style={{fontSize:16, fontFamily:'QuicksandBold', color:'#1F1C1C'}}>ADD</Text>
            </TouchableOpacity>



            </ScrollView>

            

            
       

        

        </View>

      </View>
    </Modal>




    <Modal visible={this.state.mySuppliersModalVisible} animationType='slide' onRequestClose={() => this.mySupplierscloseModal()} transparent={true}>
      <View style={{flex:1,backgroundColor:'#ffffff10',alignItems:'center' }}>


      <TouchableOpacity style={{height:40, width:40, borderRadius:20, backgroundColor:'#FD685Cda', alignItems:'center', justifyContent:'center', position:'absolute', marginTop:StatusBar.currentHeight + 25, zIndex:30}} onPress={()=>{setTimeout(()=>{this.mySupplierscloseModal()}, 150)}}>
                <FontAwesome5 name='times' size={25} color='#1F1C1C'/>
      </TouchableOpacity>

        <View style={{height:Dimensions.get('window').height - 70, width:Dimensions.get('window').width, backgroundColor:'#1F1C1C', alignItems:'center', paddingVertical:5, marginTop:StatusBar.currentHeight, borderTopLeftRadius:15, borderTopRightRadius:15,marginTop:70}}>
                <Text style={{fontSize:26, fontFamily:'QuicksandBold', color:'orange',marginVertical:25}}>My Suppliers</Text>

                <ScrollView contentContainerStyle={{paddingBottom:50, marginBottom:10,}} style={{height:Dimensions.get('window').width - 400}}>
                    <MySupplierListCard supplierName='Supplier1' typesOfCropsSupplied={3} tonnesSupplied={20}/>
                    <MySupplierListCard supplierName='Supplier2' typesOfCropsSupplied={2} tonnesSupplied={10}/>
                    <MySupplierListCard supplierName='Supplier3' typesOfCropsSupplied={5} tonnesSupplied={60}/>
                    <MySupplierListCard supplierName='Supplier4' typesOfCropsSupplied={1} tonnesSupplied={70}/>
                    <MySupplierListCard supplierName='Supplier5' typesOfCropsSupplied={1} tonnesSupplied={100}/>
                    <MySupplierListCard supplierName='Supplier6' typesOfCropsSupplied={2} tonnesSupplied={10}/>
                    <MySupplierListCard supplierName='Supplier7' typesOfCropsSupplied={3} tonnesSupplied={20}/>
                    <MySupplierListCard supplierName='Supplier8' typesOfCropsSupplied={1} tonnesSupplied={30}/>
                </ScrollView>

        

        </View>

      </View>
    </Modal>




    <Modal visible={this.state.newtransactionModalVisible} animationType='slide' onRequestClose={() => this.newTransactioncloseModal()} transparent={true}>
      <View style={{flex:1,backgroundColor:'#ffffff10',alignItems:'center' }}>


      <TouchableOpacity style={{height:40, width:40, borderRadius:20, backgroundColor:'#FD685Cda', alignItems:'center', justifyContent:'center', position:'absolute', marginTop:StatusBar.currentHeight + 25, zIndex:30}} onPress={()=>{setTimeout(()=>{this.newTransactioncloseModal()}, 150)}}>
                <FontAwesome5 name='times' size={25} color='#1F1C1C'/>
      </TouchableOpacity>

        <View style={{height:Dimensions.get('window').height - 70, width:Dimensions.get('window').width, backgroundColor:'#1F1C1C', alignItems:'center', paddingVertical:5, marginTop:StatusBar.currentHeight, borderTopLeftRadius:15, borderTopRightRadius:15,marginTop:70}}>

        <ScrollView contentContainerStyle={{alignItems:'center'}}>
                <Text style={{fontSize:26, fontFamily:'QuicksandBold', color:'#fff',marginTop:25, marginBottom:15}}>New Transaction</Text>





                <View>

                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name='id-card' size={20} color='#F3C90E' style={{marginRight:10,marginTop:10}}/>
                         <Text style={{fontFamily:'NunitoRegular', color:'#d3d3d3', fontSize:14, marginTop:10}}>Supplier </Text>
                    </View>

                    <Dropdown
                        label='Supplier'
                        data={data}
                        containerStyle={{width:140,}}
                        pickerStyle={{backgroundColor:'#1F1C1C',}}
                        fontSize={15}
                        labelFontSize={9}
                        baseColor='#d3d3d3'
                        itemTextStyle={{fontSize:12, color:'#d3d3d3', fontFamily:'NunitoRegular'}}
                        itemColor='#d3d3d3'
                        disabledItemColor='#d3d3d3'
                        textColor='#d3d3d3'
                    />
                    
                </View>

                <View style={{height:0.7, width:Dimensions.get('window').width - 60, alignSelf:'center', backgroundColor:'#ffffff20', marginVertical:5}}></View>

                <View style={{flexDirection:'row', marginTop:5}}>
                     <FontAwesome5 name='pagelines' size={20} color='green' style={{marginRight:10, marginLeft:4}}/>
                    <Text style={{fontFamily:'NunitoRegular', color:'#d3d3d3', fontSize:14, marginVertical:5}}>Crop Supplied : </Text>
                </View>
                

                <View style={{height:60, borderRadius:10, backgroundColor:'#ffffff10',width:Dimensions.get('window').width - 60}}>

                    <ScrollView horizontal style={{width:Dimensions.get('window').width - 80}} contentContainerStyle={{alignItems:'center', paddingHorizontal:5}}>

                        <TouchableOpacity style={this.state.isActiveCorn ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesCorn()}} >
                            <Image style={this.state.isActiveCorn ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/corn.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActiveSugarcane ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesSugarcane()}} >
                            <Image style={this.state.isActiveSugarcane ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/sugarcane.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActiveRice ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesRice()}} >
                            <Image style={this.state.isActiveRice ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/rice.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActivePea ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesPea()}} >
                            <Image style={this.state.isActivePea ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/pea.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActiveWheat ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesWheat()}} >
                            <Image style={this.state.isActiveWheat ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/wheat.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActiveBean ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesBean()}} >
                            <Image style={this.state.isActiveBean ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/bean.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.isActiveBarley ? styles.isactive : styles.isinactive} onPress={()=>{this.toggleStatesBarley()}} >
                            <Image style={this.state.isActiveBarley ? styles.isactiveimg : styles.isinactiveimg } source = {require('../assets/barley.png')}/>
                        </TouchableOpacity>







                    </ScrollView>

                </View>

                <View style={{height:0.7, width:Dimensions.get('window').width - 60, alignSelf:'center', backgroundColor:'#ffffff20', marginVertical:5,marginTop:10}}></View>


                <View style={{flexDirection:'row', alignItems:'center', marginVertical:0}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontFamily:'NunitoRegular', color:'#d3d3d3', fontSize:20, marginVertical:5,marginHorizontal:2, color:'#13ABB3'}}> ₹ </Text>
                         <Text style={{fontFamily:'NunitoRegular', color:'#d3d3d3', fontSize:14, marginVertical:5}}>Cost : </Text>
                    </View>

                    <TextInput onChangeText={(text) => this.onPriceChange(text)} value={this.state.cost}  marginVertical={4} borderRadius={10}  height={30} marginTop={5} paddingLeft={10} autoCapitalize={'words'} backgroundColor='#ffffff10'  width={80} style={{color:'#d3d3d3', marginHorizontal:10}} keyboardType='numeric' />
                    
                    
                </View>

                <View style={{height:0.7, width:Dimensions.get('window').width - 60, alignSelf:'center', backgroundColor:'#ffffff20', marginVertical:5}}></View>

                <View style={{flexDirection:'row', alignItems:'center', marginVertical:0}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name='cubes' size={20} color='#FC5555' style={{marginRight:5, marginLeft:4}}/>
                         <Text style={{fontFamily:'NunitoRegular', color:'#d3d3d3', fontSize:14, marginVertical:5}}>Weight : </Text>
                    </View>

                    <TextInput onChangeText={(text) => this.onAmountChange(text)} value={this.state.amount}  marginVertical={4} borderRadius={10}  height={30} marginTop={5} paddingLeft={10} autoCapitalize={'words'} backgroundColor='#ffffff10'  width={80} style={{color:'#d3d3d3', marginHorizontal:10}} keyboardType='numeric' />
                    <Text style={{fontFamily:'NunitoRegular', color:'#d3d3d3', fontSize:14, marginVertical:5}}>tonnes</Text>
                    
                    
                </View>

                <View style={{height:0.7, width:Dimensions.get('window').width - 60, alignSelf:'center', backgroundColor:'#ffffff20', marginVertical:5}}></View>



                <View style={{ justifyContent:'center', marginVertical:5}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome5 name='comments' size={20} color='#d3d3d3' style={{marginRight:5, marginLeft:4}}/>
                         <Text style={{fontFamily:'NunitoRegular', color:'#d3d3d3', fontSize:14, marginVertical:5}}>Comments(optional) : </Text>
                    </View>

                    <TextInput onChangeText={(text) => this.onCommentChange(text)} value={this.state.comments}   borderRadius={10}  height={80} marginTop={5} paddingHorizontal={10} autoCapitalize={'words'} backgroundColor='#ffffff10'  width={Dimensions.get('window').width - 60} style={{color:'#d3d3d3', textAlign:'left'}} />
                    
                    
                </View>



                <TouchableOpacity style={{height:50, width:90, backgroundColor:'#d3d3d3', borderRadius:25, alignItems:'center', justifyContent:'center',marginTop:10,alignSelf:'center' }} onPress={()=>this.newTransactioncloseModal()}>
                    <Text style={{fontSize:16, fontFamily:'QuicksandBold', color:'#1F1C1C'}}>ADD</Text>
                </TouchableOpacity>




                </View>
               


                

        </ScrollView>

        </View>

      </View>
    </Modal>












            </View>





        )
    }
}


const styles = StyleSheet.create({
    isactive:{
        height:45,
        width:45,
        borderRadius:25,
        borderWidth:2,
        borderColor:'green',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1F1C1C',
        marginHorizontal:2,
    },
    isinactive:{
        height:45,
        width:45,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#ffffff1a',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1F1C1C',
        marginHorizontal:2,
    },
    isactiveimg:{
        height:28,
        width:28,

    },
    isinactiveimg:{
        height:31,
        width:31
    }
})
 