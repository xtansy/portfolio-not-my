export const phoneMask = (input) => {
    const config = {
        mask: "+{3}(000)000-00-00"
    }
    const elem = document.querySelector(input);

    IMask(elem, config);
}