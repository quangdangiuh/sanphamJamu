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

const Registry = ({navigation}) => {
  const scrollRef = useRef(null);
  const [isLogin, setIsLogin] = useState(false);

  const [isSelected, setSelection] = useState(false);

  // State Info Profile
  const [formProfile, setFormProfile] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    password_rep: '',
  });

  // State Show Pass
  const [showPassword, setShowPassword] = useState({
    password: false,
    password_re: false
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
              title="Đăng ký"
              iconName="user"
              type={2}
            />

            <View style={styles.vwInfoContent}>

              <View style={styles.vwInfoInput}>
                <View style={styles.vwRowItem}>
                  <View style={styles.vwLabel}>
                    <Text style={styles.txtLabel}>Họ và tên</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <TextInput
                      style={styles.colInput}
                      value={formProfile.name}
                      onChange={e => {
                        setFormProfile({
                          ...formProfile,
                          name: e.target.value
                        });
                      }}
                    />
                  </View>
                </View>
                <View style={styles.vwRowItem}>
                  <View style={styles.vwLabel}>
                    <Text style={styles.txtLabel}>Số điện thoại</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <TextInput
                      style={styles.colInput}
                      keyboardType='numeric'
                      value={formProfile.email}
                      onChange={e => {
                        setFormProfile({
                          ...formProfile,
                          email: e.target.value
                        });
                      }}
                    />
                  </View>
                </View>
                <View style={styles.vwRowItem}>
                  <View style={styles.vwLabel}>
                    <Text style={styles.txtLabel}>Email</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <TextInput
                      style={styles.colInput}
                      keyboardType='email-address'
                      value={formProfile.phone}
                      onChange={e => {
                        setFormProfile({
                          ...formProfile,
                          phone: e.target.value
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
                <View style={styles.vwRowItem}>
                  <View style={styles.vwLabel}>
                    <Text style={styles.txtLabel}>Xác nhận mật khẩu</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <TextInput
                      secureTextEntry={showPassword.password_re ? false : true}
                      style={styles.colInput}
                      value={formProfile.password_rep}
                      onChange={e => {
                        setFormProfile({
                          ...formProfile,
                          password_rep: e.target.value
                        });
                      }}
                    />
                    <TouchableOpacity
                      activeOpacity={.8}
                      onPress={() => {
                        setShowPassword({
                          ...showPassword,
                          password_re: !showPassword.password_re
                        });
                      }}
                      style={styles.btnShowPass}
                    >
                      <EntypoIcon name={showPassword.password_re ? "eye-with-line" : "eye"} style={styles.iconShowPass} />
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
                     <View style={styles.vwPoloIcon}>
                       <MaterialIconsIcon
                        name={(formProfile.reMember) ? "check-box" : "check-box-outline-blank"}
                        style={[styles.iconCheckReMem, (formProfile.reMember) ? {color: Colors.COLOR_0000FF} : {}]}
                       />
                     </View>
                     <View style={styles.vwContPolocy}>
                       <Text style={styles.txtReMem}>Tôi đồng ý với</Text>
                       <TouchableOpacity
                        activeOpacity={.8}
                       >
                         <Text style={[styles.txtReMem, styles.txtReMemBold]}>Điều khoản dịch vụ</Text>
                       </TouchableOpacity>
                       <Text style={styles.txtReMem}>và</Text>
                       <TouchableOpacity
                        activeOpacity={.8}
                       >
                         <Text style={[styles.txtReMem, styles.txtReMemBold]}>Chính sách bảo mật</Text>
                       </TouchableOpacity>
                       <Text style={styles.txtReMem}>của công ty.</Text>
                       <Text style={styles.txtNoReqStar}>*</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.vwNoteRequired}>
                  <Text style={styles.txtNoReq}>Lưu ý: Những thông tin có đánh dấu</Text><Text style={[styles.txtNoReq, styles.txtNoReqStar]}>*</Text><Text style={styles.txtNoReq}>là bắt buộc nhập.</Text>
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
                        <Text style={styles.nameBtnSubmit}>Đăng ký</Text>
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
    paddingHorizontal: 10,
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
  vwCheckRemember: {
    marginBottom: 10,
  },
  vwCheckBox: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  vwContPolocy: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  vwPoloIcon: {
    marginRight: 5,
  },
  iconCheckReMem: {
    fontSize: 18,
    marginRight: 2,
  },
  txtReMem: {
    fontSize: 12,
    fontWeight: 300,
    lineHeight: 16,
    color: Colors.COLOR_333,
    marginRight: 5,
  },
  txtReMemBold: {
    fontWeight: 'bold',
  },
  vwLineVertical: {
    marginHorizontal: 5,
  },
  vwNoteRequired: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  txtNoReq: {
    marginRight: 5,
    fontSize: 11,
    lineHeight: 17,
    color: Colors.COLOR_333,
    fontWeight: 300,
  },
  txtNoReqStar: {
    color: Colors.COLOR_EE3024,
  }
});

export default Registry;
