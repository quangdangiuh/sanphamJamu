import React, {useState, useRef, useMemo} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import RenderHTML from 'react-native-render-html';

import {Header, Footer, ContactSidebar, Lib_style} from '../../global';
import {NotFoundBox} from '../../global/components';

import {Colors, Images, Fonts} from '../../contants';
import {Display} from '../../utils';

const CartFinish = ({route, navigation}) => {
  const scrollRef = useRef(null);
  const { token } = route.params? route.params : 0;

  const renderersProps = {img: {enableExperimentalPercentWidth: true}};
  const styleViewHTML = {
    div: {color: Colors.COLOR_333, fontSize: 14, fontWeight: 400,},
    ul: {listStyleType: 'none', margin: 0, padding: 0,},
    li: {marginBottom: 5, fontSize: 14, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
    span: {color:'red', },
    strong: {color: Colors.COLOR_333, fontSize: 14,},
    p: {color: Colors.COLOR_333, fontSize: 14, textAlign: 'left', lineHeight: 20, paddingTop: 2, paddingBottom: 2, marginTop: 0, marginBottom: 5, },
    img: {maxWidth: (Display.width - 20), },
    a: {color: Colors.COLOR_0000FF, fontSize: 14,},
  };

  const classStyles = { 
    "vhsuccess": {
      borderBottomWidth: .5,
      borderBottomColor: '#7d888d',
      paddingBottom: 20,
    },
    "dstitle": {
      fontSize: 25,
      lineHeight: 37,
      textTransform: 'uppercase',
      marginBottom: 10,
    },
    "grsucc" : {
      flexDirection: 'column-reverse' ,
    },
    "colr": {
      marginBottom: 20,
    },
    "dscont": {
      marginBottom: 15,
    },
    "code": {
      fontWeight: 700,
    },
    "t2": {
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: Colors.COLOR_F6F6F6,
      color: Colors.COLOR_666,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 5,
    },
    "aview": {
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: Colors.COLOR_BLACK,
      color: Colors.COLOR_WHITE,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: 14,
      lineHeight: 22,
      fontWeight: 'bold',
      textDecorationLine: 'none',
    }
  };

  return (
      <SafeAreaView style={{flex: 1, color: Colors.COLOR_WHITE}}>
        {/*Header*/}
        <Header navigation={navigation} />

        {/*Content*/}
        <ScrollView
          ref={scrollRef}
        >

          {/*Cont*/}
          <View style={styles.vwContCartFins}>

            {(token) ?
              <RenderHTML
                contentWidth={Display.width}
                source={{
                  html: '<div class="vhsuccess"><div class="grsucc"><div class="coll"><div class="thumb"><img src="https://sanpham.jamu.com.vn/vnt_upload/File/09_2021/success.jpg" alt=""></div></div><div class="colr"><div class="decs"><div class="dstitle"><h1>Đặt hàng thành công</h1></div><div class="dscont"><div class="t1"><p>Mã đơn hàng của bạn là: <strong class="code">12345678</strong></p><p>Ngày nhận hàng ước tính: 3-5 ngày sau khi Jamu xác nhận đơn hàng</p></div><div class="t2">Đơn hàng được vận chuyển đến hoặc qua các địa điểm đang bị ảnh hưởng bởi Covid-19 có thể sẽ giao chậm hơn dự kiến. Kính mong quý khách thông cảm</div><div class="t1"><p>Khi cần hỗ trợ nhanh, hãy gọi hotline: <strong><a href="">0917 699 983</a></strong></p></div></div></div></div></div></div>',
                }}
                enableExperimentalMarginCollapsing={true}
                enableExperimentalGhostLinesPrevention={true}
                renderersProps={renderersProps}
                tagsStyles={styleViewHTML}
                classesStyles={classStyles}
              /> : 
              <View style={styles.vwNotFoundOrder}>
                <View style={styles.vwIconFound}>
                  <NotFoundBox
                    pos={1}
                    styleIconFound={{width: 200, height: 150,}}
                  />
                </View>
                <Text style={styles.txtNotFound}>Không tìm thấy đơn hàng</Text>
              </View>
            }
            <TouchableOpacity
              activeOpacity={.8}
              style={styles.vwButtomReturn}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
                <Text style={styles.txtButtomReturn}>Về trang chủ</Text>
            </TouchableOpacity>
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
  vwContCartFins: {
    paddingHorizontal: 10,
    marginBottom: 50,
    // backgroundColor: Colors.DEFAULT_GREEN,
  },
  vwButtomReturn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.COLOR_BLACK,
  },
  txtButtomReturn: {
    color: Colors.COLOR_WHITE,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'none',
  },
  vwNotFoundOrder: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  txtNotFound: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.COLOR_999,
    fontWeight: 500,
  }
});

export default CartFinish;
