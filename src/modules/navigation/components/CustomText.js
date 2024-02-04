import React from "react";
import { Text } from "react-native";

const CustomText = (props) => {
  return (
    <Text
      style={{...props.style }}
    >
      {props.children}
    </Text>
  );
};

export default CustomText;
