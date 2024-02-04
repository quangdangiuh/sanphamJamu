import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

import {Colors, Fonts} from '../../../../contants';
import {Display, Funs} from '../../../../utils';

const ItemProduct = ({navigation, item}) => {
  return (
    <>
      <TouchableOpacity activeOpacity={.8} style={styles.vwbestImg}
        onPress={() => {
          navigation.navigate('ProductDetail', {
            item: item
          });
        }}
      >
        <Image source={item.img} resizeMode="contain" style={styles.bestImg} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={.8} style={styles.vwbestDesc}
        onPress={() => {
          navigation.navigate('ProductDetail', {
            item: item
          });
        }}
      >
        <Text style={styles.bestTitle} numberOfLines={2}>{item.title}</Text>
      </TouchableOpacity>
      <View style={styles.vwbestPrice}>
        <Text style={styles.tbestPrice}>{Funs.formatNumber(item.price, 'text', 'đ')}</Text>
        {(item.priceOld) ? <Text style={styles.tbestPriceOld}>{Funs.formatNumber(item.priceOld, 'text', 'đ')}</Text> : ''}
      </View>
      <TouchableOpacity activeOpacity={.8} onPress={() => alert('Add Cart')} style={styles.btnbestAddCart}>
        <Text style={styles.txtAddCart}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  vwbestImg:{
  },
  bestImg: {
    width: Display.setWidth(47),
    height: Display.setWidth(47),
  },
  vwbestDesc: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  bestTitle: {
    color: Colors.COLOR_333,
    fontSize: 15,
    lineHeight: 23,
    fontWeight: 400
  },
  vwbestPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  tbestPrice: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: Colors.COLOR_333,
  },
  tbestPriceOld: {
    marginLeft: 5,
    textDecorationLine: 'line-through',
    fontSize: 14,
    color: Colors.COLOR_999,
  },
  btnbestAddCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtAddCart: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.COLOR_333,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.COLOR_333,
  },
});

export default ItemProduct;
