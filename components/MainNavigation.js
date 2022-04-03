import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import IntroSlider from '../intro/IntroSlider';
import Login from '../screens/login/Login';
const Stack = createStackNavigator();

class MainNavigation extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator headerMode={'screen'}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            // header: ({navigation}) => (
            //   <Navbar navigation={navigation} main={true} />
            // ),
          }}
        />
        {/* <Stack.Screen
          name="Detail"
          component={Detail}
          //   options={{
          //     headerTransparent: true,
          //     header: ({navigation}) => (
          //       <Navbar main={false} navigation={navigation} />
          //     ),
          //   }}
        /> */}
        <Stack.Screen
          name="IntroSlider"
          component={IntroSlider}
          options={{
            headerShown: false,
          }}
          //   options={{
          //     headerTransparent: true,
          //     header: ({navigation}) => (
          //       <Navbar main={false} navigation={navigation} />
          //     ),
          //   }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainNavigation;
