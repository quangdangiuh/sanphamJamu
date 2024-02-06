import React, {useRef, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import {Header, Footer, ContactSidebar, Lib_style} from '../../global';

import {Colors, Images, Fonts} from '../../contants';
import {Display} from '../../utils';

import {BannerTop} from './components';

const Contact = ({navigation}) => {
  const scrollRef = useRef(null);

  return (
    <SafeAreaView style={{flex: 1, color: Colors.COLOR_WHITE}}>
      <Header navigation={navigation} />

      <ScrollView 
        ref={scrollRef}
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps={'handled'}
      >
        {/*Banner Top*/}
        <BannerTop />

        <View style={styles.vwInfoContainer}>
          <View style={styles.vwInfoContent}>
            <Text>Contact</Text>
          </View>
        </View>

        {/*Footer*/}
        <Footer navigation={navigation} />
      </ScrollView>

      {/*Sidebar*/}
      <ContactSidebar scrollRef={scrollRef} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  vwInfoContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  vwInfoContent: {
    // backgroundColor: Colors.DEFAULT_GREEN
  },
});

export default Contact;
