import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  TextInput,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import Login from '../screens/login/Login';
import App from '../App';

const slides = [
  {
    key: 'somethun',
    title: 'Unlimited\n movies,TV\nshows & more',
    image: require('..//assets/images/splash_2.png'),
    colors: ['#fff'],
  },
  {
    key: 'somethun1',
    title: 'This is only \n Dummy!',

    image: require('../assets/images/splash_1.png'),
    colors: ['#fff'],
  },
  {
    key: 'somethun2',
    title: 'Get Started to \n Experience',

    image: require('../assets/images/splash_3.png'),
    colors: ['#fff'],
  },
];

export default class IntroSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      isVisible: false,

      //To show the main page of the app
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('first_time').then(value => {
      this.setState({showRealApp: !!value, loading: false});
    });
  }

  _onDone = () => {
    this.setState({showRealApp: true});
    // AsyncStorage.setItem('first_time', 'true').then(() => {
    //   this.props.navigation.navigate('Home');
    // });
  };
  displayModal(show) {
    this.setState({isVisible: show});
  }

  _renderItem = ({item, dimensions}) => (
    <View
      style={[
        styles.mainContent,
        {
          flex: 1,
          paddingTop: item.topSpacer,
          paddingBottom: item.bottomSpacer,
          width: dimensions.width,
          backgroundColor: 'black',
        },
      ]}
      colors={item.color}>
      <Image source={item.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.state.isVisible}
        onRequestClose={() => {
          this.displayModal(!this.state.isVisible);
        }}>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.icon}>
            <TouchableOpacity
              onPress={() => {
                this.displayModal(!this.state.isVisible);
              }}>
              <Icon name="close" size={24} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.dummyTitle}>
            <Text style={{color: 'black', fontWeight: 'normal', fontSize: 32}}>
              Ready to Watch?
            </Text>
            <Text
              style={{
                alignItems: 'center',
                textAlign: 'center',
                marginTop: 16,
              }}>
              Enter your email to create or sign in to your {'\n'}account
            </Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput style={styles.form} placeholder="Email" />
            <TextInput
              style={styles.form}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={{
                backgroundColor: 'maroon',
                width: 300,
                height: 30,
                marginTop: 10,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}
              onPress={this._onDone}>
              <Text style={{color: 'white'}}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );

  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          data={slides}
          renderItem={this._renderItem}
          // bottomButton

          // showSkipButton
          hideNextButton
          dotStyle={{backgroundColor: 'gray'}}
          activeDotStyle={{backgroundColor: '#ddd'}}
          renderNextButton={() => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.displayModal(true);
                }}
                style={{
                  padding: 8,
                  backgroundColor: 'maroon',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.3),
                    fontWeight: 'bold',
                    color: 'white',
                    alignContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            );
          }}
          renderDoneButton={({navigation}) => {
            return (
              <View
                navigation={navigation}
                style={{
                  padding: 8,
                  backgroundColor: 'maroon',
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.3),
                    fontWeight: 'bold',
                    color: 'white',
                    alignContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Get Started
                </Text>
              </View>
            );
          }}
          onDone={() => this.displayModal(true)}
          bottomButton
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: responsiveHeight(-2),
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    marginTop: responsiveHeight(-25),
  },
  containerBtn: {
    width: 100,
    height: 50,
    backgroundColor: 'maroon',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 10,
    alignContent: 'center',
    flex: 1,
  },
  mainContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  icon: {
    flexDirection: 'row-reverse',
    marginLeft: 16,
    marginTop: 50,
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
});
