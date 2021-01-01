import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import Navigation from './src/navigation';
import Home from './src/screens/Home';
import { createUser } from './graphql/mutations';
import { getUser } from './graphql/queries';

// TODO:
const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
];
const getRandomImage = () => {
  return randomImages[Math.floor(Math.random() * randomImages.length)];
};

const App = () => {
  useEffect(() => {
    const fetchUser = async () => {
      // get currently authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      console.log('>>>> user ',userInfo)
      if (!userInfo) {  // shouldn't happen
        return;
      }

      // check if THE user exist in database
      const getUserResponse = await API.graphql(
        graphqlOperation(getUser, {id: userInfo.attributes.sub}),
      );

      if (getUserResponse.data.getUser) {
        console.log('>>>> User already exists in database');
        return;
      }

      // if it doesn't (it's newly registered user)
      // then, create a new user in database
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getRandomImage(),
      };

      await API.graphql(graphqlOperation(createUser, {input: newUser}));
      console.log('>>>>> new user created ', newUser);
    };

    fetchUser();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({

// });

export default withAuthenticator(App);
