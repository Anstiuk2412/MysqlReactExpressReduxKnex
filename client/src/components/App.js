import h from 'virtual-dom/h.js'
import {render} from '../lib/react.js'
import loginForm from "./loginForm.js";
import registerForm from "./registerForm.js";
import Button from "./Button.js";

const initialState = {
    formType: 'login'
};

const renderForm = (state, stateType) => () => {
    state.formType = stateType
}

export default render((props, state) => {
        const Form = (state.formType === 'login') ? loginForm() : registerForm()
        return h('div', {}, [
            Button({
                title: 'Log in',
                type: 'submit',
                onclick: renderForm(state, 'login')
            }),
            Button({
                title: 'Register',
                type: 'submit',
                onclick: renderForm(state, 'register')
            }), Form
        ])
    }, initialState
);
