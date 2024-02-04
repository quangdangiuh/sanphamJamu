import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {Colors, Fonts} from '../../contants';
import {Display} from '../../utils';

/**
 * [description]
 * 18-11-2023: selectedEmptyTextStyle: Author QD
 */
const DropdownBox = ({
  data,
  handleSetData,
  did,
  placeholder,
  placeholderAct,
  search,
  searchPlaceholder,
  dropBoxStyles,
  textDropStyles,
  placeholderDropStyle,
  selectedTextActiveStyle,
  selectedEmptyTextStyle,
  iconRightStyles,
  iconActiveStyles,
  colorIconChose=Colors.DEFAULT_GREEN,
  borderFocusColor="rgba(0,0,0,0.1)",
  maxHeight=300
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleChoseData = id => {
    handleSetData(id);
  }

  return (
    <Dropdown
      containerStyle={{
        paddingVertical: 5,
        paddingHorizontal: 10,
      }}
      style={
        [
          styles.dropdown,
          dropBoxStyles,
          isFocus && { borderColor: borderFocusColor }
        ]
      }
      placeholderStyle={[
        styles.placeholderStyle,
        placeholderDropStyle
      ]}
      selectedTextStyle={[
        styles.selectedTextStyle,
        selectedTextActiveStyle
      ]}
      selectedEmptyTextStyle={selectedEmptyTextStyle}
      data={data}
      search={search}
      inputSearchStyle={styles.inputSearchStyle}
      searchPlaceholder={searchPlaceholder}
      maxHeight={maxHeight}
      labelField="name"
      valueField="id"
      placeholder={!isFocus ? placeholder : placeholderAct}
      value={did}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        handleChoseData(item.id);
        setIsFocus(false);
      }}
      renderRightIcon={() => (
        <AntIcon
          style={[
            styles.iconRightDrop,
            iconRightStyles
          ]}
          color={Colors.COLOR_C9C9C9}
          name={!isFocus ? 'down' : 'up'}
        />
      )}
      renderItem={item => {
        return (
          <View style={styles.itemDrop}>
            <Text style={[styles.textDrop, textDropStyles]}>{item.name}</Text>
            {item.id === did && (
              <AntIcon
                style={
                  [
                    styles.iconDropActive,
                    iconActiveStyles,
                  ]
                }
                color={colorIconChose}
                name="check"
                size={20}
              />
            )}
          </View>
        )
      }}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color: Colors.COLOR_C9C9C9,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: Colors.COLOR_333,
  },
  inputSearchStyle: {
    height: 30,
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 5,
    margin: 0,
  },  
  iconRightDrop: {
    fontSize: 10,
  },
  itemDrop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 1,
    backgroundColor: Colors.COLOR_WHITE,
  },
  iconDropActive: {
    fontSize: 14,
    marginRight: 5,
  }
});

export default DropdownBox;
