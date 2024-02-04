import React, {useRef} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import {Header, Footer, ContactSidebar} from '../../global';

import {Colors, Fonts} from '../../contants';
import {Display} from '../../utils';

import {BannerTop, Filter, SlideFlter} from './components';
import ItemProduct from '../main/components/box/ItemProduct';
import {dataProduct} from './data';

const Category = ({route, navigation}) => {
  const scrollRef = useRef(null);

  const { title } = route.params? route.params : 'Dưỡng da mặc';

  return (
    <SafeAreaView style={{flex: 1, color: Colors.COLOR_WHITE}}>

      {/*Header*/}
      <Header navigation={navigation} />

      {/*Context*/}
      <ScrollView 
        ref={scrollRef}
      >

        {/*Banner Top*/}
        <BannerTop />

        {/*Content*/}
        <View style={styles.vwContent}>
          
          {/*Filter*/}
          <Filter />

          {/*List Item*/}
          <View style={styles.vwListItem}>
            <View style={styles.vwTitle}>
              <Text style={styles.txtTitle}>{title}</Text>
            </View>
            <View style={styles.vwListData}>
              {
                dataProduct.map(function(item, index) {
                  return (
                    <View key={index} style={styles.vwItem}>
                      <ItemProduct navigation={navigation} item={item} />
                    </View>
                  )
                })
              }
            </View>
            <TouchableOpacity activeOpacity={.8} style={styles.vwPageSection} onPress={() => {alert("NAV")}}>
              <Text style={styles.txtNav}>Xem thêm</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/*Footer*/}
        <Footer navigation={navigation} />
      </ScrollView>

      {/*Sidebar Filter*/}
      <SlideFlter navigation={navigation} />

      {/*Sidebar*/}
      <ContactSidebar scrollRef={scrollRef} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  vwContent: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  vwListItem: {
  },
  vwTitle: {
    marginBottom: 20,
  },
  txtTitle: {
    fontSize: 25,
    lineHeight: 37,
    fontFamily: Fonts.FONT_OSWALD_SEMIBOLD,
    color: Colors.COLOR_333,
    textTransform: 'uppercase',
  },
  vwListData: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -5,
    marginLeft: -5,
  },
  vwItem: {
    paddingRight: 5,
    paddingLeft: 5,
    width: "50%",
    marginBottom: 20,
  },
  vwPageSection: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.COLOR_F6F6F6,
    paddingTop: 10,
    paddingBottom: 10,
  },
  txtNav: {
    fontSize: 16,
    color: Colors.COLOR_333,
    fontWeight: 500,
  }
});

export default Category;
