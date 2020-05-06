export const copyInit = () => {
    // for footer date
    const footerDate = document.querySelector('.js-footer-date')
    footerDate.innerText = new Date().getFullYear()
}
