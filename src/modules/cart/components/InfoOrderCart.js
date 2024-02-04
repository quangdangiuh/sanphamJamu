import React, {useEffect, useState, useRef} from 'react';
import {Animated, Easing, TouchableOpacity, View, Text, TextInput, StyleSheet, Image, Keyboard} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors, Images, Fonts} from '../../../contants';
import {Display, Funs} from '../../../utils';

const InfoOrderCart = ({navigation}) => {
  const [codePromo, setCodePromo] = useState('');
  const [isShowProduct, setisShowProduct] = useState(false);
  const heightProduct = useRef(new Animated.Value(0)).current;
  const opacityProduct = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightProduct, {
      toValue: (isShowProduct) ? 1 : 0,
      duration: (isShowProduct) ? 400 : 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    Animated.timing(opacityProduct, {
      toValue: (isShowProduct) ? 1 : 0,
      duration: (isShowProduct) ? 400 : 500,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();

  }, [isShowProduct]);
  const maxHeightProduct = heightProduct.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Display.height]
  });

  return (
    <View style={styles.vwContainer}>
      
      <View style={styles.vwGroupHead}>
        <TouchableOpacity
          activeOpacity={.8}
          onPress={() => {
            Keyboard.dismiss();
            setisShowProduct(!isShowProduct);
          }}
          style={styles.vwGhLeft}
        >
          <View style={styles.vwIconShop}>
            <MaterialIcon name="shopping-outline" style={styles.iconShopp} />
          </View>
          <View style={styles.vwTitle}>
            <Text style={styles.titleForm}>Thông tin đơn hàng</Text>
            <MaterialIcon name={isShowProduct ? "chevron-up" : "chevron-down"} style={styles.iconDownUp} />
          </View>
        </TouchableOpacity>
        <View style={styles.vwGhRight}>
            <View style={styles.vwTotalPrice}>
              <Text style={styles.txtPriceTotal}>500.000 VNĐ</Text>
            </View>
        </View>
      </View>
        
      <Animated.View style={[{opacity: opacityProduct, maxHeight: maxHeightProduct}]}>
        <View style={styles.vwGroupBody}>
          <View style={styles.vwTitle2}>
            <Text style={styles.txtTitleSp}>Sản phẩm</Text>
          </View>
          <View style={styles.vwContListItem}>
            {/*vwBoxItem*/}
            <View style={styles.vwBoxItem}>
                <TouchableOpacity
                  activeOpacity={.8}
                  onPress={() => {
                    navigation.navigate('ProductDetail', {
                      item: {}
                    });
                  }}
                  style={styles.vwColL}
                >
                  <Image source={require('../images/sp1.jpg')} style={styles.img} />
                </TouchableOpacity>
                <View style={styles.vwColC}>
                  <TouchableOpacity
                    activeOpacity={.8} 
                    onPress={() => {
                      navigation.navigate('ProductDetail', {
                        item: {}
                      });
                    }}
                    style={styles.vwName}
                  >
                    <Text style={styles.txtName}>Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 275ML</Text>
                  </TouchableOpacity>
                  <View style={styles.vwNumCart}>
                    <Text style={styles.txtQty}>Số lượng: 1</Text>
                  </View>
                </View>
                <View style={styles.vwColR}>
                  <Text style={styles.txtPrice}>250.000 VNĐ</Text>
                </View>
            </View>
            {/*vwBoxItem*/}
            <View style={[styles.vwBoxItem, {marginBottom: 0,}]}>
                <TouchableOpacity
                  activeOpacity={.8}
                  onPress={() => {
                    navigation.navigate('ProductDetail', {
                      item: {}
                    });
                  }}
                  style={styles.vwColL}
                >
                  <Image source={require('../images/sp2.jpg')} style={styles.img} />
                </TouchableOpacity>
                <View style={styles.vwColC}>
                  <TouchableOpacity
                    activeOpacity={.8} 
                    onPress={() => {
                      navigation.navigate('ProductDetail', {
                        item: {}
                      });
                    }}
                    style={styles.vwName}
                  >
                    <Text style={styles.txtName}>Sữa Rửa Tay Spa of the World™ Tahitian Tiaré Hand Wash 275ML</Text>
                  </TouchableOpacity>
                  <View style={styles.vwNumCart}>
                    <Text style={styles.txtQty}>Số lượng: 1</Text>
                  </View>
                </View>
                <View style={styles.vwColR}>
                  <Text style={styles.txtPrice}>250.000 VNĐ</Text>
                </View>
            </View>
          </View>
        </View>
      </Animated.View>
      
      <View style={styles.vwGroupFooter}>
          
        <View style={styles.vwGroupPromo}>
          <Text style={styles.txtPromo}>Nhập Mã khuyến mãi</Text>
          <View style={styles.vwInputPromo}>
            <TextInput
              style={styles.inputName}
              autoCapitalize="characters"
              value={codePromo}
              placeholder="Nhập mã khuyến mãi"
              placeholderTextColor={Colors.COLOR_C9C9C9}
              onChange={e => {
                setCodePromo(e.target.value);
              }}
            />
            <TouchableOpacity
              activeOpacity={.8}
              style={styles.btnOkPromo}
              onPress={() => {
                Keyboard.dismiss();
                alert('Promo');
              }}
            >
              <Text style={styles.txtOkPormo}>Đồng ý</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.vwInfoPricePay}>
          <View style={styles.vwPayItem}>
            <View style={styles.vwPyColL}>
              <Text style={styles.txtPay}>Tiền hàng</Text>
            </View>
            <View style={styles.vwPyColR}>
              <Text style={[styles.txtPrice, styles.txtPriceNormal]}>500.000 VNĐ</Text>
            </View>
          </View>
          <View style={styles.vwPayItem}>
            <View style={styles.vwPyColL}>
              <Text style={[styles.txtPay, styles.txtPriceNormal]}>Giảm giá</Text>
            </View>
            <View style={styles.vwPyColR}>
              <Text style={[styles.txtPrice, styles.txtPriceNormal]}>-0 VNĐ</Text>
            </View>
          </View>
          <View style={styles.vwPayItem}>
            <View style={styles.vwPyColL}>
              <Text style={styles.txtPay}>Phí vận chuyển</Text>
            </View>
            <View style={styles.vwPyColR}>
              <Text style={[styles.txtPrice, styles.txtPriceNormal]}>+0 VNĐ</Text>
            </View>
          </View>
          <View style={styles.vwPayItem}>
            <View style={styles.vwPyColL}>
              <Text style={styles.txtPay}>Tổng cộng </Text>
            </View>
            <View style={styles.vwPyColR}>
              <Text style={[styles.txtPrice, styles.txtActive]}>500.000 VNĐ</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vwContainer: {
    // backgroundColor: Colors.DEFAULT_GREEN,
  },
  vwGroupHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  vwGhLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vwTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconShopp: {
    fontSize: 20,
    marginRight: 5,
    color: Colors.DEFAULT_GREEN
  },
  iconDownUp: {
    fontSize: 18,
    color: Colors.COLOR_999,
  },
  titleForm: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.COLOR_333,
    fontFamily: Fonts.FONT_SARABUN_LIGHT,
    fontWeight: 400,
  },
  txtPriceTotal: {
    fontSize: 15,
    lineHeight: 23,
    color: Colors.COLOR_333,
    fontFamily: Fonts.FONT_SARABUN_BOLD,
  },
  vwGroupBody: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  vwTitle2: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
  },
  txtTitleSp: {
    color: Colors.COLOR_333,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: Fonts.FONT_SARABUN_BOLD,
    textTransform: 'uppercase',
  },
  vwBoxItem: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    borderBottomWidth: .5,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    paddingBottom: 15,
    marginBottom: 15,
  },
  vwColL: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Colors.DEFAULT_GREEN,
  },
  img: {
    width: Display.setWidth(10),
    height: Display.setWidth(10),
    resizeMode: 'contain',
  },
  vwColC: {
    width: Display.setWidth(60),
    // backgroundColor: Colors.DEFAULT_GREEN,
  },
  vwColR: {
    width: Display.setWidth(20),
    alignItems: 'flex-end',
    // backgroundColor: Colors.DEFAULT_GREEN,
  },
  vwName: {
    marginBottom: 5,
  },
  txtName: {
    fontSize: 15,
    lineHeight: 23,
    fontWeight: 400,
  },
  txtQty: {
    fontSize: 14,
    color: Colors.COLOR_999,
    fontWeight: 400,
  },
  txtPrice: {
    color: Colors.COLOR_333,
    fontSize: 14,
    fontWeight: 'bold',
  },
  txtPriceNormal: {
    fontWeight: 'normal',
  },
  vwGroupFooter: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  vwPayItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  txtPay: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.COLOR_333,
    textTransform: 'uppercase',
    fontWeight: 400,
    fontFamily: Fonts.FONT_SARABUN_LIGHT,
  },
  vwGroupPromo: {
    marginTop: 5,
    marginBottom: 20,
  },
  txtPromo: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.COLOR_333,
    fontFamily: Fonts.FONT_SARABUN_LIGHT,
    fontWeight: 700,
    marginBottom: 15,
  },
  vwInputPromo: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  inputName: {
    width: Display.setWidth(75),
    height: 38,
    paddingHorizontal: 10,
  },
  btnOkPromo: {
    backgroundColor: Colors.COLOR_E6E6E6,
    width: Display.setWidth(20),
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtOkPormo: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.COLOR_333,
    fontWeight: 500,
  }
});

export default InfoOrderCart;
