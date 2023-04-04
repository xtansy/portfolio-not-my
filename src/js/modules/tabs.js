export const tabs = (parent, trigger, content, activeClass, activeTriggerClass) => {
    const contents = document.querySelectorAll(content);
    const triggers = document.querySelectorAll(trigger);

    const parents = document.querySelectorAll(parent);

    const hideAll = () => {
        contents.forEach(item => {
            item.classList.remove(activeClass);
        })

        if (activeTriggerClass) {
            triggers.forEach(item => {
                item.classList.remove(activeTriggerClass);
            })
        }
    }
    const showContent = (index = 0) => {
        contents.forEach((item, i) => {
            if (i === index) {
                item.classList.add(activeClass);
            }
        })
        if (activeTriggerClass) {
            triggers.forEach((item, i) => {
                if (i === index) {
                    item.classList.add(activeTriggerClass);
                }
            })
        }
    }
    hideAll();
    showContent();

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