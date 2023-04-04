import { tabs } from "./tabs.js";

export const accordeon = () => {
    const parent = ".accordeon";
    const trigger = ".accordeon__item-content__title";
    const content = ".accordeon__item-content__descr";

    const contents = document.querySelectorAll(content);
    const triggers = document.querySelectorAll(trigger);

    const parents = document.querySelectorAll(parent);

    const hideAll = () => {
        contents.forEach(item => {
            item.classList.add("disable");
        })
    }
    const showContent = (index = 0) => {
        contents.forEach((item, i) => {
            if (i === index) {
                item.classList.remove("disable");
            }
        })
    }
    hideAll();

    parents.forEach(item => {
        item.addEventListener("click", (event) => {
            const target = event.target;
            if (target && target.classList.contains(trigger.slice(1))) {
                triggers.forEach((trigger, i) => {
                    if (target === trigger) {
                        hideAll();
                        showContent(i);
                    }
                })
            }
        })
    })
}