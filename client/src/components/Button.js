import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";

const Button = (props, state) => {
    return h('button', {
            type: props.type,
            title: props.title,
            onclick: () => {
                state.changeFormType = props.changeFormType();
            },

        },
        [props.title]);
};

Button.propsTypes = {
    type: (value) => typeof value === 'string',
    title: (value) => typeof value === 'string',
}

export default render(Button);