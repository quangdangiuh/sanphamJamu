import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';

//redux
import { useDispatch } from "react-redux";
//Action
import { changeShowFilter } from '../../../reducers';

import {Colors, Fonts} from '../../../contants';
import {Display} from '../../../utils';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} style={styles.vwFilter} onPress={() => {dispatch(changeShowFilter())}}>
        <Text style={styles.txtFilter}>BỘ LỌC</Text>
        <AntIcon name="filter" style={styles.iconFilter} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  vwFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  txtFilter: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: Fonts.FONT_OSWALD_MEDIUM,
    color: Colors.COLOR_333,
    marginRight: 10,
  },
  iconFilter: {
    fontSize: 16,
    color: Colors.COLOR_333,
  }
});

export default Filter;
