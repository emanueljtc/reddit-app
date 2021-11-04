import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ItemNotice } from '../../components';
import RedditServices from '../../utils/services/RedditServices';
import { PageScrollView } from 'pagescrollview';

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
    <PageScrollView backgroundColor="#ebf3f3" viewStyle={{
      padding: 0
    }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ItemNotice data={data} />
      </View>
    </PageScrollView>
  );
};

export default New;
