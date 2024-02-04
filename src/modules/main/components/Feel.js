import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';

import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';

import Carousel from 'react-native-snap-carousel-deprecated-prop-types';

import {Colors, Fonts} from '../../../contants';
import {Display} from '../../../utils';

// SP BestSeller
const dataFeel = [
  {
    id: 1,
    title: 'Hotmom Minh Hà',
    img: require('../images/tesava.jpg'),
    desc: 'JAMU đã giúp Hà thật tràn đầy năng lượng để sẵn sàng cho hành trình thiêng liêng và hạnh phúc nhất của mình.'
  },
  {
    id: 2,
    title: 'Hotmom Hà Tăng',
    img: require('../images/tesava.jpg'),
    desc: 'JAMU đã giúp Hà thật tràn đầy năng lượng để sẵn sàng cho hành trình thiêng liêng và hạnh phúc nhất của mình.'
  },
  {
    id: 3,
    title: 'Hotmom Minh Hà',
    img: require('../images/tesava.jpg'),
    desc: 'JAMU đã giúp Hà thật tràn đầy năng lượng để sẵn sàng cho hành trình thiêng liêng và hạnh phúc nhất của mình.'
  },
  {
    id: 4,
    title: 'Hotmom Hà Tăng',
    img: require('../images/tesava.jpg'),
    desc: 'JAMU đã giúp Hà thật tràn đầy năng lượng để sẵn sàng cho hành trình thiêng liêng và hạnh phúc nhất của mình.'
  },
  {
    id: 5,
    title: 'Hotmom Minh Hà',
    img: require('../images/tesava.jpg'),
    desc: 'JAMU đã giúp Hà thật tràn đầy năng lượng để sẵn sàng cho hành trình thiêng liêng và hạnh phúc nhất của mình.'
  },
  {
    id: 6,
    title: 'Hotmom Hà Tăng',
    img: require('../images/tesava.jpg'),
    desc: 'JAMU đã giúp Hà thật tràn đầy năng lượng để sẵn sàng cho hành trình thiêng liêng và hạnh phúc nhất của mình.'
  }
];
const countBestData = dataFeel.length;

const Feel = () => {
  const [isLoadPage, setisLoadPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoadPage(true);
    }, 500);
  }, []);

  const htmlItem = ({item, index}) => {
    return (
      <Pressable>
        <ImageBackground source={item.img} resizeMode="cover" style={styles.vwItem}>
          <View style={styles.vwCont}>
            <View style={styles.vDesc}>
              <Text style={styles.txtDesc}>{item.desc}</Text>
            </View>
            <View style={styles.vTitle}>
              <MaterialIconsIcon name="horizontal-rule" style={[styles.iconHz, {marginRight: 10}]} />
              <Text style={styles.txtTitle} numberOfLines={1}>{item.title}</Text>
              <MaterialIconsIcon name="horizontal-rule" style={[styles.iconHz, {marginLeft: 10}]} />
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    );
  }

  if(isLoadPage){
    return (
      <View style={styles.wrapFeel}>
        <Carousel
          loop={true}
          autoplay={true}
          autoplayDelay={1500}
          autoplayInterval={3000}
          data={dataFeel}
          renderItem={htmlItem}
          sliderWidth={Display.width - 20}
          itemWidth={Display.width - 150}
        />
      </View>
    )
  }
  return (
    <></>
  );
};

const styles = StyleSheet.create({
  wrapFeel: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30
  },
  vwItem: {
    height: Display.height / 2,
    backgroundColor: Colors.DEFAULT_GREEN2,
  },
  vwCont: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
  },
  vDesc: {

  },
  txtDesc: {
    fontSize: 13,
    lineHeight: 20,
    color: Colors.COLOR_333,
  },
  vTitle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  txtTitle: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.COLOR_333,
    fontFamily: Fonts.FONT_SARABUN_LIGHTITALIC
  },
  iconHz: {
    width: 40,
    height: 1.5,
    backgroundColor: Colors.COLOR_595959,
  }
});

export default Feel;
