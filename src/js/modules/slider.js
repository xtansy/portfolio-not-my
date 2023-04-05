const MARGIN_RIGHT = 23;

export const slider = () => {
    let offset = 0;
    let count = 1;

    const container = document.querySelector(".slider__window-container");

    const sliderElements = document.querySelectorAll(".slider__item");
    const MAX = sliderElements.length;
    const offsetLength = sliderElements[0].offsetWidth + MARGIN_RIGHT;

    const left = document.querySelector(".slider__arrows-left");
    const right = document.querySelector(".slider__arrows-right");

    const setOffset = (offset) => {
        container.style.transform = `translateX(${offset}px)`;
    }

    left.addEventListener("click", () => {
        if (count === 1) {
            offset = -(MAX - 1) * offsetLength
            count = MAX;
            setOffset(offset);
            return;
        }
        offset += offsetLength;
        count--;
        setOffset(offset);
    })
    right.addEventListener("click", () => {
        if (count === MAX) {
            count = 1;
            offset = 0;
            setOffset(0);
            return;
        }
        offset -= offsetLength;
        count++;
        setOffset(offset);
    })
}