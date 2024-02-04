import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

import {Colors, Fonts} from '../../../contants';
import {Display, Funs} from '../../../utils';

import ItemProduct from '../../main/components/box/ItemProduct';

// SP theo danh mục
import {dataProduct as dataProductCate} from '../data';

const countProductData = dataProductCate.length;

const ProductOther = ({navigation, title}) => {
  return (
    <View style={styles.wrapProductCate}>
      <View style={styles.wrapBestSeller}>
        <View style={styles.vwbestTitle}>
            <Text style={styles.tbestTitle2}>{title}</Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapProductCate: {
    marginTop: 30,
    paddingTop: 30,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  wrapBestSeller: {
  },
  vwbestTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  tbestTitle2: {
    fontSize: 20,
    lineHeight: 30,
    color: Colors.COLOR_BLACK,
    fontFamily: Fonts.FONT_OSWALD_MEDIUM,
    textTransform: 'uppercase',
  },
  bestProductItem: {
    width: Display.setWidth(55),
    marginRight: 20,
    marginBottom: 5,
  },
});

export default ProductOther;
