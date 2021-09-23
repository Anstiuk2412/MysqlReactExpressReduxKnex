import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";
import Div from "./Div.js";
import Input from "./Input.js";
import Button from "./Button.js";

const registerForm = (props, state) => {
    return h('div', {}, [
        Div(
            Input({
                name: 'email',
                placeholder: 'Email',
                className: 'inputIndent'
            })),
        Div(
            Input({
                name: 'name',
                placeholder: 'Name',
                className: 'inputIndentSecond'
            })),
        Div(
            Input({
                name: 'Surname',
                placeholder: 'Surname',
                className: 'inputIndentSecond'
            })),
        Div(
            Input({
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                className: 'inputIndentSecond'
            })),
        Div([
                Button({
                    title: 'Sing in',
                    type: 'submit'
                })
            ]
        )]);
};

export default render(registerForm);