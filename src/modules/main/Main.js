import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';

// import { ScrollView } from 'react-native-virtualized-view';
import { ScrollView } from 'react-native-gesture-handler';

import {Header, Footer, ContactSidebar} from '../../global';
// Components
import BannerMain from './components/BannerMain';
import HotSale from './components/HotSale';
import BestSeller from './components/BestSeller';
import ForMom from './components/ForMom';
import ProductCate from './components/ProductCate';
import YoutubeAbout from './components/YoutubeAbout';
import Feel from './components/Feel';

import {Colors} from '../../contants';
import {Display} from '../../utils';

const Main = ({navigation}) => {
  console.log("Main");
  
  // const [isLoadPage, setisLoadPage] = useState(false);
  const scrollRef = useRef(null);

  /*useEffect(() => {
    setTimeout(() => {
      setisLoadPage(true);
    }, 500);
  }, []);*/

  return (
    <SafeAreaView style={{flex: 1, color: Colors.COLOR_WHITE}}>

      {/*Header*/}
      <Header navigation={navigation} />

      {/*Context*/}
      <ScrollView 
        ref={scrollRef}
      >
        {/*Banner Main [TYPE: 2]*/}
        <BannerMain />

        {/*Hot Sale*/}
        <HotSale />

        {/*Best Seller*/}
        <BestSeller navigation={navigation} />

        {/*Jamu For Mom*/}
        <ForMom />

        {/*Sản phẩm danh muc*/}
        <ProductCate navigation={navigation} />

        {/*Youtube*/}
        <YoutubeAbout />

        {/*Feel*/}
        <Feel />

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

export default Main;
