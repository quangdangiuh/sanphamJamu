import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import {Colors, Fonts} from '../../../contants';
import {Display} from '../../../utils';

const BannerTop = () => {
  return (
    <View style={styles.wrapBoxItem}>
       <ImageBackground source={require('../images/banner.jpg')} resizeMode="cover" style={styles.vwItem}>
          <View style={styles.vwCont}>
            <View style={styles.vTitle}>
              <Text style={styles.txtTitle} numberOfLines={2}>Sản phẩm mẹ bầu</Text>
            </View>
            <View style={styles.vDesc}>
              <Text style={styles.txtDesc}>
                Với mục tiêu mang lại hiệu quả “Khỏe đẹp bền vững từ trong ra ngoài, “Đẹp phải đi đôi với khỏe”, JAMU BEAUTY GROUP hướng đến việc cho ra đời cac liệu pháp AN TOÀN – KHOA HỌC & HIỆU QUẢ BỀN VỮNG.
                
              </Text>
            </View>
          </View>
          <View style={styles.bgItem}></View>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapBoxItem: {
  },
  vwItem: {
    height: Display.width / 2.3,
    justifyContent: 'center',
  },
  vwCont: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    zIndex: 2,
  },
  vTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  txtTitle: {
    fontSize: 25,
    lineHeight: 37,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Colors.COLOR_WHITE,
  },
  txtDesc: {
    color: Colors.COLOR_WHITE,
    fontSize: 14,
    lineHeight: 22,
  },
  bgItem: {
    position: 'absolute',
    width: Display.width,
    height: Display.width / 2.3,
    backgroundColor: Colors.COLOR_BLACK,
    opacity: .2,
    zIndex: 1,
  }
});

export default BannerTop;
