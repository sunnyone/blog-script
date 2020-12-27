import {mountComponent} from "./mount-component";
import {ShareButtons} from "../components/share-buttons/share-buttons";

export function mountShareButtons() {
    const elements = document.querySelectorAll(".share-buttons");
    for (const element of elements) {
        const url = element.getAttribute("data-url") || "";
        const title = element.getAttribute("data-title") || "";
        mountComponent(element, ShareButtons, { url, title });
    }
}
