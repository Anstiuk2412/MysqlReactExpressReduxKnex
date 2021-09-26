import h from 'virtual-dom/h.js'
import {render} from '../lib/react.js'
import loginForm from "./loginForm.js";
import registerForm from "./registerForm.js";
import buttonChoiceForm from "./buttonChoiceForm.js";

const initialState = {
    formType: 'login'
};

export let renderRegister = () => {
    initialState.formType = 'register'
}

export let renderLogIn = () => {
    initialState.formType = 'login'
}

export default render((props, state) => {
    const Form = (state.formType === 'login') ? loginForm() : registerForm()
        return h('div', {}, [
            buttonChoiceForm({
                title: 'Log in',
                type: 'submit',
                changeFormType: renderLogIn
            }),
            buttonChoiceForm({
                title: 'Register',
                type: 'submit',
                changeFormType: renderRegister
            }), Form
        ])
    }, initialState
);
