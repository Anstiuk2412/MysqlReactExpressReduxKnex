import createElement from 'virtual-dom/create-element.js'

export const renderDom = (component) => {
    document.body.appendChild(
        createElement(component())
    )
}

export const render = (component) => {
    return (props) => component(props);
}
