import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAIcon from 'react-native-vector-icons/FontAwesome';

import {Colors, Fonts} from '../../contants';
import {Display} from '../../utils';

const Pagination = ({total, p}) => {

  var list_nav = [];
  if(total > 0){
    for (let i = 1; i <= total; i++) {
      list_nav.push(
        <TouchableOpacity
          activeOpacity={.8}
          style={[styles.vwNaPage, (i == p) ? styles.vwNaActive : {}]}
          onPress={() => {
            alert("Pagination")
          }}
          key={i}
        >
          <Text style={[styles.txtNaTitle, (i == p) ? styles.txtNaActive : {}]}>{i}</Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <View style={styles.vwNav}>
      <TouchableOpacity
        activeOpacity={.8}
        style={styles.vwNaPage}
        onPress={() => {
          alert("Pagination")
        }}
      >
        <FontAIcon name="angle-double-left" style={styles.iconNaTitle} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={.8}
        style={styles.vwNaPage}
        onPress={() => {
          alert("Pagination")
        }}
      >
        <FontAIcon name="angle-left" style={styles.iconNaTitle} />
      </TouchableOpacity>
        
        {list_nav}

      <TouchableOpacity
        activeOpacity={.8}
        style={styles.vwNaPage}
        onPress={() => {
          alert("Pagination")
        }}
      >
        <FontAIcon name="angle-right" style={styles.iconNaTitle} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={.8}
        style={styles.vwNaPage}
        onPress={() => {
          alert("Pagination")
        }}
      >
        <FontAIcon name="angle-double-right" style={styles.iconNaTitle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  vwNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vwNaPage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  vwNaActive: {
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  txtNaTitle: {
    fontSize: 18,
    lineHeight: 26,
    color: Colors.COLOR_666,
  },
  txtNaActive: {
    color: Colors.COLOR_WHITE,
  },
  iconNaTitle: {
    fontSize: 20,
    color: Colors.COLOR_666,
  }
});

export default Pagination;
