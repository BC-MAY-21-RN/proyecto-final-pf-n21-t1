import firestore from '@react-native-firebase/firestore';

export default function createUserType(id, data, action) {
  firestore()
    .collection('Users')
    .doc(id)
    .set(data, {merge: true})
    .then(() => action);
}
