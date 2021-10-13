import createElement from 'virtual-dom/create-element.js';
import diff from 'virtual-dom/diff.js';
import patch from 'virtual-dom/patch.js';

let oldTree = null;
let app = null;
let rootNode = null;

export const renderDom = (component) => {
  oldTree = component();
  app = component;
  rootNode = createElement(oldTree);
  document.body.appendChild(rootNode);
};

const observeState = ({ target, listener }) => {
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
    get,
  };
  observable = new Proxy(target, handler);
  return observable;
};

const updateDom = () => {
  const newTree = app();
  const patches = diff(oldTree, newTree);
  oldTree = newTree;
  rootNode = patch(rootNode, patches);
};

//Observer pattern for observe propsTypes of component
const observeProps = (props, component) => {
  let observable;

  const set = (target, name, value) => {
    //validation of propsTypes
    if (!component.propsTypes[name](value)) {
      throw new Error(`${component.name} have not correct type at ${value}`);
    }
    target[name] = value;
    return true;
  };

  const handler = {
    set,
  };

  //By Proxy object we can observe observable
  observable = new Proxy({}, handler);
  for (const prop in props) {
    //we enter consistent values
    observable[prop] = props[prop];
  }
  return observable;
};

export const render = (component, initialState = {}) => {
  const observableState = observeState({
    target: initialState,
    listener: updateDom,
  });
  return (props) => component(observeProps(props, component), observableState);
};
