import React, { useEffect, useState, useRef } from 'react';
import {Animated, Easing, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors, Fonts} from '../../../../contants';
import {Display} from '../../../../utils';

const ItemFilter = ({navigation, item, hasCheckItemFilter, hasExistInData}) => {
  const heightFilter = useRef(new Animated.Value(0)).current;
  const [isShowFilter, setisShowFilter] = useState(false);

  useEffect(() => {
    Animated.timing(heightFilter, {
      toValue: (isShowFilter) ? 1 : 0,
      duration: (isShowFilter) ? 400 : 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isShowFilter]);
  const maxHeightFilter = heightFilter.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Display.height]
  });

  const hasHandleCheckItemFilter = (id, type) => {
    hasCheckItemFilter(id, type);
  }

  let contentSub = null;
  if(item.sub.length > 0){
    contentSub = item.sub.map(function(itemSub, index) {
      return (
        <TouchableOpacity key={itemSub.id} activeOpacity={.7} onPress={() => {hasHandleCheckItemFilter(itemSub.id, item.type)}} style={styles.vsubItem}>
          <MaterialIcon name={(hasExistInData(itemSub.id, item.type) < 0) ? "checkbox-blank-outline" : "checkbox-intermediate"} style={styles.uiCheckBox} />
          <Text style={styles.mnName}>{itemSub.title}</Text>
        </TouchableOpacity>
      )
    })
  }

  return (
    <View style={styles.wItemFilter}>
      <TouchableOpacity activeOpacity={.8} onPress={() => {setisShowFilter(!isShowFilter)}} style={styles.ttFilter}>
        <Text style={styles.mnTitle}>{item.title}</Text>
        <FontAIcon name={!isShowFilter ? 'angle-down' : 'angle-up'} style={styles.iconTitle} />
      </TouchableOpacity>
      <Animated.View style={[styles.contFilter, {maxHeight: maxHeightFilter}]}>
        {
          contentSub
        }
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wItemFilter: {
    marginBottom: 10,
  },
  ttFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  mnTitle: {
    fontSize: 15,
    lineHeight: 24,
    color: Colors.COLOR_BLACK,
    fontFamily: Fonts.FONT_OSWALD_MEDIUM,
    textTransform: 'uppercase',
  },
  iconTitle: {
    fontSize: 18,
    color: Colors.COLOR_BLACK,
    fontWeight: 500,
  },
  contFilter: {
    // height: 0,
  },
  mnName: {
    marginBottom: 3,
    fontSize: 13,
    lineHeight: 22,
    color: Colors.COLOR_444,
    fontWeight: 400,
  },
  vsubItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uiCheckBox: {
    marginRight: 5,
    fontSize: 16,
  }
});

export default ItemFilter;
