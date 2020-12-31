import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar} from 'react-native';

import Navigation from './src/navigation';
import Home from './src/screens/Home';

const App = () => {
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

export default App;
