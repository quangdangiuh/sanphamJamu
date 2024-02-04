import * as Constant from "./Constant";

/**
 * [description]
 * @return {[type]} [description]
 */
export const checkIsLogin = (isLogin = false) => {
  return async (dispatch) => {
    dispatch({
      type: Constant.IS_LOGIN,
      isLogin: isLogin
    });
  };
};
