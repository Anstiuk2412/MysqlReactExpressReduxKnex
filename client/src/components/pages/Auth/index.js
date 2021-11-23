import styles from './index.module.css';
import { SignIn } from '../../SignInForm';
import { SignUp } from '../../SignUpForm';
import { useState } from 'react';
import { ButtonBig } from '../../ButtonBig';

const AuthForm = () => {
  const [login, setlogin] = useState(true);
  const registerClicked = () => {
    setlogin(false);
  };
  const loginClicked = () => {
    setlogin(true);
  };
  return (
    <div>
      <div className={styles.ChooseSignButtonBox}>
        <div className={styles.RectangleSingInChooseForm}>
          <ButtonBig
            className={login ? 'active' : 'disable'}
            variant="text"
            onClick={loginClicked}
          >
            Sign In
          </ButtonBig>
        </div>
        <div className={styles.RectangleSingUpChooseForm}>
          <ButtonBig
            className={login ? 'disable' : 'active'}
            variant="text"
            onClick={registerClicked}
          >
            Sign Up
          </ButtonBig>
        </div>
      </div>
      <div>{login ? <SignIn /> : <SignUp />}</div>
    </div>
  );
};

export default AuthForm;
