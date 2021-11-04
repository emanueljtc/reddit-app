import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ItemNotice } from '../../components';
import RedditServices from '../../utils/services/RedditServices';

const New = () => {
  const [data, setData] = useState([]);
  const callNewsData = async () => {
    try {
      const newsResponse = await RedditServices.news();
      //console.log('newsResponse', newsResponse.data.children);
      setData(newsResponse.data.children);
    } catch (err) {
      console.error('error callNewsData', err);
    }
  };

  useEffect(() => {
    callNewsData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ItemNotice data={data} />
    </View>
  );
};

export default New;
