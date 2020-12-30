import React from 'react';
import {View, Text} from 'react-native';
import Video from 'react-native-video';

import styles from './styles';

const test = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'

const Post = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{uri: test}}
        style={styles.video}
        resizeMode={'cover'}
        onError={(e) => console.log('From <Video />', e)}
      />
    </View>
  );
};

export default Post;
