import React, {useRef} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import {Header, Footer, ContactSidebar} from '../../global';

import {Colors, Fonts} from '../../contants';
import {Display} from '../../utils';

import {BannerTop, ProductCate} from './components';

const Product = ({navigation}) => {
  const scrollRef = useRef(null);

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

        {/*Sản phẩm danh mục*/}
        <ProductCate navigation={navigation} />

        {/*Footer*/}
        <Footer navigation={navigation} />
      </ScrollView>

      {/*Sidebar*/}
      <ContactSidebar scrollRef={scrollRef} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default Product;
