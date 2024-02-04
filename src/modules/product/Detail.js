import React, {useEffect, useCallback, useState, useMemo, useRef} from 'react';
import {SafeAreaView, View, Text, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAIcon from 'react-native-vector-icons/FontAwesome';

import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import RenderHTML from 'react-native-render-html';
import ImagePicker from 'react-native-image-crop-picker';
import AnimatedGallery from '@akumzy/react-native-animated-gallery';
import { ImageGallerySwiper } from 'react-native-image-gallery-swiper';

import {Header, Footer, ContactSidebar, Lib_style} from '../../global';

import {Colors, Fonts} from '../../contants';
import {Display} from '../../utils';

import {dataSlider, dataDetail, dataAnimatedGallery, dataImageGallerySwiper} from './data';
import {SliderDetail, TabContent, TabReview, ProductOther} from './components';

const Detail = ({route, navigation}) => {
  const scrollRef = useRef(null);
  
  /*Ẩn/Hiện Sidebar khi mở Review*/
  const [showSidebar, setshowSidebar] = useState(true);
  /*ImageGallerySwiper*/
  const [swipedImage, setSwipedImage] = useState();

  const [quanty, setQuanty] = useState('1');

  const { item } = route.params;

  const changeQuanty = (type, quanty, setQuanty) => {
    if(isNaN(quanty)) quanty = '';

    if(type == 'down'){
      if(quanty != '') quanty = parseInt(quanty) - 1;
      if(quanty <= 0 && quanty.toString() != '') quanty = 1;
      setQuanty(quanty.toString());
    }else if(type == 'up'){
      if(quanty != '') quanty = parseInt(quanty) + 1;
      setQuanty(quanty.toString());
    }else if(type == 'between'){
      if(quanty != '')  quanty = parseInt(quanty.toString());
      if(quanty <= 0 && quanty.toString() != '') quanty = 1;
      setQuanty(quanty.toString());
    }else if(type == 'blur' && quanty.toString() == ''){
      quanty = 1;
      setQuanty(quanty.toString());
    }
  };

  const handleTextChange = (text) => {
    changeQuanty('between', text, setQuanty);
  }

  const renderersProps = {img: {enableExperimentalPercentWidth: true}};
  /*Short*/
  const html_short = {
      html: `${dataDetail[0].short}`,
  };
  /*Tab Info*/
  const html_tab_info = {
      html: `${dataDetail[0].tabInfo}`,
  };
  /*Tab Thành phần*/
  const html_tab_tp = {
      html: `${dataDetail[0].tabThanhPhan}`,
  };
  /*Tab Hướng dẫn*/
  const html_tab_hd = {
      html: `${dataDetail[0].tabHuongDan}`,
  };

  /*BottomSheet: Review*/
  const [typeReview, settypeReview] = useState('review');
  const refReview = useRef(null);
  const snapPointsReview = useMemo(() => ['15%', '90%'], []);
  const handleSnapReviewShow = useCallback((type, idRely = 0) => {
    settypeReview(type);
    setshowSidebar(false);
    refReview.current?.present();
  }, []);
  const handleSheetReviewChanges = useCallback((index: number) => {
    if(index === -1){
      setshowSidebar(true);
    }
  }, []);
  const handleCloseFormReview = useCallback(() => {
    setshowSidebar(true);
    refReview.current?.close();
  }, []);

  /*Data Chose Form*/
  const initialDataForm = [
    {type: "star", data: 0},
    {type: "name", data: ""},
    {type: "email", data: ""},
    {type: "content", data: ""},
    {type: "pictures", data: []},
  ];
  const [dataForm, setdataForm] = useState(initialDataForm);

  /*Click Star*/
  const handleInputChangeReview = (type, value = 0) => {
    let newDataForm = dataForm;

    newDataForm = dataForm.map(data => {
      if (data.type !== type) {
        return {
          ...data,
        };
      }else{
        return {
          ...data,
          data: value
        };
      }
    });

    setdataForm(newDataForm);
  }

  const numStar = dataForm['0'].data;

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
  }

  /*Gửi dữ liệu*/
  const handleSendData = () => {
    alert('SEND DATA');
    handleCloseFormReview();
  }

  const Loader = () => {
    return (
      <></>
    )
  }

  return (
    <SafeAreaView style={{flex: 1, color: Colors.COLOR_WHITE}}>

      {/*Header*/}
      <Header navigation={navigation} />

      {/*Context*/}
      <ScrollView 
        ref={scrollRef}
      >
        {/*Detail*/}
        <View style={styles.vwContent}>
          {/*Slider*/}
          {/*<SliderDetail data={dataSlider} />*/}

          <ImageGallerySwiper
            images={dataImageGallerySwiper}
            swipeUp={() => console.log('up')}
            swipeDown={() => console.log('down')}
            displayName={false}
            showThumbs
            thumbStyles={{marginLeft: 0, marginRight: 10,}}
            getSwipedImage={setSwipedImage}
            activeImage={0}
            textStyle={{fontSize: 16, color: Colors.COLOR_WHITE}}
            imageStyles={{ height: Display.width - 40 }}
            arrows={{
              arrowRight: require('./images/rvimg1.png'),
              arrowLeft: require('./images/rvimg1.png'),
              arrowStyles: {
                // backgroundColor: 'gray',
                height: 30,
                width: 30,
                borderRadius: 10,
              },
              containerStyles: {
                width: Display.width,
                position: 'absolute',
                display: 'flex',
                flexDirection: 'row',
                marginTop: (Display.width - 40) / 2,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              },
            }}
          >
          </ImageGallerySwiper>

          {/*<AnimatedGallery
            imageUrls={dataAnimatedGallery}
            renderLoader={<Loader />}
            disablefullScreen={true}
            thumbBorderWidth={3}
            thumbBorderColor={"white"}
            spacing={8}
            imageSize={90}
            backgroundColor={"#0000"}
            onEndReached={() => {
              console.log("yay! end reached")
            }}
            invertThumbDirection={false}
            invertGalleryDirection={false}
          />*/}

          {/*Content*/}
          <View style={styles.vwDescription}>
            <View style={styles.vwTitle}>
              <Text style={styles.txtTitle}>Sữa Dưỡng Hoa Thanh Cúc Chống Lão Hóa All Natural 130ml</Text>
            </View>

            <View style={styles.vwAttrInfo}>
              <View style={styles.vItemAttr}>
                <Text style={styles.txtAttr}>Mã số: 10206748</Text>
              </View>
              <View style={styles.vItemAttr}>
                <Text>Thương hiệu: All Natural</Text>
              </View>
            </View>

            <View style={styles.vwAttrPrice}>
              <View style={[styles.priceInfo, styles.priceBuy]}>
                <Text style={styles.txtPrice}>500.000đ</Text>
              </View>
              <View style={[styles.priceInfo, styles.priceOld]}>
                <Text style={styles.txtPriceOld}>1.000.000đ</Text>
                <Text style={styles.txtSale}>-50%</Text>
              </View>
            </View>

            <View style={styles.vwQuanButtom}>
              <View style={styles.vwInputQtt}>
                <TouchableOpacity activeOpacity={.8} style={[styles.btnQty, styles.btnQtyUp]}
                   onPress={() => {
                    changeQuanty('up', quanty, setQuanty)
                  }}
                >
                  <MaterialIconsIcon name="add" style={[styles.iconQty, styles.iconAdd]} />
                </TouchableOpacity>
                <View style={styles.vwInput}>
                  <TextInput
                    style={styles.inputQty}
                    keyboardType='numeric'
                    value={quanty}
                    placeholderTextColor={Colors.COLOR_WHITE}
                    onChangeText={handleTextChange}
                    onFocus={() => {}}
                    onBlur={() => {
                      changeQuanty('blur', quanty, setQuanty);
                    }}
                  />
                </View>
                <TouchableOpacity activeOpacity={.8} style={[styles.btnQty, styles.btnQtyDown]}
                   onPress={() => {
                    changeQuanty('down', quanty, setQuanty)
                  }}
                >
                  <MaterialIconsIcon name="horizontal-rule" style={[styles.iconQty, styles.iconMin]} />
                </TouchableOpacity>
              </View>
              <View style={styles.vwBtnCart}>
                <TouchableOpacity activeOpacity={.8} style={[styles.btnCart, styles.btnAddCart]}
                  onPress={() => {navigation.navigate("Cart")}}
                >
                  <Text style={[styles.txtBtnCart, styles.txtAddCart]}>Thêm vào giỏ</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} style={[styles.btnCart, styles.btnBuyCart]}
                  onPress={() => {navigation.navigate("Cart")}}
                >
                  <MaterialCommunityIcon name="shopping-outline" style={styles.iconShopp} />
                  <Text style={[styles.txtBtnCart, styles.txtBuyCart]}>Đặt hàng</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.vwShort}>
              <RenderHTML
                contentWidth={Display.width - 20}
                source={html_short}
                enableExperimentalMarginCollapsing={true}
                enableExperimentalGhostLinesPrevention={true}
                renderersProps={renderersProps}
                tagsStyles={{
                  ul: {listStyleType: 'none', margin: 0, padding: 0,},
                  li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
                  span: {color:'red', },
                  p: {color: Colors.COLOR_333, fontSize: 13, textAlign: 'left', lineHeight: 20, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 5, },
                  img: {maxWidth: (Display.width - 20), }
                }}
              />
            </View>

            <View style={styles.vwTabCont}>
              <TabContent title="Thông tin sản phẩm" content={html_tab_info} renderersProps={renderersProps} />
              <TabContent title="Thành phần" content={html_tab_tp} renderersProps={renderersProps} />
              <TabContent title="Hướng dẫn sử dụng" content={html_tab_hd} renderersProps={renderersProps} />
              <TabReview title="Đánh giá" renderersProps={renderersProps} handleSnapReviewShow={handleSnapReviewShow} />
            </View>

            {/*Sản phẩm khác*/}
            <ProductOther navigation={navigation} title="Sản phẩm mua kèm" />
            <ProductOther navigation={navigation} title="Sản phẩm cùng danh mục" />
            <ProductOther navigation={navigation} title="Sản phẩm đã xem" />
          </View>

        </View>

        {/*Footer*/}
        <Footer navigation={navigation} />
      </ScrollView>

      {/*BottomSheet: Review*/}
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={refReview}
          index={1}
          snapPoints={snapPointsReview}
          onChange={handleSheetReviewChanges}
          // backgroundStyle={{backgroundColor: Colors.DEFAULT_GREEN2,}}
        >
          <View style={styles.vwFormReview}>
            <TouchableOpacity activeOpacity={.8} onPress={() => {handleCloseFormReview()}} style={styles.btnCloseRevi}>
              <AntIcon name="closecircle" style={styles.closeRevi} />
            </TouchableOpacity>
            {
              typeReview == 'review' ?
                <View style={styles.vwContReview}>
                  <View style={styles.vwTitleRevi}>
                    <Text style={styles.txtTitleRevi}>Đánh giá sản phẩm</Text>
                  </View>
                  <View style={styles.vwYourTextStar}>
                      <View style={styles.vwLYourText}>
                        <Text style={styles.txtYStar}>Đánh giá của bạn về sản phẩm này? *</Text>
                      </View>
                      <View style={styles.vwLYourStar}>
                        <FontAIcon name="star-o" onPress={() => {handleInputChangeReview('star', 1)}} style={(0 < numStar && 1 <= numStar) ? [styles.iconStar, {color: Colors.COLOR_FFD700}] : styles.iconStar} />
                        <FontAIcon name="star-o" onPress={() => {handleInputChangeReview('star', 2)}} style={(0 < numStar && 2 <= numStar) ? [styles.iconStar, {color: Colors.COLOR_FFD700}] : styles.iconStar} />
                        <FontAIcon name="star-o" onPress={() => {handleInputChangeReview('star', 3)}} style={(0 < numStar && 3 <= numStar) ? [styles.iconStar, {color: Colors.COLOR_FFD700}] : styles.iconStar} />
                        <FontAIcon name="star-o" onPress={() => {handleInputChangeReview('star', 4)}} style={(0 < numStar && 4 <= numStar) ? [styles.iconStar, {color: Colors.COLOR_FFD700}] : styles.iconStar} />
                        <FontAIcon name="star-o" onPress={() => {handleInputChangeReview('star', 5)}} style={(0 < numStar && 5 <= numStar) ? [styles.iconStar, {color: Colors.COLOR_FFD700}] : styles.iconStar} />
                      </View>
                  </View>
                  <View style={styles.vwContForm}>
                    <View style={[styles.vwtwoInputRow, Lib_style.marginBottom10]}>
                      <View style={styles.vwInputText}>
                        <TextInput
                          style={styles.inputFormText}
                          value={dataForm['1'].data}
                          placeholder="Họ tên *"
                          placeholderTextColor={Colors.COLOR_999}
                          onChangeText={(text) => {handleInputChangeReview('name', text)}}
                        />
                      </View>
                      <View style={styles.vwInputText}>
                        <TextInput
                          style={styles.inputFormText}
                          keyboardType='email-address'
                          value={dataForm['2'].data}
                          placeholder="Email"
                          placeholderTextColor={Colors.COLOR_999}
                          onChangeText={(text) => {handleInputChangeReview('email', text)}}
                        />
                      </View>
                    </View>
                    <View style={[styles.vwlineInputRow, Lib_style.marginBottom10]}>
                      <TextInput
                          style={styles.inputFormTextArea}
                          multiline
                          numberOfLines={8}
                          textAlignVertical="top"
                          maxLength={2000}
                          value={dataForm['3'].data}
                          placeholder="Nhận xét của bạn *"
                          placeholderTextColor={Colors.COLOR_999}
                          onChangeText={(text) => {handleInputChangeReview('content', text)}}
                        />
                        <Text style={[styles.noteContent, Lib_style.marginTop5,]}>Nội dung chứa ít nhất 50 ký tự</Text>
                    </View>
                    <View style={styles.vwlinePictureRow}>
                      <TouchableOpacity activeOpacity={0.8} style={styles.btnChoPicture} onPress={onAddChosePicture}>
                        <MaterialIconsIcon name="add" style={[styles.iconQty, styles.iconChoPicture]} />
                        <Text style={styles.txtChoPicture}>photo</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnSendData} onPress={() => {handleSendData()}}>
                      <Text style={styles.txtSendData}>Gửi đánh giá</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              :
                <View style={styles.vwContReview}>
                  <View style={styles.vwTitleRevi}>
                    <Text style={styles.txtTitleRevi}>Trả lời đánh giá</Text>
                  </View>
                  <View style={styles.vwContForm}>
                    <View style={[styles.vwtwoInputRow, Lib_style.marginBottom10]}>
                      <View style={styles.vwInputText}>
                        <TextInput
                          style={styles.inputFormText}
                          value={dataForm['1'].data}
                          placeholder="Họ tên *"
                          placeholderTextColor={Colors.COLOR_999}
                          onChangeText={(text) => {handleInputChangeReview('name', text)}}
                        />
                      </View>
                      <View style={styles.vwInputText}>
                        <TextInput
                          style={styles.inputFormText}
                          keyboardType='email-address'
                          value={dataForm['2'].data}
                          placeholder="Email"
                          placeholderTextColor={Colors.COLOR_999}
                          onChangeText={(text) => {handleInputChangeReview('email', text)}}
                        />
                      </View>
                    </View>
                    <View style={[styles.vwlineInputRow, Lib_style.marginBottom10]}>
                      <TextInput
                          style={styles.inputFormTextArea}
                          multiline
                          numberOfLines={8}
                          textAlignVertical="top"
                          maxLength={2000}
                          value={dataForm['3'].data}
                          placeholder="Nội dung phản hồi đánh giá của bạn *"
                          placeholderTextColor={Colors.COLOR_999}
                          onChangeText={(text) => {handleInputChangeReview('content', text)}}
                        />
                        <Text style={[styles.noteContent, Lib_style.marginTop5,]}>Nội dung chứa ít nhất 5 ký tự</Text>
                    </View>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnSendData} onPress={() => {handleSendData()}}>
                      <Text style={styles.txtSendData}>Gửi phản hồi</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            }
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>

      {/*Sidebar*/}
      {showSidebar && <ContactSidebar scrollRef={scrollRef} />}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  vwContent: {
    marginTop: 20,
    marginBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  vwTitle: {
    marginBottom: 10,
  },
  txtTitle: {
    fontSize: 20,
    lineHeight: 30,
    color: Colors.COLOR_333,
    fontFamily: Fonts.FONT_OSWALD_MEDIUM,
  },
  vwAttrInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingBottom: 10,
    marginBottom: 15,
  },
  vItemAttr: {
  },
  txtAttr: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.COLOR_999,
  },
  vwAttrPrice: {
    marginBottom: 15,
  },
  priceInfo: {
    position: 'relative',
  },
  priceBuy: {
  },
  txtPrice: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 600,
    color: Colors.COLOR_333,
  },
  priceOld: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  txtPriceOld: {
    fontSize: 15,
    lineHeight: 23,
    fontWeight: 400,
    color: Colors.COLOR_999,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  txtSale: {
    fontSize: 15,
    lineHeight: 23,
    fontWeight: 400,
    color: Colors.COLOR_E80000,
  },
  vwQuanButtom: {
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  vwInputQtt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    marginBottom: 15,
  },
  btnQty: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnQtyUp: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
  },
  btnQtyDown: {
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(0, 0, 0, 0.1)',
  },
  iconQty: {
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.COLOR_333,
  },
  iconMin: {
  },
  inputQty: {
    width: Display.width - 20 - 70,
    height: 35,
    fontSize: 12,
    padding: 0,
    color: Colors.COLOR_666,
    textAlign: 'center',
  },
  vwBtnCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCart: {
    width: (Display.width - 30) / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.COLOR_BLACK,
    marginLeft: 5,
    marginRight: 5,
  },
  btnAddCart: {
    backgroundColor: Colors.COLOR_WHITE,
  },
  btnBuyCart: {
    backgroundColor: Colors.COLOR_BLACK,
  },
  txtBtnCart: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  txtAddCart: {
    color: Colors.COLOR_BLACK,
  },
  txtBuyCart: {
    color: Colors.COLOR_WHITE,
    zIndex: 2,
  },
  iconShopp: {
    fontSize: 17,
    color: Colors.COLOR_WHITE,
    marginRight: 5,
  },
  vwShort: {
    marginBottom: 15,
  },
  vwTabCont: {
    marginLeft: -10,
    marginRight: -10,
  },
  vwFormReview: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 0,
    // backgroundColor: Colors.DEFAULT_GREEN2,
  },
  btnCloseRevi: {
    alignItems: 'flex-end',
  },
  closeRevi: {
    fontSize: 25,
    color: Colors.COLOR_333,
  },
  vwContReview: {

  },
  vwTitleRevi: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  txtTitleRevi: {
    fontSize: 25,
    lineHeight: 37,
    // fontWeight: 400,
    fontFamily: Fonts.FONT_SARABUN_REGULAR,
    color: Colors.COLOR_333,
    textTransform: 'uppercase',
  },
  vwYourTextStar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  vwLYourStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStar: {
    marginRight: 5,
    fontSize: 22,
  },
  vwtwoInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vwInputText: {
  },
  inputFormText: {
    width: (Display.width - 60) / 2,
    height: 35,
    fontSize: 12,
    paddingVertical: 0,
    paddingHorizontal: 10,
    color: Colors.COLOR_444,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  inputFormTextArea: {
    width: Display.width - 40,
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: Colors.COLOR_444,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  noteContent: {
    fontSize: 10,
    color: Colors.COLOR_999,
  },
  vwlinePictureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  btnChoPicture: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  iconChoPicture: {
    fontSize: 30,
    color: Colors.COLOR_CCC,
  },
  txtChoPicture: {
    fontSize: 14,
    color: Colors.COLOR_CCC,
    fontFamily: Fonts.FONT_SARABUN_BOLD,
    textTransform: 'uppercase',
  },
  btnSendData: {
    width: Display.width - 40,
    backgroundColor: Colors.COLOR_BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  txtSendData: {
    color: Colors.COLOR_WHITE,
    fontSize: 15,
    textTransform: 'uppercase',
  },
});

export default Detail;
