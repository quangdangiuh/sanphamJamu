import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import YoutubePlayer from "react-native-youtube-iframe";
import SwiperWeb from "react-native-web-swiper";

import {Colors} from '../../../contants';
import {Display} from '../../../utils';

const YoutubeAbout = () => {
  const [isLoadPage, setisLoadPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoadPage(true);
    }, 500);
  }, []);

  if(isLoadPage){
    return (
      <View style={styles.wrapYoutube}>
        <View style={{width: Display.width - 20, height: 300}}>
          <SwiperWeb
            loop={true}
            timeout={10}
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
                <Text onPress={onPress} style={[styles.dotSwipYoutube, styles.dotSwipYoutubeActive]}></Text> : <Text onPress={onPress} style={styles.dotSwipYoutube}></Text>
              ),
            }}
          >
            <Pressable style={styles.itemYoutube}>
              <YoutubePlayer height={250} videoId={"aP0hGe4VPVU"} />
            </Pressable>

            <Pressable style={styles.itemYoutube}>
              <YoutubePlayer height={250} videoId={"xr4jK2S1G6g"} />
            </Pressable>

            <Pressable style={styles.itemYoutube}>
              <YoutubePlayer height={250} videoId={"AkWHJTNwlFs"} />
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
  wrapYoutube: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  dotSwipYoutube: {
    width: 11,
    height: 11,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.COLOR_BLACK,
    marginLeft: 10,
    marginRight: 10,
  },
  dotSwipYoutubeActive: {
    backgroundColor: Colors.COLOR_BLACK,
  }
});

export default YoutubeAbout;
