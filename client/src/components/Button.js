import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";

let initialState = {title: 'Sing in'}

const Button = (props, state) => {
    return h('button', {
            type: props.type,
            title: props.title,
            onclick: () => {
                state.title = "test";
            }
        },
        [initialState.title]);
};

export default render(Button, initialState);