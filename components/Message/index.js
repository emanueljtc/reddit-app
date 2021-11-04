import React from 'react';
import { View, Text } from 'react-native';

const Message = ({ message = 'Loading...' }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
        {message}
      </Text>
    </View>
  );
};

export default Message;
