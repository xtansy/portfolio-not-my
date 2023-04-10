import { tabs } from "./modules/tabs.js";
import { slider } from "./modules/slider.js";
import { phoneMask } from "./modules/phoneMask.js";
import { validate } from "./modules/validate.js";
import { scroll } from "./modules/scroll.js";
import { cursor } from "./modules/cursor.js";
import { canvas } from "./modules/canvas.js";
import { modal } from "./modules/modal.js";
import { burger } from "./modules/burger.js";

window.addEventListener("DOMContentLoaded", () => {
    tabs(".projects__tabs", ".projects__tabs-item", ".projects__content", "projects__content_active");
    tabs(".accordeon", ".accordeon__item-content__title", ".accordeon__item", "accordeon__item_active");
    slider();
    phoneMask(".form__input_phone");

    validate(".form__input_name", {
        max: {
            count: 10,
            message: "Invalid length of name"
        }
    });
    validate(".form__input_message", {
        max: {
            count: 50,
            message: "Invalid length of message"
        }
    });
    scroll();
    cursor();
    canvas();
    modal();
    burger();
});
