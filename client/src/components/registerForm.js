import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";
import Input from "./Input.js";
import Button from "./Button.js";
import Link from "./Link.js";

const registerForm = (props, state) => {
    return h('div', {}, [
        Input({
            name: 'email',
            type: 'text',
            placeholder: 'Email',
            className: 'inputIndent'
        }),
        h('div', {}, [
            h('div', {}, [
                Input({
                    name: 'name',
                    type: 'text',
                    placeholder: 'Name',
                    className: 'inputIndentSecond'
                }),
            ]),
            h('div', {}, [
                Input({
                    name: 'Surname',
                    type: 'text',
                    placeholder: 'Surname',
                    className: 'inputIndentSecond'
                })]),
            h('div', {}, [
                Input({
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password',
                    className: 'inputIndentSecond'
                })]),
            h('div', {}, [
                Button({
                    title: 'Sing in',
                    type: 'submit'
                })
            ])
        ])
    ])
};

export default render(registerForm);