import h from 'virtual-dom/h.js';
import {render} from "lib/react.js";
import Input from "components/Input/";
import Link from "components/Link";
import Button from "components/Button";

const initialState = {email: '', password: ''}

export const handleInputChange = (state, key) => {
    return (e) => {
        state[key] = e.target.value;
        console.log(e)
    }
}

export const handleButtonAuth = (state) => () => {
    console.log(state)
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
                onchange:(e)=>{state['password']= e.target.value;
                console.log(e)}
            })]),
        h('div', {}, [
            Link({
                className: 'indent',
                title: 'Forgot Password',
                href: 'google.com'
            }),
            Button({
                title: 'Sing in',
                type: 'submit',
                onclick: handleButtonAuth(state)
            })
        ])
    ])
};

export default render(LoginForm, initialState);
