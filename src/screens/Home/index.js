import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../../graphql/queries';

// import posts from '../../../dummyData/posts';

// const post = {
//   user: {username: 'afshin'},
//   description: 'this is oging to be the description so good',
//   song: {
//     name: 'valhalla',
//     imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
//   },
//   likes: 32,
//   comments: 12,
//   shares: 22,
// };

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      // fetch all the posts
      try {
        const response = await API.graphql(graphqlOperation(listPosts));
console.log('GraphQL response: ', response)
        setPosts(response.data.listPosts.items);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPost();
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 100} /* TODO */
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
