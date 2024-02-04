import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';
import { useFocusEffect } from "@react-navigation/native";

import { ScrollView } from 'react-native-gesture-handler';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontA5Icon from 'react-native-vector-icons/FontAwesome5';

import {Header, Footer, ContactSidebar, Lib_style} from '../../global';
import {NotFoundBox, DropdownBox} from '../../global/components';

import {Colors, Images, Fonts} from '../../contants';
import {Display} from '../../utils';

import {dataGender} from './data';
import {dataProvince} from '../cart/data';
import {TabInfoLogin} from './components';

const Login = ({navigation}) => {
  const scrollRef = useRef(null);
  const [isLogin, setIsLogin] = useState(false);

  const [isSelected, setSelection] = useState(false);

  // State Info Profile
  const [formProfile, setFormProfile] = useState({
    user: '',
    password: '',
    reMember: false
  });

  // State Show Pass
  const [showPassword, setShowPassword] = useState({
    password: false
  });

  useFocusEffect(() => {
    if(isLogin){
      navigation.navigate("Member");
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

        {(!isLogin) ?
          <View style={styles.vwInfoContainer}>

            <TabInfoLogin
              navigation={navigation}
              title="Đăng nhập"
              iconName="sign-in"
              type={2}
            />

            <View style={styles.vwInfoContent}>

              <View style={styles.vwInfoInput}>
                <View style={styles.vwRowItem}>
                  <View style={styles.vwLabel}>
                    <Text style={styles.txtLabel}>Số điện thoại hoặc Email</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <View style={styles.vwIconInput}>
                      <FontA5Icon
                        name="lock"
                        style={styles.iconinPut}
                      />
                    </View>
                    <TextInput
                      style={styles.colInput}
                      value={formProfile.user}
                      onChange={e => {
                        setFormProfile({
                          ...formProfile,
                          user: e.target.value
                        });
                      }}
                    />
                  </View>
                </View>
                <View style={styles.vwRowItem}>
                  <View style={styles.vwLabel}>
                    <Text style={styles.txtLabel}>Mật khẩu</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <View style={styles.vwIconInput}>
                      <FontA5Icon
                        name="key"
                        style={styles.iconinPut}
                      />
                    </View>
                    <TextInput
                      secureTextEntry={showPassword.password ? false : true}
                      style={styles.colInput}
                      value={formProfile.password}
                      onChange={e => {
                        setFormProfile({
                          ...formProfile,
                          password: e.target.value
                        });
                      }}
                    />
                    <TouchableOpacity
                      activeOpacity={.8}
                      onPress={() => {
                        setShowPassword({
                          ...showPassword,
                          password: !showPassword.password
                        });
                      }}
                      style={styles.btnShowPass}
                    >
                      <EntypoIcon name={showPassword.password ? "eye-with-line" : "eye"} style={styles.iconShowPass} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.vwCheckRemember}>
                  <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.vwCheckBox}
                    onPress={() => {
                      setFormProfile({
                        ...formProfile,
                        reMember: !formProfile.reMember
                      });
                    }}
                  >
                     <MaterialIconsIcon
                      name={(formProfile.reMember) ? "check-box" : "check-box-outline-blank"}
                      style={[styles.iconCheckReMem, (formProfile.reMember) ? {color: Colors.COLOR_0000FF} : {}]}
                     />
                     <Text style={styles.txtReMem}>Ghi nhớ</Text>
                  </TouchableOpacity>
                  <View style={styles.vwLineVertical}>
                    <Text>|</Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.vwForgetPass}
                    onPress={() => {
                      alert("FORGET");
                    }}
                  >
                    <Text style={styles.txtForget}>Bạn quên mật khẩu?</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.vwRowItem}>
                  <View style={styles.vwColButtom}>
                    <TouchableOpacity
                      activeOpacity={.8}
                      style={styles.buttomSubmit}
                      onPress={() => {
                        alert("Submit");
                      }}
                    >
                        <Text style={styles.nameBtnSubmit}>Đăng nhập</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

            </View>
          </View>
          :
          <View></View>
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
  vwRowItem: {
    marginBottom: 10,
  },
  vwLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  txtLabel: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 400,
    color: Colors.COLOR_333,
    marginRight: 5,
  },
  txtRequi: {
    fontSize: 10,
    color: Colors.COLOR_EE3024,
  },
  vwColInput: {
    position: 'relative',
  },
  colInput: {
    borderWidth: 1,
    borderColor: Colors.COLOR_DDD,
    backgroundColor: Colors.COLOR_WHITE,
    height: 45,
    paddingLeft: 35,
    paddingRight: 10,
    fontSize: 14,
    color: Colors.COLOR_333,
    borderRadius: 5,
    backgroundColor: Colors.COLOR_WHITE,
  },
  dropBxInp: {
    height: 45,
    backgroundColor: Colors.COLOR_WHITE,
    borderRadius: 5,
  },
  pickerInput: {
    backgroundColor: Colors.COLOR_WHITE,
    height: 45,
    borderWidth: 1,
    borderColor: Colors.COLOR_DDD,
    borderRadius: 5,
  },
  vwColButtom: {
  },
  buttomSubmit: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.COLOR_DD1D42,
  },
  nameBtnSubmit: {
    fontSize: 14,
    color: Colors.COLOR_WHITE,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnShowPass: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  iconShowPass: {
    fontSize: 20,
    color: Colors.COLOR_333,
  },
  vwIconInput: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 2,
  },
  iconinPut: {
    fontSize: 15,
    color: Colors.COLOR_999,
  },
  vwCheckRemember: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  vwCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCheckReMem: {
    fontSize: 18,
    marginRight: 5,
  },
  txtReMem: {
    fontSize: 12,
    fontWeight: 300,
    lineHeight: 22,
    color: Colors.COLOR_333,
  },
  vwLineVertical: {
    marginHorizontal: 5,
  },
  txtForget: {
    fontSize: 12,
    fontWeight: 300,
    lineHeight: 22,
    color: Colors.COLOR_333,
  }
});

export default Login;
