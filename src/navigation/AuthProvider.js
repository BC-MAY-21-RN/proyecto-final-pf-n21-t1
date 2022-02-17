import React, {createContext} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
export const AuthContext = createContext();

const login = (email, password, setForm) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('logged in succesfully');
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
  return {name, email, password};
};

const handleError = error => {
  if (
    error.code === 'auth/email-already-in-use' ||
    error.code === 'auth/invalid-email'
  ) {
    Alert.alert('That email address is already in use or is invalid');
  }
};

const register = async (name, email, password) => {
  const user = userTemplate(name, email, password);
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
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
  } catch (e) {
    console.log(e);
  }
};

export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
