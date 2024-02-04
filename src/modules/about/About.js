import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import {Header, Footer} from '../../global';

import {Colors, Images, Fonts} from '../../contants';
import {Display} from '../../utils';

const About = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, color: Colors.COLOR_WHITE}}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.titleText}>About</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
});

export default About;
