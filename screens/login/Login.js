import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import App from '../../App';
import IntroSlider from '../../intro/IntroSlider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity>
        style={styles.containerBtn}
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {justifyContent: 'center'},
  icon: {
    flexDirection: 'row-reverse',
    marginLeft: 16,
  },
  dummyTitle: {
    alignItems: 'center',
    marginTop: 24,
  },
  formContainer: {
    padding: 8,
    alignSelf: 'center',
  },
  form: {
    padding: 10,
    height: 40,
    width: 300,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    marginTop: 8,
  },
  containerBtn: {
    width: 300,
    height: 40,
    backgroundColor: 'maroon',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 3,
    padding: 10,
    alignContent: 'center',
  },
});
export default Login;
