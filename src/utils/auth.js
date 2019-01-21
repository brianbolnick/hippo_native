import { AsyncStorage } from "react-native";
import jwtDecode from "jwt-decode";

const JWT_KEY = "JWT";
const TOKEN_KEY = "AUTH_TOKEN";

export const onSignIn = data => {
  const jwt = jwtDecode(data.jwt);

  //console.log("JWT", data.jwt);
  //console.log("DECODED-JWT", jwt);

  AsyncStorage.setItem(TOKEN_KEY, data.jwt);
  AsyncStorage.setItem(JWT_KEY, JSON.stringify(jwt));
};

export const onSignOut = () => AsyncStorage.removeItem(JWT_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(JWT_KEY)
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
