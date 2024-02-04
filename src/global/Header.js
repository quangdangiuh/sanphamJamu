import React, { useEffect, useState, useRef, useCallback} from 'react';
import {Animated, Easing, View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Keyboard} from 'react-native';

//redux
import { useSelector, useDispatch } from "react-redux";
//Action
import { changeShowCartSidebar } from '../reducers';

import { useDrawerStatus } from '@react-navigation/drawer'
import ViewDisplay from 'react-native-display';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {Colors, Fonts} from '../contants';
import {Display, Funs} from '../utils';

import {Sidebar as SidebarItemCart} from '../modules/cart/components';

const Header = ({navigation}) => {
  const showListCart = useSelector((state) => state.global.showListCart);
  const dispatch = useDispatch();

  /*const loadShowCartSidebar = useCallback(async () => {
    try {
      await dispatch(changeShowCartSidebar());
    } catch (err) {
      alert(err);
    }
  }, [dispatch]);*/
  /*useEffect(() => {
    loadShowCartSidebar();
  }, []);*/

  const isDrawerOpen = useDrawerStatus();
  const rotateValuePhone = new Animated.Value(0);

  const [keyword, setKeyword] = useState('');
  const [showFormSearch, setshowFormSearch] = useState(false);
  // const [showListCart, setshowListCart] = useState(false);

  const translateYAnimaSearch = useRef(new Animated.Value(-140)).current;
  const opacityAnimaSearch = useRef(new Animated.Value(0)).current;

  const translateXAnimaCart = useRef(new Animated.Value(Display.width)).current;
  const opacityAnimaCart = useRef(new Animated.Value(0)).current;

  const startImageRotatePhone = () => {
    rotateValuePhone.setValue(0);

    Animated.timing(rotateValuePhone, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startImageRotatePhone());
  };

  const changeStatusShowCartItem = () => {
    Keyboard.dismiss();
    // setshowListCart(!showListCart);
    // loadShowCartSidebar();
    dispatch(changeShowCartSidebar());
  }

  const rotatePhone = rotateValuePhone.interpolate({
    inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
    outputRange: ['0deg', '-25deg', '25deg', '-25deg', '25deg', '0deg', '0deg'],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    startImageRotatePhone();
  });

  useEffect(() => {
    Animated.timing(translateYAnimaSearch, {
      toValue: (showFormSearch) ? 0 : -140,
      duration: (showFormSearch) ? 50 : 0,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityAnimaSearch, {
      toValue: (showFormSearch) ? 1 : 0,
      duration: (showFormSearch) ? 500 : 0,
      useNativeDriver: true,
    }).start();
  }, [showFormSearch]);

  useEffect(() => {
    Animated.timing(translateXAnimaCart, {
      toValue: (showListCart) ? 0 : Display.width,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityAnimaCart, {
      toValue: (showListCart) ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [showListCart]);

  /*Login - Registry*/
  const [showFormMember, setShowFormMember] = useState(false);
  const [isCheckLogin, setIsCheckLogin] = useState(true);

  const handleGoInfoMember = (act = "Member") => {
    setShowFormMember(!showFormMember);
    navigation.navigate(act);
  };

  return (
    <View style={styles.container}>

      {/*Header*/}
      <View style={styles.warpHeader}>
        <View style={styles.wrapMenuSearch}>
          {isDrawerOpen == 'open' ? <AntIcon name="close" style={styles.iconMenuClose} onPress={navigation.toggleDrawer} /> : <SimpleLineIcon name="menu" style={styles.iconMenu} onPress={() => {Keyboard.dismiss(); navigation.toggleDrawer()}} />}
          <AntIcon name={(showFormSearch) ? 'close' : 'search1'} style={(showFormSearch) ? [styles.iconSearch, styles.iconSearchClose] : styles.iconSearch} onPress={() => {Keyboard.dismiss(); setshowFormSearch(!showFormSearch)}} />
        </View>
        <View>
          <TouchableOpacity activeOpacity={.8} onPress={() => {Keyboard.dismiss(); navigation.navigate('Home')}}>
            <Image source={require('./images/logo.png')} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapLineCart}>
          <Animated.View style={[styles.wrapPhone, {transform: [{ rotate: rotatePhone }]}]}>
            <TouchableOpacity activeOpacity={.8} onPress={() => {Keyboard.dismiss(); Funs.onClickCallPhone('0123456789')}}>
              <MaterialIcon name="phone-in-talk" style={styles.iconPhone} />
            </TouchableOpacity>
          </Animated.View>
          <View style={styles.wrapIconCart}>
            <TouchableOpacity activeOpacity={.8} onPress={() => {changeStatusShowCartItem()}}>
              <MaterialIcon name="shopping-outline" style={styles.iconCart} />
              <View style={styles.wrapNumCart}>
                <Text style={styles.numCart}>0</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapContainMember}>
            <TouchableOpacity
              activeOpacity={.8}
              onPress={() => {
                setShowFormMember(!showFormMember);
              }}
            >
              {
                (!isCheckLogin) ? <AwesomeIcon name="user-o" style={[styles.iconCart, styles.iconMember]} /> : <Image source={require('../modules/member/images/avatar.jpg')} style={styles.avatar} />
              }
            </TouchableOpacity>

            {
              (!isCheckLogin) ?
              // Chưa đăng nhập
              <ViewDisplay
                enable={showFormMember}
                enterDuration={500} 
                exitDuration={500}
                exit="zoomOut"
                enter="zoomIn"
              >
                <View style={styles.vwContainLogin}>
                  <View style={styles.vwUpOpenMember}>
                    <AwesomeIcon name="caret-up" style={[styles.iconCart, styles.iconOpenMember]} />
                  </View>
                  <TouchableOpacity activeOpacity={.8} style={[styles.btnMember, styles.btnLogin]}>
                      <Text style={[styles.txtMember, styles.txtLogin]}>Đăng nhập</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={.8} style={[styles.btnMember, styles.btnRegistry]}>
                      <Text style={[styles.txtMember, styles.txtRegistry]}>Đăng ký</Text>
                  </TouchableOpacity>
                </View>
              </ViewDisplay>
            :
              // Đã đăng nhập
              <ViewDisplay
                enable={showFormMember}
                enterDuration={500} 
                exitDuration={500}
                exit="zoomOut"
                enter="zoomIn"
              >
                <View style={[styles.vwContainLogin, {paddingHorizontal: 0, paddingVertical: 0}]}>
                  <View style={styles.vwUpOpenMember}>
                    <AwesomeIcon name="caret-up" style={[styles.iconCart, styles.iconOpenMember]} />
                  </View>
                  <View style={styles.vwContainMember}>
                    <View style={styles.vwMemberHead}>
                      <View style={styles.vwHeadL}>
                        <Image source={require('../modules/member/images/avatar.jpg')} style={styles.avatar2} />
                      </View>
                      <View style={styles.vwHeadR}>
                        <View style={styles.vwHeadName}>
                          <Text style={styles.txtHeadName}>Test</Text>
                        </View>
                        <View style={styles.vwHeadTime}>
                          <Text style={styles.txtHeadTime}>Đăng nhập lần cuối: 02/09/2023 </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.vwMemberBody}>
                        <View style={styles.vwBodyTitle}>
                          <AntIcon name="caretright" style={styles.iconCarRi} />
                          <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.btnHandleInfo}
                            onPress={() => {handleGoInfoMember()}}
                          >
                            <Text style={styles.txtBodyTitle}>Thông tin tài khoản</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.vwBodyTitle}>
                          <AntIcon name="caretright" style={styles.iconCarRi} />
                          <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.btnHandleInfo}
                            onPress={() => {handleGoInfoMember("YourOrder")}}
                          >
                            <Text style={styles.txtBodyTitle}>Quản lý đơn hàng</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.vwBodyTitle}>
                          <AntIcon name="caretright" style={styles.iconCarRi} />
                          <TouchableOpacity
                            activeOpacity={.8}
                            style={styles.btnHandleInfo}
                            onPress={() => {handleGoInfoMember("ChangePass")}}
                          >
                            <Text style={styles.txtBodyTitle}>Đổi mật khẩu</Text>
                          </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                      style={styles.vwMemberFoot}
                      activeOpacity={.8}
                      onPress={() => {
                        setShowFormMember(!showFormMember);
                      }}
                    >
                      <Text style={styles.txtLogout}>Đăng xuất</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ViewDisplay>
            }

          </View>
        </View>
      </View>

      {/*Tìm kiếm*/}
      <Animated.View style={[styles.wrapFormSearch, {opacity: opacityAnimaSearch, transform: [{translateY: translateYAnimaSearch}]}]}>
          <TextInput
            style={styles.inputSearch}
            value={keyword}
            placeholder="Nhập từ khòa tìm kiếm..."
            placeholderTextColor={Colors.COLOR_WHITE}
            onChangeText={setKeyword}
          />
          <TouchableOpacity activeOpacity={.8} style={styles.btnSearch}>
            <AntIcon name="search1" style={styles.iconSubmitSearch} onPress={() => {Keyboard.dismiss(); alert("Search")}} />
          </TouchableOpacity>
      </Animated.View>

      {/*Giỏ hàng*/}
      <Animated.View style={[styles.wrapCartItem, {opacity: opacityAnimaCart, transform: [{translateX: translateXAnimaCart}]}]}>
        <View style={styles.boxCartListL}>
          <TouchableOpacity activeOpacity={.8} style={styles.btnCloseCart} onPress={() => {changeStatusShowCartItem()}}></TouchableOpacity>
        </View>
        <View style={styles.boxCartListR}>
          <View style={styles.cartItemHeader}>
            <View>
              <Text style={styles.txtGiohang}>Giỏ hàng</Text>
            </View>
            <TouchableOpacity activeOpacity={.8} onPress={() => {changeStatusShowCartItem()}}>
              <AntIcon name="closecircle" style={styles.iconCartClose} />
            </TouchableOpacity>
          </View>
          <View style={styles.cartItemContent}>
            <SidebarItemCart navigation={navigation} />
          </View>
          <View style={styles.cartItemFooter}>
            <TouchableOpacity activeOpacity={.8} style={styles.btnViewGoCart} onPress={() => {
              changeStatusShowCartItem();
              navigation.navigate('Cart');
            }}>
              <Text style={styles.viewtextCart}>
                Xem giỏ hàng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 100,
  },
  warpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor: Colors.DEFAULT_GREEN2
  },
  wrapFormSearch: {
    width: "100%",
    position: 'absolute',
    top: 60,
    zIndex: 98,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    backgroundColor: Colors.COLOR_BLACK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputSearch: {
    width: Display.setWidth(80),
    height: 40,
    fontSize: 12,
    color: Colors.COLOR_WHITE,
    backgroundColor: Colors.COLOR_BLACK,
    borderBottomWidth: 1,
    borderBottomColor: Colors.COLOR_WHITE,
  },
  btnSearch: {
    width: Display.setWidth(10),
    height: 40,
    backgroundColor: Colors.COLOR_WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSubmitSearch: {
    fontSize: 20,
    textAlign: 'center',
  },
  wrapMenuSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMenu: {
    fontSize: 20,
    marginRight: 10,
    color: Colors.COLOR_333
  },
  iconMenuClose: {
    fontSize: 30,
    marginRight: 10,
    color: Colors.COLOR_F60000
  },
  iconSearch: {
    fontSize: 17,
    width: 20,
    height: 18
  },
  iconSearchClose: {
    color: Colors.COLOR_F60000,
    fontSize: 19
  },
  logo: {
    width: 70,
    resizeMode: 'contain',
  },
  wrapLineCart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapPhone: {
    width: 25,
    height: 25,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Colors.DEFAULT_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPhone: {
    fontSize: 15,
    color: Colors.DEFAULT_GREEN,
  },
  wrapIconCart: {
    marginRight: 10,
  },
  wrapCartItem: {
    width: Display.width,
    height: Display.height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 97,
  },
  boxCartListL: {
    width: Display.setWidth(20),
    height: Display.height,
    position: 'absolute',
    left: 0,
    backgroundColor: Colors.COLOR_BLACK,
    opacity: .5,
  },
  boxCartListR: {
    width: Display.setWidth(80),
    height: Display.height,
    backgroundColor: Colors.COLOR_WHITE,
    position: 'absolute',
    right: 0,
    flex: 1,
  },
  cartItemHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.COLOR_WHITE,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  cartItemContent: {
    flex: 14,
    backgroundColor: Colors.COLOR_WHITE
  },
  cartItemFooter: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.COLOR_WHITE,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
  },
  btnCloseCart: {
    flex: 1,
  },
  txtGiohang: {
    fontSize: 16,
    fontWeight: 600,
    color: Colors.COLOR_BLACK,
    textTransform: 'uppercase',
  },
  iconCartClose: {
    fontSize: 17,
    color: Colors.COLOR_BLACK,
  },
  btnViewGoCart: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.COLOR_333,
    borderRadius: 100,
    paddingTop: 10,
    paddingBottom: 10,
  },
  viewtextCart: {
    color: Colors.COLOR_WHITE,
    fontSize: 15,
    textTransform: 'uppercase',
  },
  iconCart: {
    fontSize: 22,
    color: Colors.DEFAULT_GREEN
  },
  wrapNumCart: {
    width: 14,
    height: 14,
    borderRadius: 100,
    backgroundColor: Colors.DEFAULT_GREEN,
    position: 'absolute',
    top: -8,
    right: -4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numCart: {
    fontSize: 9,
    color: Colors.COLOR_WHITE,
  },
  wrapContainMember: {
  },
  vwContainLogin: {
    position: 'absolute',
    top: 18,
    right: -5,
    minWidth: 250,
    paddingHorizontal: 15,
    paddingVertical: 15,
    /*shadowColor: Colors.COLOR_BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,*/
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.COLOR_EEE,
    backgroundColor: Colors.COLOR_WHITE,
    zIndex: 9871,
  },
  avatar: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  vwUpOpenMember: {
    position: 'absolute',
    top: -23,
    right: 5,
    zIndex: 9872,
  },
  iconOpenMember: {
    fontSize: 30,
    color: "#dfdfdf",
  },
  btnMember: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 25,
  },
  btnLogin: {
    marginBottom: 10,
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  btnRegistry: {
    backgroundColor: Colors.COLOR_333,
  },
  txtMember: {
    color: Colors.COLOR_WHITE,
    fontSize: 14,
    lineHeight: 22,
    textTransform: 'uppercase',
  },
  txtLogin: {
  },
  txtRegistry: {
  },
  vwMemberHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.COLOR_EEE,
  },
  vwHeadL: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  avatar2: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  vwHeadR: {
  },
  vwHeadName: {
  },
  txtHeadName: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.COLOR_333,
    fontWeight: 'bold',
  },
  txtHeadTime: {
    fontSize: 10,
    lineHeight: 20,
    color: Colors.COLOR_999,
  },
  vwMemberBody: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  vwBodyTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  iconCarRi: {
    fontSize: 10,
    color: Colors.COLOR_CCC,
    marginRight: 10,
  },
  btnHandleInfo: {
  },
  txtBodyTitle: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.COLOR_333,
    fontFamily: Fonts.FONT_SARABUN_REGULAR,
    fontWeight: 300,
  },
  vwMemberFoot: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  txtLogout: {
    color: Colors.COLOR_WHITE,
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 22,
    fontFamily: Fonts.FONT_SARABUN_REGULAR,
    fontWeight: 400,
  }
});

export default Header;
