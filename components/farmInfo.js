import React from 'react';
import {View, Text, StatusBar,TouchableOpacity, Picker, StyleSheet, Image, Dimensions, Modal} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
import Lottie from 'lottie-react-native';
import RNPicker from "search-modal-picker";
import SwitchSelector from 'react-native-switch-selector';
import NavBar from './navBar.js';



export default class FarmInfo extends React.Component{

  state ={
    manual:true,
    model:false,
    modalVisible:false,


    dataSource: [
        {
          id: 1,
          name: "Black Basalt Soil"
        },
        {
          id: 2,
          name: "Red Konkan Soil"
        },
        {
          id: 3,
          name: "Alluvial Soil"
        },
        {
          id: 4,
          name: "Desert Soil "
        },
        {
          id: 5,
          name: "Laterite Soil "
        },
        {
          id: 5,
          name: "Mountain Soil "
        },

      ],
      dataSource2: [
          {
            id: 1,
            name: "Sugarcane"
          },
          {
            id: 2,
            name: "Jowar"
          },
          {
            id: 3,
            name: "Rice"
          },
          {
            id: 4,
            name: "Wheat"
          },
          {
            id: 5,
            name: "Corn"
          },
          {
            id: 6,
            name: "Bajra"
          },
          {
            id: 7,
            name: "Barley"
          },
          {
            id: 8,
            name: "Ragi"
          },

        ],
      placeHolderText: "Please select type of soil",
      placeHolderText2: "Please select type of crop",
      selectedText: "",
      selectedText2: "",

  }

  _selectedValue(index, item) {
    this.setState({ selectedText: item.name });
  }

  _selectedValue2(index, item) {
    this.setState({ selectedText2: item.name });
  }

  changeManualState(){
    this.setState({manual: !this.state.manual, model: !this.state.model})
  }

  changeModelState(){
    this.setState({model: !this.state.model, manual: !this.state.manual})
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }


  render(){
    const { navigate } = this.props.navigation;

    return(
      <View style={{marginTop:StatusBar.currentHeight, flex:1, backgroundColor:'#fff'}}>

      <View style={{flexDirection:'row', justifyContent:'flex-start', marginHorizontal:15, marginTop:15}}>
      <TouchableOpacity style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center',}}  >
      <FontAwesome5 name="chevron-left" size={30} color={'#d3d3d3'} />
      </TouchableOpacity>
      </View>


      <View style={{backgroundColor:'#fff',alignItems:'center', marginHorizontal:20 }}>

      <View style={{flexDirection:'row',marginTop:10, marginHorizontal:15, alignItems:'center', justifyContent:'center'}}>

      <View style={{flex:4, backgroundColor:'#fff'}}>
        <Text style={{fontSize:30, fontFamily:'QuicksandBold', color:'green', marginVertical:15}}>Farm Details</Text>
        <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', color:'#d3d3d4', marginVertical:5}}>Please enter some details about the farm you own</Text>
      </View>

      <View style={{flex:2, backgroundColor:'#fff'}}>
        <Lottie
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#fff',
          }}
          source={require('../assets/details.json')}
          autoPlay loop
        />
        </View>

      </View>

      </View>


      <View style={{ marginHorizontal:20, height:300, marginTop:25, }}>

      <View style={{flex:1, flexDirection:'row'}}>

        <TouchableOpacity style={this.state.manual ? styles.activeManual : styles.inActiveManual} onPress={()=>{this.changeManualState()}}>
            <FontAwesome5 name="edit" size={16} color={'green'} />
            <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', marginVertical:5, marginHorizontal:3}}>Manual</Text>
        </TouchableOpacity>

        <TouchableOpacity style={this.state.model ? styles.activeModel : styles.inActiveModel} onPress={()=>{this.changeModelState()}}>
            <FontAwesome5 name="clipboard" size={16} color={'green'} />
            <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', marginVertical:5, marginHorizontal:3}}>Model</Text>
        </TouchableOpacity>


      </View>


      <View style={{flex:5, backgroundColor:'#fff',}}>



      {this.state.manual?

         <View style={{backgroundColor:'#fff', marginVertical:5,}}>

         <Text style={{fontSize:12, fontFamily:'NunitoBold', color:'#d3d3d3', marginLeft:10, marginVertical:5,marginTop:10}}>Please select appropriate fields for your farm</Text>

         <Text style={{fontSize:14, fontFamily:'NunitoBold', color:'brown', marginLeft:10, marginVertical:5, }}>Soil</Text>

         <RNPicker
          dataSource={this.state.dataSource}
          dummyDataSource={this.state.dataSource}
          defaultValue={false}
          //pickerTitle={"Country Picker"}
          showSearchBar={true}
          disablePicker={false}
          changeAnimation={"fade"}
          searchBarPlaceHolder={"Search....."}
          //showPickerTitle={true}
          searchBarContainerStyle={this.props.searchBarContainerStyle}
          pickerStyle={styles.pickerStyle}
          pickerItemTextStyle={styles.listTextViewStyle}
          selectedLabel={this.state.selectedText}
          placeHolderLabel={this.state.placeHolderText}
          selectLabelTextStyle={styles.selectLabelTextStyle}
          placeHolderTextStyle={styles.placeHolderTextStyle}
          //dropDownImageStyle={Styles.dropDownImageStyle}
          //dropDownImage={require("./res/ic_drop_down.png")}
          selectedValue={(index, item) => this._selectedValue(index, item)}
        />




        <Text style={{fontSize:14, fontFamily:'NunitoBold', color:'green', marginLeft:10, marginVertical:5, }}>Crop</Text>

        <RNPicker
         dataSource={this.state.dataSource2}
         dummyDataSource={this.state.dataSource2}
         defaultValue={false}
         //pickerTitle={"Country Picker"}
         showSearchBar={true}
         disablePicker={false}
         changeAnimation={"fade"}
         searchBarPlaceHolder={"Search....."}
         //showPickerTitle={true}
         searchBarContainerStyle={this.props.searchBarContainerStyle}
         pickerStyle={styles.pickerStyle}
         pickerItemTextStyle={styles.listTextViewStyle}
         selectedLabel={this.state.selectedText}
         placeHolderLabel={this.state.placeHolderText2}
         selectLabelTextStyle={styles.selectLabelTextStyle}
         placeHolderTextStyle={styles.placeHolderTextStyle}
         //dropDownImageStyle={Styles.dropDownImageStyle}
         //dropDownImage={require("./res/ic_drop_down.png")}
         selectedValue={(index, item) => this._selectedValue2(index, item)}
       />




         </View>



         :


         <View style={{alignItems:'center', justifyContent:'space-around', marginVertical:10, marginHorizontal:10, flexDirection:'column', backgroundColor:'#fff'}}>

         <Image
         source={require('../assets/featnotavailable.jpg')}
         style={{height:130, width:260, marginVertical:10}}
         />

         <Text style={{fontSize:15, fontFamily:'NunitoSemiBold', marginVertical:20, color:'#878787', marginHorizontal:10}}>Oops! This feature is not available yet!</Text>




         </View>}




      </View>



      </View>

      <View style={{width:Dimensions.get('window').width, alignItems:'center'}}>

      <TouchableOpacity style={{width:140, height:50, backgroundColor:'#fff', borderRadius:25, marginVertical:20, alignItems:'center', justifyContent:'center', elevation:4, paddingVertical:5,}} onPress={()=>{this.openModal()}} >
        <Text style={{fontSize:18, color:'#2FB12B', fontFamily:'QuicksandBold'}}> Proceed </Text>
      </TouchableOpacity>
      </View>









      <Modal visible={this.state.modalVisible} animationType='fade' animationDuration={1500} onRequestClose={() => this.closeModal()} transparent={true}>
      <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#00000080'}}>

        <View style={{height:350, width:300, backgroundColor:'#fff', borderRadius:5, justifyContent:'space-around', alignItems:'center', paddingVertical:5}}>


        <Lottie
          style={{
            width: 170,
            height: 170,
            backgroundColor: '#fff',

          }}
          source={require('../assets/check.json')}
          autoPlay loop={false}
          duration={1000}

        />

        <Text style={{fontSize:25, marginHorizontal:10, fontFamily:'NunitoSemiBold', color:'#5F5F5F', textAlign:'center'}}>All Done!</Text>

        <Text style={{fontSize:14, fontFamily:'NunitoSemiBold', color:'#d3d3d3', textAlign:'center', marginHorizontal:7,marginVertical:5}}>Your profile and farm have been set up successfully!</Text>

        <TouchableOpacity style={{height:50, width:100, borderRadius:25, backgroundColor:'#fff', elevation:3, marginVertical:10, alignItems:'center', justifyContent:'center'}} >
          <Text style={{fontSize:15, fontFamily:'NunitoBold', color:'#2FB12B'}}>Done</Text>
        </TouchableOpacity>


        </View>

      </View>
      </Modal>





      </View>









    )
  }
}


const styles = StyleSheet.create({
  activeManual:{
    backgroundColor:'#A2E5A4', flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row', borderRadius:15
  },
  inActiveManual:{
    flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row',borderRadius:15
  },

  activeModel:{
    backgroundColor:'#A2E5A4', flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row',borderRadius:15
  },
  inActiveModel:{
    flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row',borderRadius:15
  },

  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10,
    fontFamily:'NunitoSemiBold'
  },

  selectLabelTextStyle: {
    color: "#878787",
    textAlign: "left",
    width: "99%",
    padding: 10,
    flexDirection: "row",
    fontSize:12,
    fontFamily:"NunitoSemiBold"
  },
  placeHolderTextStyle: {
    color: "#D3D3D3",
    padding: 10,
    textAlign: "left",
    width: "99%",
    flexDirection: "row",
    fontSize:12,
    fontFamily:"NunitoSemiBold"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 12,
    height: 10,
    alignSelf: "center"
  },
  listTextViewStyle: {
    color: "#878787",
    marginVertical: 10,
    flex: 0.9,
    marginLeft: 20,
    marginHorizontal: 10,
    textAlign: "left",
    fontSize:12,
    fontFamily:'NunitoSemiBold',
  },
  pickerStyle: {
    marginLeft: 18,
    elevation:3,
    paddingRight: 30,
    marginRight: 10,
    marginVertical: 5,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 5,
    flexDirection: "row"
  }

})
//  const { navigate } = this.props.navigation;

// <Picker
//
// style={{height: 50, width: 100}}
// // onValueChange={(itemValue, itemIndex) =>
// // this.setState({language: itemValue})
// >
// <Picker.Item label="Java" value="java" />
// <Picker.Item label="JavaScript" value="js" />
// </Picker>


//
// {this.state.manual ?
//
//   <View style={{marginHorizontal:5, backgroundColor:'red', marginVertical:5, flex:1, alignItems:'center'}}>
//
//   <Text>hi, put searchable dropdown</Text>
//
//
//   </View>
//
//
//
//
//
//
//
//   :
//
//
//
//
//   <View style={{marginHorizontal:5, backgroundColor:'red', marginVertical:5, flex:1, alignItems:'center'}}>
//
//   <Text>hi</Text>
//
//   </View>
//
//
//
//
//
// </View>
