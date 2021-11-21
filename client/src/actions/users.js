import axios from 'axios';
import { API_URL } from '../config/config';

export const registration = async (
  name,
  surname,
  email,
  password,
  confirm_user,
) => {
  axios
    .post(`${API_URL}/user/registration`, {
      name: name,
      surname: surname,
      email: email,
      password: password,
      is_active: 0,
      confirm_user: confirm_user,
    })
    .then((req) => {
      // handle success
      alert(req.data);
    })
    .catch((error) => {
      // handle error
      alert(error.response.data);
    });
};

export const login = async (email, password, passwordConfirm) => {
  await axios
    .post(`${API_URL}/user/login`, {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    })
    .then((req) => {
      // handle success
      alert(req.data);
    })
    .catch((error) => {
      // handle error
      alert(error.response.data);
    });
};
