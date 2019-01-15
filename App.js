import App from "./src/index.js";
export default App;
//import React from 'react';
//import {
  //ActivityIndicator,
  //AsyncStorage,
  //Button,
  //StatusBar,
  //StyleSheet,
  //View,
//} from 'react-native';
//import Login from 'screens/Login';
//import { FontAwesome } from '@expo/vector-icons';
//import {  createBottomTabNavigator,createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

////class SignInScreen extends React.Component {
  ////static navigationOptions = {
    ////title: 'Please sign in',
  ////};

  ////render() {
    ////return (
      ////<View style={styles.container}>
        ////<Button title="Sign in!" onPress={this._signInAsync} />
      ////</View>
    ////);
  ////}

  ////_signInAsync = async () => {
    ////await AsyncStorage.setItem('userToken', 'abc');
    ////this.props.navigation.navigate('App');
  ////};
////}

//class HomeScreen extends React.Component {
  //static navigationOptions = {
    //title: 'Welcome to the app!',
  //};

  //render() {
    //return (
      //<View style={styles.container}>
        //<Button title="Show me more of the app" onPress={this._showMoreApp} />
        //<Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      //</View>
    //);
  //}

  //_showMoreApp = () => {
    //this.props.navigation.navigate('Other');
  //};

  //_signOutAsync = async () => {
    //await AsyncStorage.clear();
    //this.props.navigation.navigate('Auth');
  //};
//}

//class OtherScreen extends React.Component {
  //static navigationOptions = {
    //title: 'Lots of features here',
  //};

  //render() {
    //return (
      //<View style={styles.container}>
        //<Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        //<StatusBar barStyle="default" />
      //</View>
    //);
  //}

  //_signOutAsync = async () => {
    //await AsyncStorage.clear();
    //this.props.navigation.navigate('Auth');
  //};
//}

//class AuthLoadingScreen extends React.Component {
  //constructor() {
    //super();
    //this._bootstrapAsync();
  //}

  //// Fetch the token from storage then navigate to our appropriate place
  //_bootstrapAsync = async () => {
    //const userToken = await AsyncStorage.getItem('userToken');

    //// This will switch to the App screen or Auth screen and this loading
    //// screen will be unmounted and thrown away.
    //this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  //};

  //// Render any loading content that you like here
  //render() {
    //return (
      //<View style={styles.container}>
        //<ActivityIndicator />
        //<StatusBar barStyle="default" />
      //</View>
    //);
  //}
//}

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  //},
//});

//const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
//const AuthStack = createStackNavigator({ Login: Login });
//export default createAppContainer(createBottomTabNavigator(
  //{
    //App: { screen: AppStack },
    //Auth: { screen: AuthStack },
  //},
  //{
    //defaultNavigationOptions: ({ navigation }) => ({
      //tabBarIcon: ({ focused, tintColor }) => {
        //const { routeName } = navigation.state;
        //let iconName;
        //if (routeName === 'Home') {
          //iconName = `home`;
        //} else if (routeName === 'Settings') {
          //iconName = `settings`;
        //}

        //// You can return any component that you like here! We usually use an
        //// icon component from react-native-vector-icons
        //return <FontAwesome name={iconName} size={25} color={tintColor} />;
      //},
    //}),
    //tabBarOptions: {
      //activeTintColor: 'tomato',
      //inactiveTintColor: 'gray',
    //},
  //}
//));

////export default createAppContainer(createSwitchNavigator(
  ////{
    ////AuthLoading: AuthLoadingScreen,
    ////App: AppStack,
    ////Auth: AuthStack,
  ////},
  ////{
    ////initialRouteName: 'AuthLoading',
  ////}
////));
////import React from 'react';
////import Home from 'screens/Home';
////import Settings from 'screens/Settings';
////import Login from 'screens/Login';
////import { Text, View } from 'react-native';
////import { Ionicons, FontAwesome } from '@expo/vector-icons';
////import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
////import * as colors from 'utils/Colors'
////import Icon from 'components/Icon/Icon';

////const TabNavigator = createBottomTabNavigator({
////Home,
////Settings,
////Login
////},
////{
////defaultNavigationOptions: ({ navigation }) => ({
////tabBarIcon: ({ focused, horizontal, tintColor }) => {
////const { routeName } = navigation.state;
////let IconComponent = FontAwesome;
////let iconName;
////if (routeName === 'Home') {
////iconName = 'home';
////// Sometimes we want to add badges to some icons. 
////// You can check the implementation below.
//////IconComponent = HomeIconWithBadge; 
////} else if (routeName === 'Settings') {
////iconName = 'heart';
////} else if (routeName === 'Login') {
////iconName = 'lock';
////}


////// You can return any component that you like here!
////return <IconComponent name={iconName} size={25} color={tintColor} />;
//////if (routeName === 'Home') {
//////iconName = `home`;
//////} else if (routeName === 'Settings') {
//////iconName = `cog`;
//////} else if (routeName === 'Login') {
//////iconName = `lock`;
//////}

//////// You can return any component that you like here!
//////return <Icon name={iconName} size={25} color={tintColor} />;
////},
////}),
////tabBarOptions: {
////activeTintColor: colors.green,
////inactiveTintColor: colors.gray,
////},
////});

////export default createAppContainer(TabNavigator);

//////export default class App extends React.Component {
//////render() {
//////return <Home />;
//////}
////}
