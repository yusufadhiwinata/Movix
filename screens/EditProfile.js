import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Button,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAuth, updateProfile} from 'firebase/auth';
import {useNavigation} from '@react-navigation/core';
import {db, auth} from '../firebase';
import {collection, addDoc} from 'firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';

class EditProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.auth = getAuth();
    this.dbRef = db.collection('users');
    this.state = {
      name: '',
      email: '',
      mobile: '',
      isLoading: false,
    };
  }
  handleSignOut() {
    auth
      .signOut()
      .then(() => {
        this.props.navigation.popToTop();
        this.props.navigation.replace('Login');
      })
      .catch(err => alert(err.message));
  }
  handleUpdate() {
    updateProfile(auth.currentUser, {
      displayName: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
    })
      .then(() => {
        this.props.navigation.replace('Main');
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleEmail = text => {
    this.setState({email: text});
  };
  handleName = text => {
    this.setState({name: text});
  };
  handleMobile = text => {
    this.setState({mobile: text});
  };
  storeUser() {
    if (this.state.name === '') {
      alert('Fill at least your name!');
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbRef
        .add({
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile,
        })
        .then(res => {
          this.setState({
            name: '',
            email: '',
            mobile: '',
            isLoading: false,
          });
          this.props.navigation.navigate('Main');
        })
        .catch(err => {
          console.error('Error found: ', err);
          this.setState({
            isLoading: false,
          });
        });
    }
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {/* {Upload Image} */}
        {
          <View style={styles.imageBg}>
            <Icon style={styles.cameraBtn} name="camera" size={24} />
          </View>
        }
        {/* {Input Name} */}
        {
          <View style={styles.inputGroup}>
            <TextInput
              placeholder={'Name'}
              value={this.state.name}
              onChangeText={this.handleName}
            />
          </View>
        }
        {/* {Input Email} */}
        {
          <View style={styles.inputGroup}>
            <TextInput
              placeholder={'Email'}
              value={this.state.email}
              onChangeText={this.handleEmail}
            />
          </View>
        }
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Mobile'}
            value={this.state.mobile}
            onChangeText={this.handleMobile}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleUpdate()}>
            <Text style={styles.updateTitle}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleSignOut()}>
            <Text style={styles.updateTitle}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EditProfile;

// const EditProfile = () => {
//   const [username, setUsername] = useState('');
//   const [last, setLast] = useState('');

//   const auth = getAuth();

//   const navigation = useNavigation();

//   const handleUpdate = async () => {
//     try {
//       const docRef = await addDoc(collection(db, 'users'), {
//         nama: 'username',
//         terakhir: 'last',
//       }).then(() => {
//         navigation.navigate('Main');
//       });
//       console.log('Document written with ID: ', docRef.id);
//     } catch (e) {
//       console.error('Error adding document: ', e);
//     }
//   };

//   return (

//   );
// };

// export default EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
  inputGroup: {
    padding: 8,
    marginTop: 8,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'blue',
    width: '90%',
    alignSelf: 'center',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 3,
    backgroundColor: 'maroon',
    width: 200,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  imageBg: {
    width: 75,
    height: 75,
    backgroundColor: 'gray',
    borderRadius: 75 / 2,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'relative',
  },
  cameraBtn: {position: 'absolute', left: 50, top: 50},
  updateTitle: {color: 'white', fontSize: 18},
});
