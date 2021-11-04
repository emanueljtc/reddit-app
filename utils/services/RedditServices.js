import axios from 'axios';

const URL = 'https://api.reddit.com/r/pics/';

const news = async () => {
  try {
    const res = await axios.get(`${URL}new.json`);
    //console.log('response new', res.data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export default { news };
