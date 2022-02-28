import React, {useState} from 'react';
import {Avatar} from 'react-native-elements';
import {launchImageLibrary} from 'react-native-image-picker';

export const ImageButton = () => {
  const [image, setImage] = useState(
    'https://www.larutadelagarnacha.mx/wp-content/uploads/2021/06/tripita5.jpeg',
  );
  const selectImage = () => {
    const options = {
      title: 'Selecciona una imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if(response.errorCode) {
        console.log(response.errorMessage);
      } else if (response.didCancel) {
        console.log('El usuario canceló la selección');
      } else {
        const path = response.assets[0].uri;
        setImage(path);
      }
    });
  };
  return (
    <Avatar
      activeOpacity={0.2}
      avatarStyle={{}}
      // eslint-disable-next-line react-native/no-inline-styles
      containerStyle={{backgroundColor: '#BDBDBD'}}
      iconStyle={{}}
      imageProps={{}}
      onLongPress={() => console.log('onLongPress')}
      onPress={() => console.log('onPress')}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size="xlarge"
      source={{
        uri: image,
      }}
      title="Penepene">
      <Avatar.Accessory size={32} onPress={selectImage} />
    </Avatar>
  );
};
