import React, {createContext} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
export const AuthContext = createContext();

const login = (email, password, setForm, navigation) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Path'}],
      });
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        Alert.alert('Invalid email, please try again');
      }
      console.log(error);
    });
  setForm('email', '', false);
  setForm('password', '', false);
};

const userTemplate = (name, email, password) => {
  return {
    name,
    email,
    password,
    providerRegistered: 'false',
    recruiterRegistered: 'false',
  };
};

const handleError = error => {
  if (
    error.code === 'auth/email-already-in-use' ||
    error.code === 'auth/invalid-email'
  ) {
    Alert.alert('That email address is already in use or is invalid');
  }
};

const register = async (navigation, name, email, password) => {
  const user = userTemplate(name, email, password);
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Path');
        firestore()
          .collection('Users')
          .doc(auth().currentUser.uid)
          .set(user)
          .then(value => console.log(value))
          .catch(error => {
            handleError(error);
          });
      })
      .catch(error => {
        console.log('Something went wrong with sign up: ', error);
      });
  } catch (e) {
    console.log(e);
  }
};

const logout = async () => {
  try {
    await auth().signOut();
    await GoogleSignin.signOut();
  } catch (e) {
    console.log(e);
  }
};

const googleLogin = async navigation => {
  try {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth()
      .signInWithCredential(googleCredential)
      .then(() => {
        navigation.navigate('Path');
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const AuthProvider = ({children}) => {
  GoogleSignin.configure({
    webClientId:
      '738397443752-ohjhhan7mm20180cue0odfp76kag2tdb.apps.googleusercontent.com',
  });
  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
        googleLogin,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
