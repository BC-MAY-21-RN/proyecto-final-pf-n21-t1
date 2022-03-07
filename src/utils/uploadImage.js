import storage from '@react-native-firebase/storage';

export default function uploadImage(file) {
  const {fileName, uploadUri} = file;
  return storage().ref(fileName).putFile(uploadUri);
}
