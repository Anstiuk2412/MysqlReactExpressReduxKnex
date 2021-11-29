import axios from 'axios';

export const postData = (url, data) => {
  axios
    .post(url, data, {
      withCredentials: true,
    })
    .then()
    .then((res) => {
      // handle success
      alert(res.data.toString());
      window.location = '/';
    })
    .catch((error) => {
      // handle error
      alert(error.response.data);
    });
};
