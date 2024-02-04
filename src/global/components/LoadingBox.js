import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import {Colors, Fonts} from '../../contants';
// import {Display} from '../../utils';

const LoadingBox = ({
  type=1,
  color=Colors.DEFAULT_GREEN,
  count=8,
  size=50,
  trackWidth=10,
  minScale=0.2,
  maxScale=1,
  waveFactor=0.54,
  waveMode="fill",
  boxStyle={},
}) => {
  return (
    <View style={boxStyle}>
      {type == 1 && <BallIndicator
                      color={color}
                      count={count}
                      size={size}
                    />}
      {type == 2 && <BarIndicator
                      color={color}
                      count={count}
                      size={size}
                    />}
      {type == 3 && <DotIndicator
                      color={color}
                      count={count}
                      size={size}
                    />}
      {type == 4 && <MaterialIndicator
                      color={color}
                      count={count}
                      trackWidth={trackWidth}
                    />}
      {type == 5 && <PacmanIndicator
                      color={color}
                      count={count}
                    />}
      {type == 6 && <PulseIndicator
                      color={color}
                      count={count}
                    />}
      {type == 7 && <SkypeIndicator
                      color={color}
                      count={count}
                      size={size}
                      minScale={minScale}
                      maxScale={maxScale}
                    />}
      {type == 8 && <UIActivityIndicator
                      color={color}
                      count={count}
                      size={size}
                    />}
      {type == 9 && <WaveIndicator
                      color={color}
                      count={count}
                      size={size}
                      waveFactor={waveFactor}
                      waveMode={waveMode}
                    />}
    </View>
  );
};

const styles = StyleSheet.create({
});

export default LoadingBox;
