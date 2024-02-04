import React from 'react';
import {
  createDrawerNavigator,
  useDrawerProgress,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {SafeAreaView, View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Animated, { interpolate, Extrapolate, useAnimatedStyle } from 'react-native-reanimated';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFocusEffect } from "@react-navigation/native";

import {Colors, Images, Fonts} from '../../contants';
import {Display, Init} from '../../utils';

/*// Main
import Main from '../main';
// About
import {About} from '../about';
// Contact
import {Contact} from '../contact';
// Product
import {Product, Category as ProductCategory, Detail as ProductDetail} from '../product';
// Cart
import {Cart, CartFinish, CartProcess} from '../cart';
// News
import {News} from '../news';
// Member
import {Member, Registry, Login, Logout, YourOrder, ChangePass} from '../member';*/

// Router - Component
import {Routes, Screen} from './route';
import {CustomText, CustomIconDrawer, PageNotFound} from './components';

const Drawer = createDrawerNavigator();

/**
 * [description]
 * @param  {[type]} options.children [description]
 * @return {[type]}                  [description]
 */
const DrawerContainer = ({children}) => {
	const isDrawerOpen = useDrawerStatus();
	const progress = useDrawerProgress();

	const animatedStyle = useAnimatedStyle(() => {
		const scale = interpolate(progress.value, [0, 1], [1, 0.8], {
			extrapolateRight: Extrapolate.CLAMP,
		});
		const borderRadius = interpolate(progress.value, [0, 1], [0, 25], {
			extrapolateRight: Extrapolate.CLAMP,
		});

		return {
			borderRadius,
			transform: [{scale}],
		};
	}, []);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
			<Animated.View
			style={[{
				flex: 1,
				backgroundColor: Colors.COLOR_WHITE,
				overflow: 'hidden',
			}, animatedStyle]}>
			<StatusBar
				backgroundColor={isDrawerOpen == 'open' ? Colors.DEFAULT_GREEN2 : Colors.COLOR_WHITE}
				barStyle="dark-content"
			/>
				{children}
			</Animated.View>
		</TouchableWithoutFeedback>
	);
};

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const CustomDrawerContent = props => {

	return (
		<>
			<DrawerContentScrollView
				style={styles.drwContentScrollView}
			>
				{/*<View style={{marginBottom: 10, marginLeft: 10}}>
					<TouchableOpacity
						onPress={() => {props.navigation.toggleDrawer()}}
					>
						<AntIcon name="close" style={styles.iconClose} />
					</TouchableOpacity>
				</View>*/}

				<View
					style={styles.wrap_logo}
				>
					<Image source={require('./images/logo.png')} style={styles.image_logo} />
					<View style={styles.text_logo}>
						<Text
							style={styles.text1_logo}
						>
							Jamu Product
						</Text>
						<Text
							style={styles.text2_logo}
						>
							Chào mừng mẹ đến với JAMU PRODUCT
						</Text>
					</View>
				</View>

				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			<TouchableOpacity style={styles.itemLogout}>
				<MaterialIcon name="logout" style={styles.iconLogout} />
				<Text style={styles.textLogout}>Thoát</Text>
			</TouchableOpacity>
		</>
	);
};

/**
 * [description]
 * @param  {[type]} options.screen [description]
 * @param  {[type]} options.props  [description]
 * @return {[type]}                [description]
 */
const CustomComponentDrawer = ({screen, props}) => {
	
	// Load
	Init.loadGlobal();

	// Screen
	return <Screen screen={screen} props={props} />;

	// ROUTER
	// switch (screen) {
	// 	/*MAIN*/
  //   case "Main": {
  //     return <Main {...props} />;
  //   }

  //   /*ABOUT*/
  //   case "About": {
  //     return <About {...props} />;
  //   }

  //   /*PRODUCT*/
  //   case "Product": {
  //     return <Product {...props} />;
  //   }
  //   case "ProductCategory": {
  //     return <ProductCategory {...props} />;
  //   }
  // 	case "ProductDetail": {
  //     return <ProductDetail {...props} />;
  //   }

  //   /*NEWS*/
  //   case "News": {
  //     return <News {...props} />;
  //   }

  //   /*CONTACT*/
  //   case "Contact": {
  //     return <Contact {...props} />;
  //   }

  //   /*CART*/
  //   case "Cart": {
  //     return <Cart {...props} />;
  //   }
  //   case "CartProcess": {
  //     return <CartProcess {...props} />;
  //   }
  //   case "CartFinish": {
  //     return <CartFinish {...props} />;
  //   }

  //   /*MEMBER*/
  //   case "Member": {
  //     return <Member {...props} />;
  //   }
  //   case "Registry": {
  //     return <Registry {...props} />;
  //   }
  //   case "Login": {
  //     return <Login {...props} />;
  //   }
  //   case "Logout": {
  //     return <Logout {...props} />;
  //   }
  //   case "YourOrder": {
  //     return <YourOrder {...props} />;
  //   }
  //   case "ChangePass": {
  //     return <ChangePass {...props} />;
  //   }
    
  //   default:
  //     return <PageNotFound {...props} />;
  // }
}

const DrawerNavigator = () => {
	console.log("DrawerNavigator");

	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
				drawerType: 'slide',
				drawerStyle: {
					width: 230,
					backgroundColor: Colors.DEFAULT_GREEN2
				},
				overlayColor: null,
				drawerLabelStyle: {
					fontWeight: 700,
					fontSize: 13,
					fontFamily: Fonts.FONT_OSWALD_EXTRALIGHT,
				},
				// drawerInactiveBackgroundColor: Colors.COLOR_WHITE,
				drawerActiveBackgroundColor: Colors.DEFAULT_GREEN,
				drawerActiveTintColor: Colors.COLOR_WHITE,
				drawerInactiveTintColor: Colors.COLOR_333,
				drawerItemStyle: {
					// paddingLeft: 10,
					marginVertical: 0,
				},
				sceneContainerStyle: {
					backgroundColor: Colors.DEFAULT_GREEN2,
				}
			}}
			drawerContent={props => <CustomDrawerContent {...props} />}
		>

			{Routes.map((item, index) => {
				const { name, title, iconName, iconType, screen, display, children } = item;
				let itemScreenStyle = (display) ? {marginVertical: -4} : {display: "none"};

				return (
					<Drawer.Screen
						key={index}
						name={name}
						options={{
							title: () => (
								<CustomText style={{fontWeight: 500, color: Colors.COLOR_333, fontSize: 12, lineHeight: 15,}}>{title}</CustomText>
							),
							drawerIcon: ({color}) => (
								<CustomIconDrawer color={color} iconName={iconName} iconType={iconType} />
							),
							drawerItemStyle: [itemScreenStyle, {height: 40, marginBottom: 5, paddingVertical: 0,}]
						}}
					>
						{props => (
							<DrawerContainer>
								<CustomComponentDrawer screen={screen} props={props} />
							</DrawerContainer>
						)}
					</Drawer.Screen>
				)
			})}

			{/*Start Product*/}
			{/*<Drawer.Screen
				name="Product"
				options={{
					title: 'Sản phẩm',
					drawerIcon: ({color}) => (
						<MaterialIcon name="store-settings-outline" style={[styles.drwScreenIcon, {color}]} />
					),
				}}
			>
				{props => (
					<DrawerContainer>
						<Product {...props} />
					</DrawerContainer>
				)}
			</Drawer.Screen>*/}
			{/*End Product*/}

		</Drawer.Navigator>
	);
};

const styles = StyleSheet.create({
	drwContentScrollView: {
		backgroundColor: Colors.DEFAULT_GREEN2,
		marginVertical: 30,
	},
	iconClose: {
		color: Colors.COLOR_BLACK,
		fontSize: 18,
		marginTop: -6,
	},
  wrap_logo: {
  	flex: 1,
  	flexDirection: 'row',
  	justifyContent: 'flex-start',
  	alignItems: 'center',
  	paddingVertical: 15,
  	paddingHorizontal: 15,
  	marginTop: 15,
  	marginLeft: -5,
  	backgroundColor: Colors.DEFAULT_GREEN2,
  },
  image_logo: {
  	width: 60,
    height: 30,
    resizeMode: 'contain',
    marginRight: 15,
  },
  text_logo: {
  	flex: 1,
  },
  text1_logo: {
  	fontSize: 15,
  	fontWeight: '700',
  	fontFamily: Fonts.FONT_OSWALD_VARIABLEFONT_WGHT,
  },
  text2_logo: {
  	fontSize: 8,
  	fontFamily: Fonts.FONT_OSWALD_BOLD,
  },
	drwScreenIcon: {
		// marginLeft: 5,
		marginRight: -20,
		fontSize: 16,
	},
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
  itemLogout: {
  	flex: 1,
  	flexDirection: 'row',
  	alignItems: 'center',
  	paddingHorizontal: 15,
  	position: 'relative',
  	top: Display.setHeight(10)
  },
  iconLogout: {
  	fontSize: 16,
  	marginRight: 5,
  	color: Colors.COLOR_444
  },
  textLogout: {
  	fontSize: 12,
  	fontWeight: 700,
  	fontFamily: Fonts.FONT_OSWALD_EXTRALIGHT,
  	color: Colors.COLOR_444
  }
});

export default DrawerNavigator;