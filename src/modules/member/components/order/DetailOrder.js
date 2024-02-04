import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput, StyleSheet, Image} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import {Colors, Fonts} from '../../../../contants';
import {Display} from '../../../../utils';

const DetailOrder = ({navigation}) => {
  return (
    <View style={styles.vwInfoInput}>
       <View style={styles.vwOrderCode}>
          <View style={styles.vwCodeText}>
            <Text style={styles.txtOrderName}>Đơn hàng <Text style={styles.txtOrderCode}>#SLCEXP-0004</Text> - </Text><Text style={[styles.txtOrderStatus, {color: Colors.COLOR_BLACK}]}>Đang chờ xử lý</Text>
          </View>
          <View style={styles.vwOrderDate}>
            <Text style={styles.txtOrderDate}>Ngày đặt: 08/07/2023, 15:03:31 </Text>
          </View>
       </View>
       <View style={styles.vwStatusStep}>
          <View style={styles.vwLineStep}></View>
          <View style={styles.vwItemStep}>
           <View style={[styles.vwStep, styles.vwStep1]}>
             <View style={[styles.vwCircle, styles.vwCircle1, styles.vwCircleActive]}></View>
             <View style={styles.vwBarName}>
               <Text style={[styles.txtCircle, styles.txtCircle1]}>Đặt hàng thành công </Text>
             </View>
           </View>
           <View style={[styles.vwStep, styles.vwStep2]}>
             <View style={[styles.vwCircle, styles.vwCircle2]}></View>
             <View style={styles.vwBarName}>
               <Text style={[styles.txtCircle, styles.txtCircle2]}>Đã xác nhận đơn hàng</Text>
             </View>
           </View>
           <View style={[styles.vwStep, styles.vwStep3]}>
             <View style={[styles.vwCircle, styles.vwCircle3]}></View>
             <View style={styles.vwBarName}>
               <Text style={[styles.txtCircle, styles.txtCircle3]}>Đang vận chuyển</Text>
             </View>
           </View>
           <View style={[styles.vwStep, styles.vwStep4]}>
             <View style={[styles.vwCircle, styles.vwCircle4]}></View>
             <View style={styles.vwBarName}>
               <Text style={[styles.txtCircle, styles.txtCircle4]}>Giao hàng thành công </Text>
             </View>
           </View>
          </View>
       </View>
       
       <View style={styles.vwInfoOrder}>
         <View style={styles.vwTitleOrder}>
           <Text style={styles.txtTitleOrder}>Thông tin đơn hàng</Text>
         </View>
         <View style={styles.vwProductOrder}>
          <View style={styles.vwTitleProduct}>
            <View style={[styles.vwColProduct, styles.vwNameProduct]}>
              <Text style={styles.txtNameProduct}>Sản phẩm</Text>
            </View>
            <View style={[styles.vwColProduct, styles.vwQtyProduct]}>
              <Text style={styles.txtNameProduct}>Số lượng</Text>
            </View>
            <View style={[styles.vwColProduct, styles.vwTotalProduct]}>
              <Text style={styles.txtNameProduct}>Thành tiền</Text>
            </View>
          </View>
          <View style={styles.vwListProduct}>
            {/*Item*/}
            <View style={styles.vwItemProduct}>
              <View style={[styles.vwColProduct, styles.vwNameProduct, styles.vwInfoProduct]}>
                <TouchableOpacity
                  activeOpacity={.8}
                  style={styles.vwImageProduct}
                  onPress={() => {
                    navigation.navigate('ProductDetail', {
                      item: {}
                    });
                  }}
                >
                  <Image source={require('../../images/sp1.jpg')} style={styles.imageProduct} />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={.8}
                  style={styles.vwContdProduct}
                  onPress={() => {
                    navigation.navigate('ProductDetail', {
                      item: {}
                    });
                  }}
                >
                  <Text style={styles.txtTitleProduct}>Vớ bảo vệ an toàn gan bàn chân</Text>
                  <Text style={styles.txtAttrProduct}>Mã số: PKGN-SP2</Text>
                  <Text style={styles.txtAttrProduct}>Màu sắc: Vàng</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.vwColProduct, styles.vwQtyProduct]}>
                <View style={styles.vwQty}>
                  <Text style={styles.txtQtyPrice}>5 x 650,000đ</Text>
                </View>
              </View>
              <View style={[styles.vwColProduct, styles.vwTotalProduct]}>
                <View style={styles.vwTotal}>
                  <Text style={styles.txtTotal}>3,250,000đ</Text>
                </View>
              </View>
            </View>
            {/*Item*/}
            <View style={styles.vwItemProduct}>
              <View style={[styles.vwColProduct, styles.vwNameProduct, styles.vwInfoProduct]}>
                <TouchableOpacity
                  activeOpacity={.8}
                  style={styles.vwImageProduct}
                  onPress={() => {
                    navigation.navigate('ProductDetail', {
                      item: {}
                    });
                  }}
                >
                  <Image source={require('../../images/sp2.jpg')} style={styles.imageProduct} />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={.8}
                  style={styles.vwContdProduct}
                  onPress={() => {
                    navigation.navigate('ProductDetail', {
                      item: {}
                    });
                  }}
                >
                  <Text style={styles.txtTitleProduct}>Dưỡng da bảo vệ an toàn gan bàn chân phụ nữ</Text>
                  <Text style={styles.txtAttrProduct}>Mã số: PKGN-SP2</Text>
                  <Text style={styles.txtAttrProduct}>Màu sắc: Vàng</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.vwColProduct, styles.vwQtyProduct]}>
                <View style={styles.vwQty}>
                  <Text style={styles.txtQtyPrice}>5 x 650,000đ</Text>
                </View>
              </View>
              <View style={[styles.vwColProduct, styles.vwTotalProduct]}>
                <View style={styles.vwTotal}>
                  <Text style={styles.txtTotal}>3,250,000đ</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.vwInfoCartShip}>
            <View style={styles.vwItemShip}>
              <View style={styles.vwShipText}>
                <Text style={styles.txtShipName}>Thành tiền</Text>
              </View>
              <View style={styles.vwShipValue}>
                <Text style={styles.txtShipNum}>4,750,000đ</Text>
              </View>
            </View>
            <View style={styles.vwItemShip}>
              <View style={styles.vwShipText}>
                <Text style={styles.txtShipName}>Phí vận chuyển</Text>
              </View>
              <View style={styles.vwShipValue}>
                <Text style={styles.txtShipNum}>0đ</Text>
              </View>
            </View>
            <View style={styles.vwItemShip}>
              <View style={styles.vwShipText}>
                <Text style={styles.txtShipName}>Tổng cộng</Text>
              </View>
              <View style={styles.vwShipValue}>
                <Text style={[styles.txtShipNum, styles.txtTotalPrice]}>4,750,000đ</Text>
              </View>
            </View>
          </View>
         </View>
       </View>

       <View style={[styles.vwInfoOrder, styles.vwInfoGuest]}>
         <View style={styles.vwTitleOrder}>
           <Text style={styles.txtTitleOrder}>Thông tin khách hàng</Text>
         </View>
         <View style={styles.vwGuestOrder}>
           <View style={styles.vwGuestPay}>
             <View style={styles.vwTitlePay}>
               <Text style={styles.txtTitlePay}>Thông tin thanh toán</Text>
               <View style={styles.lineTitlePay}></View>
             </View>
             <View style={styles.vwProfilePay}>
                <View style={styles.vwItemPay}>
                  <View style={styles.vwPayName}>
                    <Text style={styles.txtPayName}>Họ và tên</Text>
                  </View>
                  <View style={styles.vwPayValue}>
                    <Text style={styles.txtPayValue}>Test</Text>
                  </View>
                </View>
                <View style={styles.vwItemPay}>
                  <View style={styles.vwPayName}>
                    <Text style={styles.txtPayName}>Số điện thoại</Text>
                  </View>
                  <View style={styles.vwPayValue}>
                    <Text style={styles.txtPayValue}>01234567890</Text>
                  </View>
                </View>
                <View style={styles.vwItemPay}>
                  <View style={styles.vwPayName}>
                    <Text style={styles.txtPayName}>Email</Text>
                  </View>
                  <View style={styles.vwPayValue}>
                    <Text style={styles.txtPayValue}>test@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.vwItemPay}>
                  <View style={styles.vwPayName}>
                    <Text style={styles.txtPayName}>Địa chỉ</Text>
                  </View>
                  <View style={styles.vwPayValue}>
                    <Text style={styles.txtPayValue}>119 Huy Giáp, Phường Thạnh Mỹ Lợi, Quận 2, Hồ Chí Minh</Text>
                  </View>
                </View>
                <View style={styles.vwItemPay}>
                  <View style={styles.vwPayName}>
                    <Text style={styles.txtPayName}>Ghi chú</Text>
                  </View>
                  <View style={styles.vwPayValue}>
                    <Text style={styles.txtPayValue}>Lorem erat elementum egestas facilisi platea in suscipit dis nulla felis litora fames ad at netus torquent curae enim pede nam mattis velit potenti tincidunt facilisis</Text>
                  </View>
                </View>
                <View style={[styles.vwItemPay, styles.vwItemPayLast]}>
                  <View style={styles.vwPayName}>
                    <Text style={styles.txtPayName}>Phương thức thanh toán</Text>
                  </View>
                  <View style={styles.vwPayValue}>
                    <Text style={styles.txtPayValue}>Giao hàng và thu tiền tại nhà</Text>
                  </View>
                </View>
             </View>
           </View>

           <View style={[styles.vwGuestPay, {paddingTop: 0}]}>
             <View style={styles.vwTitlePay}>
               <Text style={styles.txtTitlePay}>THÔNG TIN GIAO HÀNG</Text>
               <View style={styles.lineTitlePay}></View>
             </View>
             <View style={styles.vwProfilePay}>
                <View style={styles.vwItemPay}>
                  <View style={styles.vwPayName}>
                    <Text style={styles.txtPayName}>Họ và tên</Text>
                  </View>
                  <View style={styles.vwPayValue}>
                    <Text style={styles.txtPayValue}>Test</Text>
                  </View>
                </View>
                <View style={styles.vwItemPay}>
                  <View style={styles.vwPayName}>
                    <Text style={styles.txtPayName}>Số điện thoại</Text>
                  </View>
                  <View style={styles.vwPayValue}>
                    <Text style={styles.txtPayValue}>01234567890</Text>
                  </View>
                </View>
                <View style={styles.vwItemPay}>
                  <View style={styles.vwPayName}>
                    <Text style={styles.txtPayName}>Email</Text>
                  </View>
                  <View style={styles.vwPayValue}>
                    <Text style={styles.txtPayValue}>test@gmail.com</Text>
                  </View>
                </View>
                <View style={[styles.vwItemPay, styles.vwItemPayLast]}>
                  <View style={styles.vwPayName}>
                    <Text style={styles.txtPayName}>Địa chỉ</Text>
                  </View>
                  <View style={styles.vwPayValue}>
                    <Text style={styles.txtPayValue}>119 Huy Giáp, Phường Thạnh Mỹ Lợi, Quận 2, Hồ Chí Minh</Text>
                  </View>
                </View>
             </View>
           </View>
         </View>
       </View>

       <View style={styles.vwButtomAction}>
          <TouchableOpacity
            activeOpacity={.8}
            style={[styles.buttomAction, styles.buttomCancel]}
            onPress={() => {
              alert("Cancel");
            }}
          >
           <Text style={[styles.txtBtnAction, styles.txtCancel]}>Hủy</Text>
         </TouchableOpacity>
         <TouchableOpacity
            activeOpacity={.8}
            style={[styles.buttomAction, styles.buttomBack]}
            onPress={() => {
              navigation.navigate("YourOrder");
            }}
          >
           <Text style={[styles.txtBtnAction, styles.txtBack]}>Quay lại trang trước</Text>
         </TouchableOpacity>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vwInfoInput: {
    marginBottom: 20,
  },
  vwOrderCode: {
    backgroundColor: Colors.COLOR_F4F8FA,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  vwCodeText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  txtOrderName: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.COLOR_DD1D42,
    fontWeight: 300,
  },
  txtOrderStatus: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: 300,
  },
  vwOrderDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtOrderDate: {
    fontSize: 11,
    lineHeight: 18,
    color: Colors.COLOR_888,
    fontWeight: 300,
  },
  vwStatusStep: {
    position: 'relative',
    paddingVertical: 30,
    paddingHorizontal: 25,
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.COLOR_E5EDF1,
  },
  vwLineStep: {
    height: 10,
    borderRadius: 20,
    backgroundColor: Colors.COLOR_WHITE,
  },
  vwItemStep: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vwStep: {
    width: "25%",
  },
  vwStep1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  vwStep2: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: "-10%",
  },
  vwStep3: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: "-10%",
  },
  vwStep4: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  vwCircle: {
    width: 16,
    height: 16,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.COLOR_C9C9C9,
    backgroundColor: Colors.COLOR_WHITE,
    position: 'absolute',
    top: -13,
  },
  vwCircleActive: {
    borderColor: Colors.COLOR_4b9AA6,
  },
  vwCircle1: {
    left: 0,
  },
  vwCircle2: {
  },
  vwCircle3: {
  },
  vwCircle4: {
    right: 0,
  },
  vwBarName: {
    maxWidth: "80%",
    marginTop: 5,
  },
  txtCircle: {
    fontSize: 12,
    lineHeight: 20,
    color: Colors.COLOR_333,
    fontWeight: 300,
  },
  txtCircle2: {
    textAlign: 'center',
  },
  txtCircle3: {
    textAlign: 'center',
  },
  vwInfoOrder: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: Colors.COLOR_WHITE,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  vwTitleOrder: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.COLOR_F4F8FA,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  txtTitleOrder: {
    fontSize: 15,
    lineHeight: 23,
    fontWeight: 400,
    textTransform: 'uppercase',
    color: Colors.COLOR_333,
  },
  vwTitleProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  vwColProduct: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  vwNameProduct: {
    width: "40%",
  },
  vwQtyProduct: {
    width: "30%",
    flexDirection: 'row',
    justifyContent: 'center',
  },
  vwTotalProduct: {
    width: "30%",
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  txtNameProduct: {
    fontSize: 12,
    lineHeight: 20,
    color: Colors.COLOR_333,
  },
  vwItemProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  vwInfoProduct: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imageProduct: {
    width: Display.setWidth(8),
    height: Display.setHeight(6),
    marginRight: 5,
  },
  vwContdProduct: {
    flex: 1,
  },
  txtTitleProduct: {
    fontSize: 10,
    lineHeight: 13,
    fontWeight: 500,
  },
  txtAttrProduct: {
    fontSize: 8,
    lineHeight: 11,
    fontWeight: 400,
  },
  txtQtyPrice: {
    fontSize: 10,
    lineHeight: 13,
    color: Colors.COLOR_333,
    fontWeight: 300,
  },
  txtTotal: {
    fontSize: 10,
    lineHeight: 13,
    color: Colors.COLOR_333,
    fontWeight: 400,
  },
  vwInfoCartShip: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  vwItemShip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  txtShipName: {
    fontSize: 11,
    lineHeight: 21,
    color: Colors.COLOR_333,
    fontWeight: 300,
  },
  txtShipNum: {
    fontSize: 11,
    lineHeight: 21,
    color: Colors.COLOR_333,
    fontWeight: 300,
  },
  txtTotalPrice: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
    color: Colors.COLOR_DD1D42,
  },
  vwGuestPay: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
  },
  vwTitlePay: {
    position: 'relative',
    marginBottom: 15,
    paddingBottom: 10,
  },
  txtTitlePay: {
    fontSize: 14,
    lineHeight: 22,
    textTransform: 'uppercase',
    color: Colors.COLOR_333,
    fontWeight: 400,
  },
  lineTitlePay: {
    position: 'absolute',
    top: 30,
    width: Display.setWidth(15),
    height: 1,
    backgroundColor: Colors.DEFAULT_GREEN2,
  },
  vwItemPay: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  vwItemPayLast: {
    borderBottomWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  vwPayName: {
    marginBottom: 2,
  },
  txtPayName: {
    fontSize: 12,
    lineHeight: 20,
    color: Colors.COLOR_333,
    fontWeight: 300,
  },
  txtPayValue: {
    fontSize: 12,
    lineHeight: 20,
    color: Colors.COLOR_333,
    fontWeight: 300,
  },
  buttomAction: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttomCancel: {
    marginBottom: 15,
    backgroundColor: Colors.COLOR_DD1D42,
  },
  buttomBack: {
    backgroundColor: Colors.COLOR_C9C9C9,
  },
  txtBtnAction: {
    color: Colors.COLOR_WHITE,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 500,
    textTransform: 'uppercase',
  }
});

export default DetailOrder;
