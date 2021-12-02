import styles from './index.module.css';
import { SignIn } from 'components/SignInForm';
import { SignUp } from 'components/SignUpForm';
import { ButtonBig } from 'components/ButtonBig';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = (props) => {
  const state = props.state;
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.ChooseSignButtonBox}>
        <div className={styles.RectangleSingInChooseForm}>
          <ButtonBig
            className={state ? 'active' : 'disable'}
            variant="text"
            onClick={() => navigate('/signIn')}
          >
            Sign In
          </ButtonBig>
        </div>
        <div className={styles.RectangleSingUpChooseForm}>
          <ButtonBig
            className={state ? 'disable' : 'active'}
            variant="text"
            onClick={() => navigate('/signUp')}
          >
            Sign Up
          </ButtonBig>
        </div>
      </div>
      <div>{state ? <SignIn /> : <SignUp />}</div>
    </div>
  );
};

export default AuthForm;
