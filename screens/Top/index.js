import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ItemNotice } from '../../components';
import RedditServices from '../../utils/services/RedditServices';
import { PageScrollView } from 'pagescrollview';
import Message from '../../components/Message';

const Top = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  const callData = async () => {
    setLoading(true);
    try {
      const response = await RedditServices.callInformation('top');
      setData(response.data.children);
      setLoading(false);
    } catch (err) {
      console.error('error callData Top', err);
      setLoading(false);
      setShowError(true);
    }
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <PageScrollView
      backgroundColor="#ebf3f3"
      viewStyle={{
        padding: 0,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {loading ? (
          <Message />
        ) : showError ? (
          <Message message="Houston, We have problem." />
        ) : (
          <ItemNotice data={data} />
        )}
      </View>
    </PageScrollView>
  );
};

export default Top;
