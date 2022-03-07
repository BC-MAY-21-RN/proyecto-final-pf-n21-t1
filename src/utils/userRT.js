import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export default function userRT(userId, setData) {
  const handleUser = async documentSnapshot => {
    const user = documentSnapshot.data();
    user.image = await storage().ref(user.image).getDownloadURL();
    setData(user);
  };

  const subscriber = firestore()
    .collection('Users')
    .doc(userId)
    .onSnapshot(documentSnapshot => handleUser(documentSnapshot));
  return () => subscriber();
}
