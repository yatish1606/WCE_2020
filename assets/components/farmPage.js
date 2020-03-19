import React from 'react';
import Lottie from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

export default class BasicExample extends React.Component {


  UNSAFE_ComponentWillMount() {
    this.animation.reset();
  }

  render() {

    return (


      <View style={styles.animationContainer}>
        <Lottie
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#fff',
          }}
          source={require('../assets/tractor.json')}
          autoPlay loop
        />

        </View>
    )
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
