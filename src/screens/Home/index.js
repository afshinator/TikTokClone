import React from 'react';
import {View, Text} from 'react-native';
import Post from '../../components/Post';

const post = {
  user: {username: 'afshin'},
  description: 'this is oging to be the description so good',
  song: {
    name: 'valhalla',
    imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
  },
  likes: 32,
  comments: 12,
  shares: 22,
};


const Home = () => {
  return (
    <View>
      <Post post={post} />
    </View>
  );
};

export default Home;
