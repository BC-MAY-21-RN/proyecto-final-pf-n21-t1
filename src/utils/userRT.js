import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

export default function userRT(userId, setData) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        const user = documentSnapshot.data();
        setData(user);
      });
    return () => subscriber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
}
