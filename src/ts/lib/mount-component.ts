import {ComponentType, createElement} from "react";
import ReactDOM from "react-dom";

export function mountComponent<T>(element: Element, component: ComponentType<T>, props: T) {
    ReactDOM.render(createElement(component, props), element);
}
