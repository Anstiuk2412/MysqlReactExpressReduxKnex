import axios from 'axios';

export const postData = async (url, data, setAlertsValues, setAlerts) => {
  await axios
    .post(url, data, {
      withCredentials: true,
    })
    .then((res) => {
      setAlertsValues({
        typography: [res.data],
        title: 'Success',
        severity: 'success',
      });
      setAlerts(true);
      if (window.location.pathname === '/signIn') window.location = '/';
    })
    .catch((error) => {
      setAlertsValues({
        typography: error.response.data,
        title: 'Error',
        severity: 'error',
      });
      setAlerts(true);
    });
};
