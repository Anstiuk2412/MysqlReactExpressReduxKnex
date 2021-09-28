import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";
import Input from "./Input.js";
import Link from "./Link.js";
import ButtonAuth from "./ButtonAuth.js";

const initialState = {email: '', password: ''}

const handleInputChange = (state, key) => (e) => {
    state[key] = e.target.value;
    console.log(e)
}

const handleButtonAuth = (state, key, keySecond) =>()=>{
    let authenticate = {
        email: state[key],
        password: state[keySecond],
    }
    console.log(authenticate)
}

const LoginForm = (props, state) => {
    return h('div', {}, [
        h('div', {}, [
            Input({
                type: 'text',
                name: 'email',
                placeholder: 'Email',
                className: 'inputIndent',
                value: state.email,
                onchange: handleInputChange(state, 'email')
            })]),
        h('div', {}, [
            Input({
                type: 'password',
                name: 'password',
                placeholder: 'Password',
                className: 'inputIndentSecond',
                value: state.password,
                onchange: handleInputChange(state, 'password')
            })]),
        h('div', {}, [
            Link({
                className: 'indent',
                title: 'Forgot Password',
                href: 'google.com'
            }),
            ButtonAuth({
                title: 'Sing in',
                type: 'submit',
                onclick: handleButtonAuth(state, 'email', 'password')
            })
        ])
    ])
};

export default render(LoginForm, initialState);
