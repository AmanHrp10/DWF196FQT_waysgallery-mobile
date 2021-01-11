import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Landing = () => {
  return (
    <View>
      <View style={styles.landing}>
        <Image style={styles.landingImage} source={Landing} />
      </View>
      <View style={styles.logo}>
        <View style={styles.imageLogo}>
          <Image source={Brand} style={styles.brandImage} />
          <Image source={ChildLogo} style={styles.childrenLogo} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingBottom: 4,
              //   backgroundColor: 'red',
              //   paddingHorizontal: 30,
            }}
          >
            Show your work to inspire everyone
          </Text>
          <Text>
            Ways Exhibition is a website design creators gather to share their
            work with other creators
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  landing: {
    paddingBottom: 30,
  },
  brandImage: {
    width: 300,
    height: 150,
    paddingHorizontal: 50,
    resizeMode: 'stretch',
  },
  logo: {
    marginBottom: 30,
    paddingHorizontal: 11,
  },
  imageLogo: {
    flexDirection: 'row',
  },
  childrenLogo: {
    position: 'absolute',
    left: 190,
    top: -20,
    width: 120,
    height: 140,
  },
  landingImage: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
    // opacity: 0.2,
  },
});
