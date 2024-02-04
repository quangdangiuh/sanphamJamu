import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {Colors, Fonts} from '../../../contants';
import {Display} from '../../../utils';

const HotSale = () => {
  return (
    <View style={styles.wrapHotSale}>
      {/*Img*/}
      <View style={styles.hswrapTitle}>
        <View style={styles.hsvTitle}>
          <Text style={styles.hstTitle1}>Hot Sale</Text>
        </View>
        <View style={styles.hsvTitle}>
          <Text style={styles.hstTitle2}>Sản phẩm khuyến mãi</Text>
        </View>
      </View>
      {/*Content*/}
      <View style={styles.hswrapContent}>
        {/*Item 1*/}
        <View style={styles.hsvItem}>
          <TouchableOpacity activeOpacity={.8} onPress={() => {alert('1')}}>
            <View style={styles.hsvImg}>
              <Image source={require('../images/km1.jpg')} style={styles.hsiImg} />
            </View>
            <View style={styles.hsvDesc}>
              <Text style={styles.hstdTitle}>Sản phẩm mẹ bầu</Text>
              <Text style={styles.hstdCont}>Cho mẹ bầu 1 thai kỳ khỏe mạnh</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*Item 1*/}
        <View style={styles.hsvItem}>
          <TouchableOpacity activeOpacity={.8} onPress={() => {alert('2')}}>
            <View style={styles.hsvImg}>
              <Image source={require('../images/km2.jpg')} style={styles.hsiImg} />
            </View>
            <View style={styles.hsvDesc}>
              <Text style={styles.hstdTitle}>Sản phẩm mẹ sau sinh</Text>
              <Text style={styles.hstdCont}>Mẹ xinh, con khỏe</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*Item 3*/}
        <View style={styles.hsvItem}>
          <TouchableOpacity activeOpacity={.8} onPress={() => {alert('3')}}>
            <View style={styles.hsvImg}>
              <Image source={require('../images/km3.jpg')} style={styles.hsiImg} />
            </View>
            <View style={styles.hsvDesc}>
              <Text style={styles.hstdTitle}>Mỹ phẩm thiên nhiên</Text>
              <Text style={styles.hstdCont}>Cho vẻ đẹp thuần khiết</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*Item 4*/}
        <View style={styles.hsvItem}>
          <TouchableOpacity activeOpacity={.8} onPress={() => {alert('3')}}>
            <View style={styles.hsvImg}>
              <Image source={require('../images/km1.jpg')} style={styles.hsiImg} />
            </View>
            <View style={styles.hsvDesc}>
              <Text style={styles.hstdTitle}>Mỹ phẩm thiên nhiên</Text>
              <Text style={styles.hstdCont}>Cho vẻ đẹp thuần khiết</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapHotSale: {
    marginTop: 30,
    marginBottom: 30,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  hswrapTitle: {
    marginBottom: 25,
  },
  hsvTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  hstTitle1: {
    fontSize: 30,
    lineHeight: 40,
    fontFamily: Fonts.FONT_MTD,
    opacity: 0.5,
  },
  hstTitle2: {
    fontSize: 25,
    lineHeight: 35,
    textTransform: 'uppercase',
    color: Colors.COLOR_BLACK,
    fontFamily: Fonts.FONT_OSWALD_SEMIBOLD
  },
  hswrapContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hsvItem: {
    width: ((Display.width - 10) / 2),
    height: ((Display.width - 10) / 2),
    /*width: ((Display.width) / 2) - 5,
    height: ((Display.width) / 2) - 5,*/
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  hsiImg: {
    width: "100%",
    height: "100%",
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  hsvDesc: {
    position: 'absolute',
    bottom: 10,
    padding: 10
  },
  hstdTitle: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.COLOR_WHITE,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  hstdCont: {
    color: Colors.COLOR_WHITE,
    fontSize: 10,
    lineHeight: 18,
    fontWeight: 400,
    textTransform: 'uppercase',
  },
});

export default HotSale;
