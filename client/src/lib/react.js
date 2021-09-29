import createElement from 'virtual-dom/create-element.js'
import diff from "virtual-dom/diff.js";
import patch from "virtual-dom/patch.js";

let oldTree = null;
let app = null;
let rootNode = null;

export const renderDom = (component) => {
    oldTree = component()
    app = component
    rootNode = createElement(oldTree)
    document.body.appendChild(rootNode)
}

const observeState = ({target, listener}) => {
    let observable;
    const set = (target, name, value) => {
        target[name] = value;
        listener(observable);
        return true;
    };

    const get = (target, name) => {
        return Object.freeze(target[name]);
    };

    const handler = {
        set,
        get
    };
    observable = new Proxy(target, handler);
    return observable;
}

const updateDom = () => {
    const newTree = app();
    const patches = diff(oldTree, newTree);
    oldTree = newTree;
    rootNode = patch(rootNode, patches);
}

const observeProps = (props, component) => {
    let observable;

    const set = (target, name,value) => {
        /*if (component.propsTypes ) {
            for (const [key, value] of Object.entries(component.propsTypes)) {
                console.log(component.propsTypes)
                if(value(props+key)===false){
                    throw new Error(`${component.name} have not correct type at ${key}`)
                }
            }
        }*/
        target[name] = value;
        return true;
    };

    const handler = {
        set
    };

    observable = new Proxy({},handler);
     for(const prop in props){
         observable[prop]=props[prop]
     }
    return observable;
}

export const render = (component, initialState = {}) => {
    const observableState = observeState({
        target: initialState,
        listener: updateDom
    })
    return (props) => component(observeProps(props, component), observableState)
}