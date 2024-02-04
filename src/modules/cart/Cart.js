import React, {useState, useRef, useMemo} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text, TextInput, StyleSheet, Image} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import AntIcon from 'react-native-vector-icons/AntDesign';

import {Header, Footer, ContactSidebar, Lib_style} from '../../global';
import {DropdownBox, RadioGroupBox} from '../../global/components';
import {InfoOrderCart} from './components';

import {Colors, Images, Fonts} from '../../contants';
import {Display, Funs} from '../../utils';

import {dataProvince, dataRadioGroup} from './data';

const Cart = ({navigation}) => {
  const scrollRef = useRef(null);

  // State Info Address
  const [formAddress, setFormAddress] = useState({
    name: '',
    phone: '',
    email: '',
    city: 0,
    state: 0,
    ward: 0,
    address: '',
    note: '',
  });

  const handleChoseCity = id => {
    setFormAddress({
      ...formAddress,
      city: id
    });
  };

  const handleChoseState = id => {
    setFormAddress({
      ...formAddress,
      state: id
    });
  };

  const handleChoseWard = id => {
    setFormAddress({
      ...formAddress,
      ward: id
    });
  };

  // Radio Method
  const radioButtons = useMemo(() => (
    dataRadioGroup.dataRadioMethod
  ), []);
  const [selectedRadioMethodId, setSelectedRadioMethodId] = useState();

  return (
      <SafeAreaView style={{flex: 1, color: Colors.COLOR_WHITE}}>
        {/*Header*/}
        <Header navigation={navigation} />

        {/*Content*/}
        <ScrollView
          ref={scrollRef}
          keyboardDismissMode={'on-drag'}
          keyboardShouldPersistTaps={'handled'}
        >

          {/*Cont*/}
          <View style={styles.vwContInfoPayment}>

            {/*Form*/}
            <View style={styles.vwFormInput}>
              <View style={styles.vwTtForm}>
                <Text style={styles.txtTitleForm}>Thông tin liên hệ</Text>
              </View>
              <View style={styles.inputForm}>
                <View style={styles.vwGroupInput}>
                  <TextInput
                    style={styles.inputName}
                    value={formAddress.name}
                    placeholder="Họ tên *"
                    placeholderTextColor={Colors.COLOR_C9C9C9}
                    onChange={e => {
                      setFormAddress({
                        ...formAddress,
                        name: e.target.value
                      });
                    }}
                  />
                </View>
                <View style={styles.vwInlineFlex}>
                  <View style={[styles.vwInputHalf, styles.vwPhone]}>
                    <TextInput
                      style={styles.inputName}
                      keyboardType='numeric'
                      value={formAddress.phone}
                      placeholder="Điện thoại *"
                      placeholderTextColor={Colors.COLOR_C9C9C9}
                      onChange={e => {
                        setFormAddress({
                          ...formAddress,
                          phone: e.target.value
                        });
                      }}
                    />
                  </View>
                  <View style={[styles.vwInputHalf, styles.vwEmail]}>
                    <TextInput
                      style={styles.inputName}
                      keyboardType='email-address'
                      value={formAddress.email}
                      placeholder="Email *"
                      placeholderTextColor={Colors.COLOR_C9C9C9}
                      onChange={e => {
                        setFormAddress({
                          ...formAddress,
                          email: e.target.value
                        });
                      }}
                    />
                  </View>
                </View>
                <View style={styles.vwInlineFlex}>
                  <View style={[styles.vwInputHalf, styles.vwCity]}>
                    <DropdownBox
                      data={dataProvince.dataCity}
                      did={formAddress.city}
                      placeholder="Tỉnh/Thành Phố *"
                      placeholderAct="Lựa chọn..."
                      search={true}
                      searchPlaceholder="Từ khóa..."
                      handleSetData={handleChoseCity}
                    />
                  </View>
                  <View style={[styles.vwInputHalf, styles.vwState]}>
                    <DropdownBox
                      data={dataProvince.dataState}
                      did={formAddress.state}
                      placeholder="Quận/Huyện *"
                      search={true}
                      searchPlaceholder="Từ khóa..."
                      handleSetData={handleChoseState}
                    />
                  </View>
                </View>
                <View style={styles.vwInlineFlex}>
                  <View style={[styles.vwInputHalf, styles.vwWard]}>
                    <DropdownBox
                      data={dataProvince.dataWard}
                      did={formAddress.ward}
                      placeholder="Phường/Xã *"
                      placeholderAct="Lựa chọn..."
                      search={true}
                      searchPlaceholder="Từ khóa..."
                      handleSetData={handleChoseWard}
                    />
                  </View>
                  <View style={[styles.vwInputHalf, styles.vwAdress]}>
                    <TextInput
                      style={[styles.inputName, styles.inputAddress]}
                      value={formAddress.address}
                      placeholder="Số nhà, tên đường *"
                      placeholderTextColor={Colors.COLOR_C9C9C9}
                      onChange={e => {
                        setFormAddress({
                          ...formAddress,
                          address: e.target.value
                        });
                      }}
                    />
                  </View>
                </View>
                <View style={styles.inputForm}>
                  <View style={styles.vwNote}>
                    <TextInput
                      multiline
                      numberOfLines={4}
                      textAlignVertical="top"
                      maxLength={2000}
                      style={styles.inputNote}
                      value={formAddress.note}
                      placeholder="Ghi chú"
                      placeholderTextColor={Colors.COLOR_C9C9C9}
                      onChange={e => {
                        setFormAddress({
                          ...formAddress,
                          note: e.target.value
                        });
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.vwFormInput}>
              <View style={styles.vwTtForm}>
                <Text style={styles.txtTitleForm}>PHƯƠNG THỨC THANH TOÁN</Text>
              </View>
              <RadioGroupBox
                radioButtons={radioButtons}
                HandleOnPress={setSelectedRadioMethodId}
                HandleSelectedId={selectedRadioMethodId}
                size={18}
                borderSize={1}
                borderColor="rgba(0, 0, 0, 0.5)"
                radioGroupStyle={styles.radioGroupStyle}
                radioItemStyle={styles.radioItemStyle}
                labelStyle={styles.radioLabelStyle}
                descriptionStyle={styles.radioDescriptionStyle}
              />
            </View>
          </View>

          <InfoOrderCart navigation={navigation} />

          <View style={styles.vwContInfoPayment}>
            <View style={styles.vwButtomFins}>
              <TouchableOpacity
                activeOpacity={.8}
                onPress={() => {
                  navigation.navigate("CartProcess",{
                    token: Funs.getRandomValue(111111111111, 999999999999),
                  });
                }}
                style={styles.btnSendFins}
              >
                <Text style={styles.txtBtnFins}>Hoàn tất đơn hàng</Text>
              </TouchableOpacity>
              <View style={styles.vwNotPs}>
                <Text style={styles.txtNotPs}>(Xin vui lòng kiểm tra lại thông tin trước khi Hoàn tất)  </Text>
              </View>
            </View>

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
  vwContInfoPayment: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  vwFormInput: {
    marginBottom: 20,
  },
  txtTitleForm: {
    color: Colors.COLOR_333,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
  },
  vwGroupInput: {
    marginBottom: 15,
  },
  vwInlineFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  vwInputHalf: {
    width: ((Display.width - 20) / 2) - 10,
  },
  inputName: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    height: 40,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  inputNote: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 14,
  },
  radioGroupStyle: {
  },
  radioItemStyle: {
  },
  radioLabelStyle: {
  },
  radioDescriptionStyle: {
  },
  vwButtomFins: {
    marginBottom: 20,
  },
  btnSendFins: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: Colors.COLOR_BLACK,
    marginBottom: 10,
  },
  txtBtnFins: {
    color: Colors.COLOR_WHITE,
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 500,
  },
  vwNotPs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNotPs: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.COLOR_999,
    fontStyle: 'italic',
  }
});

export default Cart;
