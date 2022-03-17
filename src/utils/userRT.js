import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export default function userRT(userId, setData, image) {
  const handleUser = async documentSnapshot => {
    const uid = documentSnapshot.id;
    const user = {...documentSnapshot.data(), uid};
    if (image)
      user.image = image;
    else if (image !== false){
      const storageImage = await storage().ref(user.image).getDownloadURL();
      user.image = storageImage;
    }
    setData(user);
  };

  const subscriber = firestore()
    .collection('Users')
    .doc(userId)
    .get()
    .then(documentSnapshot => handleUser(documentSnapshot));
  return () => subscriber();
}
