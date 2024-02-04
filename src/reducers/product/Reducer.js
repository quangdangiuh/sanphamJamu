import * as Constant from "./Constant";

const initialState = {
  showListFilter: false,
};

export const productReducer = (state = initialState, action) => {
  const showListFilter = state.showListFilter;

  switch (action.type) {
    case Constant.SHOW_FILTER: {
      return {
        ...state,
        showListFilter: !showListFilter,
      };
    }
    
    default:
      return state;
  }
};
