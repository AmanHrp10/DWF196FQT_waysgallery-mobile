import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Alert = ({ closeModal, message, color }) => {
  return (
    <View style={styles.container}>
      <View style={styles.alertWrapper}>
        <Text style={{ color: color }} onPress={closeModal}>
          {message}
        </Text>
      </View>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({
  container: {
    // flex: 3,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '40%',
    left: '8%',
    height: 70,
    borderRadius: 5,
    // backgroundColor: '#e7e7e7',
    zIndex: 1,
  },
  alertWrapper: {},
});
