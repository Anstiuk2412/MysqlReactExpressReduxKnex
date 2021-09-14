import h from 'virtual-dom/h.js';
import { render } from "../lib/react.js";

const LoginForm = (props) => {
    return h('div', {}, [props.title]);
};

export default render(LoginForm);
