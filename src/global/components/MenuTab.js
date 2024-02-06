import React, { useEffect, useState, useRef } from 'react';
import {Animated, Easing, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAIcon from 'react-native-vector-icons/FontAwesome';

import {Colors, Fonts} from '../../contants';
import {Display} from '../../utils';

const MenuTab = ({navigation, data, title, styleContainer = {}}) => {
  const heightTab = useRef(new Animated.Value(Display.height)).current;
  const [isShowTab, setisShowTab] = useState(false);

  useEffect(() => {
    Animated.timing(heightTab, {
      toValue: (isShowTab) ? 1 : 0,
      duration: (isShowTab) ? 400 : 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isShowTab]);
  const maxHeightTab = heightTab.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Display.height]
  });

  const handleGoInfo = (act = "", id = 0) => {
    if(act != ""){
      setisShowTab(!isShowTab);
      navigation.navigate(act, {
        id
      });
    }
  };

  return (
    <View style={[styles.tabContent, styleContainer]}>
      <TouchableOpacity activeOpacity={.8} onPress={() => {setisShowTab(!isShowTab)}} style={styles.tabTitle}>
        <View style={styles.vwTtitle}>
          <Text style={styles.txtTitle}>{title}</Text>
        </View>
        <FontAIcon name={!isShowTab ? 'angle-down' : 'angle-up'} style={styles.iconTitle} />
      </TouchableOpacity>
      <Animated.View
        style={
          (isShowTab) ?
          [
            styles.tabDesc,
            {
              minheight: maxHeightTab,
            }
          ] :

          [
            styles.tabDesc,
            {
              height: 0,
            }
          ]
      }>
        <View style={[styles.vwOptionMenu, (isShowTab) ? {} : {borderWidth: 0}]}>

          <View>
            {
              data.map(function(item, index) {
                return (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={.8}
                    style={[styles.vItemmn, (isShowTab) ? {} : {borderBottomWidth: 0}]}
                    onPress={() => {handleGoInfo("About", item.id)}}
                  >
                    <View
                      style={styles.vwtName}
                    >
                      <Text style={styles.txtmn}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </View>

        </View> 
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContent: {
    marginTop: 15,
    marginBottom: 25,
  },
  tabTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: Colors.COLOR_WHITE,
    borderWidth: 1,
    borderColor: Colors.COLOR_E5,
    borderRadius: 10,
  },
  vwTtitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconAct: {
    fontSize: 20,
    lineHeight: 22,
    marginRight: 10,
    marginTop: -5,
    color: Colors.DEFAULT_GREEN,
  },
  txtTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.FONT_SARABUN_REGULAR,
    textTransform: 'uppercase',
  },
  iconTitle: {
    fontSize: 16,
    color: Colors.COLOR_333,
  },
  tabDesc: {
  },
  vwOptionMenu: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.COLOR_E5,
  },
  vItemmn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.COLOR_E5,
  },
  txtmn: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.FONT_SARABUN_REGULAR,
    textTransform: 'uppercase',
  }
});

export default MenuTab;
