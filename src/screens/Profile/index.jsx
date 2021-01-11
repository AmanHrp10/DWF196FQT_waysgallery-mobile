import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../../context/AppContext';

const MyProfile = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          <Text style={styles.textMy}>My</Text> Profile {state.id}
        </Text>
        <TouchableOpacity onPress={handleLogout} style={styles.btn}>
          <View style={styles.wrapperBtn}>
            <Text style={styles.textBtn}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: '75%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#2fc4b2',
    borderRadius: 3,
  },
  wrapperBtn: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  textBtn: {
    color: '#fff',
  },
  textMy: {
    color: '#2fc4b2',
  },
});

export default MyProfile;
