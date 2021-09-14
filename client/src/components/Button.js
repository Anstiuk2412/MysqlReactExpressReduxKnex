import h from 'virtual-dom/h.js';
import { render } from "../lib/react.js";

const Button = (props) => {
    return h('button', {type: props.type}, [props.title]);
};

export default render(Button);