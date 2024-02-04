import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, StatusBar, Image} from 'react-native';

import {Colors, Images, Fonts} from '../../contants';
import {Display} from '../../utils';

const Category = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Category</Text>
      </View>
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

export default Category;
