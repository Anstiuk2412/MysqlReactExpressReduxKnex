import h from 'virtual-dom/h.js'
import {render} from '../lib/react.js'
import LoginForm from './LoginForm.js';
import Input from "./Input.js";
import Button from "./Button.js";
import Link from "./Link.js";
import Div from "./Div.js";
import buttonLogIn from "./buttonLogIn.js";
import buttonRegister from "./buttonRegister.js";

export let formState = true

export let renderRegister = () => {
    formState = false
}

export let renderLogIn = () => {
    formState = true
}

export default render(
    () => {
        if (formState) {
            return h('div', {style: {}}, [
                LoginForm([
                    Div([
                        buttonLogIn({
                            title: 'Log in',
                            type: 'submit'
                        }),
                        buttonRegister({
                            title: 'Register',
                            type: 'submit'
                        })]),
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
        if (!formState) {
            console.log(formState)
            return h('div', {style: {}}, [
                LoginForm([
                    Div([
                        buttonLogIn({
                            title: 'Log in',
                            type: 'submit'
                        }),
                        buttonRegister({
                            title: 'Register',
                            type: 'submit'
                        })]),
                    Div(
                        Input({
                            name: 'email',
                            placeholder: 'Email',
                            style: {margin: '10px 0px'}
                        })),
                    Div(
                        Input({
                            name: 'name',
                            placeholder: 'Name',
                            style: {margin: '0px 0px 10px'}
                        })),
                    Div(
                        Input({
                            name: 'Surname',
                            placeholder: 'Surname',
                            style: {margin: '0px 0px 10px'}
                        })),
                    Div(
                        Input({
                            name: 'password',
                            type: 'password',
                            placeholder: 'Password',
                            style: {margin: '0px 0px 10px'}
                        })),
                    Div([
                        Button({
                            title: 'Sing in',
                            type: 'submit'
                        })
                    ])
                ])
            ])
        }
    }
);
