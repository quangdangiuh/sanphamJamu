import React, { useEffect, useState, useRef, useCallback } from 'react';
import {Animated, Easing, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

//redux
import { useDispatch } from "react-redux";
//Action
import { changeShowCartSidebar } from '../../reducers';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {Colors, Fonts} from '../../contants';
import {Display, Funs} from '../../utils';

const ContactSidebar = ({scrollRef}) => {
  const dispatch = useDispatch();

  // Phone
  const rotateValuePhone = new Animated.Value(0);
  const startImageRotatePhone = () => {
    rotateValuePhone.setValue(0);
    Animated.timing(rotateValuePhone, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startImageRotatePhone());
  };
  const rotatePhone = rotateValuePhone.interpolate({
    inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
    outputRange: ['0deg', '-25deg', '25deg', '-25deg', '25deg', '0deg', '0deg'],
    extrapolate: 'clamp',
  });

  // Top
  const tranformValueTop = new Animated.Value(0);
  const startImageTranformTop = () => {
    tranformValueTop.setValue(0);
    Animated.timing(tranformValueTop, {
      toValue: 5,
      delay: 100,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startImageTranformTop());
  };
  const tranformTop = tranformValueTop.interpolate({
    inputRange: [0, 2.5, 5],
    outputRange: [0, 5, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    startImageRotatePhone();
    startImageTranformTop();
  });

  return (
    <View style={styles.wrapContactSidebar}>
       <View style={[styles.vwIcon, styles.vwIconCart]}>
         <TouchableOpacity activeOpacity={.8} onPress={() => {dispatch(changeShowCartSidebar())}}>
            <MaterialIcon name="shopping-outline" style={[styles.icon, styles.iconCart]} />
          </TouchableOpacity>
       </View>
       <Animated.View style={[styles.vwIcon, styles.vwIconPhone, {transform: [{ rotate: rotatePhone }]}]}>
         <TouchableOpacity activeOpacity={.8} onPress={() => {Funs.onClickCallPhone('0123456789')}}>
            <MaterialIcon name="phone-in-talk" style={[styles.icon, styles.iconPhone]} />
          </TouchableOpacity>
       </Animated.View>
       <View style={[styles.vwIcon, styles.vwIconFb]}>
         <TouchableOpacity activeOpacity={.8} onPress={() => {Funs.openLinkWeb('https://www.facebook.com/')}}>
            <FontistoIcon name="messenger" style={[styles.icon, styles.iconFb]} />
          </TouchableOpacity>
       </View>
       <View style={[styles.vwIcon, styles.vwIconTop]}>
         <TouchableOpacity activeOpacity={.8} onPress={() => {Funs.backToTop(scrollRef)}}>
            <Animated.View style={{transform: [{translateY: tranformTop}]}}><AntIcon name="up" style={[styles.icon, styles.iconTop]} /></Animated.View>
          </TouchableOpacity>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapContactSidebar: {
    position: 'absolute',
    right: 5,
    bottom: 50,
    zIndex: 11
  },
  vwIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Colors.DEFAULT_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    backgroundColor: Colors.COLOR_WHITE,
  },
  icon: {
    fontSize: 20,
    color: Colors.DEFAULT_GREEN,
  },
  vwIconCart: {

  },
  iconCart: {

  },
  vwIconTop: {
    backgroundColor: 'transparent',
  }
});

export default ContactSidebar;
