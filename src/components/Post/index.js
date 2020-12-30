import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMusic,
  faHeart,
  faCommentDots,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

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
const test =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4';

const Post = () => {
  const [paused, setPaused] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [videoUri, setVideoUri] = useState('');

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    // setPost({
    //   ...post,
    //   likes: post.likes + likesToAdd,
    // });
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{uri: test}}
            style={styles.video}
            resizeMode={'cover'}
            onError={(e) => console.log('From <Video />', e)}
            repeat={true}
            paused={paused}
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePicture}
                source={{uri: post.user.imageUri}}
              />

              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onLikePress}>
                <FontAwesomeIcon
                  icon={faHeart}
                  size={40}
                  color={isLiked ? 'red' : 'white'}
                />
                <Text style={styles.statsLabel}>{post.likes}</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faCommentDots} size={40} color="white" />
                <Text style={styles.statsLabel}>{post.comments}</Text>
              </View>

              <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faShare} size={35} color="white" />
                <Text style={styles.statsLabel}>{post.shares}</Text>
              </View>
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

              <Image
                style={styles.songImage}
                source={{uri: post.song.imageUri}}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
