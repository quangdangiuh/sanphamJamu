import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';

import {Colors, Fonts} from '../../contants';
import {Display} from '../../utils';

const Pagination = ({scrollRef}) => {
  return (
    <View style={styles.vwPagination}>
      {/*<TouchableOpacity activeOpacity={.8} style={styles.itemPage}><EntypoIcon name="controller-fast-backward" style={styles.iconPage} /></TouchableOpacity>*/}
      {/*<TouchableOpacity activeOpacity={.8} style={styles.itemPage}><EntypoIcon name="controller-play" style={[styles.iconPage, {transform: [{ rotate: '180deg'}]}]} /></TouchableOpacity>*/}
      <TouchableOpacity activeOpacity={.8} style={[styles.itemPage, styles.pageActive]}><Text style={[styles.txtPage, styles.txtPageActive]}>1</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity={.8} style={styles.itemPage}><Text style={styles.txtPage}>2</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity={.8} style={styles.itemPage}><Text style={styles.txtPage}>3</Text></TouchableOpacity>
      <TouchableOpacity activeOpacity={.8} style={styles.itemPage}><EntypoIcon name="controller-play" style={styles.iconPage} /></TouchableOpacity>
      <TouchableOpacity activeOpacity={.8} style={styles.itemPage}><EntypoIcon name="controller-fast-forward" style={styles.iconPage} /></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  vwPagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  itemPage: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1,
    marginRight: 1,
  },
  pageActive: {
    backgroundColor: Colors.COLOR_BLACK,
  },
  iconPage: {
    fontSize: 20,
    color: Colors.COLOR_BLACK,
  },
  txtPage: {
    fontSize: 20,
    color: Colors.COLOR_BLACK,
  },
  txtPageActive: {
    color: Colors.COLOR_WHITE,
  }
});

export default Pagination;
