import firestore from '@react-native-firebase/firestore';

export default function createUserType(id, data, action) {
  console.log('hola');
  firestore()
    .collection('Users')
    .doc(id)
    .set(data, {merge: true})
    .then(() => action);
}
