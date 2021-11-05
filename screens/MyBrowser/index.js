import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native';

const MyBrowser = ({ url }) => {
  console.log(url);
  return (
    <View style={{ alignSelf: 'stretch', flex: 1 }}>
      <WebView
        source={{ uri: url }}
        startInLoadingState={true}
        scalesPageToFit={true}
        /* style={{
          width: 320,
          height: 300,
        }} */
      />
    </View>
  );
};

export default MyBrowser;
