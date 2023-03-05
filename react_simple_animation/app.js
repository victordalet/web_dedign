import React ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';



export default function App() {

  const value = useState(new Animated.ValueXY({x : 0,y : 0}))[0];
  const [pos,set_pos] = useState(1);

  function moveBallStart() {
    Animated.timing(value,{
      toValue : {x : 100 , y : 100},
      duration: 1000,
      useNativeDriver : false
    }).start();
  }

  function moveBallEnd() {
    Animated.timing(value,{
      toValue : {x : 0 , y : 0},
      duration: 1000,
      useNativeDriver : false
    }).start();
  }

  return (

    <View>
      <Animated.View style={
        value.getLayout()
      }>
        <View style={{
          width : 100,
          height : 100,
          borderRadius : 100,
          backgroundColor: "#F00"
        }}></View>
      </Animated.View>
      <TouchableOpacity onPress={ () => {
        if (pos === 1) {
          set_pos(2);
          moveBallStart();
        }
        else {
          moveBallEnd();
          set_pos(1);
        }
      }}>
        <Text>Click</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


