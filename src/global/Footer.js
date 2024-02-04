import React, { useEffect, useState, useRef } from 'react';
import {Animated, Easing, View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAIcon from 'react-native-vector-icons/FontAwesome';

import RenderHTML from "react-native-render-html";
// import { WebView } from 'react-native-webview';

import {Colors, Fonts} from '../contants';
import {Display} from '../utils';

import {MenuFooter} from './components';

const Footer = ({navigation}) => {
  const html_address = {
      html: `<ul><li>236/2 Nguyễn Thái Bình, P. 12, Q. Tân Bình, HCM</li><li>Email: info@jamu.com.vn</li><li>Hotline: (028) 38490694 - (028) 3948 1799</li></ul>`,
  };
  const html_bocongthuong = {
      html: `<p>GPĐKKD số 0312091299 do Sở KHĐT TP.HCM cấp ngày 05/01/2013</p><p> Cơ quan chủ quản: CÔNG TY TNHH THƯƠNG MẠI &amp; DỊCH VỤ THE JAMU MOMMY CENTER</p>`,
  };
  const renderersProps = {img: {enableExperimentalPercentWidth: true}};

  // Menu Footer
  const dataMenuFooter = [
    {
      id: 1,
      title: 'Sản phẩm',
      sub: [
        {
          id: 1,
          title: 'Sản phẩm mẹ bầu'
        },
        {
          id: 2,
          title: 'Sản phẩm mẹ sau sinh'
        },
        {
          id: 3,
          title: 'Mỹ phẩm thiên nhiên'
        }
      ] 
    },
    {
      id: 1,
      title: 'MUA HÀNG TRỰC TUYẾN',
      sub: [
        {
          id: 1,
          title: 'Hướng Dẫn Mua Hàng Trực Tuyến'
        },
        {
          id: 2,
          title: 'Kiểm Tra Giao Hàng'
        },
        {
          id: 3,
          title: 'Thông Tin Giao Hàng'
        }
      ] 
    }
  ];

  // Address Footer
  const heightAddress = useRef(new Animated.Value(0)).current;
  const [isShowAddress, setisShowAddress] = useState(false);
  useEffect(() => {
    Animated.timing(heightAddress, {
      toValue: (isShowAddress) ? 1 : 0,
      duration: (isShowAddress) ? 400 : 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isShowAddress]);
  const maxHeightAddress = heightAddress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Display.height]
  });

  return (
    <View style={styles.container}>
      {/*Thương hiệu Jamu*/}
      <View style={styles.wrapBrand}>
        <View style={styles.wtitleBrand}>
          <Text style={styles.nameBrand}>Các thương hiệu của Jamu</Text>
        </View>
        <View style={styles.contBrand}>
            <View style={styles.wImgBig}>
              <TouchableOpacity>
                <Image source={require('./images/foo1.png')} resizeMode='center' styles={styles.imgTop} />
              </TouchableOpacity>
            </View>
            <View style={styles.wItemImg}>
              <View style={styles.itemImg}>
                <TouchableOpacity>
                  <Image source={require('./images/foo2.png')} style={styles.imgSmall} />
                </TouchableOpacity>
              </View>
              <View style={styles.itemImg}>
                <TouchableOpacity>
                  <Image source={require('./images/foo3.png')} style={styles.imgSmall} />
                </TouchableOpacity>
              </View>
              <View style={styles.itemImg}>
                <TouchableOpacity>
                  <Image source={require('./images/foo4.png')} style={styles.imgSmall} />
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>

      {/*Đăng ký - MXH*/}
      <View style={styles.wrapSocialRegistry}>
        <View style={styles.wSocial}>
          <View style={styles.sTxtKetn}><Text style={styles.txtKn}>Kết nối: </Text></View>
          <View style={styles.wIconS}>
            <TouchableOpacity activeOpacity={.8} onPress={() => alert('facebook')}><FontAIcon name='facebook' style={styles.iconSocial} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={.8} onPress={() => alert('youtube')}><FontAIcon name='youtube-play' style={styles.iconSocial} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={.8} onPress={() => alert('instagram')}><FontAIcon name='instagram' style={styles.iconSocial} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={.8} onPress={() => alert('twitter')}><FontAIcon name='twitter' style={styles.iconSocial} /></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity activeOpacity={.6} onPress={() => alert('Đăng ký nhận bản tin')}>
          <View style={styles.wrapRegistry}>
            <Text style={styles.nameRegt}>Đăng ký nhận bản tin</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/*Menu Footer*/}
      <View style={styles.wrapMenuFooter}>
  
        {/*itemMenu*/}        
        {
          dataMenuFooter.map(function(item, index) {
            {/*itemMenu*/}
            return <MenuFooter key={index} navigation={navigation} item={item} />
          })
        }

        {/*itemMenu Contact*/}
        <View style={styles.wItemMenu}>
          <TouchableOpacity activeOpacity={.8} onPress={() => {setisShowAddress(!isShowAddress)}} style={styles.ttMenu}>
            <Text style={styles.mnTitle}>Thông tin liên hệ</Text>
            <FontAIcon name={!isShowAddress ? 'angle-down' : 'angle-up'} style={styles.iconTitle} />
          </TouchableOpacity>
          <Animated.View style={[styles.contMenu, {maxHeight: maxHeightAddress}]}>
            <RenderHTML
              contentWidth={Display.width - 20}
              source={html_address}
              enableExperimentalMarginCollapsing={true}
              enableExperimentalGhostLinesPrevention={true}
              renderersProps={renderersProps}
              tagsStyles={{
                ul: {listStyleType: 'none', margin: 0, padding: 0,},
                li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
                span: {color:'red', },
                img: {maxWidth: (Display.width - 20), }
              }}
            />
          </Animated.View>
        </View>

        {/*Bộ công thương*/}
        <View style={styles.wrapBoCongThuong}>
            <View style={styles.textBct}>
                <RenderHTML
                  contentWidth={Display.width - 20}
                  source={html_bocongthuong}
                  enableExperimentalMarginCollapsing={true}
                  enableExperimentalGhostLinesPrevention={true}
                  renderersProps={renderersProps}
                  tagsStyles={{
                    ul: {listStyleType: 'none', margin: 0, padding: 0,},
                    li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
                    span: {color:'red', },
                    p: {paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 2, fontSize: 12, lineHeight: 21, color: Colors.COLOR_333, fontWeight: 300},
                    img: {maxWidth: (Display.width - 20), }
                  }}
                />
            </View>
            <View>
              <TouchableOpacity activeOpacity={.8} onPress={() => {alert('BCT')}}>
                <Image source={require('./images/congthuong.png')} resizeMode='contain' styles={styles.imgBct} />
                </TouchableOpacity>
            </View>
        </View>

        {/*Facebook*/}
        {/*<View style={styles.wrapFacePage}>
          <WebView
            automaticallyAdjustContentInsets={false}
            source={{ uri: 'https://www.facebook.com/JamuMommyCenter/' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            scalesPageToFit={true}
            style={{width: (Display.width - 20), height: 250}}
          />
        </View>*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  wrapBrand: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  wtitleBrand: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  nameBrand: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: Fonts.FONT_OSWALD_BOLD,
    fontWeight: 700,
    textTransform: 'uppercase',
    color: Colors.COLOR_BLACK,
  },
  wImgBig: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imgTop: {
    width: 125,
    height: (125 * 0.98),
  },
  wItemImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImg: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  imgSmall: {
    width: 90,
    height: parseInt(90 / 2.3),
  },
  wrapSocialRegistry: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Colors.COLOR_F6F6F6,
  },
  wSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sTxtKetn: {
    marginRight: 15,
  },
  txtKn: {
    fontSize: 14,
    lineHeight: 27,
    color: Colors.COLOR_333,
    fontWeight: 400,
  },
  wIconS: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSocial: {
    fontSize: 13,
    marginRight: 15,
    fontWeight: 900,
    color: Colors.COLOR_BLACK,
  },
  wrapRegistry: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.COLOR_BLACK,
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  nameRegt: {
    fontSize: 15,
    lineHeight: 23,
    fontWeight: 500,
    color: Colors.COLOR_333,
    textTransform: 'uppercase',
  },
  wrapMenuFooter: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  wItemMenu: {
    marginBottom: 10,
  },
  ttMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  mnTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.COLOR_BLACK,
    fontWeight: 400,
    textTransform: 'uppercase',
  },
  iconTitle: {
    fontSize: 18,
    color: Colors.COLOR_BLACK,
    fontWeight: 500,
  },
  contMenu: {
    // height: 0,
  },
  wrapBoCongThuong: {
  },
  imgBct: {
  },
  wrapFacePage: {
    marginTop: 10,
  }
});

export default Footer;
