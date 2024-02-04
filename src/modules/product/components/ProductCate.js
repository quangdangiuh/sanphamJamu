import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Pressable} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

import {Colors, Fonts} from '../../../contants';
import {Display, Funs} from '../../../utils';

import ItemProduct from '../../main/components/box/ItemProduct';

// SP theo danh mục
import {dataProduct as dataProductCate} from '../data';

const countProductData = dataProductCate.length;

const ProductCate = ({navigation}) => {
  return (
    <View style={styles.wrapProductCate}>
      {/*CateItem*/}
      <View style={styles.wrapBestSeller}>
        <View style={styles.vwbestTitle}>
            <Text style={styles.tbestTitle2}>Dưỡng da mặt</Text>
            <TouchableOpacity activeOpacity={.8} style={styles.vwViewAll} 
              onPress={() => {
                navigation.navigate('ProductCategory',
                  {
                    title: "Dưỡng da mặt",
                  }
                )
              }}
            >
              <Text style={styles.vtViewAll}>Xem tất cả</Text>
            </TouchableOpacity>
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
        <TouchableOpacity activeOpacity={.8} style={styles.vImgBanner} onPress={() => alert('Banner')}>
          <Image source={require('../images/ban1.jpg')} style={styles.imgBanner} resizeMode='contain' />
        </TouchableOpacity>
      </View>

      {/*CateItem*/}
      <View style={styles.wrapBestSeller}>
        <View style={styles.vwbestTitle}>
            <Text style={styles.tbestTitle2}>Dưỡng da body</Text>
            <TouchableOpacity activeOpacity={.8} style={styles.vwViewAll}
              onPress={() => {
                navigation.navigate('ProductCategory',
                  {
                    title: "Dưỡng da body",
                  }
                )
              }}
            >
              <Text style={styles.vtViewAll}>Xem tất cả</Text>
            </TouchableOpacity>
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
        <TouchableOpacity activeOpacity={.8} style={styles.vImgBanner} onPress={() => alert('Banner')}>
          <Image source={require('../images/ban2.jpg')} style={styles.imgBanner} resizeMode='contain' />
        </TouchableOpacity>
      </View>

      {/*CateItem*/}
      <View style={styles.wrapBestSeller}>
        <View style={styles.vwbestTitle}>
            <Text style={styles.tbestTitle2}>Tóc</Text>
            <TouchableOpacity activeOpacity={.8} style={styles.vwViewAll}
              onPress={() => {
                navigation.navigate('ProductCategory',
                  {
                    title: "Tóc",
                  }
                )
              }}
            >
              <Text style={styles.vtViewAll}>Xem tất cả</Text>
            </TouchableOpacity>
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
        <TouchableOpacity activeOpacity={.8} style={styles.vImgBanner} onPress={() => alert('Banner')}>
          <Image source={require('../images/ban3.jpg')} style={styles.imgBanner} resizeMode='contain' />
        </TouchableOpacity>
      </View>

      {/*CateItem*/}
      <View style={styles.wrapBestSeller}>
        <View style={styles.vwbestTitle}>
            <Text style={styles.tbestTitle2}>Trang điểm</Text>
            <TouchableOpacity activeOpacity={.8} style={styles.vwViewAll}
              onPress={() => {
                navigation.navigate('ProductCategory',
                  {
                    title: "Trang điểm",
                  }
                )
              }}
            >
              <Text style={styles.vtViewAll}>Xem tất cả</Text>
            </TouchableOpacity>
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
        <TouchableOpacity activeOpacity={.8} style={styles.vImgBanner} onPress={() => alert('Banner')}>
          <Image source={require('../images/ban4.jpg')} style={styles.imgBanner} resizeMode='contain' />
        </TouchableOpacity>
      </View>

      {/*CateItem*/}
      <View style={styles.wrapBestSeller}>
        <View style={styles.vwbestTitle}>
            <Text style={styles.tbestTitle2}>Khác</Text>
            <TouchableOpacity activeOpacity={.8} style={styles.vwViewAll}
              onPress={() => {
                navigation.navigate('ProductCategory',
                  {
                    title: "Khác",
                  }
                )
              }}
            >
              <Text style={styles.vtViewAll}>Xem tất cả</Text>
            </TouchableOpacity>
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
        <TouchableOpacity activeOpacity={.8} style={styles.vImgBanner} onPress={() => alert('Banner')}>
          <Image source={require('../images/ban5.jpg')} style={styles.imgBanner} resizeMode='contain' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapProductCate: {
    marginTop: 20,
  },
  wrapBestSeller: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
  },
  vwbestTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginBottom: 5,
  },
  vwViewAll: {
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
