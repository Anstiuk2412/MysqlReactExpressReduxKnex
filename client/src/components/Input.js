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

export default render(Input);