export const tabs = (parent, trigger, content) => {
    const parentTrigger = document.querySelector(parent);
    console.log(parentTrigger);

    const triggers = document.querySelectorAll(trigger);

    const contents = document.querySelectorAll(content);


    const hideAll = () => {
        contents.forEach(item => {
            // item.classList.remove("active");
            item.classList.add("disable");
        })
    }

    const showContent = (index = 0) => {
        contents.forEach((item, i) => {
            if (i === index) {
                item.classList.remove("disable");
                // item.classList.add("active");
            }
        })
    }
    hideAll();
    showContent();

    parentTrigger.addEventListener("click", (event) => {
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
}