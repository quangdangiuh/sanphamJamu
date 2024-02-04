import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import FontAIcon from 'react-native-vector-icons/FontAwesome';

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

import {DropdownBox, Pagination} from '../../../../global/components';

import {Colors, Fonts} from '../../../../contants';
import {Display} from '../../../../utils';

import {dataStatus} from '../../data';

const ListOrder = ({navigation}) => {
  // State Search
  const [formSearch, setFormSearch] = useState({
    stats_id: 0,
    date_begin: '',
    date_end: '',
    order_code: ''
  });

  const handleChoseStatus = id => {
    setFormSearch({
      ...formSearch,
      stats_id: id
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

  return (
    <View style={styles.vwInfoInput}>
      <View style={styles.vwformSearch}>
        <View style={styles.vwRowItem}>
          <View style={styles.vwColInput}>
            <DropdownBox
              dropBoxStyles={styles.dropBxInp}
              selectedEmptyTextStyle={{color: Colors.COLOR_C9C9C9}}
              data={dataStatus}
              did={formSearch.stats_id}
              placeholder="Trạng thái"
              placeholderAct="Lựa chọn..."
              search={false}
              searchPlaceholder="Từ khóa..."
              handleSetData={handleChoseStatus}
            />
          </View>
        </View>
        <View style={styles.vwRowItem}>
          <View style={styles.vwColInput}>
            <DatePickerInput
              placeholder="Từ ngày"
              placeholderTextColor={Colors.COLOR_C9C9C9}
              locale="en-GB"
              value={formSearch.date_begin}
              onChange={(d) => {
                setFormSearch({
                  ...formSearch,
                  date_begin: d
                });
              }}
              inputMode="start"
              autoComplete={'birthdate-full'}
              withDateFormatInLabel={false}
              underlineStyle={{display: 'none'}}
              style={styles.pickerInput}
            />
          </View>
        </View>
        <View style={styles.vwRowItem}>
          <View style={styles.vwColInput}>
            <DatePickerInput
              placeholder="Đến ngày"
              placeholderTextColor={Colors.COLOR_C9C9C9}s
              locale="en-GB"
              value={formSearch.date_end}
              onChange={(d) => {
                setFormSearch({
                  ...formSearch,
                  date_end: d
                });
              }}
              inputMode="start"
              autoComplete={'birthdate-full'}
              withDateFormatInLabel={false}
              underlineStyle={{display: 'none'}}
              style={styles.pickerInput}
            />
          </View>
        </View>
        <View style={styles.vwRowItem}>
          <View style={styles.vwColInput}>
            <TextInput
              style={styles.colInput}
              value={formSearch.order_code}
              placeholder="Mã đơn hàng"
              placeholderTextColor={Colors.COLOR_C9C9C9}
              onChange={e => {
                setFormSearch({
                  ...formSearch,
                  order_code: e.target.value
                });
              }}
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
              <FontAIcon name="search" style={styles.iconSearch} />
              <Text style={styles.nameBtnSubmit}>Tìm kiếm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.vwWrapOrder}>
        <TouchableOpacity
          activeOpacity={.8}
          onPress={() => {
            navigation.navigate("YourOrder", {
              id: 1
            });
          }}
          style={styles.vwItemOrder}
        >
          <View style={styles.vwNameOrder}>
            <Text style={styles.txtNameOrder}>SLCEXP-0004</Text>
          </View>
          <View style={styles.vwAttrOrder}>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Ngày đặt:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle]}>08/07/2023 - 15:03</Text>
            </View>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Tổng tiền:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle]}>4,750,000đ</Text>
            </View>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Tình trạng:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle, {color: Colors.COLOR_DD1D42}]}>Đang chờ xử lý</Text>
              <TouchableOpacity
                activeOpacity={.8}
                onPress={() => alert("CANCEL")}
                style={styles.btnHandleCancel}
              >
                <Text style={styles.txtCancel}>Hủy</Text> 
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={.8}
          onPress={() => {
            navigation.navigate("YourOrder", {
              id: 1
            });
          }}
          style={styles.vwItemOrder}
        >
          <View style={styles.vwNameOrder}>
            <Text style={styles.txtNameOrder}>SLCEXP-0004</Text>
          </View>
          <View style={styles.vwAttrOrder}>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Ngày đặt:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle]}>08/07/2023 - 15:03</Text>
            </View>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Tổng tiền:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle]}>4,750,000đ</Text>
            </View>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Tình trạng:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle, {color: Colors.COLOR_DD1D42}]}>Đang chờ xử lý</Text>
              <TouchableOpacity
                activeOpacity={.8}
                onPress={() => alert("CANCEL")}
                style={styles.btnHandleCancel}
              >
                <Text style={styles.txtCancel}>Hủy</Text> 
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={.8}
          onPress={() => {
            navigation.navigate("YourOrder", {
              id: 1
            });
          }}
          style={styles.vwItemOrder}
        >
          <View style={styles.vwNameOrder}>
            <Text style={styles.txtNameOrder}>SLCEXP-0004</Text>
          </View>
          <View style={styles.vwAttrOrder}>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Ngày đặt:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle]}>08/07/2023 - 15:03</Text>
            </View>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Tổng tiền:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle]}>4,750,000đ</Text>
            </View>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Tình trạng:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle, {color: Colors.COLOR_DD1D42}]}>Đang chờ xử lý</Text>
              <TouchableOpacity
                activeOpacity={.8}
                onPress={() => alert("CANCEL")}
                style={styles.btnHandleCancel}
              >
                <Text style={styles.txtCancel}>Hủy</Text> 
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={.8}
          onPress={() => {
            navigation.navigate("YourOrder", {
              id: 1
            });
          }}
          style={styles.vwItemOrder}
        >
          <View style={styles.vwNameOrder}>
            <Text style={styles.txtNameOrder}>SLCEXP-0004</Text>
          </View>
          <View style={styles.vwAttrOrder}>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Ngày đặt:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle]}>08/07/2023 - 15:03</Text>
            </View>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Tổng tiền:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle]}>4,750,000đ</Text>
            </View>
            <View style={styles.vwAtItem}>
              <Text style={[styles.txtAtName, styles.txtAtTitle]}>Tình trạng:</Text>
              <Text style={[styles.txtAtValue, styles.txtAtTitle, {color: Colors.COLOR_DD1D42}]}>Đang chờ xử lý</Text>
              <TouchableOpacity
                activeOpacity={.8}
                onPress={() => alert("CANCEL")}
                style={styles.btnHandleCancel}
              >
                <Text style={styles.txtCancel}>Hủy</Text> 
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.vwPagination}>
        <Pagination total={3} p={1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vwInfoInput: {
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
    color: Colors.COLOR_333,
    backgroundColor: Colors.COLOR_WHITE,
    height: 45,
    borderWidth: 1,
    borderColor: Colors.COLOR_DDD,
    borderRadius: 5,
    fontSize: 14,
    paddingHorizontal: 10,
  },
  vwColButtom: {
    marginTop: 10,
  },
  buttomSubmit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  iconSearch: {
    fontSize: 14,
    color: Colors.COLOR_WHITE,
    marginRight: 5,
  },
  vwWrapOrder: {
    marginTop: 15,
  },
  vwItemOrder: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: Colors.COLOR_WHITE,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  vwNameOrder: {
    marginBottom: 5,
  },
  txtNameOrder: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 700,
    color: Colors.COLOR_333,
  },
  vwAtItem: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  txtAtName: {
    width: "20%",
  },
  txtAtTitle: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.COLOR_333,
    fontWeight: 300,
  },
  btnHandleCancel: {
    position: 'absolute',
    right: 0,
    backgroundColor: Colors.COLOR_DD1D42,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  txtCancel: {
    fontSize: 11,
    fontWeight: 400,
    color: Colors.COLOR_WHITE,
  },
  vwPagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ListOrder;
