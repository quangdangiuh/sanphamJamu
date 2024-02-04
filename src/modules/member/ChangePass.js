import React, {useState, useRef} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';
import { useFocusEffect } from "@react-navigation/native";

import { ScrollView } from 'react-native-gesture-handler';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {Header, Footer, ContactSidebar, Lib_style} from '../../global';
import {NotFoundBox, DropdownBox} from '../../global/components';

import {Colors, Images, Fonts} from '../../contants';
import {Display} from '../../utils';

import {TabInfoLogin} from './components';

const ChangePass = ({navigation}) => {
  const scrollRef = useRef(null);
  const [isLogin, setIsLogin] = useState(false);

  // State Password
  const [formPassword, setFormPassword] = useState({
    password_old: '',
    password_new: '',
    password_new_rep: '',
  });

  // State Show Pass
  const [showPassword, setShowPassword] = useState({
    password_old: false,
    password_new: false,
    password_new_rep: false,
  });

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
              title="Đổi mật khẩu mới"
              iconName="lock"
            />

            <View style={styles.vwInfoContent}>

              <View style={styles.vwInfoInput}>
                <View style={styles.vwRowItem}>
                  <View style={styles.vwLabel}>
                    <Text style={styles.txtLabel}>Mật khẩu cũ</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <TextInput
                      secureTextEntry={showPassword.password_old ? false : true}
                      style={styles.colInput}
                      value={formPassword.password_old}
                      onChange={e => {
                        setFormPassword({
                          ...formPassword,
                          password_old: e.target.value
                        });
                      }}
                    />
                    <TouchableOpacity
                      activeOpacity={.8}
                      onPress={() => {
                        setShowPassword({
                          ...showPassword,
                          password_old: !showPassword.password_old
                        });
                      }}
                      style={styles.btnShowPass}
                    >
                      <EntypoIcon name={showPassword.password_old ? "eye-with-line" : "eye"} style={styles.iconShowPass} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.vwRowItem}>
                  <View style={styles.vwLabel}>
                    <Text style={styles.txtLabel}>Mật khẩu mới</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <TextInput
                      secureTextEntry={showPassword.password_new ? false : true}
                      style={styles.colInput}
                      value={formPassword.password_new}
                      onChange={e => {
                        setFormPassword({
                          ...formPassword,
                          password_new: e.target.value
                        });
                      }}
                    />
                    <TouchableOpacity
                      activeOpacity={.8}
                      onPress={() => {
                        setShowPassword({
                          ...showPassword,
                          password_new: !showPassword.password_new
                        });
                      }}
                      style={styles.btnShowPass}
                    >
                      <EntypoIcon name={showPassword.password_new ? "eye-with-line" : "eye"} style={styles.iconShowPass} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.vwRowItem}>
                  <View style={styles.vwLabel}>
                    <Text style={styles.txtLabel}>Nhập mật khẩu mới lần nữa</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <TextInput
                      secureTextEntry={showPassword.password_new_rep ? false : true}
                      style={styles.colInput}
                      value={formPassword.password_new_rep}
                      onChange={e => {
                        setFormPassword({
                          ...formPassword,
                          password_new_rep: e.target.value
                        });
                      }}
                    />
                    <TouchableOpacity
                      activeOpacity={.8}
                      onPress={() => {
                        setShowPassword({
                          ...showPassword,
                          password_new_rep: !showPassword.password_new_rep
                        });
                      }}
                      style={styles.btnShowPass}
                    >
                      <EntypoIcon name={showPassword.password_new_rep ? "eye-with-line" : "eye"} style={styles.iconShowPass} />
                    </TouchableOpacity>
                  </View>
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
                        <Text style={styles.nameBtnSubmit}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

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
    backgroundColor: "#f4f8fa",
  },
  vwAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  vwImg: {
    marginBottom: 20,
  },
  avatar: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  vwlinePictureRow: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.COLOR_888,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  btnChoPicture: {
  },
  txtChoPicture: {
    fontSize: 14,
    lineHeight: 26,
    color: Colors.COLOR_WHITE,
    fontFamily: Fonts.FONT_SARABUN_REGULAR,
    fontWeight: 400,
    textTransform: 'uppercase',
  },
  vwInfoInput: {

  },

  /*Not Found*/
  vwNotFoundOrder: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  txtNotFound: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.COLOR_999,
    fontWeight: 500,
  },
  vwButtomReturn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
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
    paddingHorizontal: 10,
    fontSize: 14,
    color: Colors.COLOR_333,
    borderRadius: 5,
    backgroundColor: Colors.COLOR_WHITE,
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
    marginTop: 10,
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
  }
});

export default ChangePass;
