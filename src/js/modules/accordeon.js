import { tabs } from "./tabs.js";

export const accordeon = () => {
    tabs(".accordeon", ".accordeon__item-content__title", ".accordeon__item-content__descr");

    const parentTrigger = document.querySelector(".projects__tabs");

    parentTrigger.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains("projects__tabs-item")) {
            tabs(".accordeon", ".accordeon__item-content__title", ".accordeon__item-content__descr");
        }
    })

}