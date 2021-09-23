import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";

const Link = (props, _state) => {
    return h('a', {
            className: props.className,
            href: props.href
        },
        [props.title]);
};

export default render(Link);