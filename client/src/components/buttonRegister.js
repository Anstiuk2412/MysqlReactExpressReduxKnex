import h from 'virtual-dom/h.js';
import {renderRegister} from "./App.js";
import {render, updateDom} from "../lib/react.js";



const buttonRegister = (props, state) => {
    return h('button', {
            type: props.type,
            title: props.title,
            onclick: () => {
                renderRegister()
                updateDom()
            }
        },
        [props.title]);
};

export default render(buttonRegister);