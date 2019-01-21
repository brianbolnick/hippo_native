import { AsyncStorage } from "react-native";
import jwtDecode from "jwt-decode";
import * as keys from "./constants";

export const onSignIn = data => {
  const jwt = jwtDecode(data.jwt);
  AsyncStorage.setItem(keys.TOKEN_KEY, data.jwt);
  AsyncStorage.setItem(keys.JWT_KEY, JSON.stringify(jwt));
};

export const onSignOut = () => AsyncStorage.removeItem(keys.JWT_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(keys.JWT_KEY)
      .then(res => {
        //const settings = JSON.parse(settingsStr)
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

let backendHost;
const apiVersion = "v1";

if (__DEV__) {
  backendHost = "http://localhost:3001";
} else {
  backendHost = "https://hungryhippo-api.herokuapp.com";
}

export const API_URL = `${backendHost}/api/${apiVersion}`;
//export const jwt = JSON.parse(localStorage.getItem("jwt"));
//const sub = jwt && JSON.parse(jwt.sub);
//export const userId = jwt && sub.id;
//export const familyId = jwt && sub.family_id;
//export const token = localStorage.getItem("auth_token");
export const userId = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(keys.USER_ID_KEY)
      .then(res => {
        //const settings = JSON.parse(settingsStr)
        console.log(res);
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
const errorMap = {
  401: "Invalid credentials.",
  400: "User not found.",
  500: "Something went wrong. Please try again."
};

export const handleNetworkErrors = err => {
  console.log("STATUS", err.response.status);
  return (
    errorMap[err.response.status] || `Something unexpected occurred: ${err}`
  );
};
