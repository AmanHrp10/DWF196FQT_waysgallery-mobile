import React, { useContext, useState } from 'react';
import Brand from '../../../assets/images/logo.png';
import ChildLogo from '../../../assets/images/childLogo.png';
import { API } from '../../config/api';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AppContext } from '../../context/AppContext';
import Alert from '../../components/ModalAlert/index';

const Login = ({ navigation }) => {
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
  });

  const { email, password } = formData;

  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const body = JSON.stringify({ email, password });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    try {
      const response = await API.post('/login', body, config);

      if (response.data.status === 'Request failed') {
        setError({
          status: true,
          message: 'Login Failed',
        });
        return;
      }

      setSuccess({
        status: true,
        message: `Login Success`,
      });
      dispatch({
        type: 'LOGIN',
      });

      setFormData({
        email: '',
        password: '',
      });
      // navigation.navigate('HomeScreen');
    } catch (err) {
      console.log('ini', err);
    }
  };

  const closeModalAlert = () => {
    setError({
      status: false,
      message: '',
    });
    setSuccess({
      status: false,
      message: '',
    });
  };

  const toRegister = () => {
    navigation.navigate('RegisterScreen');
  };
  return (
    <View>
      {error.status && (
        <Alert
          message={error.message}
          closeModal={closeModalAlert}
          color='red'
        />
      )}
      {success.status && (
        <Alert
          message={success.message}
          closeModal={closeModalAlert}
          color='green'
        />
      )}
      <View style={styles.wrapperLogin}>
        <View style={styles.brand}>
          <Image source={Brand} style={styles.brandImage} />
          <Image source={ChildLogo} style={styles.childrenLogo} />
        </View>
        <View style={styles.login}>
          <Text style={styles.title}>Login</Text>
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
          <TouchableOpacity onPress={(e) => handleLogin(e)}>
            <View on style={styles.button}>
              <Text style={styles.textButton}>Login</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ textAlign: 'center' }}>
            Not have a account? Click{' '}
            <Text style={styles.toLogin} onPress={toRegister}>
              Here
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapperLogin: {
    alignItems: 'center',
  },
  brand: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 60,
  },
  brandImage: {
    width: 150,
    height: 80,
  },
  childrenLogo: {
    position: 'absolute',
    left: 95,
    top: 38,
    width: 70,
    height: 90,
  },
  login: {
    width: 300,
    paddingHorizontal: 25,
    paddingVertical: 25,
    // marginVertical: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
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
    paddingVertical: 9,
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
