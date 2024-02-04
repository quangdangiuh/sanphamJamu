import React from 'react';
//redux
import { useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
//Action
import { checkIsLogin } from '../reducers';

const loadGlobal = () => {
	const dispatch = useDispatch();

	// Check User
  	useFocusEffect(() => {
		dispatch(checkIsLogin(false));
	});
};

export default {
	loadGlobal
};