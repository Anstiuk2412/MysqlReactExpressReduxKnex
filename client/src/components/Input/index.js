import h from 'virtual-dom/h.js';
import {render} from "lib/react.js";

import './style.css'

const Index = (props, _state) => {
    return h('input', {
        type: props.type,
        name: props.name,
        className: props.className,
        placeholder: props.placeholder,
        value: props.value,
        onchange: (e) => props.onchange(e)
    });
};

Index.propsTypes = {
    type: (value) => typeof value === 'string',
    name: (value) => typeof value === 'string',
    className: (value) => typeof value === 'string',
    placeholder: (value) => typeof value === 'string',
    value: (value) => typeof value === 'string',
    onchange: (value) => typeof value === 'function',
}

export default render(Index);