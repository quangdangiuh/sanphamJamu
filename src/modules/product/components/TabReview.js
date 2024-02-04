import React, { useState } from 'react';
import {Animated, Easing, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import FontAIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {Colors, Fonts} from '../../../contants';
import {Display} from '../../../utils';

// BOX
import {Pagination} from '../../../global/block';
import {GalleryReview} from './box';

const TabReview = ({title, handleSnapReviewShow}) => {
  const [isShowTab, setisShowTab] = useState(false);

  const [openGallery, setopenGallery] = useState(false);
  const [idGallery, setidGallery] = useState(0);
  const [pos, setPos] = useState(0);

  const handleReviewShow = (type, idRely) => {
    handleSnapReviewShow(type, idRely);
  }

  const handleShowGallery = (value, id, pos) => {
    setidGallery(id);
    setPos(pos);
    setopenGallery(value);
  }

  return (
    // <LightBoxProvider>
      <View style={styles.TabReview}>
        <TouchableOpacity activeOpacity={.8} onPress={() => {setisShowTab(!isShowTab)}} style={styles.tabTitle}>
          <Text style={styles.txtTitle}>{title}</Text>
          <FontAIcon name={!isShowTab ? 'angle-down' : 'angle-up'} style={styles.iconTitle} />
        </TouchableOpacity>
        <Animated.View
          style={
            (isShowTab) ?
            [
              styles.tabDesc,
              {
                height: 'auto',
                paddingTop: 20,
                paddingBottom: 20,
              }
            ] :

            [
              styles.tabDesc,
              {
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
              }
            ]
        }>

          <View style={styles.vwReviewDashbroad}>
            <View style={styles.vwrvTitle}>
              <Text style={styles.txtrvTitle}>Đánh giá sản phẩm:</Text>
            </View>
            <View style={styles.vwrvStarDasb}>
              <View>
                <Text style={styles.txtnVote}>4.5/5</Text>
              </View>
              <View style={styles.txtnStar}>
                <FontAIcon name="star" style={styles.iconStar} />
                <FontAIcon name="star" style={styles.iconStar} />
                <FontAIcon name="star" style={styles.iconStar} />
                <FontAIcon name="star" style={styles.iconStar} />
                <FontAIcon name="star-o" style={styles.iconStar} />
              </View>
              <View>
                <Text style={styles.txtHasVote}>(185 đánh giá)</Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnShowReview} onPress={() => {handleReviewShow('review')}}>
              <Text style={styles.nameReview}>Gửi đánh giá</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.vwListReviewCont}>
            {/*Item*/}
            <View style={styles.vwRwItem}>
              <View style={styles.vwRwInfo}>
                <Text style={styles.txtrvName}>Nguyễn Huyền</Text>
                <Text style={styles.txtrvDate}>21/10/2021</Text>
                <View style={styles.vwrvStar}>
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star-o" style={styles.iconStar} />
                </View>
                <View style={styles.vwrvCont}>
                  <Text style={styles.txtrvCont}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </Text>
                </View>
                <View style={styles.vwrvImages}>
                  <TouchableOpacity activeOpacity={.8} onPress={() => {handleShowGallery(true, 1, 0)}} style={styles.vwImgrv}>
                    <Image source={require('../images/ban1.jpg')} style={styles.imgrv} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={.8} onPress={() => {handleShowGallery(true, 1, 1)}} style={styles.vwImgrv}>
                    <Image source={require('../images/rvimg1.png')} style={styles.imgrv} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={.8} onPress={() => {handleShowGallery(true, 1, 2)}} style={styles.vwImgrv}>
                    <Image source={require('../images/rvimg1.png')} style={styles.imgrv} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={.8} onPress={() => {handleShowGallery(true, 1, 3)}} style={styles.vwImgrv}>
                    <Image source={require('../images/rvimg1.png')} style={styles.imgrv} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={.8} onPress={() => {handleShowGallery(true, 1, 4)}} style={styles.vwImgrv}>
                    <Image source={require('../images/ban1.jpg')} style={styles.imgrv} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={.8} onPress={() => {handleShowGallery(true, 1, 5)}} style={styles.vwImgrv}>
                    <Image source={require('../images/rvimg1.png')} style={styles.imgrv} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={.8} onPress={() => {handleShowGallery(true, 1, 6)}} style={styles.vwImgrv}>
                    <Image source={require('../images/ban1.jpg')} style={styles.imgrv} />
                  </TouchableOpacity>
                </View>
                <View style={styles.vwrvTool}>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnReply} onPress={() => {handleReviewShow('reply', 1)}}>
                      <Text style={styles.txtReply}>Trả lời</Text>
                      <EntypoIcon name="reply" style={styles.iconReply} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnLike} onPress={() => {alert("Like")}}>
                      <View>
                        <Text style={styles.txtLike}>Hữu ích ?</Text>
                      </View>
                      <View style={styles.vwicLike}>
                        <FontAIcon name="thumbs-up" style={styles.iconThumbsUp} />
                        <Text style={styles.txtrvCount}>0</Text>
                      </View>
                    </TouchableOpacity>
                </View>
              </View>

              {/*Content Child*/}
              <View style={styles.vwRwContChild}>
                {/*ItemChild*/}
                <View style={styles.vwRwItemChild}>
                  <Text style={styles.txtrvName}>Nguyễn Huyền</Text>
                  <View style={styles.vwrvCont}>
                    <Text style={styles.txtrvCont}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Text>
                  </View>
                  <View style={styles.vwrvTool}>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnLike} onPress={() => {alert("Like")}}>
                      <View>
                        <Text style={styles.txtLike}>Hữu ích ?</Text>
                      </View>
                      <View style={styles.vwicLike}>
                        <FontAIcon name="thumbs-up" style={styles.iconThumbsUp} />
                        <Text style={styles.txtrvCount}>0</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                {/*ItemChild*/}
                <View style={styles.vwRwItemChild}>
                  <Text style={styles.txtrvName}>Nguyễn Huyền</Text>
                  <View style={styles.vwrvCont}>
                    <Text style={styles.txtrvCont}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Text>
                  </View>
                  <View style={styles.vwrvTool}>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnLike} onPress={() => {alert("Like")}}>
                      <View>
                        <Text style={styles.txtLike}>Hữu ích ?</Text>
                      </View>
                      <View style={styles.vwicLike}>
                        <FontAIcon name="thumbs-up" style={styles.iconThumbsUp} />
                        <Text style={styles.txtrvCount}>0</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {/*Item*/}
            <View style={styles.vwRwItem}>
              <View style={styles.vwRwInfo}>
                <Text style={styles.txtrvName}>Nguyễn Huyền</Text>
                <Text style={styles.txtrvDate}>21/10/2021</Text>
                <View style={styles.vwrvStar}>
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star-o" style={styles.iconStar} />
                </View>
                <View style={styles.vwrvCont}>
                  <Text style={styles.txtrvCont}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </Text>
                </View>
                <View style={styles.vwrvTool}>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnReply} onPress={() => {handleReviewShow('reply', 1)}}>
                      <Text style={styles.txtReply}>Trả lời</Text>
                      <EntypoIcon name="reply" style={styles.iconReply} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnLike} onPress={() => {alert("Like")}}>
                      <View>
                        <Text style={styles.txtLike}>Hữu ích ?</Text>
                      </View>
                      <View style={styles.vwicLike}>
                        <FontAIcon name="thumbs-up" style={styles.iconThumbsUp} />
                        <Text style={styles.txtrvCount}>0</Text>
                      </View>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            {/*Item*/}
            <View style={[styles.vwRwItem, styles.vwRwItemLast]}>
              <View style={styles.vwRwInfo}>
                <Text style={styles.txtrvName}>Nguyễn Huyền</Text>
                <Text style={styles.txtrvDate}>21/10/2021</Text>
                <View style={styles.vwrvStar}>
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star" style={styles.iconStar} />
                  <FontAIcon name="star-o" style={styles.iconStar} />
                </View>
                <View style={styles.vwrvCont}>
                  <Text style={styles.txtrvCont}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </Text>
                </View>
                <View style={styles.vwrvImages}>
                  <TouchableOpacity activeOpacity={.8} onPress={() => {handleShowGallery(true, 1, 0)}} style={styles.vwImgrv}>
                    <Image source={require('../images/ban1.jpg')} style={styles.imgrv} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={.8} onPress={() => {handleShowGallery(true, 1, 1)}} style={styles.vwImgrv}>
                    <Image source={require('../images/rvimg1.png')} style={styles.imgrv} />
                  </TouchableOpacity>
                </View>
                <View style={styles.vwrvTool}>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnReply} onPress={() => {handleReviewShow('reply', 1)}}>
                      <Text style={styles.txtReply}>Trả lời</Text>
                      <EntypoIcon name="reply" style={styles.iconReply} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnLike} onPress={() => {alert("Like")}}>
                      <View>
                        <Text style={styles.txtLike}>Hữu ích ?</Text>
                      </View>
                      <View style={styles.vwicLike}>
                        <FontAIcon name="thumbs-up" style={styles.iconThumbsUp} />
                        <Text style={styles.txtrvCount}>0</Text>
                      </View>
                    </TouchableOpacity>
                </View>
              </View>

              {/*Content Child*/}
              <View style={styles.vwRwContChild}>
                {/*ItemChild*/}
                <View style={styles.vwRwItemChild}>
                  <Text style={styles.txtrvName}>Nguyễn Huyền</Text>
                  <View style={styles.vwrvCont}>
                    <Text style={styles.txtrvCont}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Text>
                  </View>
                  <View style={styles.vwrvTool}>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnLike} onPress={() => {alert("Like")}}>
                      <View>
                        <Text style={styles.txtLike}>Hữu ích ?</Text>
                      </View>
                      <View style={styles.vwicLike}>
                        <FontAIcon name="thumbs-up" style={styles.iconThumbsUp} />
                        <Text style={styles.txtrvCount}>0</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                {/*ItemChild*/}
                <View style={styles.vwRwItemChild}>
                  <Text style={styles.txtrvName}>Nguyễn Huyền</Text>
                  <View style={styles.vwrvCont}>
                    <Text style={styles.txtrvCont}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Text>
                  </View>
                  <View style={styles.vwrvTool}>
                    <TouchableOpacity activeOpacity={.8} style={styles.btnLike} onPress={() => {alert("Like")}}>
                      <View>
                        <Text style={styles.txtLike}>Hữu ích ?</Text>
                      </View>
                      <View style={styles.vwicLike}>
                        <FontAIcon name="thumbs-up" style={styles.iconThumbsUp} />
                        <Text style={styles.txtrvCount}>0</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <Pagination />

          {openGallery && <GalleryReview idGallery={idGallery} pos={pos} handleShowGallery={handleShowGallery} />}

        </Animated.View>
      </View>
      // </LightBoxProvider>
  );
};

const styles = StyleSheet.create({
  TabReview: {
    marginBottom: 0,
  },
  tabTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: Colors.COLOR_EEE,
  },
  txtTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.COLOR_333,
    fontFamily: Fonts.FONT_SARABUN_BOLD,
    textTransform: 'uppercase',
  },
  iconTitle: {
    fontSize: 16,
    color: Colors.COLOR_333,
  },
  tabDesc: {
    overflow: 'hidden',
    paddingLeft: 10,
    paddingRight: 10,
  },
  vwReviewDashbroad: {
    backgroundColor: Colors.COLOR_F6F6F6,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  vwrvTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  txtrvTitle: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.COLOR_333,
    fontFamily: Fonts.FONT_SARABUN_BOLD,
  },
  vwrvStarDasb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  txtnVote: {
    fontSize: 25,
    lineHeight: 33,
    marginRight: 10,
    color: Colors.COLOR_333,
    fontFamily: Fonts.FONT_SARABUN_BOLD,
  },
  txtnStar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  iconStar: {
    marginRight: 2,
    color: Colors.COLOR_333,
    fontSize: 12,
  },
  txtHasVote: {
    fontSize: 13,
    lineHeight: 21,
    color: Colors.COLOR_999,
  },
  btnShowReview: {
    alignItems: 'center',
    backgroundColor: Colors.COLOR_BLACK,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  nameReview: {
    color: Colors.COLOR_WHITE,
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: Fonts.FONT_SARABUN_BOLD,
  },
  vwListReviewCont: {
  },
  vwRwItem: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  vwRwItemLast: {
    marginBottom: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
  },
  vwRwInfo: {
    marginBottom: 5,
  },
  txtrvName: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    color: Colors.COLOR_BLACK,
    marginBottom: 2,
  },
  txtrvDate: {
    fontSize: 12,
    lineHeight: 20,
    color: Colors.COLOR_999,
    marginBottom: 5,
  },
  vwrvStar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  vwrvCont: {
    marginBottom: 10,
  },
  vwrvImages: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  vwImgrv: { 
    width: (Display.width) / 6,
    height: (Display.width) / 6,
    marginTop: 0,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  imgrv: {
    width: (Display.width) / 6,
    maxHeight: (Display.width) / 6,
    resizeMode: 'contain',
  },
  txtrvCont: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.COLOR_666,
  },
  vwrvTool: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btnReply: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: 20,
  },
  txtReply: {
    fontSize: 12,
    color: Colors.COLOR_BLACK,
    marginRight: 5,
  },
  iconReply: {
    fontSize: 12,
    color: Colors.COLOR_BLACK,
  },
  btnLike: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  txtLike: {
    color: Colors.COLOR_BLACK,
    fontSize: 12,
    marginRight: 5,
  },
  iconThumbsUp: {
    color: Colors.COLOR_BLACK,
    marginRight: 5,
    fontSize: 12,
  },
  txtrvCount: {
    color: Colors.COLOR_BLACK,
    fontSize: 12,
  },
  vwicLike: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  vwRwContChild: {
    marginTop: 10,
  },
  vwRwItemChild: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom :1,
    backgroundColor: Colors.COLOR_F5F5F5,
  },
});

export default TabReview;
