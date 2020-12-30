import React, {useEffect, useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import Video from 'react-native-video';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

const post = {
  user: {username: 'afshin'},
  description: 'this is oging to be the description so good',
  song: {name: 'valhalla', 
  imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png'},
};
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
          <Text style={{fontSize: 20, color: 'white'}}>side</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>@{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>

            <View style={styles.songRow}>
              <FontAwesomeIcon icon={faMusic} size={24} color="white" />
              <Text style={styles.songName}>{post.song.name}</Text>
            </View>
          </View>

          <Image style={styles.songImage} source={{uri: post.song.imageUri}} />
        </View>
      </View>
    </View>
  );
};

export default Post;
