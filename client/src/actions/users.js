import { API_URL } from '../config/config.js';
import { postData } from '../lib/axios/axios';

export const registration = async (
  name,
  email,
  password,
  passwordConfirm,
  setAlertsValues,
  setAlerts,
) => {
  await postData(
    `${API_URL}/api/registration`,
    {
      name,
      email,
      password,
      passwordConfirm,
      // eslint-disable-next-line camelcase
      is_active: 0,
      // eslint-disable-next-line camelcase
      confirm_user: 'aasdadad',
    },
    setAlertsValues,
    setAlerts,
  );
};
export const login = async (email, password, setAlertsValues, setAlerts) => {
  await postData(
    `${API_URL}/api/login`,
    { email, password },
    setAlertsValues,
    setAlerts,
  );
};
