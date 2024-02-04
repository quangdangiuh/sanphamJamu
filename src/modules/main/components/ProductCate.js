import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Pressable} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

import {Colors, Fonts} from '../../../contants';
import {Display, Funs} from '../../../utils';

import ItemProduct from './box/ItemProduct';

// SP theo danh mục
const dataProductCate = [
  {
    id: 1,
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 275ML Tahitian Tiaré Hand Wash 275ML',
    img: require('../images/sp3.jpg'),
    price: 399000,
    priceOld: 450000
  },
  {
    id: 2,
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 274ML',
    img: require('../images/sp6.jpg'),
    price: 259000,
    priceOld: 0
  },
  {
    id: 3,
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 273ML',
    img: require('../images/sp1.jpg'),
    price: 199000,
    priceOld: 0
  },
  {
    id: 4,
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 272ML',
    img: require('../images/sp9.jpg'),
    price: 150000,
    priceOld: 250000
  },
  {
    id: 5,
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 271ML',
    img: require('../images/sp5.jpg'),
    price: 590000,
    priceOld: 1450000
  },
  {
    id: 6,
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 270ML',
    img: require('../images/sp4.jpg'),
    price: 399000,
    priceOld: 450000
  }
];
const countProductData = dataProductCate.length;

const ProductCate = ({navigation}) => {
  const [isLoadPage, setisLoadPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoadPage(true);
    }, 500);
  }, []);

  if(isLoadPage){
    return (
      <>
        {/*CateItem*/}
        <View style={styles.wrapBestSeller}>
          <View style={styles.vwbestTitle}>
              <Text style={styles.tbestTitle2}>Sản phẩm mẹ bầu</Text>
          </View>
          <FlatList
            data={dataProductCate}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return(
                /*Item*/
                <Pressable style={(index == (countProductData - 1)) ? [styles.bestProductItem, {marginRight: 0}] : styles.bestProductItem}>
                  <ItemProduct navigation={navigation} item={item} />
                </Pressable>
              )
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <TouchableOpacity activeOpacity={.8} style={styles.vwViewAll}
            onPress={() => {
              navigation.navigate('ProductCategory',{
                title: "Sản phẩm mẹ bầu"
              })
            }}
          >
            <Text style={styles.vtViewAll}>Xem tất cả</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.8} style={styles.vImgBanner} onPress={() => alert('Banner')}>
            <Image source={require('../images/bban1.jpg')} style={styles.imgBanner} resizeMode='contain' />
          </TouchableOpacity>
        </View>
        {/*CateItem*/}
        <View style={styles.wrapBestSeller}>
          <View style={styles.vwbestTitle}>
              <Text style={styles.tbestTitle2}>Sản phẩm mẹ sau sinh</Text>
          </View>
          <FlatList
            data={dataProductCate}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return(
                /*Item*/
                <Pressable style={(index == (countProductData - 1)) ? [styles.bestProductItem, {marginRight: 0}] : styles.bestProductItem}>
                  <ItemProduct navigation={navigation} item={item} />
                </Pressable>
              )
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <TouchableOpacity activeOpacity={.8} style={styles.vwViewAll}
            onPress={() => {
              navigation.navigate('ProductCategory',{
                title: "Sản phẩm mẹ sau sinh"
              })
            }}
          >
            <Text style={styles.vtViewAll}>Xem tất cả</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.8} style={styles.vImgBanner} onPress={() => alert('Banner')}>
            <Image source={require('../images/bban2.jpg')} style={styles.imgBanner} resizeMode='contain' />
          </TouchableOpacity>
        </View>
        {/*CateItem*/}
        <View style={styles.wrapBestSeller}>
          <View style={styles.vwbestTitle}>
              <Text style={styles.tbestTitle2}>Sản phẩm thiên nhiên</Text>
          </View>
          <FlatList
            data={dataProductCate}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return(
                /*Item*/
                <Pressable style={(index == (countProductData - 1)) ? [styles.bestProductItem, {marginRight: 0}] : styles.bestProductItem}>
                  <ItemProduct navigation={navigation} item={item} />
                </Pressable>
              )
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <TouchableOpacity activeOpacity={.8} style={styles.vwViewAll}
            onPress={() => {
              navigation.navigate('ProductCategory',{
                title: "Sản phẩm thiên nhiên"
              })
            }}
          >
            <Text style={styles.vtViewAll}>Xem tất cả</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.8} style={styles.vImgBanner} onPress={() => alert('Banner')}>
            <Image source={require('../images/bban3.jpg')} style={styles.imgBanner} resizeMode='contain' />
          </TouchableOpacity>
        </View>
      </>
    )
  }
  return (
    <></>
  );
};

const styles = StyleSheet.create({
  wrapBestSeller: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
  },
  vwbestTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  tbestTitle1: {
    fontSize: 30,
    lineHeight: 45,
    fontFamily: Fonts.FONT_MTD,
    opacity: 0.5,
  },
  tbestTitle2: {
    fontSize: 25,
    lineHeight: 37,
    color: Colors.COLOR_BLACK,
    fontFamily: Fonts.FONT_OSWALD_MEDIUM,
    textTransform: 'uppercase',
  },
  bestProductItem: {
    width: Display.setWidth(55),
    marginRight: 20,
  },
  vwViewAll: {
    marginTop: 20,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vtViewAll: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 400,
    color: Colors.COLOR_333,
    textDecorationLine: 'underline',
  },
  vImgBanner: {
    marginTop: 20,
  },
  imgBanner: {
    width: Display.width - 20,
    height: (Display.width - 20) / 3
  },
});

export default ProductCate;
