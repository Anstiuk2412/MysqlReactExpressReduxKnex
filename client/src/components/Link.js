import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";

const Link = (props, _state) => {
    return h('a', {
            className: props.className,
            href: props.href
        },
        [props.title]);
};

Link.propsTypes = {
    className: (value) => typeof value === 'string',
    href: (value) => typeof value === 'string'
}

export default render(Link);