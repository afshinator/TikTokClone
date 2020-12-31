import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post';

import posts from '../../../dummyData/posts';
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
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height -100}  /* TODO */
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export default Home;
