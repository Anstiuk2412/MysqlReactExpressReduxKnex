import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";
import Div from "./Div.js";
import buttonLogIn from "./buttonChoiceForm.js";
import Input from "./Input.js";
import Button from "./Button.js";
import {renderLogIn, renderRegister} from "./App.js";

const registerForm = (props, state) => {
    return h('div', {}, [Div([
        buttonLogIn({
            title: 'Log in',
            type: 'submit',
            changeFormType: renderLogIn
        }),
        buttonLogIn({
            title: 'Register',
            type: 'submit',
            changeFormType: renderRegister
        })]),
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