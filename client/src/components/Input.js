import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";

const Input = (props) => {
    return h('input', {
        type: props.type,
        name: props.name,
        style: props.style,
        placeholder: props.placeholder
    });
};

export default render(Input);