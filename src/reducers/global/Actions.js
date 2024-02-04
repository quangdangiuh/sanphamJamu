import AsyncStorage from '@react-native-async-storage/async-storage';

import {Funs} from '../../utils';
import * as Constant from "./Constant";

/**
 * [description]
 * @return {[type]} [description]
 */
export const firstOpen = () => {
  return async (dispatch) => {
    Funs.saveDataToStorage(Constant.FIRST_OPEN, true);
    
    dispatch({
      type: Constant.FIRST_OPEN,
    });
  };
};

/**
 * [description]
 * @return {[type]} [description]
 */
export const checkFirstOpen = () => {
  return async (dispatch) => {
    try {
      const getDataOpen = await AsyncStorage.getItem(Constant.FIRST_OPEN);
      const parsedData = await JSON.parse(getDataOpen);

      dispatch({
        type: Constant.CHECK_FIRST_OPEN,
        isFirstOpen: parsedData.data
      });
    } catch (e) {
      dispatch({
        type: Constant.LOAD_APP
      });

      console.log('dispatch checkFirstOpen Fail: ' + e);
    }
  };
};

/**
 * [description]
 * @return {[type]} [description]
 */
export const checkLoadSplash = () => {
  return async (dispatch) => {
    dispatch({
      type: Constant.LOAD_SPLASH,
    });
  };
};

/**
 * [description]
 * @return {[type]} [description]
 */
export const changeShowCartSidebar = () => {
  return async (dispatch) => {
    dispatch({
      type: Constant.SHOW_CART_SIDEBAR,
    });
  };
};
