import h from 'virtual-dom/h.js';
import {render, updateDom} from "../lib/react.js";
import {renderLogIn} from "./App.js";

const buttonLogIn = (props, state) => {
    return h('button', {
            type: props.type,
            title: props.title,
            onclick: () => {
                renderLogIn()
                updateDom()
            }
        },
        [props.title]);
};

export default render(buttonLogIn);