import React from "react";
import * as Font from "expo-font";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { API_URL, isSignedIn } from "utils";
import reducer from "utils/reducers";
import { createRootNavigator } from "utils/router";

const client = axios.create({
  baseURL: API_URL,
  responseType: "json"
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      rufina: require("../assets/fonts/Rufina-Regular.ttf"),
      avenir: require("../assets/fonts/AvenirNext.otf"),
      "avenir-bold": require("../assets/fonts/AvenirNextBold.otf"),
      "rufina-bold": require("../assets/fonts/Rufina-Bold.ttf")
    });

    this.setState({ fontLoaded: true });

    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
