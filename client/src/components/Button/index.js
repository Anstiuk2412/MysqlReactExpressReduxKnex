import h from 'virtual-dom/h.js';
import {render} from "lib/react.js";
import {typeOfProps} from "lib/propsTypeValidation.js";

const Button = (props, state) => {
    return h('button', {
            type: props.type,
            title: props.title,
            onclick: () => {
                props.onclick();
            },

        },
        [props.title]);
};

Button.propsTypes = {
    type: typeOfProps('string'),
    title: typeOfProps('string'),
    onclick: typeOfProps('function'),
}

export default render(Button);