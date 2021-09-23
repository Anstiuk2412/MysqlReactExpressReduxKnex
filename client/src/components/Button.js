import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";

const Button = (props, state) => {
    return h('button', {
            type: props.type,
            title: props.title,
            onclick: () => {
                state.title = "test";
            }
        },
        [props.title]);
};

export default render(Button);