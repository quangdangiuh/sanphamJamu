import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';

import Swiper from 'react-native-swiper';

import {Colors, Fonts} from '../../../contants';
import {Display} from '../../../utils';

const SliderDetail = ({data}) => {
  return (
    <Swiper
      style={styles.swiperBannerMain}
      width={Display.width - 20}
      height={parseInt((Display.width - 20) * 0.7)}
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
      
      {
        data.map(function(item, index) {
          return (
            <View key={index} style={styles.swpItemBm}>
              <Image source={item.img} style={styles.image} resizeMode='contain' />
            </View>
          )
        })
      }

    </Swiper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Display.width - 20,
    height: parseInt((Display.width - 20) * 0.7),
  },
  iconBm: {
    fontSize: 30,
  },
  swiperBannerMain: {
  },
  swpItemBm: {
  },
});

export default SliderDetail;
