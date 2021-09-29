import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";
import Input from "./Input.js";
import Button from "./Button.js";
import {handleButtonAuth, handleInputChange} from "./loginForm.js";

const registerForm = (props, state) => {
    return h('div', {}, [
        Input({
            name: 'email',
            type: 'text',
            placeholder: 'Email',
            className: 'inputIndent',
            onchange: handleInputChange(state, 'email')
        }),
        h('div', {}, [
            h('div', {}, [
                Input({
                    name: 'name',
                    type: 'text',
                    placeholder: 'Name',
                    className: 'inputIndentSecond',
                    onchange: handleInputChange(state, 'name')
                }),
            ]),
            h('div', {}, [
                Input({
                    name: 'surname',
                    type: 'text',
                    placeholder: 'Surname',
                    className: 'inputIndentSecond',
                    onchange: handleInputChange(state, 'surname')
                })]),
            h('div', {}, [
                Input({
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password',
                    className: 'inputIndentSecond',
                    onchange: handleInputChange(state, 'password')
                })]),
            h('div', {}, [
                Button({
                    title: 'Sing in',
                    type: 'submit',
                    onclick: handleButtonAuth(state)
                })
            ])
        ])
    ])
};

export default render(registerForm);