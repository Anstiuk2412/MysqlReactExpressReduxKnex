import h from 'virtual-dom/h.js';
import { render } from './lib/react.js';
import loginForm from 'components/LoginForm';
import registerForm from 'components/RegisterForm';
import Button from 'components/Button';

// variables of start state of Form
const initialFormState = {
  formType: 'login',
};

const renderForm = (state, stateType) => () => {
  state.formType = stateType;
};

export default render((props, state) => {
  //We create variable Form to assign it state
  const Form = state.formType === 'login' ? loginForm() : registerForm();
  return h('div', {}, [
    Button({
      title: 'Log in',
      type: 'submit',
      onclick: renderForm(state, 'login'),
    }),
    Button({
      title: 'Register',
      type: 'submit',
      onclick: renderForm(state, 'register'),
    }),
    Form,
  ]);
}, initialFormState);
