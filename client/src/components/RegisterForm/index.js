import h from 'virtual-dom/h.js';
import {render} from "lib/react.js";
import Input from "components/Input";
import Button from "components/Button";
import {handleButtonAuth, handleInputChange} from "components/LoginForm";

const initialState = {email: '', name: '', password: '', surname: ''};

const RegisterForm = (props, state) => {
    return h('div', {}, [
        h('div', {}, [
            Input({
                name: 'email',
                type: 'text',
                placeholder: 'Email',
                className: 'inputIndent',
                value: state.email,
                onchange: handleInputChange(state, 'email')
            })        ]),
        h('div', {}, [
            Input({
                name: 'name',
                type: 'text',
                placeholder: 'Name',
                className: 'inputIndentSecond',
                value: state.name,
                onchange: handleInputChange(state, 'name')
            }),
        ]),
        h('div', {}, [
            Input({
                name: 'surname',
                type: 'text',
                placeholder: 'Surname',
                className: 'inputIndentSecond',
                value: state.surname,
                onchange: handleInputChange(state, 'surname')
            })
        ]),
        h('div', {}, [
            Input({
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                className: 'inputIndentSecond',
                value: state.password,
                onchange: handleInputChange(state, 'password')
            })
        ]),
        h('div', {}, [
            Button({
                title: 'Sing in',
                type: 'submit',
                onclick: handleButtonAuth(state)
            })
        ])
    ])
};

export default render(RegisterForm, initialState);