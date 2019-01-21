import { AsyncStorage } from "react-native";
import jwtDecode from "jwt-decode";
import * as keys from "./constants";

export const onSignIn = data => {
  const jwt = jwtDecode(data.jwt);
  const sub = JSON.parse(jwt.sub);
  AsyncStorage.setItem(keys.TOKEN_KEY, data.jwt);
  AsyncStorage.setItem(keys.USER_ID_KEY, JSON.stringify(sub.id));
  AsyncStorage.setItem(keys.FAMILY_ID_KEY, JSON.stringify(sub.family_id));
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
export const getFromAs = async key => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(keys)
      .then(res => {
        return res;
      })
      .catch(err => reject(err));
  });
};
//const getFromAs = async key => {
//try {
//const value = await AsyncStorage.getItem(key);
//if (value !== null) {
//// We have data!!
//console.log("VALUE", value);
//return await value;
//}
//} catch (error) {
//return "";
//}
//};
export const getUserId = () => getFromAs(keys.USER_ID_KEY);
export const API_URL = `${backendHost}/api/${apiVersion}`;
export const userId = getFromAs(keys.USER_ID_KEY);
export const familyId = getFromAs(keys.FAMILY_ID_KEY);
export const token = getFromAs(keys.TOKEN_KEY);
export const jwt = getFromAs(keys.JWT_KEY);

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
