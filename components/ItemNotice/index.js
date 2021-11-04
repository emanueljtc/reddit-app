import React from 'react';
import { View, Text } from 'react-native';

const ItemNotice = ({ data }) => {
  //console.log('data notie item', data)
  let newsNotice = [];
  const map = data.map((item) => newsNotice.push(item.data));

  return newsNotice.map((notice) => {
    return (
      <View key={notice.id}  style={{
          backgroundColor: 'red',
          padding: 10,
          width: '100%',
          marginBottom: 5
      }}>
        <View
          style={{
            alignItems: 'flex-end',
          }}
        >
          <Text>{notice.created}</Text>
        </View>
        <Text>{notice.title}</Text>
      </View>
    );
  });
};

export default ItemNotice;
