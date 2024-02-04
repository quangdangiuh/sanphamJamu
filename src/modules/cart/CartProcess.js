import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import {Header, Footer, ContactSidebar, Lib_style} from '../../global';
import {LoadingBox, NotFoundBox} from '../../global/components';

import {Colors, Images, Fonts} from '../../contants';
import {Display, Funs} from '../../utils';

const CartProcess = ({route, navigation}) => {
  const scrollRef = useRef(null);

  const { token } = route.params? route.params : 0;

  useEffect(() => {
    if(token == 0){
      // navigation.navigate("Home");
    }else{
      setTimeout(() => {
        navigation.navigate("CartFinish", {
          token,
        });
      }, 3000);
    }
  }, [token]);

  return (
      <SafeAreaView style={{flex: 1, color: Colors.COLOR_WHITE}}>
        {/*Header*/}
        <Header navigation={navigation} />

        {/*Content*/}
        <ScrollView
          ref={scrollRef}
        >

          {/*Cont*/}
          {
            (token) ? <View style={styles.vwContainer}>
                          <View style={styles.vwLoading}>
                            <LoadingBox type={1} />
                          </View> 
                          <View style={styles.vwText}>
                            <Text style={styles.txtCont}>Đang xử lý yêu cầu vui lòng chờ giây lát...</Text>
                          </View>
                        </View>
                      :
                        <View style={styles.vwNotFoundOrder}>
                          <View style={styles.vwIconFound}>
                            <NotFoundBox
                              pos={1}
                              styleIconFound={{width: 200, height: 150,}}
                            />
                          </View>
                          <View style={styles.vwTxtNotFound}>
                            <Text style={styles.txtNotFound}>Không tìm thấy đơn hàng</Text>
                          </View>
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
          }
          
          {/*Footer*/}
          <Footer navigation={navigation} />
        </ScrollView>

        {/*Sidebar*/}
        <ContactSidebar scrollRef={scrollRef} />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  vwContainer: {
    marginVertical: 30,
    marginHorizontal: 10,
  },
  vwLoading: {
    marginBottom: 30,
  },
  vwText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCont: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.COLOR_333,
    fontWeight: 400,
  },
  vwNotFoundOrder: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  txtNotFound: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.COLOR_999,
    fontWeight: 500,
  },
  vwTxtNotFound: {
    marginBottom: 10,
  },
  vwButtomReturn: {
    width: "100%",
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
  }

});

export default CartProcess;
