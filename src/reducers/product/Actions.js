import {Funs} from '../../utils';
import * as Constant from "./Constant";

/**
 * [description]
 * @return {[type]} [description]
 */
export const changeShowFilter = () => {
  return async (dispatch) => {
    dispatch({
      type: Constant.SHOW_FILTER,
    });
  };
};
