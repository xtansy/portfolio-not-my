export const modal = () => {

    const modal = document.querySelector(".modal");
    const modalWrapper = document.querySelector(".modal-wrapper");

    const closeTriggers = document.querySelectorAll("[data-close]");

    const openTriggers = document.querySelectorAll("[data-open]");

    openTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            modal.classList.add("modal_active")
            modalWrapper.classList.add("modal-wrapper_active")
        })
    })

    closeTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            modal.classList.remove("modal_active")
            modalWrapper.classList.remove("modal-wrapper_active")
        })
    })
}