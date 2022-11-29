import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeView from '../components/homeView';
import LoginView from '../components/loginView';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileVIew from '../components/profileView';
import MenuContent from '../contents/Drawer';
import FooterTab from '../contents/Footer/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button} from 'react-native';
import ItemList from '../components/ItemList';
import Category from '../components/category';

//Initialize bottom tab navigator
const DashboardTabRoutes = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <DashboardTabRoutes.Navigator
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,
      }}>
      <DashboardTabRoutes.Screen
        name="Home"
        component={ProfileVIew}
        options={{
          tabBarIcon: ({focused}) => (
            <FooterTab
              tabBarIndex={0}
              isFocused={focused}
              tabBarTitle={'Dashboard'}
            />
          ),
        }}
      />
      <DashboardTabRoutes.Screen
        name="Items"
        component={TabNavigationContainer}
        options={{
          tabBarIcon: ({focused}) => (
            <FooterTab
              tabBarIndex={0}
              isFocused={focused}
              tabBarTitle={'Dashboard1'}
            />
          ),
        }}
      />
    </DashboardTabRoutes.Navigator>
  );
};

const TabScreen = createNativeStackNavigator();

const TabNavigationContainer = () => {
  return (
    <TabScreen.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Cat">
      <TabScreen.Screen name="Cat" component={Category} />
      <TabScreen.Screen name="List" component={ItemList} />
    </TabScreen.Navigator>
  );
};
//tab navigator


// import ProfileIndex from '../containers/profileContainer/ProfileIndex';
const MainScreenStack = createNativeStackNavigator();
const MainScreenStackNavigator = () => {
  return (
    <MainScreenStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainScreenStack.Screen name="Drawer" component={TabNavigator} />
      <MainScreenStack.Screen
        options={{
          headerRight: () => <Button title="Info" color="red" />,
        }}
        name="Flipkart"
        component={ProfileVIew}
      />
      <MainScreenStack.Screen
        name="ListItem"
        component={ItemList}></MainScreenStack.Screen>
      <MainScreenStack.Screen
        name="Cat"
        component={Category}></MainScreenStack.Screen>
    </MainScreenStack.Navigator>
  );
};

const loginStack = createNativeStackNavigator();
export const LoginContainer = () => {
  return (
    <NavigationContainer>
      <loginStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <loginStack.Screen name="Home" component={HomeView} />
        <loginStack.Screen name="Login" component={LoginView} />
      </loginStack.Navigator>
    </NavigationContainer>
  );
};
const Drawer = createDrawerNavigator();

export const ProfileContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MainScreenStackNavigator"
        drawerContent={props => <MenuContent navigation={props.navigation} />}>
        <Drawer.Screen name="Flipkart 1" component={MainScreenStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
//route for logined user
// const profileStack = createNativeStackNavigator();
// const homeContainer = () => {
//   return (
//     <profileStack.Navigator>
//       <profileStack.Screen name="Profile" component={ProfileIndex} />
//     </profileStack.Navigator>
//   );
// };

// const drawer = createDrawerNavigator();
// export const DrawerNav = () => {
//   return (
//     <NavigationContainer>
//       <drawer.Navigator>
//         <drawer.Screen name="home" component={HomeView} />
//       </drawer.Navigator>
//     </NavigationContainer>
//   );
// };
