import { tabs } from "./modules/tabs.js";
import { slider } from "./modules/slider.js";

window.addEventListener("DOMContentLoaded", () => {
    tabs(".projects__tabs", ".projects__tabs-item", ".projects__content", "projects__content_active", "projects__tabs-item_active");
    tabs(".accordeon", ".accordeon__item-content__title", ".accordeon__item", "accordeon__item_active");
    slider();
});
