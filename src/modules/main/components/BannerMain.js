import React, {useRef} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

// import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';

// import CustomCarousel from 'carousel-with-pagination-rn';
import Swiper from 'react-native-swiper';

import {Colors, Images, Fonts} from '../../../contants';
import {Display} from '../../../utils';

/*const dataBannerMain = [
  {
    id: 1,
    img: require('../images/banner.jpg'),
    title: 'Element 1',
    description: 'Pressable and animated pagination',
    price: 'Fast',
  },
  {
    id: 2,
    img: require('../images/banner.jpg'),
    title: 'Element 2',
    description: 'Full customization for carousel',
    price: 'Simple',
  },
  {
    id: 3,
    img: require('../images/banner.jpg'),
    title: 'Element 3',
    description: 'Accessible for VoiceOver',
    price: 'Efficient',
  },
];*/

const BannerMain = () => {
  /*let bannerMainRef = useRef(null);

  const handleNextBm = () => {
    bannerMainRef.current?.showNextItem();
  };
  const handlePreviousBm = () => {
    bannerMainRef.current?.showPreviousItem();
  };*/

  return (
    // Banner Main [TYPE: 1]
    // <View style={styles.wrapBannerMain}>
    //   <CustomCarousel
    //     ref={bannerMainRef}
    //     data={dataBannerMain}
    //     renderItem={({item}) => {
    //       return (
    //         // Item
    //         <TouchableOpacity activeOpacity={.8} style={styles.wbnm_vimg} onPress={() => alert('Banner')}>
    //           <Image
    //             source={item.img}
    //             style={styles.image}
    //             resizeMode='contain'
    //           />
    //         </TouchableOpacity>
    //       );
    //     }}
    //     indicatorWidth={[15,25,15]}
    //     indicatorHeight={[7,7,7]}
    //     indicatorHorizontalPadding={0}
    //     paginationContainerStyle={styles.panStyleBm}
    //   />

    //   <View style={styles.wrapPrevNextBm}>
    //     <TouchableOpacity onPress={handlePreviousBm}>
    //       <MaterialIconsIcon name="navigate-before" style={[styles.iconBm, styles.iconPrevBm]} />
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={handleNextBm}>
    //       <MaterialIconsIcon name="navigate-next" style={[styles.iconBm, styles.iconNextBm]} />
    //     </TouchableOpacity>
    //   </View>
    // </View>

    <Swiper
      style={styles.swiperBannerMain}
      width={Display.width}
      height={parseInt(Display.width / 1.7)}
      autoplay={true}
      autoplayTimeout={5}
      showsButtons={true}
      nextButton=<MaterialIconsIcon name="navigate-next" style={[styles.iconBm, styles.iconPrevBm]} />
      prevButton=<MaterialIconsIcon name="navigate-before" style={[styles.iconBm, styles.iconPrevBm]} />
      showsPagination={false}
      activeDotColor={Colors.DEFAULT_GREEN}
      activeDotStyle={{width: 12}}
      onIndexChanged={(index) => {}}
    >
      <View style={styles.swpItemBm}>
        <TouchableOpacity activeOpacity={.9} style={styles.wbnm_vimg} onPress={() => alert('Banner 1')}>
          <Image source={require('../images/banner.jpg')} style={styles.image} resizeMode='contain' />
        </TouchableOpacity>
      </View>
      <View style={styles.swpItemBm}>
        <TouchableOpacity activeOpacity={.9} style={styles.wbnm_vimg} onPress={() => alert('Banner 2')}>
          <Image source={require('../images/banner.jpg')} style={styles.image} resizeMode='contain' />
        </TouchableOpacity>
      </View>
      <View style={styles.swpItemBm}>
        <TouchableOpacity activeOpacity={.9} style={styles.wbnm_vimg} onPress={() => alert('Banner 3')}>
          <Image source={require('../images/banner.jpg')} style={styles.image} resizeMode='contain' />
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapBannerMain: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 0,
  },
  wbnm_vimg: {
    width: Display.width
  },
  image: {
    width: Display.width,
    height: parseInt(Display.width / 1.7),
  },
  wrapPrevNextBm: {
    flexDirection: 'row',
    width: Display.width,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: (parseInt(Display.width / 1.9) / 2),
  },
  iconBm: {
    fontSize: 30,
  },
  panStyleBm: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  swiperBannerMain: {
  },
  swpItemBm: {
  },
});

export default BannerMain;
