import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CustomerOpinions,
  DateSelection,
  Login,
  Path,
  ProviderCardData,
  ProviderCreation,
  ProviderPreview,
  Register,
  ServiceGrid,
  ServiceProviders,
  ServiceScore,
  ServicesHistory,
  ServiceTicket,
  UpcomingServices,
} from '../screens';

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Path" component={Path} />
      <Stack.Screen name="CustomerOpinions" component={CustomerOpinions} />
      <Stack.Screen name="ProviderCreation" component={ProviderCreation} />
      <Stack.Screen name="ProviderPreview" component={ProviderPreview} />
      <Stack.Screen name="UpcomingServices" component={UpcomingServices} />
      <Stack.Screen name="DateSelection" component={DateSelection} />
      <Stack.Screen name="ProviderCardData" component={ProviderCardData} />
      <Stack.Screen name="ServiceGrid" component={ServiceGrid} />
      <Stack.Screen name="ServiceProviders" component={ServiceProviders} />
      <Stack.Screen name="ServiceScore" component={ServiceScore} />
      <Stack.Screen name="ServicesHistory" component={ServicesHistory} />
      <Stack.Screen name="ServiceTicket" component={ServiceTicket} />
    </Stack.Navigator>
  );
};

export default Navigate;
