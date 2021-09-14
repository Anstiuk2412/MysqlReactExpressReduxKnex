import h from 'virtual-dom/h.js'
import { render } from '../lib/react.js'
import Form from './LoginForm.js';

export default render(
    () => {
        return h('div', {},
            Form({
                title: 'Login Form'
            })
        )
    }
);
