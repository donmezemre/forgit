/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Text, View} from 'react-native';
import Config from 'react-native-config';

const App = () => {
  const env = Config.ENVIRONMENT;
  return (
    <View>
      <Text style={{fontSize: 30}}>
        {env} {env}
      </Text>
    </View>
  );
};

export default App;
