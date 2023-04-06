const inputNotificator = (input, message) => {

    const element = document.createElement("p");
    element.textContent = message
    element.style.color = "red";

    const deleteMessage = () => {
        element.remove();
    }

    const addMessage = () => {
        input.insertAdjacentElement('beforebegin', element);
    }

    const addErrorStyleInput = () => {
        input.classList.add("form__input_error");
    }


    const deleteErrorStyleInput = () => {
        input.classList.remove("form__input_error");
    }

    return {
        deleteMessage,
        addMessage,
        addErrorStyleInput,
        deleteErrorStyleInput
    }
}

export const validate = (input, { max }) => {
    const elem = document.querySelector(input);

    const InputNotificator = inputNotificator(elem, max.message);

    elem.addEventListener("input", (event) => {
        const target = event.target
        if (target.value.length >= max.count) {
            InputNotificator.addMessage();
            InputNotificator.addErrorStyleInput();
            return;
        }
        InputNotificator.deleteMessage();
        InputNotificator.deleteErrorStyleInput();
    })
}