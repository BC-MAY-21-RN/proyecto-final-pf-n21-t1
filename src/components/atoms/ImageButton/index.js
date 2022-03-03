import React, {useState} from 'react';
import {Avatar} from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Color} from '../../../theme/default';

const selectImage = setImage => {
  const options = {
    title: 'Selecciona una imagen',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  launchImageLibrary(options, response => {
    if (response.errorCode) {
      console.log(response.errorMessage);
    } else if (response.didCancel) {
      console.log('El usuario canceló la selección');
    } else {
      const path = response.assets[0].uri;
      setImage(path);
    }
  });
};

/*const takePicture = () => {
  const options = {
    title: 'Tomar una imagen',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    includeBase64: true,
  };
  launchCamera(options, response => {
    if (response.errorCode) {
      console.log(response.errorMessage);
    } else if (response.didCancel) {
      console.log('El usuario canceló la fotografía');
    } else {
      const uri = response.assets[0].uri;
      setImage(uri);
    }
  });
};*/

export const ImageButton = ({image, setImage, noEdit}) => {
  return (
    <Avatar
      activeOpacity={1}
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
      title="User">
      {noEdit === true ? null : (
        <Avatar.Accessory
          size={42}
          onPress={() => selectImage(setImage)}
          style={{backgroundColor: Color.secondary}}
        />
      )}
    </Avatar>
  );
};
