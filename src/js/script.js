import { tabs } from "./modules/tabs.js";
import { accordeon } from "./modules/accordeon.js";

window.addEventListener("DOMContentLoaded", () => {
    tabs(".projects__tabs", ".projects__tabs-item", ".projects__content", "data-tab", "tab-1");
    accordeon();
});
