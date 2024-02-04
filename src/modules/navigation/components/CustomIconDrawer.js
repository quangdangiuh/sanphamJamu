import React from 'react';
import {StyleSheet} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeaIcon from 'react-native-vector-icons/Feather';

const CustomIconDrawer = ({color, iconName, iconType}) => {
	if(iconType == "AntIcon"){
		return <AntIcon name={iconName} style={[styles.drwScreenIcon, {color}]} />;
	}else if(iconType == "MaterialIcon"){
		return <MaterialIcon name={iconName} style={[styles.drwScreenIcon, {color}]} />;
	}else if(iconType == "MaterialIcon"){
		return <FeaIcon name={iconName} style={[styles.drwScreenIcon, {color}]} />;
	}
	return "";
}

const styles = StyleSheet.create({
	drwScreenIcon: {
		// marginLeft: 5,
		marginRight: -25,
		fontSize: 14,
	},
});

export default CustomIconDrawer;