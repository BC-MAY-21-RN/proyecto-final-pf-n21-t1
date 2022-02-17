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

const register = async (name, email, password) => {
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log(auth().currentUser.uid);
        firestore()
          .collection('Users')
          .doc(auth().currentUser.uid)
          .set({
            name: name,
            email: email,
            password: password,
            createdAt: firestore.Timestamp.fromDate(new Date()),
          })
          .then(value => console.log(value))
          .catch(error => console.log(error))
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              Alert.alert('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
              Alert.alert('That email address is invalid!');
            }
          });
      })
      //we need to catch the whole sign up process if it fails too.
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
