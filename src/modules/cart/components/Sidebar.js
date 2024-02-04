import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {Colors, Images, Fonts} from '../../../contants';
import {Display, Funs} from '../../../utils';

const DATA = [
  {
    id: 1,
    picture: require('../images/sp1.jpg'),
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 275ML Tiaré Hand Wash 275ML',
    price: 590000,
    priceOld: 679000,
  },
  {
    id: 2,
    picture: require('../images/sp2.jpg'),
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 275ML',
    price: 590000,
    priceOld: 0,
  },
  {
    id: 3,
    picture: require('../images/sp3.jpg'),
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 275ML',
    price: 590000,
    priceOld: 679000,
  },
  {
    id: 4,
    picture: require('../images/sp2.jpg'),
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 275ML',
    price: 590000,
    priceOld: 679000,
  },
  {
    id: 5,
    picture: require('../images/sp3.jpg'),
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 275ML',
    price: 590000,
    priceOld: 679000,
  },
  {
    id: 6,
    picture: require('../images/sp1.jpg'),
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 275ML',
    price: 590000,
    priceOld: 679000,
  },
  {
    id: 7,
    picture: require('../images/sp2.jpg'),
    title: 'Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 275ML',
    price: 590000,
    priceOld: 679000,
  },
];

const countData = DATA.length;

const Item = ({item, index, navigation}) => {
  const [quanty, setQuanty] = useState('1');

  const changeQuanty = (type, quanty, setQuanty) => {
    if(isNaN(quanty)) quanty = '';

    if(type == 'down'){
      if(quanty != '') quanty = parseInt(quanty) - 1;
      if(quanty <= 0 && quanty.toString() != '') quanty = 1;
      setQuanty(quanty.toString());
    }else if(type == 'up'){
      if(quanty != '') quanty = parseInt(quanty) + 1;
      setQuanty(quanty.toString());
    }else if(type == 'between'){
      if(quanty != '')  quanty = parseInt(quanty.toString());
      if(quanty <= 0 && quanty.toString() != '') quanty = 1;
      setQuanty(quanty.toString());
    }else if(type == 'blur' && quanty.toString() == ''){
      quanty = 1;
      setQuanty(quanty.toString());
    }
  };

  const handleTextChange = (text) => {
    changeQuanty('between', text, setQuanty);
  }

  const viewDetail = () => {
    navigation.navigate('Product');
  }

  return (
    <View style={(index == (countData - 1)) ? [styles.wrapItem, {marginBottom: 0}] : styles.wrapItem}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.btnImg} onPress={() => viewDetail()}>
          <Image source={item.picture} style={styles.img} />
        </TouchableOpacity>
      </View>
      <View style={styles.itemRight}>
        <TouchableOpacity style={styles.btnTitle}>
          <Text style={styles.title}>{Funs.cutString(item.title, 75, 75)}</Text>
        </TouchableOpacity>
        <View style={styles.wrapPrice}>
          {Funs.formatNumber(item.price, 'text', 'đ', styles.price)}
          {(item.priceOld) ? <Text style={styles.priceOld}>{Funs.formatNumber(item.priceOld, 'text', 'đ', styles.priceOld)}</Text> : ''}
        </View>
        <View style={styles.wrapQuantyDel}>
          <View style={styles.wrapQuanty}>
            <TouchableOpacity activeOpacity={.6} style={styles.btnQtyUp} onPress={() => {changeQuanty('up', quanty, setQuanty)}}>
              <FeatherIcon name="chevron-up" style={styles.iconQtyUp} />
            </TouchableOpacity>
            <View style={styles.wrapInputQty}>
              <TextInput
                style={styles.inputQty}
                keyboardType='numeric'
                value={quanty}
                placeholderTextColor={Colors.COLOR_WHITE}
                // onChangeText={setQuanty}
                onChangeText={handleTextChange}
                onFocus={() => {}}
                onBlur={() => {
                  changeQuanty('blur', quanty, setQuanty);
                }}
              />
            </View>
            <TouchableOpacity activeOpacity={.6} style={styles.btnQtyDown} onPress={() => {changeQuanty('down', quanty, setQuanty)}}>
              <FeatherIcon name="chevron-down" style={styles.iconQtyDown} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnDelete} onPress={() => {alert('DELETE')}}>
            <AntIcon name="close" style={styles.iconDelete} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Sidebar = ({navigation}) => {
  return (
    <FlatList
      data={DATA}
      renderItem={({item, index}) => <Item item={item} index={index} navigation={navigation} />}
      keyExtractor={item => item.id}
      contentContainerStyle={{paddingTop: 10,}}
    />
  );
};

const styles = StyleSheet.create({
  wrapItem: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  itemLeft: {
    width: Display.setWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRight: {
    width: Display.setWidth(55),
  },
  img: {
    width: Display.setWidth(16),
    height: Display.setHeight(16),
    resizeMode: 'contain',
  },
  title: {
    color: Colors.COLOR_BLACK,
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 300,
    marginBottom: 5,
  },
  wrapPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: 500,
    color: Colors.COLOR_333,
  },
  priceOld: {
    marginLeft: 10,
    textDecorationLine: 'line-through',
    fontSize: 12
  },
  wrapQuantyDel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapQuanty: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 90,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  inputQty: {
    width: 40,
    height: 30,
    fontSize: 12,
    padding: 0,
    color: Colors.COLOR_666,
    textAlign: 'center',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
    borderLeftColor: 'rgba(0, 0, 0, 0.1)',
  },
  btnQtyUp: {
    width: 25,
    height: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0)',
    borderRightWidth: 0,
  },
  btnQtyDown: {
    width: 25,
    height: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0)',
    borderLeftWidth: 0,
  },
  btnDelete: {
    marginRight: 5,
  },
  iconDelete: {
    fontSize: 20,
    color: Colors.COLOR_BLACK,
  }
});

export default Sidebar;
