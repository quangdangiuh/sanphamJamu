import React from 'react';
import {View, StyleSheet} from 'react-native';

import LottieView from "lottie-react-native";

import {Colors, Fonts} from '../../contants';
// import {Display} from '../../utils';

const NotFoundBox = ({
  type="NOTFD",
  pos=1,
  autoPlay=true,
  loop=true,
  boxStyle={},
  styleIconFound={},
}) => {

  const dataIcon = {
    'NOTFD': {
      1: require('../images/notfound_blackwhite.json'),
      2: require('../images/notfound_red.json'),
      3: require('../images/notfound_blue.json'),
    },
    '404': {
      1: require('../images/404/404_black.json'),
      2: require('../images/404/404_beekhuizen.json'),
      3: require('../images/404/404_emma.json'),
      4: require('../images/404/404_fruzzdigital.json'),
      5: require('../images/404/404_kalra.json'),
      6: require('../images/404/404_kapdi.json'),
    }
  };

  return (
    <View style={boxStyle}>
      <LottieView
        source={dataIcon[type][pos]}
        autoPlay={autoPlay}
        loop={loop}
        style={[styles.icNotFound, styleIconFound]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icNotFound: {
    width: 300,
    height: 200,
  }
});

export default NotFoundBox;
