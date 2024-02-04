import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, TextInput, StyleSheet, Image} from 'react-native';
import { useFocusEffect } from "@react-navigation/native";

//redux
import { useSelector, useDispatch } from "react-redux";

import { ScrollView } from 'react-native-gesture-handler';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';

import ImagePicker from 'react-native-image-crop-picker';
import {
  DatePickerModal,
  // TimePickerModal,
  DatePickerInput,
  registerTranslation,
  TranslationsType,
  ar,
  ca,
  de,
  en,
  enGB,
  es,
  fr,
  he,
  hi,
  it,
  ko,
  nl,
  pl,
  pt,
  tr,
  zh,
  zhTW,
} from 'react-native-paper-dates';

import {Header, Footer, ContactSidebar, Lib_style} from '../../global';
import {NotFoundBox, DropdownBox} from '../../global/components';

import {Colors, Images, Fonts} from '../../contants';
import {Display} from '../../utils';

import {dataGender} from './data';
import {dataProvince} from '../cart/data';
import {TabInfoLogin} from './components';

const Member = ({navigation}) => {
  const scrollRef = useRef(null);

  // const [isLogin, setIsLogin] = useState(false);
  // setIsLogin(useSelector((state) => state.member.isLogin));
  const isLogin = useSelector((state) => state.member.isLogin);
  // console.log("Member: " + isLogin);

  // State Info Profile
  const [formProfile, setFormProfile] = useState({
    name: 'Nguyễn Văn Dũng',
    phone: '0123456789',
    email: 'test@gamil.com',
    gender: 1,
    birthday: new Date(),
    city: 0,
    state: 0,
    ward: 0,
    address: '',
    note: '',
  });

  /*Chọn hình ảnh*/
  const onAddChosePicture = () => {
    alert('ImagePicker');
    /*ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });*/
  };

  const handleChoseGender = id => {
    setFormProfile({
      ...formProfile,
      gender: id
    });
  };

  const locales: [string, TranslationsType][] = [
    ['ar', ar],
    ['ca', ca],
    ['de', de],
    ['en', en],
    ['en-GB', enGB],
    ['es', es],
    ['fr', fr],
    ['he', he],
    ['hi', hi],
    ['it', it],
    ['ko', ko],
    ['nl', nl],
    ['pl', pl],
    ['pt', pt],
    ['tr', tr],
    ['zh', zh],
    ['zh-TW', zhTW],
  ];
  locales.forEach((locale) => {
    registerTranslation(locale[0], locale[1])
  });
  const [inputDate, setInputDate] = useState(formProfile.birthday);

  // Gọi lại mỗi lần backScreen
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
              title="Thông tin tài khoản"
              iconName="user"
            />

            <View style={styles.vwInfoContent}>
              
              <View style={styles.vwAvatar}>
                <View style={styles.vwImg}>
                  <Image source={require('./images/avatar.jpg')} style={styles.avatar} />
                </View>
                <View style={styles.vwlinePictureRow}>
                  <TouchableOpacity
                    style={styles.btnChoPicture}
                    activeOpacity={0.8}
                    onPress={onAddChosePicture}
                  >
                    <Text style={styles.txtChoPicture}>Đổi hình</Text>
                  </TouchableOpacity>
                </View>
              </View>

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
                    <Text style={styles.txtLabel}>Email</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <TextInput
                      style={styles.colInput}
                      keyboardType='email-address'
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
                    <Text style={styles.txtLabel}>Giới tính</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <DropdownBox
                      dropBoxStyles={styles.dropBxInp}
                      data={dataGender}
                      did={formProfile.gender}
                      placeholder="Giới tính *"
                      placeholderAct="Lựa chọn..."
                      search={false}
                      searchPlaceholder="Từ khóa..."
                      handleSetData={handleChoseGender}
                    />
                  </View>
                </View>
                <View style={styles.vwRowItem}>
                  <View style={styles.vwLabel}>
                    <Text style={styles.txtLabel}>Sinh nhật</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={styles.vwColInput}>
                    <DatePickerInput
                      locale="en-GB"
                      value={inputDate}
                      onChange={(d) => setInputDate(d)}
                      inputMode="start"
                      autoComplete={'birthdate-full'}
                      // inputEnabled={false}
                      // presentationStyle={'overFullScreen'}
                      withDateFormatInLabel={false} // Show định dạng DD/MM/YY
                      underlineStyle={{display: 'none'}} // Xóa viền đen dưới input
                      style={styles.pickerInput}
                    />
                  </View>
                </View>
                <View style={styles.vwRowItem}>
                  <View style={styles.vwLabel}>
                    <Text style={styles.txtLabel}>Địa chỉ</Text>
                    <Text style={styles.txtRequi}>*</Text>
                  </View>
                  <View style={[styles.vwColInput, Lib_style.marginBottom10]}>
                    <DropdownBox
                      dropBoxStyles={styles.dropBxInp}
                      data={dataProvince.dataCity}
                      did={formProfile.city}
                      placeholder="Tỉnh/Thành phố *"
                      placeholderAct="Lựa chọn..."
                      search={false}
                      searchPlaceholder="Từ khóa..."
                      handleSetData={handleChoseGender}
                    />
                  </View>
                  <View style={[styles.vwColInput, Lib_style.marginBottom10]}>
                    <DropdownBox
                      dropBoxStyles={styles.dropBxInp}
                      data={dataProvince.dataState}
                      did={formProfile.state}
                      placeholder="Quận/Huyện *"
                      placeholderAct="Lựa chọn..."
                      search={false}
                      searchPlaceholder="Từ khóa..."
                      handleSetData={handleChoseGender}
                    />
                  </View>
                  <View style={[styles.vwColInput, Lib_style.marginBottom10]}>
                    <DropdownBox
                      dropBoxStyles={styles.dropBxInp}
                      data={dataProvince.dataWard}
                      did={formProfile.ward}
                      placeholder="Phường/Xã *"
                      placeholderAct="Lựa chọn..."
                      search={false}
                      searchPlaceholder="Từ khóa..."
                      handleSetData={handleChoseGender}
                    />
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
                        <Text style={styles.nameBtnSubmit}>Cập nhật</Text>
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
    backgroundColor: Colors.COLOR_F4F8FA,
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
    // backgroundColor: Colors.COLOR_WHITE,
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
  }
});

export default Member;
