import Vue from "vue";
import Sample from "./components/sample.vue";

function mountComponent(component: any, element: HTMLElement, props = {}) {
    new Vue({
        render(createElement) {
            return createElement(component, { props });
        },
    }).$mount(element);
}

mountComponent(Sample, document.getElementById("sample")!);
