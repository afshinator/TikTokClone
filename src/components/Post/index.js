import React, {useEffect, useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';

import styles from './styles';

const test =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

const Post = () => {
  const [paused, setPaused] = useState(false);
  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{uri: test}}
          style={styles.video}
          resizeMode={'cover'}
          onError={(e) => console.log('From <Video />', e)}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>
      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Text style={{fontSize: 20, color:'white'}}>side</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text>bottom</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
