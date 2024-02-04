import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

//redux
import { useSelector, useDispatch } from "react-redux";
//Action
import { checkLoadSplash } from '../../reducers';

import {Colors, Images, Fonts} from '../../contants';
import {Display} from '../../utils';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    setTimeout(() => {
      // navigation.replace('Welcome');
      dispatch(checkLoadSplash());
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.COLOR_WHITE}
        translucent
      />
      <Animatable.Image animation="zoomInDown" duration={3000} source={Images.SPLASH} resizeMode="contain" style={styles.image} />
      <Animatable.Text animation="fadeIn" duration={2000} delay={1000} iterationCount={1} direction="alternate" style={styles.titleText}>JAMU Product</Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.COLOR_WHITE,
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(50),
  },
  titleText: {
    color: Colors.DEFAULT_GREEN,
    fontSize: 32,
    fontFamily: Fonts.FONT_MTD,
  },
});

export default Splash;
