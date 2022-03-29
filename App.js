import React, {useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Splash from './splash/Splash';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Splash />
    </View>
  );
};

export default App;
