import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainNavigation from './components/MainNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer independent={true}>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
