import React, { useEffect, useState, useRef} from 'react';
import {Animated, Easing, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAIcon from 'react-native-vector-icons/FontAwesome';

//redux
import { useSelector, useDispatch } from "react-redux";
//Action
import { changeShowFilter } from '../../../../reducers';

import {Colors, Fonts} from '../../../../contants';
import {Display} from '../../../../utils';

import ItemFilter from './ItemFilter';
import {dataFilter} from '../../data';

const SlideFlter = ({navigation}) => {
  const showListFilter = useSelector((state) => state.product.showListFilter);
  const dispatch = useDispatch();

  const translateXAnimaFilter = useRef(new Animated.Value(Display.width)).current;
  const opacityAnimaFilter = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateXAnimaFilter, {
      toValue: (showListFilter) ? 0 : -Display.width,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityAnimaFilter, {
      toValue: (showListFilter) ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [showListFilter]);

  const initialDataId = [
    {type: "category", multi: 1, data: []},
    {type: "price", multi: 0, data: []},
    {type: "brand", multi: 1, data: []},
    {type: "filter", multi: 1, data: []},
  ];
  const [dataId, setdataId] = useState(initialDataId);

  const hasExistInData = (id, type) => {
    let index = -1;

    dataId.map((data) => {
      if (data.type == type) {
        if(data.data){
          data.data.map((value, pos) => {
            if(value === id){
              index = pos;
              return;
            }
          })
        }
      }
    });
    return index;
  }

  const hasCheckItemFilter = (id, type) => {
    let newDataId = dataId;

    if(hasExistInData(id, type) >= 0){
      newDataId = dataId.map(data => {
        if (data.type !== type) {
          return {
            ...data,
          };
        }else{
          let data_new = data.data;
          if(data.data){
            data_new = data.data.filter(value => {
              return value !== id;
            });
          }

          return {
            ...data,
            data: data_new
          };
        }
      });
    }else{
      newDataId = dataId.map(data => {
        if (data.type !== type) {
          return {
            ...data,
          };
        }else{
          let data_new = (data.multi === 0) ? [] : data.data;
          data_new.push(id);

          return {
            ...data,
            data: data_new
          };
        }
      });
    }

    // UPDATE DATA-ID
    setdataId(newDataId);
  }

  /**
   * Handle Buttom Apply - Cancel
   * [description]
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  const handleApplyOrCancel = (action) => {
    if(action === 'APPLY'){
      console.log(JSON.stringify(dataId));
      alert(action);
    }else if(action === 'CANCEL'){
      setdataId(initialDataId);
    }
    dispatch(changeShowFilter());
  }

  return (
    <Animated.View style={[styles.vwSlideFilter, {opacity: opacityAnimaFilter, transform: [{translateX: translateXAnimaFilter}]}]}>
      
      {/*Left*/}
      <View style={styles.boxFilterListL}>
        {/*Header*/}
        <View style={styles.vwtFilter}>
          <Text style={styles.txtFilter}>BỘ LỌC</Text>
        </View>
        
        {/*Filter Content*/}
        <ScrollView style={styles.vwContentFilter}>

          {/*Item Filter*/}
          {
            dataFilter.map(function(item, index) {
              return <ItemFilter key={index} navigation={navigation} item={item} hasCheckItemFilter={hasCheckItemFilter} hasExistInData={hasExistInData} />
            })
          }
          
        </ScrollView>

        {/*Bottom*/}
        <View style={styles.vwBotFilter}>
            <TouchableOpacity activeOpacity={.8} style={[styles.vwButHandle, styles.vwButOkey]}
              onPress={() => {
                handleApplyOrCancel("APPLY");
              }}
            >
              <Text style={[styles.twButtom, styles.twOkey]}>Áp dụng</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.8} style={[styles.vwButHandle, styles.vwButCancel]}
              onPress={() => {
                handleApplyOrCancel("CANCEL");
              }}
            >
              <Text style={[styles.twButtom, styles.twCancel]}>Bỏ chọn</Text>
            </TouchableOpacity>
        </View>
      </View>

      {/*Right*/}
      <View style={styles.boxFilterListR}>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnCloseFilter} 
          onPress={() => {
            handleApplyOrCancel("CLOSE");
          }}
        >
          <View style={styles.vwClose}>
            <AntIcon name="close" style={styles.iconClose} />
          </View>
        </TouchableOpacity>
        <View style={styles.bgopaListR}></View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  vwSlideFilter: {
    width: Display.width,
    height: Display.height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 101,
  },
  boxFilterListL: {
    width: Display.setWidth(80),
    height: Display.height,
    backgroundColor: Colors.COLOR_WHITE,
    position: 'absolute',
    left: 0,
    flex: 1,
  },
  boxFilterListR: {
    width: Display.setWidth(20),
    height: Display.height,
    position: 'absolute',
    right: 0,
  },
  bgopaListR: {
    width: Display.setWidth(20),
    height: Display.height,
    backgroundColor: Colors.COLOR_BLACK,
    opacity: .5,
    zIndex: 1,
  },
  btnCloseFilter: {
    flex: 1,
    alignItems: 'flex-start',
    zIndex: 2,
  },
  vwClose: {
    width: 40,
    height: 40,
    backgroundColor: Colors.COLOR_BLACK,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconClose: {
    fontSize: 30,
    color: Colors.COLOR_WHITE,
    opacity: 1
  },
  vwtFilter: {
    paddingVertical: 14,
    paddingHorizontal: 15,
    backgroundColor: Colors.COLOR_EEE,
  },
  txtFilter: {
    fontSize: 18,
    lineHeight: 26,
    textTransform: 'uppercase',
    fontFamily: Fonts.FONT_OSWALD_MEDIUM,
    color: Colors.COLOR_333,
  },
  vwContentFilter: {
    flex: 1,
    width: Display.setWidth(80),
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  vwBotFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    marginBottom: 30,
  },
  vwButHandle: {
    width: (Display.setWidth(80) / 2) - 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  vwButOkey: {
    backgroundColor: Colors.COLOR_BLACK,
  },
  vwButCancel: {
    backgroundColor: Colors.COLOR_EEE,
  },
  twButtom: {
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 500,
  },
  twOkey: {
    color: Colors.COLOR_WHITE,
  },
  twCancel: {
    color: Colors.COLOR_333,
  }
});

export default SlideFlter;
