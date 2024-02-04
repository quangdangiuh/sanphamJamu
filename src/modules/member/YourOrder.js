import React, {useState, useRef}  from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import { useFocusEffect } from "@react-navigation/native";

import { ScrollView } from 'react-native-gesture-handler';

import {Header, Footer, ContactSidebar, Lib_style} from '../../global';
import {NotFoundBox, DropdownBox} from '../../global/components';

import {Colors, Images, Fonts} from '../../contants';
import {Display} from '../../utils';

import {TabInfoLogin, ListOrder, DetailOrder} from './components';

const YourOrder = ({route, navigation}) => {
  const scrollRef = useRef(null);
  const [isLogin, setIsLogin] = useState(false);

  const { id } = route.params || {};
  
  useFocusEffect(() => {
    if(!isLogin){
      navigation.navigate("Login");
    }
  });

  return (
    <SafeAreaView style={{flex: 1, color: Colors.COLOR_WHITE}}>

      {/*Header*/}
      <Header navigation={navigation} />

      {/*Context*/}
      <ScrollView 
        ref={scrollRef}
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps={'handled'}
        // contentInsetAdjustmentBehavior="always"
      >

        {(isLogin) ?
          <View style={styles.vwInfoContainer}>

            <TabInfoLogin
              navigation={navigation}
              title="Quản lý đơn hàng"
              iconName="shopping-bag"
            />

            <View style={Number.isInteger(id) ? {} : styles.vwInfoContent}>

              {Number.isInteger(id) ? <DetailOrder navigation={navigation} /> : <ListOrder navigation={navigation} />}

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
              <Text style={styles.txtNotFound}>Không tìm thấy thành viên</Text>
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
  vwInfoContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  vwInfoContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    backgroundColor: Colors.COLOR_F4F8FA,
  },
});

export default YourOrder;
