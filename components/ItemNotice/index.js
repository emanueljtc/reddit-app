import React from 'react';
import moment from 'moment';
import { View, Text, Image } from 'react-native';
const ItemNotice = ({ data }) => {
  //console.log('data notie item', data)
  let newsNotice = [];
  const map = data.map((item) => newsNotice.push(item.data));

  return newsNotice.map((notice) => {
    const date = new Date(notice?.created * 1000).toISOString();
    const dateTimeAgo = moment(date).fromNow();
    return (
      <View
        key={notice.id}
        style={{
          padding: 10,
          width: '100%',
          marginBottom: 5,
          borderBottomWidth: 2,
          borderColor: 'orange',
        }}
      >
        <View
          style={{
            alignItems: 'flex-end',
          }}
        >
          <Text>{dateTimeAgo}</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: '18%',
                height: 60,
                marginRight: 10,
                backgroundColor: 'red',
              }}
            >
              <Image
                source={{ uri: notice?.thumbnail }}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
            <View
              style={{
                width: '80%',
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
              >
                {notice?.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}
              >
                <Text>{notice?.author}</Text>
                <Text>Score: {notice?.score}</Text>
                <Text>Comments: {notice?.num_comments}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  });
};

export default ItemNotice;
