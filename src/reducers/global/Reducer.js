import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Constant from "./Constant";

const initialState = {
  isFirstOpen: false,
  isLoadApp: false,
  isSplash: true,
  showListCart: false,
};

export const globalReducer = (state = initialState, action) => {
  const showListCart = state.showListCart;

  switch (action.type) {
    case Constant.FIRST_OPEN: {
      return {
        ...state,
        isFirstOpen: true,
      };
    }

    case Constant.CHECK_FIRST_OPEN: {
      return {
        ...state,
        isFirstOpen: action.isFirstOpen,
        isLoadApp: true,
      };
    }

    case Constant.LOAD_APP: {
      return {
        ...state,
        isLoadApp: true,
      };
    }

    case Constant.LOAD_SPLASH: {
      return {
        ...state,
        isSplash: false,
      };
    }

    case Constant.SHOW_CART_SIDEBAR: {
      return {
        ...state,
        showListCart: !showListCart,
      };
    }
    
    default:
      return state;
  }
};
