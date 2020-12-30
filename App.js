/**

 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text>Show something else</Text>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({

// });

export default App;
