import styles from './index.module.css';
import { SignIn } from 'components/SignInForm';
import { SignUp } from 'components/SignUpForm';
import { ButtonBig } from 'components/ButtonBig';
import React from 'react';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const history = useHistory();
  const signStatus = history.location.pathname === '/signIn';

  return (
    <div>
      <div className={styles.ChooseSignButtonBox}>
        <div className={styles.RectangleSingInChooseForm}>
          <ButtonBig
            className={signStatus ? 'active' : 'disable'}
            variant="text"
            onClick={() => history.push('/signIn')}
          >
            Sign In
          </ButtonBig>
        </div>
        <div className={styles.RectangleSingUpChooseForm}>
          <ButtonBig
            className={signStatus ? 'disable' : 'active'}
            variant="text"
            onClick={() => history.push('/signUp')}
          >
            Sign Up
          </ButtonBig>
        </div>
      </div>
      <div>{signStatus ? <SignIn /> : <SignUp />}</div>
    </div>
  );
};
export default AuthForm;
