import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import {Colors, Images, Fonts} from '../../contants';
import {Display} from '../../utils';

//redux
import { useSelector, useDispatch } from "react-redux";
//Action
import { firstOpen } from '../../reducers';

const data = [
  {
    id: 1,
    title: 'Sản phẩm thon gọn',
    text: 'Cho vóc dáng chuẩn Sline',
    color: '#d7f7d7',
    image: require('./images/Onboard1.png'),
  },
  {
    id: 2,
    title: 'Sản phẩm mẹ bầu & sau sinh',
    text: 'Mẹ sinh, bé khỏe',
    color: '#cbe3fd',
    image: require('./images/Onboard2.png'),
  },
  {
    id: 3,
    title: 'Sản phẩm thiên nhiên',
    text: 'Cho vẻ đẹp thuần khiết',
    color: '#fff5fb',
    image: require('./images/Onboard3.png'),
  },
];

const Welcome = ({navigation}) => {
  const dispatch = useDispatch();
  /*useEffect(() => {
    dispatch(firstOpen());
  }, []);*/

  const [numItemSlide, setnumItemSlide] = useState(0);

  const renderItem = ({item}) => {
    if(numItemSlide % 2 == 0){
      return (
        <View style={[styles.slide, {backgroundColor: item.color}]}>
          <Animatable.Image animation="slideInDown" duration={2500} source={item.image} style={styles.image} />
          <Animatable.View animation="fadeInUp" duration={1500} delay={1000}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </Animatable.View>
        </View>
      );
    }else{
      return (
          <View style={[styles.slide, {backgroundColor: item.color}]}>
            <Animatable.Image animation="slideInUp" duration={2500} source={item.image} style={styles.image} />
            <Animatable.View animation="fadeInDown" duration={1500} delay={1000}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </Animatable.View>
          </View>
      );
    }
  };

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Tiếp theo</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Quay lại</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <LinearGradient
        colors={['#8CB0FF', '#D5E0F7']}
        style={styles.linearGradient}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Hoàn tất</Text>
      </LinearGradient>
    );
  };

  const handleChangeSlide = (index, lastIndex) => {
    setnumItemSlide(index);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={item => item.id}
        renderItem={renderItem}
        data={data}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        onSlideChange={handleChangeSlide}
        onDone={() => {
            // navigation.replace('DrawerNavigator');
            dispatch(firstOpen());
          }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DEFAULT_GREEN2,
  },
  image: {
    width: Display.setWidth(60),
    height: Display.setHeight(45),
    marginBottom: 40
  },
  title: {
    fontSize: 26,
    color: Colors.COLOR_C9C9C9,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: Fonts.FONT_OSWALD_BOLD,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    color: Colors.COLOR_888,
    textAlign: 'center',
    fontFamily: Fonts.FONT_MTD,
    marginHorizontal: 20,
    marginTop: 10,
  },
  dotStyle: {
    marginTop: -10,
    backgroundColor: Colors.DEFAULT_GREEN2,
  },
  activeDotStyle: {
    marginTop: -10,
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  rightTextWrapper: {
    width: 80,
    height: 40,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  rightText: {
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.FONT_MTD,
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 80,
    height: 40,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftText: {
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.FONT_MTD,
    fontSize: 14,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 5,
    borderRadius: 25,
    marginTop: -5,
    marginRight: -40,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: Fonts.FONT_MTD,
    textAlign: 'center',
    color: Colors.COLOR_WHITE,
  },
});

export default Welcome;
