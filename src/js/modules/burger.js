export const burger = () => {

    const trigger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");

    const toggleMenu = () => {
        trigger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
    }

    trigger.addEventListener("click", (event) => {
        toggleMenu();
        event.stopPropagation();
    })

    document.addEventListener('click', e => {
        let target = e.target;

        let its_menu = target == menu || menu.contains(target);
        let menu_is_active = menu.classList.contains('menu_active');

        if (!its_menu && menu_is_active) {
            toggleMenu();
        }
    })

}