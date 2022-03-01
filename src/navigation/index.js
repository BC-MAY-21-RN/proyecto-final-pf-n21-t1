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
  RecruiterCreation,
  CreationSecondary,
  MapDirection,
  EditProvider,
  EditDates,
  MapDirection,
} from '../screens';
import {AuthProvider} from './AuthProvider';

const Stack = createNativeStackNavigator();
const stackNavigatorProps = {
  initialRouteName: 'Login',
  screenOptions: {
    headerShown: false,
  },
};

const Navigate = () => {
  return (
    <AuthProvider>
      <Stack.Navigator {...stackNavigatorProps}>
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
        <Stack.Screen name="RecruiterCreation" component={RecruiterCreation} />
        <Stack.Screen name="MapDirection" component={MapDirection} />
        <Stack.Screen name="CreationSecondary" component={CreationSecondary} />
        <Stack.Screen name="EditProvider" component={EditProvider} />
        <Stack.Screen name="EditDates" component={EditDates} />
      </Stack.Navigator>
    </AuthProvider>
  );
};

export default Navigate;
