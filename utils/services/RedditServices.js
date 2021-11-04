import axios from 'axios';

const URL = 'https://api.reddit.com/r/pics/';

const callInformation = async (type) => {
  try {
    const res = await axios.get(`${URL}${type}.json`);
    //console.log('response new', res.data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export default { callInformation };
