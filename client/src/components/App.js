import h from 'virtual-dom/h.js'
import {render} from '../lib/react.js'
import loginForm from "./loginForm.js";
import registerForm from "./registerForm.js";

export const initialState = {
    formType: 'login'
};

export let renderRegister = () => {
   return initialState.formType = 'register'
}

export let renderLogIn = () => {
    return initialState.formType = 'login'
}

export default render((props, state) => {
        const Form = (state.formType === 'login') ? loginForm() : registerForm()
        return h('div', {}, Form
        )
    }, initialState
);
