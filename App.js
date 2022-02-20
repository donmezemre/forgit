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
      <Text>
        {env} {env}
      </Text>
    </View>
  );
};

export default App;
