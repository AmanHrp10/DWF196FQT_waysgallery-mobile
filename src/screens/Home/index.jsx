import React, { useState, useEffect } from 'react';
import { API } from '../../config/api';
import Loading from 'react-native-animated-ellipsis';
import DefaultProfile from '../../../assets/images/defaultProfile.png';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await API('/posts');

      if (response.data.status === 'Request failed') {
        setError(true);
        return;
      }
      const dataSort = response.data.data.posts.sort((a, b) => b.id - a.id);

      setPosts(dataSort);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = ({ item, index }) => {
    const photo = item.photos[0].image;

    return (
      <View style={styles.containerPost}>
        <View style={styles.containerList} key={index}>
          <View style={styles.descUser}>
            <View style={styles.avatar}>
              <Image
                source={
                  item.user.avatar === null
                    ? DefaultProfile
                    : {
                        uri: `http://192.168.43.50:8000/uploads/${item.user.avatar}`,
                      }
                }
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                }}
              />
            </View>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.user}>{item.user.fullname}</Text>
            </View>
          </View>
          <View style={styles.wrapperImagePost}>
            <TouchableOpacity onPress={() => alert(item.description)}>
              <Image
                source={{ uri: `http://192.168.43.50:8000/uploads/${photo}` }}
                style={{
                  width: 300,
                  height: 400,
                  resizeMode: 'contain',
                  borderRadius: 5,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <Text>Server error</Text>
      ) : loading ? (
        <View>
          <Text>
            <Loading
              numberOfDots={4}
              animationDelay={150}
              style={{
                color: '#2fc4b2',
                fontSize: 72,
              }}
            />
          </Text>
        </View>
      ) : (
        <FlatList
          data={posts}
          renderItem={renderPosts}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerPost: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  containerList: {
    backgroundColor: '#e7e7e7',
    padding: 10,
    resizeMode: 'cover',
    borderRadius: 7,
  },
  descUser: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  user: {
    color: '#2fc4b2',
  },
  wrapperImagePost: {
    marginVertical: -95,
  },
  imagePost: {},
  avatar: {
    paddingRight: 10,
  },
});

export default Home;
