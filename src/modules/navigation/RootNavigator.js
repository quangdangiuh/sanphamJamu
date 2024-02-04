import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//redux
import { useSelector, useDispatch } from "react-redux";
//Action
import { checkFirstOpen } from '../../reducers';

import Splash from '../splash';
import Welcome from '../welcome';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
	const dispatch = useDispatch();
	dispatch(checkFirstOpen());

	const isFirstOpen = useSelector((state) => state.global.isFirstOpen);
	const isLoadApp = useSelector((state) => state.global.isLoadApp);
	const isSplash = useSelector((state) => state.global.isSplash);

	return (
	    <NavigationContainer>
	    	{(isLoadApp || !isLoadApp) && isSplash && <Splash />}
	    	{isFirstOpen && !isSplash && isLoadApp && <DrawerNavigator />}
	    	{!isFirstOpen && !isSplash && isLoadApp && <Welcome />}

		    {/*<Stack.Navigator screenOptions={{headerShown: false}}>
			    <Stack.Screen name="Splash" component={Splash} />
			    <Stack.Screen name="Welcome" component={Welcome} />
			    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
		    </Stack.Navigator>*/}
	    </NavigationContainer>
	  );
};

export default RootNavigator;