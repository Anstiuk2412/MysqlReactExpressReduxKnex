import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";

const Input = (props, _state) => {
    return h('input', {
        type: props.type,
        name: props.name,
        className: props.className,
        placeholder: props.placeholder
    });
};

Input.propsTypes ={
    type: (value) => typeof value === 'string',
    name: (value) => typeof value === 'string',
    className: (value) => typeof value === 'string',
    placeholder: (value) => typeof value === 'string'
}

export default render(Input);