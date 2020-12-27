import "../scss/blog-style.scss";
import {mountComponents} from "./lib/mount-components";
import {ShareButtons} from "./components/share-buttons/share-buttons";

mountComponents(".share-buttons", ShareButtons);
