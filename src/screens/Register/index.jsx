import React, { useContext, useState } from 'react';
import Brand from '../../../assets/images/logo.png';
import ChildLogo from '../../../assets/images/childLogo.png';

import Landing from '../../../assets/images/landing.png';
import Alert from '../../components/ModalAlert/index';
import { API } from '../../config/api';
import { AppContext } from '../../context/AppContext';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Register = ({ navigation }) => {
  const [state, dispatch] = useContext(AppContext);
  const [error, setError] = useState({
    status: false,
    message: '',
  });
  const [success, setSuccess] = useState({
    status: false,
    message: '',
  });
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullname: '',
  });

  const { email, password, fullname } = formData;

  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const body = JSON.stringify({ email, password, fullname });

      console.log(body);
      const config = {
        headers: {
          'content-type': 'application/json',
        },
      };
      const response = await API.post('/register', body, config);

      if (response.data.status === 'Request failed') {
        setError({
          status: true,
          message: 'Registration failed',
        });
        return;
      }

      setSuccess({
        status: true,
        message: 'Your account was registered',
      });

      dispatch({
        type: 'LOGIN',
      });

      dis;
      setFormData({
        email: '',
        password: '',
        fullname: '',
      });
    } catch (err) {
      console.log('ini', err);
    }
  };

  const toLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const closeModal = () => {
    setSuccess({
      status: false,
      message: '',
    });

    setError({
      status: false,
      message: '',
    });
  };
  return (
    <View style={styles.container}>
      {error.status && (
        <Alert
          message={error.message}
          closeModal={closeModalAlert}
          color='red'
        />
      )}
      <View style={styles.brand}>
        <Image source={Brand} style={styles.brandImage} />
        <Image source={ChildLogo} style={styles.childrenLogo} />
      </View>
      <View style={[styles.wrapperLogin]}>
        <View style={styles.login}>
          <Text style={styles.title}>Register</Text>
          <TextInput
            style={styles.input}
            placeholder='Email'
            onChangeText={(value) => handleChange(value, 'email')}
            value={email}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(value) => handleChange(value, 'password')}
            placeholder='Password'
            value={password}
          />
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleChange(value, 'fullname')}
            placeholder='Full Name'
            value={fullname}
          />
          <TouchableOpacity onPress={(e) => handleLogin(e)}>
            <View on style={styles.button}>
              <Text style={styles.textButton}>Register</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ textAlign: 'center' }}>
            Have a account? Click{' '}
            <Text style={styles.toLogin} onPress={toLogin}>
              {' '}
              Here
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  wrapperLogin: {
    // paddingVertical: 50,
    alignItems: 'center',
  },

  brand: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 60,
    justifyContent: 'center',
  },
  brandImage: {
    width: 150,
    height: 80,
  },
  childrenLogo: {
    position: 'absolute',
    left: 180,
    top: 38,
    width: 70,
    height: 90,
  },

  login: {
    width: 300,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingVertical: 25,
    borderRadius: 5,
    // paddingVertical: 25,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2fc4b2',
  },
  button: {
    backgroundColor: '#e7e7e7',
    paddingVertical: 10,
    backgroundColor: '#2fc4b2',
    marginTop: 10,
    borderRadius: 2,
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
  },
  toLogin: {
    color: 'blue',
  },
});
