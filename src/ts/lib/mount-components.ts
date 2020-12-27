import {ComponentType, createElement} from "react";
import ReactDOM from "react-dom";

export function mountComponents(selector: string, component: ComponentType) {
    const nodes = document.querySelectorAll(selector);
    for (let i = 0; i < nodes.length; i++) {
        ReactDOM.render(createElement(component), nodes[i]);
    }
}
