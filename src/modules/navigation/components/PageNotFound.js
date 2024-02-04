import React, {useRef} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import {Header, Footer, ContactSidebar, Lib_style} from '../../../global';
import {NotFoundBox} from '../../../global/components';

import {Colors, Fonts} from '../../../contants';
import {Display} from '../../../utils';

// 404
const PageNotFound = ({navigation}) => {
  const scrollRef = useRef(null);

  return (
    <SafeAreaView style={{flex: 1, color: Colors.COLOR_WHITE}}>
      {/*Header*/}
      <Header navigation={navigation} />

      {/*Context*/}
      <ScrollView 
        ref={scrollRef}
      >
        <View style={styles.vwContainer}>
          <NotFoundBox
            type="404"
            pos={1}
            styleIconFound={{
              width: 320,
              height: 200,
            }}
          />
          <View style={styles.vwTxtNotFound}>
            <Text style={styles.txtNotFound}>Không tìm thấy nội dung, vui lòng liên hệ Hotline 0123456789 để được hỗ trợ. Cảm ơn Quý khách!</Text>
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
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vwButtomReturn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
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
  vwTxtNotFound: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  txtNotFound: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.COLOR_999,
    fontWeight: 500,
  }
});

export default PageNotFound;
