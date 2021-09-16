import h from 'virtual-dom/h.js';
import {render} from "../lib/react.js";

const LoginForm = (props) => {
    return h('form', {method: 'post'}, [props]);
};

export default render(LoginForm);
