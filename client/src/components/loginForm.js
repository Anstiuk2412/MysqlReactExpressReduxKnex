import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";
import Div from "./Div.js";
import Input from "./Input.js";
import Link from "./Link.js";
import Button from "./Button.js";

const LoginForm = (props, state) => {
    return h('div', {}, [
        Div(
            Input({
                name: 'email',
                placeholder: 'Email',
                className: 'inputIndent'
            })),
        Div(
            Input({
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                className: 'inputIndentSecond'
            })),
        Div([
            Link({
                className: 'indent',
                title: 'Forgot Password',
                href: 'google.com'
            }),
            Button({
                title: 'Sing in',
                type: 'submit'
            })
        ])
    ]);
};

export default render(LoginForm);
