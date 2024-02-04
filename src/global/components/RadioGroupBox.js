import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

import {Colors, Fonts} from '../../contants';
import {Display} from '../../utils';

const RadioGroupBox = ({
  radioButtons,
  HandleOnPress,
  HandleSelectedId,
  size,
  borderSize,
  borderColor,
  radioGroupStyle,
  radioItemStyle,
  labelStyle,
  descriptionStyle,
}) => {
  return (
    <RadioGroup 
      radioButtons={radioButtons} 
      onPress={HandleOnPress}
      selectedId={HandleSelectedId}
      size={size}
      borderSize={borderSize}
      borderColor={borderColor}
      containerStyle={[styles.radioGroupStyle, radioGroupStyle]}
      containerItemStyle={[styles.radioItemStyle, radioItemStyle]}
      labelStyle={[labelStyle, styles.radioLabelStyle]}
      descriptionStyle={[descriptionStyle, styles.radioDescriptionStyle]}
    />
  );
};

const styles = StyleSheet.create({
  radioGroupStyle: {
    alignItems: 'flex-start',
  },
  radioItemStyle: {
    marginHorizontal: 0,
    marginVertical: 4,
  },
  radioLabelStyle: {
    color: Colors.COLOR_333,
  },
  radioDescriptionStyle: {
    marginLeft: 30,
  }
});

export default RadioGroupBox;
