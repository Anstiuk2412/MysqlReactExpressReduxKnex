import h from 'virtual-dom/h.js';
import { render } from "lib/react.js";

const Index = (props, _state) => {
    return h('div', {}, [props]);
};

export default render(Index);