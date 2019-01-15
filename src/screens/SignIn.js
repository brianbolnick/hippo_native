import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}
      />
    </Card>
  </View>
);
//import React from 'react';
//import {
  //ActivityIndicator,
  //AsyncStorage,
  //Button,
  //StatusBar,
  //StyleSheet,
  //View,
//} from 'react-native';
//import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  //},
//});


//class Login extends React.Component {
  //static navigationOptions = {
    //title: 'Please sign in',
  //};

  //render() {
    //return (
      //<View style={styles.container}>
        //<Button title="Sign in!" onPress={this._signInAsync} />
      //</View>
    //);
  //}

  //_signInAsync = async () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    //this.props.navigation.navigate('App');
  //};
//}
//export default Login

////import React from 'react';
////import {
	////StyleSheet,
	////View,
	////StatusBar,
	////ActivityIndicator,
	////ScrollView,
	////AsyncStorage
////} from 'react-native';
////import { LinearGradient } from 'expo';
////import uuid from 'uuid/v1';

////import { otherGradientArray } from 'utils/Colors';
////import Header from 'components/Header';
////import SubTitle from 'components/SubTitle';
////import Input from 'components/Input';
////import List from 'components/List';
////import Button from 'components/Button';

////const headerTitle = 'Todo';

////export default class Login extends React.Component {
	////state = {
		////inputValue: '',
		////loadingItems: false,
		////allItems: {},
		////isCompleted: false
	////};

	////componentDidMount = () => {
		////this.loadingItems();
	////};

	////newInputValue = value => {
		////this.setState({
			////inputValue: value
		////});
	////};

	////loadingItems = async () => {
		////try {
			////const allItems = await AsyncStorage.getItem('Todos');
			////this.setState({
				////loadingItems: true,
				////allItems: JSON.parse(allItems) || {}
			////});
		////} catch (err) {
			////console.log(err);
		////}
	////};

	////onDoneAddItem = () => {
		////const { inputValue } = this.state;
		////if (inputValue !== '') {
			////this.setState(prevState => {
				////const id = uuid();
				////const newItemObject = {
					////[id]: {
						////id,
						////isCompleted: false,
						////text: inputValue,
						////createdAt: Date.now()
					////}
				////};
				////const newState = {
					////...prevState,
					////inputValue: '',
					////allItems: {
						////...prevState.allItems,
						////...newItemObject
					////}
				////};
				////this.saveItems(newState.allItems);
				////return { ...newState };
			////});
		////}
	////};

	////deleteItem = id => {
		////this.setState(prevState => {
			////const allItems = prevState.allItems;
			////delete allItems[id];
			////const newState = {
				////...prevState,
				////...allItems
			////};
			////this.saveItems(newState.allItems);
			////return { ...newState };
		////});
	////};

	////completeItem = id => {
		////this.setState(prevState => {
			////const newState = {
				////...prevState,
				////allItems: {
					////...prevState.allItems,
					////[id]: {
						////...prevState.allItems[id],
						////isCompleted: true
					////}
				////}
			////};
			////this.saveItems(newState.allItems);
			////return { ...newState };
		////});
	////};

	////incompleteItem = id => {
		////this.setState(prevState => {
			////const newState = {
				////...prevState,
				////allItems: {
					////...prevState.allItems,
					////[id]: {
						////...prevState.allItems[id],
						////isCompleted: false
					////}
				////}
			////};
			////this.saveItems(newState.allItems);
			////return { ...newState };
		////});
	////};

	////deleteAllItems = async () => {
		////try {
			////await AsyncStorage.removeItem('Todos');
			////this.setState({ allItems: {} });
		////} catch (err) {
			////console.log(err);
		////}
	////};

	////saveItems = newItem => {
		////const saveItem = AsyncStorage.setItem('Todos', JSON.stringify(newItem));
	////};

	////render() {
		////const { inputValue, loadingItems, allItems } = this.state;

		////return (
			////<LinearGradient colors={otherGradientArray} style={styles.container}>
				////<StatusBar barStyle="light-content" />
				////<View style={styles.centered}>
					////<Header title={headerTitle} />
				////</View>
				////<View style={styles.inputContainer}>
					////<SubTitle subtitle={"What's Next?"} />
					////<Input
						////inputValue={inputValue}
						////onChangeText={this.newInputValue}
						////onDoneAddItem={this.onDoneAddItem}
					/////>
				////</View>
				////<View style={styles.list}>
					////<View style={styles.column}>
						////<SubTitle subtitle={'Recent Notes'} />
						////<View style={styles.deleteAllButton}>
							////<Button deleteAllItems={this.deleteAllItems} />
						////</View>
					////</View>

					////{loadingItems ? (
						////<ScrollView contentContainerStyle={styles.scrollableList}>
							////{Object.values(allItems)
								////.reverse()
								////.map(item => (
									////<List
										////key={item.id}
										////{...item}
										////deleteItem={this.deleteItem}
										////completeItem={this.completeItem}
										////incompleteItem={this.incompleteItem}
									/////>
								////))}
						////</ScrollView>
					////) : (
						////<ActivityIndicator size="large" color="white" />
					////)}
				////</View>
			////</LinearGradient>
		////);
	////}
////}

////const styles = StyleSheet.create({
	////container: {
		////flex: 1
	////},
	////centered: {
		////alignItems: 'center'
	////},
	////inputContainer: {
		////marginTop: 40,
		////paddingLeft: 15
	////},
	////list: {
		////flex: 1,
		////marginTop: 70,
		////paddingLeft: 15,
		////marginBottom: 10
	////},
	////scrollableList: {
		////marginTop: 15
	////},
	////column: {
		////flexDirection: 'row',
		////alignItems: 'center',
		////justifyContent: 'space-between'
	////},
	////deleteAllButton: {
		////marginRight: 40
	////}
////});
