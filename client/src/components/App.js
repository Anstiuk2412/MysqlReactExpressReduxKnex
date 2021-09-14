import h from 'virtual-dom/h.js'
import {render} from '../lib/react.js'
import LoginForm from './LoginForm.js';
import Input from "./Input.js";
import Button from "./Button.js";
import Link from "./Link.js";
import Div from "./Div.js";

export default render(
    () => {
        return h('div', {style: {}}, [
            LoginForm([
                Div(
                    Input({
                        name: 'email',
                        placeholder: 'Email',
                        style: {margin: '10px 0px'}
                    })),
                Div(
                    Input({
                        name: 'password',
                        type: 'password',
                        placeholder: 'Password',
                        style: {margin: '0px 0px 10px'}
                    })),
                Div([
                    Link({
                        title: 'Forgot Password',
                        href: 'google.com',
                        style: {margin: '0px 6px 0px 0px'}
                    }),
                    Button({
                        title: 'Sing in',
                        type: 'submit'
                    })
                ])
            ])
        ])
    }
);
