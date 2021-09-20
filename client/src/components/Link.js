import h from 'virtual-dom/h.js';
import { render } from "../lib/react.js";

const Link = (props, _state) => {
    return h('a', {href: props.href, style:props.style}, [props.title]);
};

export default render(Link);