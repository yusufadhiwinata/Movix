import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: responsiveWidth(8),
    height: responsiveHeight(10),
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
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
});

const slides = [
  {
    key: 'somethun',
    title: 'Unlimited\n movies,TV\nshows & more',
    image: require('..//assets/images/splash_2.png'),
    colors: ['#fff'],
  },
  {
    key: 'somethun1',

    image: require('../assets/images/splash_1.png'),
    colors: ['#fff'],
  },
  {
    key: 'somethun2',

    image: require('../assets/images/splash_3.png'),
    colors: ['#fff'],
  },
];

export default class App extends React.Component {
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
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: height / 1,
          resizeMode: 'cover',
          opacity: 0.5,
        }}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={this._renderItem}
        // bottomButton
        showPrevButton
        // showSkipButton
        hideNextButton
        dotStyle={{backgroundColor: '#DDD'}}
        activeDotStyle={{backgroundColor: 'green'}}
        renderNextButton={() => {
          return (
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                fontWeight: 'bold',
                color: 'green',
              }}>
              Next
            </Text>
          );
        }}
        renderPrevButton={() => {
          return (
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                fontWeight: 'bold',
                color: 'green',
              }}>
              Back
            </Text>
          );
        }}
        renderDoneButton={() => {
          return (
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                fontWeight: 'bold',
                color: 'black',
              }}>
              Done
            </Text>
          );
        }}
        // hideDoneButton
        // onSkip={() => console.log("skipped")}
        onDone={() => alert('Done')}
      />
    );
  }
}
