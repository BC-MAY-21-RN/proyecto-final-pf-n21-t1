import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigate from './src/navigation/index';

const App = () => {
  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  );
};

export default App;
