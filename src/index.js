import React from "react";
import { createRootNavigator } from "utils/router";
import { isSignedIn } from "utils/auth";
import { Font } from "expo";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { API_URL } from "utils/constants";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "utils/reducers";

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
