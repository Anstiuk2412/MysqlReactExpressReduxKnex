import axios from 'axios';
import { API_URL } from '../config/config';

export const registration = async (name, email, password, passwordConfirm) => {
  axios
    .post(`${API_URL}/user/registration`, {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      is_active: 0,
      /*Confirm user plug*/
      confirm_user: 'sdadasdad',
    })
    .then((req) => {
      // handle success
      alert(req.data.toString());
    })
    .catch((error) => {
      // handle error
      alert(error.response.data);
    });
};

export const login = async (email, password) => {
  await axios
    .post(`${API_URL}/user/login`, {
      email: email,
      password: password,
    }, {
      withCredentials: true,
    })
    .then((req) => {
      // handle success
      alert(req.data.toString());
    })
    .catch((error) => {
      // handle error
      alert(error.response.data);
    });
};
