import React, { useEffect, useState, useRef } from 'react';
import {Animated, Easing, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAIcon from 'react-native-vector-icons/FontAwesome';

import RenderHTML from "react-native-render-html";

import {Colors, Fonts} from '../../../contants';
import {Display} from '../../../utils';

const TabContent = ({title, content, renderersProps}) => {
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

  return (
    <View style={styles.tabContent}>
      <TouchableOpacity activeOpacity={.8} onPress={() => {setisShowTab(!isShowTab)}} style={styles.tabTitle}>
        <Text style={styles.txtTitle}>{title}</Text>
        <FontAIcon name={!isShowTab ? 'angle-down' : 'angle-up'} style={styles.iconTitle} />
      </TouchableOpacity>
      <Animated.View
        style={
          (isShowTab) ?
          [
            styles.tabDesc,
            {
              minheight: maxHeightTab,
              paddingTop: 20,
              paddingBottom: 20,
            }
          ] :

          [
            styles.tabDesc,
            {
              height: 0, // maxHeightTab
              paddingTop: 0,
              paddingBottom: 0,
            }
          ]
      }>
        <RenderHTML
          contentWidth={Display.width - 20}
          source={content}
          enableExperimentalMarginCollapsing={true}
          enableExperimentalGhostLinesPrevention={true}
          renderersProps={renderersProps}
          tagsStyles={{
            ul: {listStyleType: 'none', margin: 0, padding: 0,},
            li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
            span: {color:'red', },
            p: {color: Colors.COLOR_333, fontSize: 13, textAlign: 'left', lineHeight: 20, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 5, },
            img: {maxWidth: (Display.width - 20), }
          }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContent: {
    marginBottom: 1,
  },
  tabTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: Colors.COLOR_EEE,
  },
  txtTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.COLOR_333,
    fontFamily: Fonts.FONT_SARABUN_BOLD,
    textTransform: 'uppercase',
  },
  iconTitle: {
    fontSize: 16,
    color: Colors.COLOR_333,
  },
  tabDesc: {
    overflow: 'hidden',
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default TabContent;
