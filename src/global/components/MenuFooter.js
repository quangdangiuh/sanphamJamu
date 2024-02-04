import React, { useEffect, useState, useRef } from 'react';
import {Animated, Easing, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAIcon from 'react-native-vector-icons/FontAwesome';

import {Colors, Fonts} from '../../contants';
import {Display} from '../../utils';

const MenuFooter = ({navigation, item}) => {
  const heightMenu = useRef(new Animated.Value(0)).current;
  const [isShowMenu, setisShowMenu] = useState(false);
  useEffect(() => {
    Animated.timing(heightMenu, {
      toValue: (isShowMenu) ? 1 : 0,
      duration: (isShowMenu) ? 400 : 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isShowMenu]);
  const maxHeightMenu = heightMenu.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Display.height]
  });

  let contentSub = null;
  if(item.sub.length > 0){
    contentSub = item.sub.map(function(itemSub, index) {
      return (
        <TouchableOpacity key={itemSub.id} activeOpacity={.7} onPress={() => alert('Menu Footer')}>
          <Text style={styles.mnName}>{itemSub.title}</Text>
        </TouchableOpacity>
      )
    })
  }

  return (
    <View style={styles.wItemMenu}>
      <TouchableOpacity activeOpacity={.8} onPress={() => {setisShowMenu(!isShowMenu)}} style={styles.ttMenu}>
        <Text style={styles.mnTitle}>{item.title}</Text>
        <FontAIcon name={!isShowMenu ? 'angle-down' : 'angle-up'} style={styles.iconTitle} />
      </TouchableOpacity>
      <Animated.View style={[styles.contMenu, {maxHeight: maxHeightMenu}]}>
        {
          contentSub
        }
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wItemMenu: {
    marginBottom: 10,
  },
  ttMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  mnTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.COLOR_BLACK,
    fontWeight: 400,
    textTransform: 'uppercase',
  },
  iconTitle: {
    fontSize: 18,
    color: Colors.COLOR_BLACK,
    fontWeight: 500,
  },
  contMenu: {
    // height: 0,
  },
  mnName: {
    marginBottom: 3,
    fontSize: 13,
    lineHeight: 22,
    color: Colors.COLOR_444,
    fontWeight: 400,
  }
});

export default MenuFooter;
