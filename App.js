/**
 * JAMU
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
//Reducer
import {
  globalReducer,
  productReducer,
  memberReducer,
} from './src/reducers';

//Navigator
import RootNavigator from './src/modules/navigation';

const rootReducer = combineReducers({
  global: globalReducer,
  product: productReducer,
  member: memberReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
const App = () => {
  return (
    <Provider store={store}>
     <RootNavigator />
    </Provider>
  );
};

export default App;
