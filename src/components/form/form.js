export const formInit = () => {
    // for checkbox sum
    const checkBoxNode = document.querySelectorAll('.js-checkbox')
    checkBoxNode.forEach((item) => {
        item.addEventListener('change', () => {
            let sum = 0

            checkBoxNode.forEach((node) => {
            if (node.checked) {
                sum = sum + parseInt(node.value)
            }
            })

            sumNode.innerText = sum
        })
    })

    // for form submit
    const formNode = document.querySelector('.js-form')
    const sumNode = document.querySelector('.js-sum')
    
    if (formNode) {
        const successNode = document.querySelector('.js-success')
        formNode.addEventListener('submit', (e) => {
            e.preventDefault()
            successNode.classList.add('active')
        })
    }
}
