import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Pressable} from 'react-native';

import RenderHTML from "react-native-render-html";

// import { SwiperFlatList } from 'react-native-swiper-flatlist';
import SwiperWeb from "react-native-web-swiper";

import {Colors, Fonts} from '../../../contants';
import {Display} from '../../../utils';

const ForMom = () => {
  const [isLoadPage, setisLoadPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoadPage(true);
    }, 500);
  }, []);

  const html_formom = {
      html: `<p>Chào mừng mẹ đã đến với Jamu For Mom, trung tâm cung cấp các liệu pháp CHĂM SÓC, LÀM ĐẸP TOÀN DIỆN dành riêng cho Mẹ bầu &amp; sau sinh hàng đầu chuẩn Sinh.</p><p>Với nổ lực mang đến các giải pháp Chăm Sóc &amp; Làm Đẹp Toàn Diện không chỉ giúp mẹ nhanh chóng lấy lại vóc dáng thon gọn, hồi phúc sức khỏe, cải thiện vẻ đẹp làn da mà còn giúp mẹ cân bằng cảm xúc tích cực trong suốt hành trình mang thai, sau khi sinh &amp; những năm sau đó; Jamu hi vọng có thể giúp mẹ vượt qua những khó khăn trong giai đoạn mới của hành trình làm mẹ, để mẹ HẠNH PHÚC hơn, RẠNG RỠ hơn, TỰ TIN hơn &amp; tận hưởng trọn vẹn những trải nghiệm tuyệt vời nhất trong suốt hành trình làm mẹ của riêng mình!</p>`,
  };
  const renderersProps = {img: {enableExperimentalPercentWidth: true}};

  if(isLoadPage){
    return (
      // Jamu For Mom
      // <View style={styles.wrapForMom}>
      //   <SwiperFlatList
      //     autoplay
      //     autoplayDelay={5}
      //     autoplayLoop
      //     autoplayLoopKeepAnimation={true}
      //     index={0}
      //     showPagination
      //   >
      //     <Pressable style={styles.itemForMom}>
      //       <ImageBackground source={require('./images/info.jpg')} resizeMode="cover" style={styles.bgImgForMom}>
      //           <View style={styles.contForMom}>
      //             <View style={styles.wvttForMom}>
      //               <Text style={styles.titleForMom}>Jamu For Mom</Text>
      //             </View>
      //             <View style={styles.descForMom}>
      //               <RenderHTML
      //                 contentWidth={Display.width - 20}
      //                 source={html_formom}
      //                 enableExperimentalMarginCollapsing={true}
      //                 enableExperimentalGhostLinesPrevention={true}
      //                 renderersProps={renderersProps}
      //                 tagsStyles={{
      //                   ul: {listStyleType: 'none', margin: 0, padding: 0,},
      //                   li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
      //                   span: {color:'red', },
      //                   p: {color: Colors.COLOR_WHITE, fontSize: 13, textAlign: 'center', lineHeight: 20, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 5, },
      //                   img: {maxWidth: (Display.width - 20), }
      //                 }}
      //               />
      //             </View>
      //             <View style={styles.btnwForMom}>
      //               <TouchableOpacity activeOpacity={.8} onPress={() => alert('For Mom')}>
      //                 <Text style={styles.txtMoreForMom}>Tìm hiểu thêm</Text>
      //               </TouchableOpacity>
      //             </View>
      //           </View>
      //       </ImageBackground>
      //     </Pressable>

      //   </SwiperFlatList>
      // </View>

      // Jamu For Mom 2
      <View style={{paddingLeft: 10, paddingRight: 10, marginBottom: 30,}}>
        <View style={{width: Display.width - 20, height: Display.width}}>
          <SwiperWeb
            loop={true}
            timeout={5}
            from={0}
            springConfig={{speed: 11}}
            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
              prevPos: false,
              nextPos: false,
              dotsWrapperStyle: {position: 'absolute', bottom: 0,},
              DotComponent: ({ index, activeIndex, isActive, onPress }) => (
                isActive ?
                <Text onPress={onPress} style={[styles.dotSwipForMon, styles.dotSwipForMonActive]}></Text> : <Text onPress={onPress} style={styles.dotSwipForMon}></Text>
              ),
            }}
          >
            <Pressable style={styles.itemForMom}>
              <ImageBackground source={require('../images/info.jpg')} resizeMode="cover" style={styles.bgImgForMom}>
                  <View style={styles.contForMom}>
                    <View style={styles.wvttForMom}>
                      <Text style={styles.titleForMom} numberOfLines={2}>Jamu For Mom</Text>
                    </View>
                    <View style={styles.descForMom}>
                      <RenderHTML
                        contentWidth={Display.width - 20}
                        source={html_formom}
                        enableExperimentalMarginCollapsing={true}
                        enableExperimentalGhostLinesPrevention={true}
                        renderersProps={renderersProps}
                        tagsStyles={{
                          ul: {listStyleType: 'none', margin: 0, padding: 0,},
                          li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
                          span: {color:'red', },
                          p: {color: Colors.COLOR_WHITE, fontSize: 13, textAlign: 'center', lineHeight: 20, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 5, },
                          img: {maxWidth: (Display.width - 20), }
                        }}
                      />
                    </View>
                    <View style={styles.btnwForMom}>
                      <TouchableOpacity activeOpacity={.8} onPress={() => alert('For Mom')}>
                        <Text style={styles.txtMoreForMom}>Tìm hiểu thêm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </ImageBackground>
            </Pressable>

            <Pressable style={styles.itemForMom}>
              <ImageBackground source={require('../images/info.jpg')} resizeMode="cover" style={styles.bgImgForMom}>
                  <View style={styles.contForMom}>
                    <View style={styles.wvttForMom}>
                      <Text style={styles.titleForMom} numberOfLines={2}>Khỏe đẹp từ gốc - Beauty from inside out banner + text </Text>
                    </View>
                    <View style={styles.descForMom}>
                      <RenderHTML
                        contentWidth={Display.width - 20}
                        source={html_formom}
                        enableExperimentalMarginCollapsing={true}
                        enableExperimentalGhostLinesPrevention={true}
                        renderersProps={renderersProps}
                        tagsStyles={{
                          ul: {listStyleType: 'none', margin: 0, padding: 0,},
                          li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
                          span: {color:'red', },
                          p: {color: Colors.COLOR_WHITE, fontSize: 13, textAlign: 'center', lineHeight: 20, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 5, },
                          img: {maxWidth: (Display.width - 20), }
                        }}
                      />
                    </View>
                    <View style={styles.btnwForMom}>
                      <TouchableOpacity activeOpacity={.8} onPress={() => alert('For Mom')}>
                        <Text style={styles.txtMoreForMom}>Tìm hiểu thêm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </ImageBackground>
            </Pressable>

            <Pressable style={styles.itemForMom}>
              <ImageBackground source={require('../images/info.jpg')} resizeMode="cover" style={styles.bgImgForMom}>
                  <View style={styles.contForMom}>
                    <View style={styles.wvttForMom}>
                      <Text style={styles.titleForMom} numberOfLines={2}>Thành phần NVL tứ các nước Đông Nam Á: dừa </Text>
                    </View>
                    <View style={styles.descForMom}>
                      <RenderHTML
                        contentWidth={Display.width - 20}
                        source={html_formom}
                        enableExperimentalMarginCollapsing={true}
                        enableExperimentalGhostLinesPrevention={true}
                        renderersProps={renderersProps}
                        tagsStyles={{
                          ul: {listStyleType: 'none', margin: 0, padding: 0,},
                          li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
                          span: {color:'red', },
                          p: {color: Colors.COLOR_WHITE, fontSize: 13, textAlign: 'center', lineHeight: 20, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 5, },
                          img: {maxWidth: (Display.width - 20), }
                        }}
                      />
                    </View>
                    <View style={styles.btnwForMom}>
                      <TouchableOpacity activeOpacity={.8} onPress={() => alert('For Mom')}>
                        <Text style={styles.txtMoreForMom}>Tìm hiểu thêm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </ImageBackground>
            </Pressable>

            <Pressable style={styles.itemForMom}>
              <ImageBackground source={require('../images/info.jpg')} resizeMode="cover" style={styles.bgImgForMom}>
                  <View style={styles.contForMom}>
                    <View style={styles.wvttForMom}>
                      <Text style={styles.titleForMom} numberOfLines={2}>Organic (nông trại)</Text>
                    </View>
                    <View style={styles.descForMom}>
                      <RenderHTML
                        contentWidth={Display.width - 20}
                        source={html_formom}
                        enableExperimentalMarginCollapsing={true}
                        enableExperimentalGhostLinesPrevention={true}
                        renderersProps={renderersProps}
                        tagsStyles={{
                          ul: {listStyleType: 'none', margin: 0, padding: 0,},
                          li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
                          span: {color:'red', },
                          p: {color: Colors.COLOR_WHITE, fontSize: 13, textAlign: 'center', lineHeight: 20, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 5, },
                          img: {maxWidth: (Display.width - 20), }
                        }}
                      />
                    </View>
                    <View style={styles.btnwForMom}>
                      <TouchableOpacity activeOpacity={.8} onPress={() => alert('For Mom')}>
                        <Text style={styles.txtMoreForMom}>Tìm hiểu thêm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </ImageBackground>
            </Pressable>

            <Pressable style={styles.itemForMom}>
              <ImageBackground source={require('../images/info.jpg')} resizeMode="cover" style={styles.bgImgForMom}>
                  <View style={styles.contForMom}>
                    <View style={styles.wvttForMom}>
                      <Text style={styles.titleForMom} numberOfLines={2}>Thân thiện môi trường</Text>
                    </View>
                    <View style={styles.descForMom}>
                      <RenderHTML
                        contentWidth={Display.width - 20}
                        source={html_formom}
                        enableExperimentalMarginCollapsing={true}
                        enableExperimentalGhostLinesPrevention={true}
                        renderersProps={renderersProps}
                        tagsStyles={{
                          ul: {listStyleType: 'none', margin: 0, padding: 0,},
                          li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
                          span: {color:'red', },
                          p: {color: Colors.COLOR_WHITE, fontSize: 13, textAlign: 'center', lineHeight: 20, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 5, },
                          img: {maxWidth: (Display.width - 20), }
                        }}
                      />
                    </View>
                    <View style={styles.btnwForMom}>
                      <TouchableOpacity activeOpacity={.8} onPress={() => alert('For Mom')}>
                        <Text style={styles.txtMoreForMom}>Tìm hiểu thêm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </ImageBackground>
            </Pressable>

            <Pressable style={styles.itemForMom}>
              <ImageBackground source={require('../images/info.jpg')} resizeMode="cover" style={styles.bgImgForMom}>
                  <View style={styles.contForMom}>
                    <View style={styles.wvttForMom}>
                      <Text style={styles.titleForMom} numberOfLines={2}>An toàn cho da nhạy cảm bầu, thường</Text>
                    </View>
                    <View style={styles.descForMom}>
                      <RenderHTML
                        contentWidth={Display.width - 20}
                        source={html_formom}
                        enableExperimentalMarginCollapsing={true}
                        enableExperimentalGhostLinesPrevention={true}
                        renderersProps={renderersProps}
                        tagsStyles={{
                          ul: {listStyleType: 'none', margin: 0, padding: 0,},
                          li: {marginBottom: 5, fontSize: 13, lineHeight: 22, color: Colors.COLOR_444, fontWeight: 400, },
                          span: {color:'red', },
                          p: {color: Colors.COLOR_WHITE, fontSize: 13, textAlign: 'center', lineHeight: 20, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 5, },
                          img: {maxWidth: (Display.width - 20), }
                        }}
                      />
                    </View>
                    <View style={styles.btnwForMom}>
                      <TouchableOpacity activeOpacity={.8} onPress={() => alert('For Mom')}>
                        <Text style={styles.txtMoreForMom}>Tìm hiểu thêm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </ImageBackground>
            </Pressable>
          </SwiperWeb>
        </View>
      </View>
    )
  }
  return (
    <></>
  );
};

const styles = StyleSheet.create({
  wrapForMom: {
    /*paddingLeft: 10,
    paddingRight: 10,*/
    // marginBottom: 30,
    height: 0,
  },
  itemForMom: {
    width: Display.width,
  },
  bgImgForMom: {
    paddingVertical: 45,
    paddingHorizontal: 10,
    width: Display.width - 20,
    height: Display.width,
  },
  wvttForMom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  titleForMom: {
    textAlign: 'center',
    fontSize: 25,
    lineHeight: 37,
    color: Colors.COLOR_WHITE,
    fontFamily: Fonts.FONT_OSWALD_MEDIUM
  },
  descForMom: {
    height: 240,
    overflow: 'hidden',
  },
  btnwForMom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  txtMoreForMom: {
    color: Colors.COLOR_WHITE,
    fontSize: 14,
    lineHeight: 22,
    borderWidth: 1,
    borderColor: Colors.COLOR_WHITE,
    paddingVertical: 5,
    paddingHorizontal: 15,
    textTransform: 'uppercase',
    fontFamily: Fonts.FONT_OSWALD_MEDIUM,
  },
  dotSwipForMon: {
    width: 11,
    height: 11,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.COLOR_WHITE,
    marginLeft: 10,
    marginRight: 10,
  },
  dotSwipForMonActive: {
    backgroundColor: Colors.COLOR_WHITE,
  },
});

export default ForMom;
