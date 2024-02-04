import * as Constant from "./Constant";

const initialState = {
  isLogin: false,
};

export const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.IS_LOGIN: {
      return {
        ...state,
        isLogin: action.isLogin,
      };
    }
    
    default:
      return state;
  }
};
