export const userMessageResponse = (message, severity, redirect) => {
  return {
    data: {
      message: [
        {
          message: message,
          severity: severity,
          title: severity.toUpperCase(),
        },
      ],
    },
    redirect: redirect,
  };
};
