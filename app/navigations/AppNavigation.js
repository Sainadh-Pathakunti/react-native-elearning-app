import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator,createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { View, TouchableOpacity,Image, TextInput, StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from './DrawerContent';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';
import Screen6 from '../screens/Screen6';
import Screen7 from '../screens/Screen7';
import Screen8 from '../screens/Screen8';
import Screen9 from '../screens/Screen9';
import Screen10 from '../screens/Screen10';
import {
  createAppContainer
} from "react-navigation";

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

// const DrawerNavigation = createDrawerNavigator(
//   SwipeTabs: {
//     screen: SwipeTabs
//   },
//   {
//     contentComponent: DrawerContent,
//     drawerPosition: 'left',
//     drawerWidth: 200,
//   }
// );

const SwipeTabs = createMaterialTopTabNavigator(
  {
    Screen1: { screen: Screen1 },
    Screen2: { screen: Screen2 },
    Screen3: { screen: Screen3 },
    Screen4: { screen: Screen4 },
    Screen5: { screen: Screen5 },
    Screen6: { screen: Screen6 },
    Screen7: { screen: Screen7 },
    Screen9: { screen: Screen9 },
    Screen10: { screen: Screen10 },
  },
  {
    initialRouteName: "Screen1",
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: false,
      style: { height: 0 }
    }
  }
);

const DrawerNavigation = createDrawerNavigator({
  SwipeTabs: {
    screen: SwipeTabs
  },
}, {
    initialRouteName: 'SwipeTabs',
    contentComponent: DrawerContent,
    drawerWidth: deviceWidth * 0.7,
    drawerType:'back'
  });

const MainStack = createStackNavigator(
  {
    DrawerNavigation: DrawerNavigation,
  },
  {
    defaultNavigationOptions: navigator => ({
      headerLeft: (
        <TouchableOpacity style={{flexDirection:'row'}}
          onPress={() => { 
            navigator.navigation.toggleDrawer();
          }}
        >
          <Icon
            name="bars"
            size={20}
            color="#fff"
            style={styles.headerLeftIconStyle}
          />
           <Image
        size={10}
        source={require('../imgs/header_cap.png')}
      />
        </TouchableOpacity>
       
      ),
      title:'Workplace Health & Safety',
      headerTitleStyle:{
        color:"#fff"
      },
      // headerTintColor:{
      //   color:"#fff"
      // },
      headerStyle: { backgroundColor: '#0099cc' },
      drawerLockMode: 'locked-open',
    }),
  }
);

let TransitionConfig = () => {
  return {
    screenInterpolator: ({ position, scene }) => {
      const opacity = position.interpolate({
        inputRange: [scene.index - 1, scene.index],
        outputRange: [0, 1],
      });
      return {
        opacity: opacity,
      };
    },
  };
};

const RootStackNavigator = createStackNavigator(
  {
    
    MainStack: { screen: MainStack },
    
  },
  {
    headerMode: 'none',
    transitionConfig: TransitionConfig,
  }
);

const styles = StyleSheet.create({
  headerLeftIconStyle: {
    marginLeft: 15,
  },
  searchInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#999',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  searchInputIconStyle: {
    padding: 5,
  },
  searchInputStyle: {
    flex: 1,
    paddingRight: 10,
    textAlign: 'left',
  },
});

export const Apps = createAppContainer(RootStackNavigator)
export default Apps;
