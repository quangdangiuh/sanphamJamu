import React from 'react';
import {Linking, Text} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NumericFormat } from 'react-number-format';

import PlatformOS from './PlatformOS';

/**
 * [description]
 * @param  {[type]} number [description]
 * @return {[type]}        [description]
 */
const onClickCallPhone = (number) => {
	let phoneNumber = '';
	if (PlatformOS === 'android') {
		phoneNumber = `tel:${number}`;
	} else {
		phoneNumber = `telprompt:${number}`;
	}

	Linking.openURL(phoneNumber);
};

/**
 * [description]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
const openLinkWeb = (url) => {
	if (url !== undefined && url !== null) {
      Linking.openURL(url);
    }
    return false;
};
/*async function openLinkWeb(url) {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
};*/

/**
 * [description]
 * @param  {[type]} title    [description]
 * @param  {Number} max      [description]
 * @param  {Number} length   [description]
 * @param  {String} last_str [description]
 * @return {[type]}          [description]
 */
const cutString = (title, max = 2000, length = 90, last_str = '...') => {
	if(title.length > max){
		return title.slice(0, length)+last_str;
	}
	return title;
};

/**
 * [description]
 * @param  {[type]} price  [description]
 * @param  {String} type   [description]
 * @param  {String} suffix [description]
 * @param  {String} style  [description]
 * @return {[type]}        [description]
 */
const formatNumber = (price, type = 'text', suffix = 'đ', style = '') => {
	return (
		<NumericFormat
	        value={price}
	        displayType={type}
	        thousandSeparator={true}
	        suffix={suffix}
	        renderText={(value) => (
	          <Text style={style}>
	            {value}
	          </Text>
	        )}
	    />
	);
}

/**
 * [description]
 * @param  {[type]} scrollRef [description]
 * @return {[type]}           [description]
 */
const backToTop = (scrollRef) => {
	scrollRef.current.scrollTo({
      x: 0,
      y: 0,
      animated: true
    });
}

/**
 * [description]
 * @param  {[type]} name [description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
const saveDataToStorage = (name, data) => {
  AsyncStorage.setItem(
    name,
    JSON.stringify({
      data,
    }),
  );
}

/**
 * [description]
 * @param  {[type]} name [description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
const removeDataToStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  }
  catch(e) {
    console.log('removeDataToStorage: ' + e);
  }
}

/**
 * [description]
 * @param  {Number} min [description]
 * @param  {Number} max [description]
 * @return {[type]}     [description]
 */
const getRandomValue = (min = 1, max = 100) => {
  return min + Math.floor(Math.random() * (max-min));
}

export default {
	onClickCallPhone,
	openLinkWeb,
	cutString,
	formatNumber,
	backToTop,
	saveDataToStorage,
	removeDataToStorage,
	getRandomValue
};